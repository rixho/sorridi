import { createTheme } from "@mui/material";

export const getTheme = (mode = "light") => createTheme({
  palette: { mode },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: "none", borderRadius: 14 } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 18 } } }
  },
  typography: {
    fontFamily: 'Inter, Roboto, system-ui, -apple-system, Segoe UI, Arial, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 }
  }
});
