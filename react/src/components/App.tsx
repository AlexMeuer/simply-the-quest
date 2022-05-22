import * as React from "react";
import {
  ChakraProvider,
  Center,
  Flex,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { Routes, Route, Outlet } from "react-router-dom";
import { NhostClient } from "@nhost/nhost-js";
import { NhostAuthProvider } from "@nhost/react-auth";
import { NhostApolloProvider } from "@nhost/react-apollo";
import PillPity, { Pattern } from "pill-pity";
import { sample } from "lodash";
import theme from "../theme";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { NavHeader } from "./NavHeader";
import { AreYouLost } from "./404";
import { GithubButton } from "./GithubButton";
import { QuestList } from "./Quest/QuestList";
import { QuestDetailGraphqlWrapper } from "./Quest/QuestDetail";

const nhost = new NhostClient({
  backendUrl: import.meta.env.VITE_GRAPHQL_ENDPOINT,
});

export const App = () => (
  <NhostAuthProvider nhost={nhost}>
    <NhostApolloProvider nhost={nhost}>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<QuestList />} />
            <Route
              path="/quest/:slug"
              element={<QuestDetailGraphqlWrapper />}
            />
            <Route path="*" element={<AreYouLost />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </NhostApolloProvider>
  </NhostAuthProvider>
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
    return sample(patterns) || patterns[0];
  }, []);
  return (
    <PillPity
      as={Flex}
      pattern={pattern}
      patternFill={useColorModeValue("gray.300", "gray.700")}
      backgroundColor={useColorModeValue("gray.100", "gray.900")}
      minH="100vh"
      minW="100vw"
      direction="column"
    >
      <NavHeader title="Simply the Quest!">
        <GithubButton />
        <ColorModeSwitcher />
      </NavHeader>
      <Center flexGrow={1}>
        <Container maxW={["100%", "2xl"]} px={[0, 0, 4]}>
          <Outlet />
        </Container>
      </Center>
    </PillPity>
  );
};
