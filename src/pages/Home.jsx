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
import AlbaniaLuxurySection from "../components/home/AlbaniaLuxurySection";



export default function Home() {
  return (
    <Box>
      {/* Hero Section with Full-Width Video */}
     <HeroSection />


      {/* Albania Luxury Yacht Charter Section */}
     <AlbaniaLuxurySection />


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
