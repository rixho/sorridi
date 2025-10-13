import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
          objectFit: "cover", // 🔥 mbulon gjithçka, pa vija të zeza
          zIndex: 1,
        }}
      >
        <source src="/media/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🖋 Overlay Content */}
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
          background: "rgba(0,0,0,0.25)",
          color: "#fff",
          textAlign: "center",
          zIndex: 2,
          px: 2,
        }}
      >
        {/* 🅰️ Headline */}
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600, // SemiBold
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // 64px ≈ 4rem
            lineHeight: 1.5, // 150%
            letterSpacing: "0.04em",
            color: "#F7F7F7",
            textTransform: "uppercase",
            textShadow: "0 4px 12px rgba(0,0,0,0.6)",
            mb: 1.5,
          }}
        >
          VOYAGE&nbsp;&nbsp;COUTURE
        </Typography>

        {/* ✨ Subheadline */}
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 300,
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.3rem" },
            color: "rgba(255,255,255,0.8)",
            letterSpacing: "0.02em",
            lineHeight: 1.5,
            textShadow: "0 2px 6px rgba(0,0,0,0.4)",
          }}
        >
          Luxury in the Last Uncharted Mediterranean
        </Typography>
      </Box>
    </Box>
  );
}
