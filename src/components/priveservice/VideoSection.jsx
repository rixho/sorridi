// src/components/priveservice/VideoSection.jsx
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

export default function VideoSection() {
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
        height: { xs: heights.xs, md: heights.md },
        overflow: "hidden",
      }}
    >
      {/* 🎥 Video Background */}
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover", // ✅ video mbulon gjithë zonën
          objectPosition: "center",
        }}
      >
        <source src="/media/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>

      {/* 🖤 Overlay i lehtë për kontrast */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.35)",
        }}
      />
    </Box>
  );
}
