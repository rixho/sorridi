// src/pages/CharterList.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Hero from "../components/charter/Hero";
import CharterYachts from "../components/charter/CharterYachts";
import DestinationsCarousel from "../components/destinations/DestinationsCarousel";
import DestinationsStrip from "../components/charter/DestinationsStrip";
import DiscoverAlbania from "../components/charter/DiscoverAlbania";

export default function CharterList() {
  return (
    <Box>
      {/* Hero Section */}
      <Hero />

      {/* Text Section */}
      <Container
        maxWidth="md"
        sx={{
          py: { xs: 6, md: 10 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            mb: 2,
            color: "#0d1b2a",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          Set Sail on Your Perfect Albanian Charter Escape
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#333",
            fontSize: { xs: "1rem", md: "1.15rem" },
            lineHeight: 1.8,
          }}
        >
          Discover hand-picked yachts and tailor-made itineraries along Albania’s
          stunning coastline and nearby Mediterranean gems. Whether you dream of
          a luxurious week at sea or a single unforgettable day trip, our expert
          brokers curate every detail—from yacht selection to personalized route
          planning—to create the charter vacation you’ve always imagined.
        </Typography>
      </Container>
      
      <CharterYachts />
       <DestinationsCarousel />
       <DestinationsStrip />
       <DiscoverAlbania />
    </Box>
  );
}
