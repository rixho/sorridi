// src/components/partners/AffiliateSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function AffiliateSection() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 12 },
        px: { xs: 2, md: 6 },
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      <Typography
        variant="overline"
        sx={{
          display: "block",
          mb: 1,
          letterSpacing: 2,
          color: "#8B1E2D",
          fontWeight: 600,
        }}
      >
        AFFILIATE PROGRAM IN ACTION
      </Typography>

      {/* Vija e kuqe poshtë */}
      <Box
        sx={{
          width: 60,
          height: 3,
          backgroundColor: "#8B1E2D",
          margin: "0 auto",
          mb: 3,
          borderRadius: 2,
        }}
      />

      <Typography
        variant="h5"
        fontWeight={700}
        sx={{ mb: 4, textTransform: "uppercase" }}
      >
        EXCLUSIVE PROGRAM, SEAMLESS EXPERIENCE
      </Typography>

      <Container maxWidth="md">
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Every partnership effortless: follow each referral in real time, see
          commissions update instantly, and manage your client list with full
          data privacy and secure payouts.
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          As your clients embark on bespoke yacht charters, they enjoy the very
          best of the Adriatic and Mediterranean—modern yachts, refined
          itineraries, and curated extras such as gourmet catering, champagne
          service, or private helicopter rides.
        </Typography>

        <Typography variant="body1" color="text.secondary">
          This is where business opportunity meets unforgettable travel: you
          earn, while your clients sail in style.
        </Typography>
      </Container>
    </Box>
  );
}
