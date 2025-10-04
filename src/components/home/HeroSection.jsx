import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
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
      {/* Background Video */}
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
        {/* Headline */}
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            mb: 1,
            textShadow: "0px 2px 6px rgba(0,0,0,0.8)",
          }}
        >
          Explore the World’s Finest Yachts
        </Typography>

        {/* Subheadline */}
        <Typography
          variant="subtitle1"
          sx={{
            mb: 4,
            fontWeight: 400,
            textShadow: "0px 1px 4px rgba(0,0,0,0.6)",
            fontSize: { xs: "0.9rem", md: "1.1rem" },
          }}
        >
          Luxury in the Last Uncharted Mediterranean
        </Typography>

        {/* CTA Buttons */}
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
