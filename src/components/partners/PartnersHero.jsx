// src/components/sections/PartnersHero.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

export default function PartnersHero() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [heights, setHeights] = useState({ xs: 300, md: 700 });

  useEffect(() => {
    const updateHeights = () => {
      const screenH = window.innerHeight;
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;

      setHeights({
        xs: Math.min(screenH * 0.45, 420), // 📱 max 420px në mobile
        md: screenH - headerHeight,        // 💻 plotësisht dinamik në desktop
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
        transition: "height 0.3s ease",
        mt: -6,
        backgroundColor: "#000",
      }}
    >
      {/* 🖼️ Fotoja në sfond (responsive, pa prerje) */}
      <Box
        component="img"
        src="/test/01.jpeg"
        alt="Partners"
        loading="lazy"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          objectFit: "cover", // 🔥 përshtatet në çdo ekran
          objectPosition: "center center",
          zIndex: 1,
        }}
      />

      {/* 🖋 Overlay me tekst */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.25)", // hije e lehtë
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 2,
          zIndex: 2,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          fontWeight={700}
          sx={{
            color: "#fff",
            textShadow: "0px 4px 10px rgba(0,0,0,0.6)",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          GROW WITH US
        </Typography>

        {/* Subheadline (opsionale, e rikthyer për më vonë) */}
        {/* <Typography
          variant={isMobile ? "body1" : "h6"}
          sx={{
            mt: 2,
            maxWidth: 700,
            color: "rgba(255,255,255,0.9)",
            textShadow: "0px 2px 6px rgba(0,0,0,0.4)",
            lineHeight: 1.6,
          }}
        >
          Partner with us and create new opportunities in luxury yachting.
          Join a growing network built on trust, collaboration, and premium service.
        </Typography> */}
      </Box>
    </Box>
  );
}
