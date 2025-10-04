// src/pages/About.jsx
import React from "react";
import { Box } from "@mui/material";
import Hero from "../components/about/Hero";
import OurStory from "../components/about/OurStory";
import Dedication from "../components/about/Dedication";
import TailorMade from "../components/about/TailorMade";
import AuraExperience from "../components/about/AuraExperience";
import LatestStories from "../components/sections/LatestStories";


export default function About() {
  return (
    <Box>
      <Hero />
      <OurStory />
      <Dedication />
      <TailorMade />
      <AuraExperience />
      <LatestStories />

    </Box>
  );
}
