import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

const overrides = {
  colors: colors,
  components: {},
  fonts: {
    heading: `'Fraunces', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: "#F4FBF8",
      },
    }),
  },
};

export const theme = extendTheme(overrides);
