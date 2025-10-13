// src/components/charter/Hero.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function Hero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [heights, setHeights] = useState({ xs: 300, md: 700 });

  useEffect(() => {
    const updateHeights = () => {
      const screenH = window.innerHeight;
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;

      setHeights({
        xs: Math.min(screenH * 0.45, 420), // 📱 max 420px për mobile
        md: screenH - headerHeight, // 💻 dinamik për desktop
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
      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          objectFit: "cover", // ✅ përshtatet në çdo ekran pa vija të zeza
          objectPosition: "center",
          zIndex: 1,
        }}
      >
        <source src="/media/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌫 Overlay Text */}
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
          background: "rgba(0,0,0,0.3)",
          textAlign: "center",
          color: "#fff",
          zIndex: 2,
          px: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            textTransform: "uppercase",
            textShadow: "0 4px 12px rgba(0,0,0,0.8)",
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3.2rem" },
            letterSpacing: "0.05em",
          }}
        >
          YACHTS FOR CHARTER
        </Typography>
      </Box>
    </Box>
  );
}
