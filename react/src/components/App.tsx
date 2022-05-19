import * as React from "react";
import {
  ChakraProvider,
  Center,
  Flex,
  useColorModeValue,
  CircularProgress,
} from "@chakra-ui/react";
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
import { QuestDetailGraphqlWrapper } from "./Quest/QuestDetail";

import PillPity, { Pattern } from "pill-pity";
import _ from "lodash";

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const App = () => (
  <ApolloProvider client={client}>
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<QuestList />} />
          <Route path="/quest/:slug" element={<QuestDetailGraphqlWrapper />} />
          <Route path="*" element={<AreYouLost />} />
        </Route>
      </Routes>
    </ChakraProvider>
  </ApolloProvider>
);

const Layout: React.FC = () => {
  const pattern = React.useMemo(() => {
    const patterns: Pattern[] = [
      "topography",
      "jupiter",
      "hexagons",
      "houndstooth",
      "morphing-diamonds",
      "melt",
    ];
    return _.sample(patterns) || patterns[0];
  }, []);
  return (
    <PillPity
      as={Flex}
      pattern={pattern}
      patternFill={useColorModeValue("gray.300", "gray.700")}
      backgroundColor={useColorModeValue("gray.100", "gray.900")}
      minH="100vh"
      direction="column"
    >
      <NavHeader title="Simply the Quest!">
        <GithubButton />
        <ColorModeSwitcher />
      </NavHeader>
      <Center flexGrow={1}>
        <Outlet />
      </Center>
    </PillPity>
  );
};
