// src/components/destinationdetails/CTASection.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function CTASection({ cta }) {
  if (!cta) return null;

  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 8, md: 12 },
        backgroundColor: "#f2f2f2",
        textAlign: "center",
      }}
    >
      {/* Subtitle */}
      <Typography
        variant="overline"
        sx={{
          color: "#8B1E2D",
          letterSpacing: 2,
          fontWeight: 600,
        }}
      >
        START YOUR EXPERIENCE
      </Typography>

      {/* Title */}
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{ mt: 1, mb: 2, color: "#111" }}
      >
        {cta.title}
      </Typography>

      {/* Subtitle text */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: "600px",
          mx: "auto",
          mb: 4,
          color: "text.secondary",
          fontSize: { xs: "0.95rem", md: "1rem" },
          lineHeight: 1.7,
        }}
      >
        {cta.subtitle}
      </Typography>

      {/* Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#0D1B2A",
          px: 4,
          py: 1.2,
          fontWeight: 600,
          textTransform: "uppercase",
          "&:hover": { backgroundColor: "#1B263B" },
        }}
      >
        {cta.button}
      </Button>
    </Box>
  );
}
