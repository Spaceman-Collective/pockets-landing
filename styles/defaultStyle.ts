import { extendBaseTheme } from "@chakra-ui/react";
import chakraTheme from "@chakra-ui/theme";

export const colors = {
  brand: {
    primary: "#222",
    secondary: "#F8F8F8",
    tertiary: "#B1B7BF",
    quaternary: "#E7B987",
  },
  blacks: {
    400: "#2D2D2D",
    500: "#1B1A1A",
    600: "#151414",
    700: "#0D0D0D",
  },
  green: {
    700: "#00BF63",
  },
  red: {
    700: "#FF3131",
  },
  purple: {
    700: "#6A527C",
  },
};
export const fonts = {
  header: "var(--header )",
  body: "var(--body )",
};

const { Button } = chakraTheme.components;
export const defaultTheme = extendBaseTheme({
  styles: {
    global: {
      body: {
        color: "antiquewhite",
        bg: "black",
        fontSize: "1.75rem",
      },
      h1: {
        fontSize: "32px",
        fontWeight: 900,
        letterSpacing: "5px",
        fontFamily: "header",
        textTransform: "uppercase",
      },
    },
  },
  components: {
    Button,
  },
  colors,
  fonts,
});
