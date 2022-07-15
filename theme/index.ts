import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

const overrides = {
  colors,
  components: {},
  fonts: {
    heading: `'Fraunces', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
};

export const theme = extendTheme(overrides);
