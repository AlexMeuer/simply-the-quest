import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AspectRatio,
  Button,
  Center,
  Flex,
  IconButton,
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
  Tooltip,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { GiTwoCoins, GiSwapBag } from "react-icons/gi";
import { FaLink } from "react-icons/fa";
import { Reward } from "../../types/Reward";
import { ItemRarityTag } from "../common/ItemRarityTag";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

export interface RewardAccordionProps {
  rewards: Reward[];
  onAddReward?: () => void;
  onEditReward?: (reward: Reward) => void;
  onDeleteReward?: (reward: Reward) => void;
}

export const RewardAccordion: React.FC<RewardAccordionProps> = ({
  rewards,
  onAddReward,
  onEditReward,
  onDeleteReward,
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
          onEdit={onEditReward && (() => onEditReward(r))}
          onDelete={onDeleteReward && (() => onDeleteReward(r))}
        />
      ))}
      {onAddReward && (
        <Button
          mx={2}
          size="xs"
          aria-label="add reward"
          variant="ghost"
          onClick={onAddReward}
        >
          <AddIcon mr={1} />
          Add Reward
        </Button>
      )}
    </Accordion>
  );
};

interface RewardAccordionItemProps {
  reward: Reward;
  expandTitle: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const RewardAccordionItem: React.FC<RewardAccordionItemProps> = ({
  reward: { name, description, imageURL, rarity, count, value, sourceURL },
  expandTitle,
  onEdit,
  onDelete,
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
          <ItemRarityTag rarity={rarity} />
        </Stack>
        <AccordionIcon />
      </AccordionButton>
    </h3>
    <AccordionPanel pb={4}>
      <Flex direction="row" justifyContent="space-between">
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
        {(onEdit || onDelete) && (
          <Wrap direction="row">
            {onEdit && (
              <Tooltip label="Edit" openDelay={500} hasArrow>
                <IconButton
                  size="xs"
                  onClick={onEdit}
                  aria-label="edit"
                  icon={<EditIcon />}
                />
              </Tooltip>
            )}
            {onDelete && (
              <Tooltip label="Delete" openDelay={500} hasArrow>
                <IconButton
                  size="xs"
                  onClick={onDelete}
                  aria-label="delete"
                  icon={<DeleteIcon />}
                  colorScheme="red"
                />
              </Tooltip>
            )}
          </Wrap>
        )}
      </Flex>
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
