import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import FeaturedYachts from "../components/sections/FeaturedYachts";
import DestinationsStrip from "../components/sections/DestinationsStrip";
import HiddenRiviera from "../components/sections/HiddenRiviera";
import StatsSection from "../components/sections/StatsSection";
import CharterGuide from "../components/sections/CharterGuide";
import LatestStories from "../components/sections/LatestStories";


export default function Home() {
  return (
    <Box>
      {/* Hero Section with Full-Width Video */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          left: "50%",
          marginLeft: "-50.5vw",
          mt: -6,
          height: { xs: 300, md: 700 },
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="/media/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "#fff",
            px: 2,
          }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ mb: 2, textShadow: "0px 2px 6px rgba(0,0,0,0.8)" }}
          >
            Explore the World’s Finest Yachts
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button
                variant="contained"
                size="large"
                component={Link}
                to="/yachts-for-sale"
              >
                Buy a Yacht
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/yachts-for-charter"
                sx={{ color: "#fff", borderColor: "#fff" }}
              >
                Charter a Yacht
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>

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
