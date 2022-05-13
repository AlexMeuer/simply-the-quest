import * as React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  Center,
  Heading,
  Stack,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import theme from "../Theme";
import { Quest, QuestsDocument } from "../generated/graphql";
import { QuestCard } from "./QuestCard";

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </ChakraProvider>
  </ApolloProvider>
);

const Layout: React.FC = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <VStack>
        <Link to="/">Home</Link>
        <Link to="/nothing-here">Nothing Here</Link>
      </VStack>
      <Outlet />
    </Grid>
  </Box>
);

function Home() {
  const { data } = useQuery<{ quest: Quest[] }>(QuestsDocument);
  console.log("DATA", data);
  return (
    <div>
      <h2>Home</h2>
      <VStack>
        {data && data.quest.map((quest) => <QuestCard {...quest} />)}
      </VStack>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
