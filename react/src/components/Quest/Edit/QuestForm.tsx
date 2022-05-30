import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Switch,
  Text,
  useColorModeValue,
  useToast,
  VStack,
  Flex,
  FormHelperText,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteCreatable,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
  AutoCompleteTag,
} from "@choc-ui/chakra-autocomplete";
import { useFormik } from "formik";
import { QuestCardPreview } from "./QuestCardPreview";
import { gql } from "@apollo/client";
import { useAllTagsQuery } from "../../../generated/graphql";
import { IndeterminateProgress } from "../../common";

gql`
  query AllTags {
    tags {
      name
    }
  }
`;

export interface QuestFormProps {
  initialValues?: {
    title: string;
    description: string;
    giver: string;
    imageURL: string;
    tags: string[];
    isPublished: boolean;
  };
}

export const QuestForm: React.FC<QuestFormProps> = ({ initialValues }) => {
  const toast = useToast();
  const { data } = useAllTagsQuery();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues || {
      title: "",
      description: "",
      giver: "",
      imageURL: "",
      tags: [],
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
          <FormLabel>Tags</FormLabel>
          {data ? (
            <AutoComplete
              openOnFocus
              multiple
              creatable
              suggestWhenEmpty
              listAllValuesOnFocus
              onChange={(tags) => setFieldValue("tags", tags)}
            >
              <AutoCompleteInput>
                {({ tags }) =>
                  tags.map((tag, tid) => (
                    <AutoCompleteTag
                      key={tid}
                      label={tag.label}
                      onRemove={tag.onRemove}
                    />
                  ))
                }
              </AutoCompleteInput>
              <AutoCompleteList>
                {(data?.tags ?? []).map(({ name }) => (
                  <AutoCompleteItem
                    key={`option-${name}`}
                    value={name}
                    textTransform="capitalize"
                    _selected={{ bg: "whiteAlpha.50" }}
                    _focus={{ bg: "whiteAlpha.100" }}
                  >
                    {name}
                  </AutoCompleteItem>
                ))}
                <AutoCompleteCreatable>
                  {({ value }) => <span>Create tag: {value}</span>}
                </AutoCompleteCreatable>
              </AutoCompleteList>
            </AutoComplete>
          ) : (
            <IndeterminateProgress />
          )}
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
          <QuestCardPreview {...values} />
        </VStack>
      </form>
    </Box>
  );
};
