// src/components/destinations/Hero.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

export default function Hero({ destination }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [heights, setHeights] = useState({ xs: 300, md: 700 });

  useEffect(() => {
    const updateHeights = () => {
      const screenH = window.innerHeight;
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;

      setHeights({
        xs: Math.min(screenH * 0.45, 420), // 📱 mobile
        md: screenH - headerHeight,        // 💻 desktop dinamik
      });
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50.5vw",
        mt: -6,
        height: { xs: `${heights.xs}px`, md: `${heights.md}px` },
        overflow: "hidden",
        backgroundColor: "black",
        transition: "height 0.3s ease",
      }}
    >
      {/* 🎥 Nëse ka video */}
      {destination?.video ? (
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
            objectFit: "cover", // ✅ përshtatet në çdo ekran
            objectPosition: "center",
            zIndex: 1,
          }}
        >
          <source src={destination.video} type="video/mp4" />
        </video>
      ) : (
        <Box
          component="img"
          src={destination?.heroImage}
          alt={destination?.title}
          sx={{
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
      )}

      {/* 🌫 Overlay Tekstit */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.35)", // kontrast i lehtë si në foto
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
          zIndex: 2,
        }}
      >
        {/* Teksti sipër */}
        <Typography
          variant="overline"
          sx={{
            color: "#fff",
            letterSpacing: 2,
            mb: 1,
            fontSize: { xs: "0.9rem", md: "1.1rem" },
            textShadow: "0px 2px 6px rgba(0,0,0,0.6)",
            fontWeight: 400,
          }}
        >
          BEST TIME TO VISIT: MAY – SEPTEMBER
        </Typography>

        {/* Titulli + Exclusive Yacht Escape */}
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 800,
            textTransform: "uppercase",
            color: "#fff",
            textShadow: "0px 3px 10px rgba(0,0,0,0.8)",
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
            lineHeight: 1.3,
          }}
        >
          {destination?.title} · Exclusive Yacht Escape
        </Typography>
      </Box>
    </Box>
  );
}
