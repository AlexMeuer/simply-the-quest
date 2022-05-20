import { Center, CircularProgress, useColorModeValue } from "@chakra-ui/react";

export const IndeterminateProgress = () => (
  <Center>
    <CircularProgress
      isIndeterminate
      capIsRound
      color={useColorModeValue("cyan.900", "cyan.300")}
      trackColor={useColorModeValue("cyan.300", "cyan.900")}
    />
  </Center>
);
