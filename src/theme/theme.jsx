import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#B33C86",
      200: "#64748B",
      300: "#43A3FA",
    },
  },
  fonts: {
    heading: `Space Grotesk, ${base.fonts?.heading}`,
    body: `Space Grotesk, ${base.fonts?.body}`,
  },
});

export default theme;
