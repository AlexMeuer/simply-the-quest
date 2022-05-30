import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Stack,
  Switch,
  Tooltip,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Formik, useFormik } from "formik";
import { QuestBase } from "../../../types/Quest";
import { QuestCard } from "../QuestCard";

export interface QuestFormProps {
  initialValues?: {
    title: string;
    description: string;
    giver: string;
    imageURL: string;
    isPublished: boolean;
  };
}

export const QuestForm: React.FC<QuestFormProps> = ({ initialValues }) => {
  const toast = useToast();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: initialValues || {
      title: "",
      description: "",
      giver: "",
      imageURL: "",
      isPublished: false,
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.title) {
        errors.title = "Every quest needs a title!";
      }
      if (!values.description) {
        errors.description = "What is a quest without a description?";
      }
      if (!values.giver) {
        errors.giver = "Who is the quest giver?";
      }
    },
    onSubmit: (values, helpers): void | Promise<any> => {
      console.log(values);
      toast({
        title: "Not Implemented!",
        description: "The form is not implemented yet.",
        status: "warning",
        isClosable: true,
        onCloseComplete: () => helpers.setSubmitting(false),
      });
    },
  });

  return (
    <Box
      w="full"
      p={4}
      bg={useColorModeValue("gray.300", "gray.700")}
      rounded={["none", "none", "2xl"]}
    >
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="flex-start">
          <FormControl>
            <FormLabel htmlFor="title" mb="0">
              Title
            </FormLabel>
            <Input
              id="title"
              type="text"
              isRequired
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={(errors.title && touched.title) || false}
              placeholder="What's this quest called? Think carefully; You won't be able to change this later."
            />
            <FormErrorMessage>{errors.title}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="description" mb="0">
              Description
            </FormLabel>
            <Input
              id="description"
              type="text"
              isRequired
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={(errors.description && touched.description) || false}
              placeholder="What's the quest about?"
            />
            <FormErrorMessage>{errors.description}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="giver" mb="0">
              Giver
            </FormLabel>
            <Input
              id="giver"
              type="text"
              isRequired
              value={values.giver}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={(errors.giver && touched.giver) || false}
              placeholder="Who is the quest giver?"
            />
            <FormErrorMessage>{errors.giver}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="imageURL" mb="0">
              Image
            </FormLabel>
            <Input
              id="imageURL"
              type="url"
              value={values.imageURL}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={(errors.imageURL && touched.imageURL) || false}
              placeholder="Got a URL you want to use as a background image?"
            />
            <FormErrorMessage>{errors.imageURL}</FormErrorMessage>
          </FormControl>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="isPublished" mb="0">
              Publish?
            </FormLabel>
            <Switch
              id="isPublished"
              isChecked={values.isPublished}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={(errors.isPublished && touched.isPublished) || false}
            />
            <Text mx={4} color="gray.500">
              {values.isPublished
                ? "Yes (make public)"
                : "No (don't make public)"}
            </Text>
          </FormControl>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
          <QuestCard
            selectedTags={[]}
            onTagClick={function (tag: string): void {
              throw new Error("Function not implemented.");
            }}
            title={values.title}
            slug={""}
            description={values.description}
            giver={values.giver}
            created_at={new Date()}
            updated_at={new Date()}
            tags={[]}
          />
        </VStack>
      </form>
    </Box>
  );
};
