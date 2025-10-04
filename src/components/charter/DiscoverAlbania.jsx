// src/components/sections/DiscoverAlbania.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function DiscoverAlbania() {
  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 8, md: 12 },
        backgroundColor: "#F2F2F2", // gri e lehtë si në foto
        textAlign: "center",
      }}
    >
      {/* Overline */}
      <Typography
        variant="overline"
        sx={{
          color: "#0d1b2a",
          letterSpacing: 2,
          display: "block",
          mb: 1,
          position: "relative",
          fontSize: "0.85rem",
        }}
      >
        FIND YOUR YACHT
        <Box
          sx={{
            width: 60,
            height: 2,
            backgroundColor: "#8B1E2D",
            mx: "auto",
            mt: 1,
          }}
        />
      </Typography>

      {/* Main Title */}
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{
          mb: 2,
          color: "#0d1b2a",
        }}
      >
        Ready to Discover Albania?
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: "700px",
          mx: "auto",
          mb: 4,
          color: "text.secondary",
        }}
      >
        Let our Albanian destination experts help you plan the perfect charter itinerary 
        along Europe's last untouched coastline
      </Typography>

      {/* Button */}
      <Button
        component={Link}
        to="/plan-voyage"
        sx={{
          bgcolor: "#0d1b2a",
          color: "#fff",
          px: 4,
          py: 1.2,
          fontWeight: 600,
          fontSize: "0.95rem",
          "&:hover": {
            bgcolor: "#8B1E2D",
          },
        }}
      >
        PLAN YOUR VOYAGE
      </Button>
    </Box>
  );
}
