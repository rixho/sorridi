import React, { useRef, useLayoutEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import HeroSection from "../components/priveservice/HeroSection";
import BespokeExperiences from "../components/priveservice/BespokeExperiences";
import ServicesSection from "../components/priveservice/ServicesSection";
import VideoSection from "../components/priveservice/VideoSection";
import GourmetChampagne from "../components/priveservice/GourmetChampagne";
import CTASection from "../components/priveservice/CTASection";

export default function PriveService() {
  const titleRef = useRef(null);
  const [lineWidth, setLineWidth] = useState(70); // gjerësi fillestare

  // 📏 Mat automatikisht gjerësinë e tekstit sipër
  useLayoutEffect(() => {
    if (titleRef.current) {
      const titleLength = titleRef.current.offsetWidth;
      // 🧮 Bëje vijën pak më të madhe se teksti (p.sh. 1.25x)
      setLineWidth(titleLength * 1.25);
    }
  }, []);

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <HeroSection />
      <BespokeExperiences />
      <ServicesSection />

      {/* EVENTS & CELEBRATIONS */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          left: "50%",
          marginLeft: "-50.5vw",
          backgroundColor: "#F7F7F7",
          py: { xs: 12, md: 18 },
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Titulli */}
        <Typography
          ref={titleRef}
          variant="h5"
          fontWeight={700}
          sx={{
            mb: 2,
            color: "#0D1B2A",
            letterSpacing: 1,
            textTransform: "uppercase",
            fontSize: { xs: "1.4rem", md: "1.8rem" },
            display: "inline-block", // duhet për të matur saktë gjerësinë
          }}
        >
          EVENTS & CELEBRATIONS
        </Typography>

        {/* Vija e kuqe dinamike */}
        <Box
          sx={{
            width: `${lineWidth}px`,
            maxWidth: "90vw",
            height: 3,
            backgroundColor: "#8B1E2D",
            mx: "auto",
            mb: { xs: 4, md: 6 },
            borderRadius: 2,
            transition: "width 0.4s ease",
          }}
        />

        {/* Përshkrimi */}
        <Typography
          variant="body1"
          sx={{
            color: "#555",
            maxWidth: 900,
            mx: "auto",
            lineHeight: 2,
            fontWeight: 400,
            letterSpacing: 0.3,
            fontSize: { xs: "0.95rem", md: "1.1rem" },
            px: { xs: 3, md: 0 },
          }}
        >
          From intimate dinners to grand yacht parties, every detail is curated
          with flawless elegance — from bespoke décor, floral design, and
          lighting to entertainment, music, and on-board service — so you and
          your guests can simply enjoy the celebration.
        </Typography>
      </Box>

      <VideoSection />
      <GourmetChampagne />
      <CTASection />
    </Box>
  );
}
