import { gql } from "@apollo/client";
import {
  Flex,
  Stack,
  Tag,
  useConst,
  useTheme,
  useToken,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { QuestListQuery, useQuestListQuery } from "../../generated/graphql";
import { ErrorState } from "../common/ErrorState";
import { IndeterminateProgress } from "../common/IndeterminateProgress";
import { ToggleTag } from "../ToggleTag";
import { QuestCard } from "./QuestCard";

gql`
  query QuestList($tags: jsonb = [], $giver: String = "%") {
    quests(where: { tags: { _contains: $tags }, giver: { _ilike: $giver } }) {
      title
      slug
      description
      giver
      imageURL
      tags
      created_at
      updated_at
    }
  }
`;

export const QuestList: React.FC = () => {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [quests, setQuests] = React.useState<QuestListQuery["quests"]>([]);
  const { data, loading } = useQuestListQuery({
    variables: { tags: selectedTags },
  });
  const tags = React.useMemo(
    () =>
      Array.from(
        data?.quests
          .flatMap((quest) => quest.tags)
          .reduce<Set<string>>((set, tag) => set.add(tag), new Set<string>()) ??
          []
      ),
    [data]
  );

  const toggleTag = (tag: string) =>
    setSelectedTags(
      selectedTags.includes(tag)
        ? selectedTags.filter((t) => t !== tag)
        : [...selectedTags, tag]
    );

  React.useEffect(() => {
    if (data?.quests) {
      setQuests(data.quests);
    }
  }, [data]);

  if (loading && !quests.length) {
    return <IndeterminateProgress />;
  }

  if (!data) {
    return <ErrorState />;
  }

  return (
    <Stack my={8} px={[1, 4, 0]}>
      <Wrap justify="end">
        {tags.map((tag) => (
          <ToggleTag
            isSelected={selectedTags.includes(tag)}
            onClick={() => toggleTag(tag)}
            children={tag}
          />
        ))}
      </Wrap>
      {quests.map((quest) => (
        <QuestCard
          key={quest.slug!}
          {...quest}
          selectedTags={selectedTags}
          onTagClick={toggleTag}
        />
      ))}
    </Stack>
  );
};
