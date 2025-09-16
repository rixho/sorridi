import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "60vh", md: "90vh" }, // responsive
        overflow: "hidden",
      }}
    >
      {/* Video full width */}
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
          background: "rgba(0,0,0,0.3)", // filter
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
          variant="h2"
          fontWeight={700}
          sx={{
            mb: 3,
            textShadow: "0px 2px 6px rgba(0,0,0,0.8)",
            fontSize: { xs: "2rem", md: "3.5rem" }, // responsive font size
          }}
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
  );
}
