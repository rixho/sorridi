import React, { useState } from "react";
import { Box } from "@mui/material";
import Hero from "../components/articles/Hero";
import TypesFilter from "../components/articles/TypesFilter";
import ArticlesList from "../components/articles/ArticlesList";

export default function Articles() {
  const [filterType, setFilterType] = useState("");

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Hero />
      <TypesFilter onSelect={setFilterType} />
      <ArticlesList filterType={filterType} />
    </Box>
  );
}
