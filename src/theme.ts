import { createTheme, type PaletteMode } from "@mui/material/styles";

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#3B82F6", // Tailwind's blue-500
        light: "#60A5FA", // Tailwind's blue-400
        dark: "#2563EB", // Tailwind's blue-600
      },
      secondary: {
        main: "#8B5CF6", // Tailwind's purple-500
        light: "#A78BFA", // Tailwind's purple-400
        dark: "#7C3AED", // Tailwind's purple-600
      },
      success: {
        main: "#10B981", // Tailwind's green-500
        light: "#34D399", // Tailwind's green-400
        dark: "#059669", // Tailwind's green-600
      },
      warning: {
        main: "#F59E0B", // Tailwind's amber-500
        light: "#FBBF24", // Tailwind's amber-400
        dark: "#D97706", // Tailwind's amber-600
      },
      error: {
        main: "#EF4444", // Tailwind's red-500
        light: "#F87171", // Tailwind's red-400
        dark: "#DC2626", // Tailwind's red-600
      },
      ...(mode === "light"
        ? {
            text: {
              primary: "#1F2937", // Tailwind's gray-800
              secondary: "#4B5563", // Tailwind's gray-600
            },
            background: {
              default: "#F9FAFB", // Tailwind's gray-50
              paper: "#FFFFFF", // White
            },
          }
        : {
            text: {
              primary: "#F9FAFB", // Tailwind's gray-50
              secondary: "#E5E7EB", // Tailwind's gray-200
            },
            background: {
              default: "#111827", // Tailwind's gray-900
              paper: "#1F2937", // Tailwind's gray-800
            },
          }),
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: "8px",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
          },
        },
      },
    },
  });
