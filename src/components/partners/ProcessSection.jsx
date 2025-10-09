// src/components/partners/ProcessSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function ProcessSection() {
  return (
    <Box sx={{ width: "100vw", position: "relative", left: "50%", ml: "-50.5vw" }}>
      {/* Teksti sipër */}
      <Box sx={{ textAlign: "center", py: 6 }}>
        <Typography
          variant="overline"
          sx={{ color: "#8B1E2D", letterSpacing: 2, display: "block", mb: 1 }}
        >
          HOW IT WORKS
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          A SIMPLE, TRANSPARENT PROCESS
        </Typography>
      </Box>

      {/* Foto full width me overlay */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 420, md: 550 },
          backgroundImage: "url('/test/04.jpeg')", // vendos jahtin këtu
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Overlay i lehtë për kontrast */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        {/* Teksti kryesor EN-ROUTE */}
        <Typography
          variant="h2"
          fontWeight={900}
          sx={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: { xs: 4, md: 12 },
            textShadow: "0 6px 20px rgba(0,0,0,0.8)",
            transform: "rotate(-8deg)",
            fontSize: { xs: "2rem", md: "5rem" },
          }}
        >
          EN-ROUTE
        </Typography>

        {/* Tekst majtas */}
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            bottom: "15%",
            left: { xs: "5%", md: "8%" },
            color: "#fff",
            fontSize: { xs: "0.9rem", md: "1.4rem" },
            lineHeight: 1.6,
            textShadow: "0 3px 10px rgba(0,0,0,0.7)",
            zIndex: 2,
          }}
        >
          Every Step You Take <br /> I will be watching you
        </Typography>

        {/* Tekst djathtas */}
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            bottom: "15%",
            right: { xs: "5%", md: "8%" },
            color: "#fff",
            fontSize: { xs: "0.9rem", md: "1.4rem" },
            lineHeight: 1.6,
            textShadow: "0 3px 10px rgba(0,0,0,0.7)",
            zIndex: 2,
          }}
        >
          God Bless You <br /> Every Time
        </Typography>
      </Box>
    </Box>
  );
}
