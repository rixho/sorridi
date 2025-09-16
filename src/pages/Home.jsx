import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import FeaturedYachts from "../components/sections/FeaturedYachts";
import DestinationsStrip from "../components/sections/DestinationsStrip";

export default function Home() {
  return (
    <Box>
      {/* Hero Section with Full-Width Video */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",     // merr gjithë gjerësinë
          left: "50%",        // korrigjo offset
          right: "50%", 
          marginLeft: "-50.5vw",     // qendrohet në mes
          marginRight: "-50w",    // qendrohet në mes  
    mt: -6,          
          height: { xs: 300, md: 450 },
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

      {/* Featured Yachts Section */}
      <FeaturedYachts />

      {/* Destinations Strip Section */}
      <DestinationsStrip />

      {/* Placeholder for more sections */}
      <Box sx={{ py: 8, px: { xs: 2, md: 6 } }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Latest News
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Coming soon...
        </Typography>
      </Box>
    </Box>
  );
}
