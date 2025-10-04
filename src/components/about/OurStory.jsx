// src/components/sections/OurStory.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function OurStory() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        bgcolor: "#F5F5F5",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            mb: 4,
            fontSize: { xs: "1.8rem", md: "2.5rem" },
            color: "#0d1b2a",
          }}
        >
          Our Story
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.95rem", md: "1.1rem" },
            lineHeight: 1.8,
            mb: 2,
          }}
        >
          Aura Voyage is Albania’s premier luxury yacht charter agency, founded
          with a vision to reveal the country’s untouched coastline to the
          world. Rooted in local expertise and driven by a passion for the sea,
          we curate bespoke journeys along the Albanian Riviera and beyond.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.95rem", md: "1.1rem" },
            lineHeight: 1.8,
            mb: 2,
          }}
        >
          From hidden coves and UNESCO-protected bays to vibrant marinas, every
          charter is designed to merge discovery with indulgence. Our fleet of
          handpicked yachts, paired with tailored services — from private chefs
          and sommeliers to curated events onboard — ensures that every voyage is
          as unforgettable as the destination itself.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            fontSize: { xs: "0.95rem", md: "1.1rem" },
            lineHeight: 1.8,
          }}
        >
          At Aura Voyage, we don’t just charter yachts, we craft experiences that
          celebrate Albania’s rising status as the Mediterranean’s last hidden
          gem.
        </Typography>
      </Container>
    </Box>
  );
}
