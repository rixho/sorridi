// src/components/contact/ContactHero.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function ContactHero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        mt:-6,
        height: { xs: 300, md: 650 },
        overflow: "hidden",
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
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

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.3)", // pak errësim për kontrast
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#fff",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            textShadow: "0px 4px 12px rgba(0,0,0,0.7)",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          Contact Us
        </Typography>
      </Box>
    </Box>
  );
}
