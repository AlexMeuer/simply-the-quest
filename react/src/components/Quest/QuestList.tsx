import { gql } from "@apollo/client";
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import { capitalCase } from "change-case";
import React from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { QuestListQuery, useQuestListQuery } from "../../generated/graphql";
import { BadState } from "../common";
import { ErrorState } from "../common/ErrorState";
import { IndeterminateProgress } from "../common/IndeterminateProgress";
import { ToggleTag } from "../ToggleTag";
import { flattenQueriedQuests, Quest } from "../types/Quest";
import { QuestCard } from "./QuestCard";

gql`
  query QuestList($filter: quests_bool_exp) {
    quests(where: $filter) {
      title
      slug
      description
      giver
      imageURL
      tags {
        tag_name
      }
      created_at
      updated_at
    }
  }
`;

const ifTruthy = <T, R>(value: T, result: R): R | undefined =>
  value ? result : undefined;

export const QuestList: React.FC = () => {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [quests, setQuests] = React.useState<Quest[]>([]);
  const { data, loading } = useQuestListQuery({
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
      Array.from(
        data?.quests
          .flatMap((quest) => quest.tags.map((tag) => tag.tag_name))
          .reduce<Set<string>>((set, tag) => set.add(tag), new Set<string>()) ??
          selectedTags
      ),
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
    if (data?.quests) {
      setQuests(flattenQueriedQuests(data.quests));
    }
  }, [data]);

  const mainContent = React.useMemo(() => {
    if (quests.length) {
      return quests.map((quest) => (
        <QuestCard
          key={quest.slug!}
          {...quest}
          selectedTags={selectedTags}
          onTagClick={toggleTag}
        />
      ));
    }
    if (loading) {
      return <IndeterminateProgress />;
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
    return <ErrorState />;
  }, [quests, loading, selectedTags, searchTerm]);

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
        {tags.map((tag) => (
          <ToggleTag
            isSelected={selectedTags.includes(tag)}
            onClick={() => toggleTag(tag)}
            children={capitalCase(tag)}
          />
        ))}
      </Wrap>
      {mainContent}
    </Stack>
  );
};
