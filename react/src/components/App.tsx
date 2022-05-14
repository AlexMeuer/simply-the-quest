import * as React from "react";
import { ChakraProvider, Center, Flex } from "@chakra-ui/react";
import {
  ThemeEditorProvider,
  HyperThemeEditor,
} from "@hypertheme-editor/chakra-ui";
import { Routes, Route, Outlet } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import theme from "../Theme";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { NavHeader } from "./NavHeader";
import { AreYouLost } from "./404";
import { GithubButton } from "./GithubButton";
import { QuestList } from "./Quest/QuestList";
import { QuestDetail } from "./Quest/QuestDetail";

const httpLink = createHttpLink({
  uri: "http://localhost:8080/v1/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const App = () => (
  <ApolloProvider client={client}>
    <ChakraProvider theme={theme}>
      <ThemeEditorProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<QuestList />} />
            <Route path="/quest/:slug" element={<QuestDetail />} />
            <Route path="*" element={<AreYouLost />} />
          </Route>
        </Routes>
      </ThemeEditorProvider>
    </ChakraProvider>
  </ApolloProvider>
);

const Layout: React.FC = () => (
  <Flex minH="100vh" direction="column">
    <NavHeader title="Simply the Quest!">
      <GithubButton />
      <ColorModeSwitcher />
      <HyperThemeEditor size="sm" />
    </NavHeader>
    <Center flexGrow={1}>
      <Outlet />
    </Center>
  </Flex>
);
