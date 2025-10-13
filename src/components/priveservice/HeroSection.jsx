// src/components/sections/HeroSection.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [height, setHeight] = useState(600);

  useEffect(() => {
    const updateHeight = () => {
      const screenH = window.innerHeight;
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;
      // përshtat dinamikisht për çdo madhësi ekrani
      setHeight(isMobile ? Math.min(screenH * 0.5, 420) : screenH - headerHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [isMobile]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        ml: "-50.5vw",
        height: height,
        overflow: "hidden",
        mt: -6,
      }}
    >
      {/* Foto background që mbulon gjithçka */}
      <Box
        component="img"
        src="/test/01.jpeg"
        alt="Signature Privileges"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Overlay me tekst */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.55))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          px: 2,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          fontWeight={800}
          sx={{
            letterSpacing: 3,
            textTransform: "uppercase",
            textShadow: "0 6px 20px rgba(0,0,0,0.8)",
          }}
        >
          Signature Privileges
        </Typography>
      </Box>
    </Box>
  );
}
