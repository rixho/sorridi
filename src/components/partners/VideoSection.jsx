// src/components/partners/VideoSection.jsx
import React, { useEffect, useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export default function VideoSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [height, setHeight] = useState({ xs: 300, md: 700 });

  useEffect(() => {
    const updateHeight = () => {
      const screenH = window.innerHeight;
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;

      setHeight({
        xs: Math.min(screenH * 0.45, 420), // 📱 mobile max 420px
        md: screenH - headerHeight,        // 💻 desktop plotësisht dinamik
      });
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50.5vw",
        overflow: "hidden",
        height: { xs: height.xs, md: height.md },
      }}
    >
      {/* 🎥 Video responsive si Hero */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      >
        <source src="/media/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}
