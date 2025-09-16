import React from "react";
import { useTranslation } from "react-i18next";
import { MenuItem, Select } from "@mui/material";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <Select size="small" value={i18n.language} onChange={(e)=>i18n.changeLanguage(e.target.value)}>
      <MenuItem value="en">EN</MenuItem>
      <MenuItem value="sq">SQ</MenuItem>
      <MenuItem value="it">IT</MenuItem>
    </Select>
  );
}
