// src/components/charterdetails/Hero.jsx
import React, { useEffect, useState } from "react";
import { Box, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import yachts from "../../data/yachts.json";

export default function Hero({ yacht }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const [heights, setHeights] = useState({ xs: 400, md: 700 });

  // 📏 Lartësi dinamike sipas ekranit dhe header-it
  useEffect(() => {
    const updateHeights = () => {
      const screenH = window.innerHeight;
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;

      setHeights({
        xs: Math.min(screenH * 0.5, 420),
        md: screenH - headerHeight,
      });
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  // filtrojmë vetëm jahtet që janë për charter
  const charterYachts = yachts.filter((y) => y.status === "for-charter");

  // gjej indeksin e jahtit aktual vetëm brenda listës së charter
  const currentIndex = charterYachts.findIndex((y) => y.id === yacht.id);
  const prevYacht =
    charterYachts[(currentIndex - 1 + charterYachts.length) % charterYachts.length];
  const nextYacht =
    charterYachts[(currentIndex + 1) % charterYachts.length];

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
      {/* 🖼️ Background Image */}
      <Box
        component="img"
        src={yacht.images?.[0]}
        alt={yacht.translations?.en?.name || yacht.name}
        sx={{
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
      />

      {/* 🌫 Overlay + Tekst */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.6))",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          textAlign: "center",
          color: "#fff",
          pb: { xs: 6, md: 10 },
          px: 2,
          zIndex: 2,
        }}
      >
        {/* Teksti poshtë në mes */}
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 2,
            mb: 0.5,
            fontSize: { xs: "0.8rem", md: "0.9rem" },
          }}
        >
          AVAILABLE FOR CHARTER
        </Typography>

        {/* Emri i madh + model */}
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            textTransform: "uppercase",
            textShadow: "0px 3px 8px rgba(0,0,0,0.8)",
            fontSize: { xs: "1.9rem", sm: "2.5rem", md: "3.2rem" },
            mb: 1,
          }}
        >
          {yacht.translations?.en?.name}{" "}
          <span style={{ fontWeight: 400, opacity: 0.9 }}>{yacht.model}</span>
        </Typography>

        {/* Përshkrimi */}
        <Typography
          sx={{
            textShadow: "0px 2px 6px rgba(0,0,0,0.8)",
            fontWeight: 400,
            fontSize: { xs: "0.9rem", md: "1.05rem" },
            mt: 0.5,
            maxWidth: "800px",
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.5,
          }}
        >
          {yacht.translations?.en?.description ||
            yacht.shortDescription ||
            "Luxury charter yacht for unforgettable journeys."}
        </Typography>

        {/* Butonat Previous & Next */}
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            px: 3,
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "#fff",
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              fontWeight: 500,
              textShadow: "0 2px 4px rgba(0,0,0,0.6)",
            }}
            onClick={() => navigate(`/yacht/${prevYacht.id}`)}
          >
            &lt; PREVIOUS CHARTER
          </Button>
          <Button
            variant="text"
            sx={{
              color: "#fff",
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              fontWeight: 500,
              textShadow: "0 2px 4px rgba(0,0,0,0.6)",
            }}
            onClick={() => navigate(`/yacht/${nextYacht.id}`)}
          >
            NEXT CHARTER &gt;
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
