// src/components/about/TailorMade.jsx
import React from "react";
import { Box, Typography, Divider } from "@mui/material";

export default function TailorMade() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        backgroundColor: "#F5F5F5", // gri i lehtë
        py: { xs: 1, md: 8 },
        px: { xs: 2, md: 6 },
        textAlign: "center",
      }}
    >
      {/* Titulli sipër */}
      <Typography
        variant="overline"
        sx={{
          display: "block",
          letterSpacing: 2,
          mb: 1,
          color: "text.secondary",
        }}
      >
        TAILOR MADE
      </Typography>
      <Divider
        sx={{
          width: 60,
          mx: "auto",
          borderBottomWidth: 2,
          borderColor: "#8B1E2D", // e kuqe elegante
          mb: 6,
        }}
      />

      {/* Foto */}
      <Box
        component="img"
        src="/media/1.jpg" // 👉 ndrysho me foton e saktë
        alt="Tailor Made Experience"
        sx={{
          width: "100%",
          maxWidth: "1000px",
          height: { xs: 260, md: 420 },
          objectFit: "cover",
          borderRadius: 2,
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
          mx: "auto",
          mb: 6,
          display: "block",
        }}
      />
    </Box>
  );
}
