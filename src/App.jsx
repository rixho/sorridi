import React from "react";
import { Outlet } from "react-router-dom";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box
} from "@mui/material";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop"; // 👈 import
import "./app/i18n";

export default function App() {
  // dark/light mode
  const savedMode = localStorage.getItem("theme") || "light";
  const [mode, setMode] = React.useState(savedMode);

  const theme = createTheme({
    palette: { mode }
  });

  React.useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box minHeight="100dvh" display="flex" flexDirection="column">
        <Header mode={mode} setMode={setMode} />
        <ScrollToTop /> {/* 👈 scroll lart kur ndryshon faqe */}
        <Container sx={{ flex: 1, py: 6 }}>
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
