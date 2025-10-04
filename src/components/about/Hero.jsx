// src/components/about/AboutHero.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function AboutHero() {
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
      {/* Background video */}
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

      {/* Overlay text */}
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
          textAlign: "center",
          color: "#fff",
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            textShadow: "0px 2px 6px rgba(0,0,0,0.8)",
            fontSize: { xs: "1.8rem", md: "3rem" },
          }}
        >
          About Aura
        </Typography>
      </Box>
    </Box>
  );
}
