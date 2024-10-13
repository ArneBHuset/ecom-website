import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      bigBorderRadius: number;
    };
  }

  interface ThemeOptions {
    custom?: {
      bigBorderRadius?: number;
    };
  }
}
// #FFA726
const theme = createTheme({
  palette: {
    primary: {
      main: "#e5c185",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#355548",
      contrastText: "#ffffff",
    },
    error: {
      main: "#f44336",
    },
    common: {
      white: "#EAEEF0",
      black: "#2B2B2B",
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Lato", "Arial"',
    h1: {
      fontFamily: '"Montserrat"',
      fontSize: "2.2rem",
      fontStyle: "normal",
      fontWeight: 500,
    },
    h2: {
      fontFamily: '"Montserrat"',
      fontSize: "2.0rem",
      fontStyle: "normal",
      fontWeight: 500,
    },
    h3: {
      fontFamily: '"Montserrat"',
      fontSize: "1.6rem",
      fontStyle: "normal",
      fontWeight: 500,
    },
    h4: {
      fontFamily: '"Montserrat"',
      fontSize: "1.4rem",
      fontStyle: "normal",
      fontWeight: 400,
    },
    h5: {
      fontFamily: '"Montserrat"',
      fontSize: "1.2rem",
      fontStyle: "normal",
      fontWeight: 400,
    },
    h6: {
      fontFamily: '"Montserrat"',
      fontSize: "1.1rem",
      fontStyle: "normal",
      fontWeight: 400,
    },
    body1: {
      fontFamily: '"Lato"',
      fontSize: "1.1rem",
      fontStyle: "normal",
      opacity: 1,
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Lato"',
      fontStyle: "italic",
      fontSize: "1rem",
      opacity: 1,
      fontWeight: 300,
    },
  },
  shape: {
    borderRadius: 4,
  },
  custom: {
    bigBorderRadius: 40,
  },
});

export default theme;
