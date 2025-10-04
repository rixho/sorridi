// src/components/partners/WhyPartnerSection.jsx
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export default function WhyPartnerSection() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 12 },
        px: { xs: 2, md: 6 },
        backgroundColor: "#fafafa",
      }}
    >
      <Typography
        variant="overline"
        sx={{ display: "block", textAlign: "center", mb: 1, letterSpacing: 2 }}
      >
        WHY PARTNER WITH US
      </Typography>
      <Typography
        variant="h5"
        fontWeight={700}
        textAlign="center"
        sx={{ mb: 6 }}
      >
        SMOOTH COLLABORATION, PREMIUM SERVICE
      </Typography>

      <Grid container spacing={6} alignItems="center">
        {/* Foto majtas */}
        <Grid item xs={12} md={6}>
      <Box
  component="img"
  src="/media/1.jpg" // 👉 ndrysho me imazhin real
  alt="Partner Yacht"
  sx={{
    width: "100%",
    height: "100%",
    maxHeight: 400,     // kufizon lartësinë (mund ta ndryshosh sipas dizajnit)
    objectFit: "cover", // mban raportin pa deformim
    borderRadius: 2,
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
  }}
/>
        </Grid>

        {/* Teksti djathtas */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Join a select network of travel agencies, yachting operators, tour guides,
            and lifestyle concierges who trust us to deliver unforgettable charter
            experiences across the Adriatic and Mediterranean.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong style={{ color: "#d4a017" }}>High Commission:</strong> Earn 7.5 – 20 % per booking
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong style={{ color: "#1976d2" }}>Fast, Secure Payments:</strong> Direct and transparent
          </Typography>
          <Typography variant="body1">
            <strong style={{ color: "#8B1E2D" }}>Client Confidence:</strong> Luxury yachts, professional crews,
            and seamless service
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
