import {
  Center,
  CircularProgress,
  CircularProgressProps,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export type InderterminateProgressProps = Omit<
  CircularProgressProps,
  "isIndeterminate" | "capIsRound" | "color" | "trackColor"
>;

export const IndeterminateProgress: React.FC<InderterminateProgressProps> = (
  props
) => (
  <Center>
    <CircularProgress
      {...props}
      isIndeterminate
      capIsRound
      color={useColorModeValue("cyan.900", "cyan.300")}
      trackColor={useColorModeValue("cyan.300", "cyan.900")}
    />
  </Center>
);
