// src/pages/Destinations.jsx
import React from "react";
import { Box } from "@mui/material";
import Hero from "../components/destinations/Hero";
import MapSection from "../components/destinations/MapSection";
import DestinationsCarousel from "../components/destinations/DestinationsCarousel";
import YachtsForCharter from "../components/destinations/YachtsForCharter";
import DiscoverAlbania from "../components/destinations/DiscoverAlbania";

export default function Destinations() {
  return (
    <Box>
      <Hero />
      <MapSection />
      <DestinationsCarousel />
      <YachtsForCharter />
      <DiscoverAlbania />
      {/* më pas do shtojmë seksione të tjera: p.sh. listën, slider, faq info */}
    </Box>
  );
}
