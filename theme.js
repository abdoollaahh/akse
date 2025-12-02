import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#CC5500", // Main Brand Color - Vibrant Orange
      light: "#E67A33",
      dark: "#993D00",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#0F4C5C", // Teal
      light: "#1A6B7E",
      dark: "#0A3540",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#fffdf9ff", // Cream
      paper: "#FFFFFF",
    },
    text: {
      primary: "#2D2D2D",
      secondary: "#666464",
    },
    accent: {
      gold: "#B8860B", // Gold
      peach: "#FFDAB9", // Peach
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: "3.5rem",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.2,
      letterSpacing: "-0.01em",
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.5rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          padding: "10px 24px",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(204, 85, 0, 0.3)",
          },
        },
        containedPrimary: {
          color: "#fff",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          border: "1px solid rgba(0,0,0,0.05)",
        },
      },
    },
  },
});

export default theme;
