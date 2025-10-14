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
            color: "#141F2F", // ✅ ngjyra që the për headerin
            textTransform: "uppercase",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600, // ✅ SemiBold
            letterSpacing: 0,
            fontSize: { xs: "1.8rem", sm: "2.1rem", md: "2.4rem", lg: "2.6rem" },
            lineHeight: 1.3,
            mb: 4,
          }}
        >
          Set Sail on Your Perfect Albanian Charter Escape
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 300,
            fontSize: { xs: "1rem", sm: "1.05rem", md: "1.15rem" },
            lineHeight: 1.5,
            color: "#454545",
            mb: 3,
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
