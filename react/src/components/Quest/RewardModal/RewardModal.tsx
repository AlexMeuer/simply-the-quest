import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Stack,
  FormControl,
  VStack,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { ItemRarity, Reward } from "../../../types/Reward";
import { useFormik } from "formik";

export interface RewardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (reward: Reward) => Promise<any>;
  initialValue?: Reward;
}

export const RewardModal: React.FC<RewardModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialValue,
}) => {
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
    initialValues: initialValue || {
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
        .finally(() => setSubmitting(false)),
  });
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
                placeholder="My Super Awesome Reward"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter as={Stack} direction="row">
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" colorScheme="blue">
              Submit
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
