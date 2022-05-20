import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors,
};

const theme = extendTheme({ config });

export default theme;
