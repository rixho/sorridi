// src/components/HeroSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

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

      {/* Overlay Text */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.25)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          letterSpacing={4}
          sx={{
            textTransform: "uppercase",
            textShadow: "0 4px 12px rgba(0,0,0,0.6)",
          }}
        >
          VOYAGE&nbsp;&nbsp;COUTURE
        </Typography>
      </Box>
    </Box>
  );
}
