import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Stack,
  FormControl,
  VStack,
  FormLabel,
  Input,
  Select,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
  Text,
  Wrap,
  WrapItem,
  Image,
} from "@chakra-ui/react";
import { ItemRarity, Reward } from "../../../types/Reward";
import { useFormik } from "formik";
import { capitalCase } from "change-case";
import { faker } from "@faker-js/faker";
import { useItemRarityColors } from "../../../hooks/useItemRarities";
import { useIconSearch } from "../../../hooks/useIconSearch";
import { useDebouncedState } from "../../../hooks/useDebounce";
import { IndeterminateProgress } from "../../common";

export interface RewardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reward: Reward) => Promise<any>;
  initialValue: React.RefObject<Reward | null>;
}

export const RewardModal: React.FC<RewardModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialValue,
}) => {
  const [searchTerm, setSearchTerm] = useDebouncedState("", 500);
  const {
    data: icons,
    loading: iconsLoading,
    error: iconsError,
  } = useIconSearch(searchTerm);
  React.useEffect(
    () => iconsError && console.error("Icon search failed.", iconsError),
    [iconsError]
  );
  const [selectedIconName, setSelectedIconName] = React.useState("");

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    isSubmitting,
    setFieldValue,
  } = useFormik<Reward>({
    initialValues: initialValue.current || {
      name: "",
      description: "",
      type: "",
      rarity: ItemRarity.Enum.common,
      count: null,
      value: null,
      imageURL: null,
      sourceURL: null,
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.name) {
        errors.name = "Every reward needs a name!";
      }
      if (values.description.length > 1000) {
        errors.description = "Description must be less than 1000 characters!";
      }
      if (!Reward.shape.rarity.safeParse(values.rarity).success) {
        errors.rarity = "Invalid rarity!";
      }
      if (
        values.imageURL &&
        !Reward.shape.imageURL.safeParse(values.imageURL).success
      ) {
        errors.imageURL = "This is not a valid image url.";
      }
      if (
        values.sourceURL &&
        !Reward.shape.sourceURL.safeParse(values.sourceURL).success
      ) {
        errors.sourceURL = "This is not a valid url.";
      }
    },
    onSubmit: (values, { setSubmitting }): Promise<any> =>
      onSubmit(values)
        .then(onClose)
        .then(() => resetForm())
        .then(() => setSearchTerm(""))
        .finally(() => setSubmitting(false)),
  });
  const onCancel = React.useCallback(() => {
    onClose();
    resetForm();
    setSearchTerm("");
  }, [resetForm, onClose]);
  const namePlaceholder = React.useMemo(faker.commerce.productName, [isOpen]);
  const descPlaceholder = React.useMemo(faker.lorem.sentence, [isOpen]);
  const { data: rarityColors } = useItemRarityColors();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered autoFocus>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(4px) hue-rotate(25deg)"
      />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>Add Reward</ModalHeader>
          <ModalBody as={VStack} align="start">
            <FormControl>
              <FormLabel htmlFor="name" mb="0">
                Name
              </FormLabel>
              <Input
                id="name"
                type="text"
                isRequired
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.name && !!touched.name}
                placeholder={namePlaceholder}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="description" mb="0">
                Description
              </FormLabel>
              <Textarea
                id="description"
                maxHeight="50vh"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.description && !!touched.description}
                placeholder={descPlaceholder}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="type" mb="0">
                Type
              </FormLabel>
              <Input
                id="type"
                type="text"
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.type && !!touched.type}
                placeholder="Consumable, Weapon, etc."
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="rarity" mb="0">
                Rarity
              </FormLabel>
              <Select
                id="rarity"
                isRequired
                value={values.rarity}
                isInvalid={!!errors.rarity && !!touched.rarity}
                onChange={handleChange}
                onBlur={handleBlur}
                textColor={`${rarityColors[values.rarity]}.500`}
              >
                {ItemRarity.options.map((rarity) => (
                  <option
                    key={rarity}
                    value={rarity}
                    onChange={() => setFieldValue("rarity", rarity)}
                  >
                    {capitalCase(rarity)}
                  </option>
                ))}
              </Select>
            </FormControl>
            <Stack direction="row" w="full">
              <FormControl>
                <FormLabel htmlFor="count" mb="0">
                  Count
                </FormLabel>
                <NumberInput
                  id="count"
                  allowMouseWheel
                  value={values.count === null ? undefined : values.count}
                  onChange={(v) => setFieldValue("count", v === "" ? null : v)}
                  onBlur={handleBlur}
                  isInvalid={!!errors.count && !!touched.count}
                >
                  <NumberInputField placeholder="Optional amount" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="value" mb="0">
                  Value
                </FormLabel>
                <NumberInput
                  id="value"
                  allowMouseWheel
                  value={values.value === null ? undefined : values.value}
                  onChange={(v) => setFieldValue("value", v === "" ? null : v)}
                  onBlur={handleBlur}
                  isInvalid={!!errors.value && !!touched.value}
                >
                  <NumberInputField placeholder="Optional GP value" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </Stack>
            <FormControl>
              <FormLabel htmlFor="imageURL" mb="0">
                Image URL
              </FormLabel>
              <Stack direction="column" w="full">
                <Input
                  id="imageURL"
                  type="text"
                  value={values.imageURL === null ? undefined : values.imageURL}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.imageURL && !!touched.imageURL}
                  placeholder="Specify an image url..."
                />
                <Input
                  type="search"
                  placeholder="...or search for one."
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </Stack>
              {iconsLoading && <IndeterminateProgress m={1} />}
              {iconsError && (
                <Text color="red.500" m={1}>
                  Something went wrong fetching the icons...
                </Text>
              )}
              <Wrap m={1}>
                {icons.map((iconInfo) => {
                  const selected = selectedIconName === iconInfo.name;
                  return (
                    <WrapItem key={iconInfo.id || iconInfo.name}>
                      <Image
                        w="42"
                        h="42"
                        rounded={4}
                        border={selected ? "2px solid" : "1px solid"}
                        borderColor={selected ? "gray.200" : "gray.500"}
                        src={iconInfo.url}
                        alt={iconInfo.name}
                        onClick={() => {
                          setFieldValue("imageURL", iconInfo.url);
                          setSelectedIconName(iconInfo.name);
                        }}
                      />
                    </WrapItem>
                  );
                })}
              </Wrap>
            </FormControl>
          </ModalBody>
          <ModalFooter as={Stack} direction="row">
            <Button variant="ghost" onClick={onCancel} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" colorScheme="blue" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
