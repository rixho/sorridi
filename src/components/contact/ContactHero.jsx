// src/components/contact/ContactHero.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

export default function ContactHero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [heights, setHeights] = useState({ xs: 300, md: 650 });

  useEffect(() => {
    const updateHeights = () => {
      const screenH = window.innerHeight;
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;

      setHeights({
        xs: Math.min(screenH * 0.45, 420), // 📱 mobile
        md: screenH - headerHeight, // 💻 desktop dinamike
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
      {/* 🎥 Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          objectFit: "cover", // ✅ përshtatet në çdo ekran
          objectPosition: "center",
          zIndex: 1,
        }}
      >
        <source src="/media/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🌫 Overlay + Text */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.55))",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          zIndex: 2,
          px: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            textShadow: "0px 4px 12px rgba(0,0,0,0.8)",
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
          }}
        >
          Contact Us
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontWeight: 300,
            color: "rgba(255,255,255,0.85)",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            textShadow: "0px 2px 6px rgba(0,0,0,0.5)",
            maxWidth: 600,
          }}
        >
          Get in touch with our team to start planning your next yacht charter experience.
        </Typography>
      </Box>
    </Box>
  );
}
