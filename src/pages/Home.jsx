import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import FeaturedYachts from "../components/home/FeaturedYachts";
import DestinationsStrip from "../components/home/DestinationsStrip";
import HiddenRiviera from "../components/home/HiddenRiviera";
import StatsSection from "../components/home/StatsSection";
import CharterGuide from "../components/home/CharterGuide";
import LatestStories from "../components/home/LatestStories";
import HeroSection from "../components/home/HeroSection";



export default function Home() {
  return (
    <Box>
      {/* Hero Section with Full-Width Video */}
     <HeroSection />


      {/* Albania Luxury Yacht Charter Section */}
     {/* Albania Luxury Yacht Charter Section */}
<Box
  sx={{
    position: "relative",
    width: "100vw",
    left: "50%",
    marginLeft: "-50.5vw",
    py: { xs: 6, md: 10 },
    backgroundColor: "#E6E6E6", // vendos ngjyrën e background-it të seksionit
    textAlign: "center",
    px: { xs: 2, md: 6 },
  }}
>
  <Box sx={{ maxWidth: "900px", mx: "auto" }}>
    <Typography variant="h4" fontWeight={700} gutterBottom>
      Albania’s #1 Luxury Yacht Charter
    </Typography>
    <Typography
      variant="body1"
      sx={{ fontSize: "1.1rem", lineHeight: 1.8, color: "text.primary" }}
    >
      Aura Voyage is Albania’s foremost luxury yacht charter agency,
      dedicated to unveiling the hidden beauty of the Adriatic and Ionian
      seas. Discerning travelers, yacht owners, and international agencies
      rely on our expertise to charter, buy, or sell yachts while
      discovering a coastline still untouched by mass tourism.
    </Typography>
    <Typography
      variant="body1"
      sx={{
        fontSize: "1.1rem",
        lineHeight: 1.8,
        mt: 2,
        color: "text.primary",
      }}
    >
      With a team of passionate professionals based in Albania and connected
      across the Mediterranean, Aura Voyage curates bespoke journeys along
      the Albanian Riviera — from the secluded coves of Himarë to the crystal
      waters of Ksamil. Each voyage is tailored to perfection, combining
      world-class yachts with authentic local experiences.
    </Typography>
  </Box>
</Box>


      {/* Featured Yachts Section */}
      <HiddenRiviera />
      {/* Featured Yachts Section */}
      <FeaturedYachts />

      {/* Destinations Strip Section */}
      <DestinationsStrip />
      <StatsSection />
      <CharterGuide />
      <LatestStories />

  
    </Box>
  );
}
