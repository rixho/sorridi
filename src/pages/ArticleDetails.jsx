import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Container } from "@mui/material";
import data from "../data/articles.json";

export default function ArticleDetails() {
  const { id } = useParams();
  const article = data.find(a => a.id === parseInt(id));

  if (!article) return <Typography>Article not found</Typography>;

  return (
    <Container sx={{ py: 8 }}>
      <img
        src={article.image}
        alt={article.title}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "2rem" }}
      />
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
        {article.title}
      </Typography>
      {article.content?.map((sec, i) => (
        <Box key={i} sx={{ mb: 4 }}>
          {sec.heading && (
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              {sec.heading}
            </Typography>
          )}
          <Typography sx={{ color: "#333", lineHeight: 1.8 }}>
            {sec.text}
          </Typography>
        </Box>
      ))}
    </Container>
  );
}
