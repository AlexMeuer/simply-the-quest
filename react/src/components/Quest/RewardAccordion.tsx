import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Image,
  LinkBox,
  LinkOverlay,
  Spacer,
  Stack,
  Tag,
  TagLabel,
  TagProps,
  TagRightIcon,
  Text,
  ThemingProps,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { capitalCase } from "change-case";
import { GiTwoCoins, GiSwapBag } from "react-icons/gi";
import { FaLink } from "react-icons/fa";
import { RewardFragment } from "../../generated/graphql";

const rarityColors: Record<string, string> = {
  artifact: "orange",
  very_rare: "purple",
  rare: "blue",
  uncommon: "green",
  common: "gray",
  trash: "gray",
};

export interface RewardAccordionProps {
  rewards: RewardFragment[];
}

export const RewardAccordion: React.FC<RewardAccordionProps> = ({
  rewards,
}) => {
  const [openIndices, setOpenIndices] = React.useState<number[]>([]);
  return (
    <Accordion
      defaultIndex={[]}
      allowMultiple
      onChange={(oI) => setOpenIndices(oI as number[])}
    >
      {rewards.map((r, i) => (
        <RewardAccordionItem
          key={r.name}
          reward={r}
          expandTitle={openIndices.includes(i)}
        />
      ))}
    </Accordion>
  );
};

interface RewardAccordionItemProps {
  reward: RewardFragment;
  expandTitle: boolean;
}

const RewardAccordionItem: React.FC<RewardAccordionItemProps> = ({
  reward: { name, description, imageURL, rarity, count, value, sourceURL },
  expandTitle,
}) => (
  <AccordionItem>
    <h3>
      <AccordionButton>
        <Stack direction="row" flex="1" alignItems="center" spacing={4} pr={4}>
          <AspectRatio w="24px" ratio={1}>
            <Image src={imageURL || undefined} rounded="lg" />
          </AspectRatio>
          <Text noOfLines={expandTitle ? undefined : 1}>{name}</Text>
          <Spacer flex={1} />
          <Tag colorScheme={rarityColors[rarity]}>{capitalCase(rarity)}</Tag>
        </Stack>
        <AccordionIcon />
      </AccordionButton>
    </h3>
    <AccordionPanel pb={4}>
      <Wrap direction="row">
        <RewardStat value={value} colorScheme="orange">
          <GiTwoCoins />
        </RewardStat>
        <RewardStat value={count}>
          <GiSwapBag />
        </RewardStat>
        {sourceURL && (
          <LinkBox>
            <Tag colorScheme="blue">
              <TagLabel>
                <LinkOverlay isExternal href={sourceURL}>
                  Source
                </LinkOverlay>
              </TagLabel>
              <TagRightIcon as={FaLink} />
            </Tag>
          </LinkBox>
        )}
      </Wrap>
      {description && <Text>{description}</Text>}
    </AccordionPanel>
  </AccordionItem>
);

interface RewardStatProps extends Pick<TagProps, "colorScheme"> {
  value: number | null | undefined;
  children: React.ReactNode;
  href?: string;
}

const RewardStat: React.FC<RewardStatProps> = ({
  value,
  children,
  colorScheme,
}) =>
  (value && value > 1 && (
    <Tag mx={1} colorScheme={colorScheme}>
      <Stack direction="row" alignItems="center">
        {children}
        <Text fontSize="sm">{value}</Text>
      </Stack>
    </Tag>
  )) ||
  null;
