import { gql } from "@apollo/client";
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  SlideFade,
  Stack,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import { capitalCase } from "change-case";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useQuestListQuery } from "../../generated/graphql";
import { QuestBase } from "../../types/Quest";
import { flattenNestedTagsForEach, WithFlatTags } from "../../util/Tags";
import { BadState } from "../common";
import { AnimatedBox } from "../common/AnimatedBox";
import { ErrorState } from "../common/ErrorState";
import { IndeterminateProgress } from "../common/IndeterminateProgress";
import { ToggleTag } from "../common/ToggleTag";
import { QuestCard } from "./QuestCard";

gql`
  query QuestList($filter: quests_bool_exp) {
    quests(where: $filter) {
      title
      status
      slug
      description
      giver
      imageURL
      tags {
        tag_name
      }
      created_at
      updated_at
      log_entries(order_by: { step: desc }, limit: 1) {
        status
      }
    }
  }
`;

const ifTruthy = <T, R>(value: T, result: R): R | undefined =>
  value ? result : undefined;

export const QuestList: React.FC = () => {
  const [allTags, setAllTags] = React.useState<string[]>([]);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [quests, setQuests] = React.useState<(QuestBase & WithFlatTags)[]>([]);
  const { data, error } = useQuestListQuery({
    variables: {
      filter: {
        tags: ifTruthy(selectedTags.length, {
          tag_name: { _in: selectedTags },
        }),
        _or: [
          { title: ifTruthy(searchTerm.length, { _ilike: `%${searchTerm}%` }) },
          {
            description: ifTruthy(searchTerm.length, {
              _ilike: `%${searchTerm}%`,
            }),
          },
          { giver: ifTruthy(searchTerm.length, { _ilike: `%${searchTerm}%` }) },
        ],
      },
    },
  });

  const tags = React.useMemo(
    () =>
      data &&
      Array.from(
        data.quests
          .flatMap((quest) => quest.tags.map((tag) => tag.tag_name))
          .reduce<Set<string>>((set, tag) => set.add(tag), new Set<string>())
      ).sort(),
    [data]
  );

  const toggleTag = React.useCallback(
    (tag: string) =>
      setSelectedTags(
        selectedTags.includes(tag)
          ? selectedTags.filter((t) => t !== tag)
          : [...selectedTags, tag]
      ),
    [selectedTags]
  );

  const clearFilters = React.useCallback(() => {
    setSelectedTags([]);
    setSearchTerm("");
  }, [setSelectedTags, setSearchTerm]);

  React.useEffect(() => {
    if (!data) {
      return;
    }
    const quests = flattenNestedTagsForEach(data.quests).map((q) =>
      QuestBase.merge(WithFlatTags).parse(q)
    );
    const tagSet = new Set([...quests.flatMap((q) => q.tags), ...selectedTags]);
    setQuests(quests);
    setAllTags(Array.from(tagSet).sort());
  }, [data]);

  const mainContent = React.useMemo(() => {
    if (quests.length) {
      return quests.map((quest, i) => (
        <SlideFade
          key={quest.slug}
          delay={i * 0.05}
          offsetY={0}
          offsetX={-64}
          in
        >
          <QuestCard
            {...quest}
            selectedTags={selectedTags}
            onTagClick={toggleTag}
          />
        </SlideFade>
      ));
    }
    if (error) {
      return <ErrorState />;
    }
    if (searchTerm.length || selectedTags.length) {
      return (
        <BadState
          title="No matching quests found!"
          subtitle="(And I looked everywhere)"
          imageURL="https://source.unsplash.com/collection/358784/400x400"
          disableButton
        />
      );
    }
    return <IndeterminateProgress />;
  }, [quests, error, selectedTags, searchTerm]);

  return (
    <Stack my={8} px={[1, 4, 0]}>
      <InputGroup bg={useColorModeValue("gray.200", "gray.800")}>
        <InputLeftElement
          pointerEvents="none"
          children={<AiOutlineSearch color="gray" />}
        />
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <InputRightElement
          children={
            <IconButton
              aria-label="clear"
              variant="ghost"
              disabled={searchTerm.length <= 0}
              icon={<AiOutlineClose />}
              onClick={clearFilters}
            />
          }
        />
      </InputGroup>
      <Wrap justify="end">
        <AnimatePresence>
          {allTags.map((tag) => (
            <AnimatedBox
              key={tag}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
            >
              <ToggleTag
                isSelected={selectedTags.includes(tag)}
                onClick={() => toggleTag(tag)}
                children={capitalCase(tag)}
              />
            </AnimatedBox>
          ))}
        </AnimatePresence>
      </Wrap>
      {mainContent}
    </Stack>
  );
};
