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
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA726",
      contrastText: "#ffffff", // Ensuring text is readable on primary color
    },
    secondary: {
      main: "#EF6C00",
      contrastText: "#ffffff",
    },
    error: {
      main: "#f44336",
    },
    common: {
      white: "#ffffff",
      black: "#000000",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Default font family
    h1: {
      fontFamily: '"Noto Serif", serif', // Specific font family for H1
      fontSize: "2.6rem", // Example size
      fontWeight: 700, // Bold weight
    },
    h2: {
      fontFamily: '"Noto Serif", serif',
      fontSize: "2.2rem",
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Noto Serif", serif',
      fontSize: "1.8rem",
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Noto Serif", serif',
      fontSize: "1.6rem",
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Noto Serif", serif',
      fontSize: "1.4rem",
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Noto Serif", serif',
      fontSize: "1.2rem",
      fontWeight: 400,
    },
    body1: {
      fontFamily: '"Noto Sans", sans-serif',
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"Noto Sans", sans-serif',
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: '"Noto Sans", sans-serif',
      fontSize: "1rem",
      fontWeight: 500, // Slightly bolder
    },
    subtitle2: {
      fontFamily: '"Noto Sans", sans-serif',
      fontSize: "0.875rem",
      fontWeight: 500,
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
