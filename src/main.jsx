import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { getTheme } from "./app/theme";
import router from "./app/router";
import { queryClient } from "./app/queryClient";
import { SeoProvider } from "./app/seo";
import "./app/i18n";
import "./index.css";
import "leaflet/dist/leaflet.css";


function Root() {
  const [mode, setMode] = React.useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
  );
  const theme = React.useMemo(() => getTheme(mode), [mode]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SeoProvider>
          <CssBaseline />
          <RouterProvider router={router({ mode, setMode })} />
        </SeoProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
