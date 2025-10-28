// src/components/about/AboutHero.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function AboutHero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [heights, setHeights] = useState({ xs: 300, md: 700 });

  useEffect(() => {
    const updateHeights = () => {
      const screenH = window.innerHeight;
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;

      setHeights({
        xs: Math.min(screenH * 0.45, 420),
        md: screenH - headerHeight,
      });
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        height: { xs: `${heights.xs}px`, md: `${heights.md}px` },
        overflow: "hidden",
        backgroundColor: "black",
        transition: "height 0.3s ease",
        mt: -6,
      }}
    >
      {/* 🌊 Background Image */}
      <img
        src="/media/about-bg.jpg"
        alt="Yacht Destination"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 1,
        }}
      />

      {/* 🌫 Overlay Tekst */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "rgba(0,0,0,0.35)",
          color: "#fff",
          zIndex: 2,
          px: 2,
        }}
      >
        {/* Subtitle */}
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.2rem" },
            mb: 1.5,
            opacity: 0.9,
          }}
        >
          Expert advice, destination guides and inside stories from Aura Voyage Yachts
        </Typography>

        {/* Title */}
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            fontSize: { xs: "1.6rem", sm: "2.2rem", md: "3rem" },
            maxWidth: "90%",
            lineHeight: 1.3,
            textShadow: "0 4px 12px rgba(0,0,0,0.8)",
          }}
        >
          Insights & Inspiration for Your Next Yacht Charter
        </Typography>
      </Box>
    </Box>
  );
}
