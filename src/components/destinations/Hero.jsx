// src/components/about/AboutHero.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

export default function AboutHero() {
  const [heights, setHeights] = useState({ xs: 300, md: 700 });

  useEffect(() => {
    const updateHeights = () => {
      const screenH = window.innerHeight;
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;

      setHeights({
        xs: Math.min(screenH * 0.45, 420), // 📱 mobile max 420px
        md: screenH - headerHeight,        // 💻 desktop plotësisht dinamik
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
        mt: -6,
        height: { xs: heights.xs, md: heights.md },
        overflow: "hidden",
      }}
    >
      {/* 🎥 Background video */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // ✅ për çdo ekran
          objectPosition: "center",
        }}
      >
        <source src="/media/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      {/* 🖤 Overlay & Text */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
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
          sx={{
            textShadow: "0 2px 6px rgba(0,0,0,0.8)",
            fontSize: { xs: "1.8rem", md: "3.2rem" },
            mb: 2,
            maxWidth: "680px",
            lineHeight: 1.3,
          }}
        >
          Sail the Untouched Riviera
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textShadow: "0 1px 4px rgba(0,0,0,0.6)",
            fontSize: { xs: "1rem", md: "1.25rem" },
            maxWidth: "680px",
            lineHeight: 1.7,
            color: "#f7f7f7",
          }}
        >
          From secret coves to sun-drenched beaches, explore Albania’s hidden
          gems aboard your private yacht.
        </Typography>
      </Box>
    </Box>
  );
}
