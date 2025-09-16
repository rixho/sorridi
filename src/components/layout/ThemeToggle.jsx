import React from "react";
import { Switch } from "@mui/material";

export default function ThemeToggle({ mode, setMode }) {
  return (
    <Switch
      checked={mode === "dark"}
      onChange={() => setMode(mode === "light" ? "dark" : "light")}
    />
  );
}
