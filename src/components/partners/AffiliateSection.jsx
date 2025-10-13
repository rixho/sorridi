// src/components/partners/AffiliateSection.jsx
import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function AffiliateSection() {
  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50vw",
        backgroundColor: "#F7F7F7",
        textAlign: "center",
        py: { xs: 10, md: 18 }, // më shumë hapësirë sipër e poshtë
      }}
    >
      {/* Titulli i vogël sipër */}
      <Typography
        variant="overline"
        sx={{
          display: "block",
          mb: 1,
          letterSpacing: 2,
          color: "#141F2F",
          fontWeight: 500,
          textTransform: "uppercase",
        }}
      >
        Affiliate Program in Action
      </Typography>

      {/* Vija e kuqe */}
      <Box
        sx={{
          width: 60,
          height: 2,
          backgroundColor: "#80131F",
          margin: "0 auto",
          mb: 3,
          borderRadius: 2,
        }}
      />

      {/* Titulli kryesor */}
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{
          mb: 5,
          textTransform: "uppercase",
          color: "#141F2F",
          fontSize: { xs: "1.3rem", md: "1.8rem" },
          letterSpacing: 1,
        }}
      >
        Exclusive Program, Seamless Experience
      </Typography>

      {/* Përmbajtja me tekstin e hollë */}
      <Container maxWidth="md" sx={{ px: { xs: 3, md: 6 } }}>
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: "#454545",
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          Every partnership effortless: follow each referral in real time, see
          commissions update instantly, and manage your client list with full
          data privacy and secure payouts.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            color: "#454545",
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          As your clients embark on bespoke yacht charters, they enjoy the very
          best of the Adriatic and Mediterranean—modern yachts, refined
          itineraries, and curated extras such as gourmet catering, champagne
          service, or private helicopter rides.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#454545",
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          This is where business opportunity meets unforgettable travel: you
          earn, while your clients sail in style.
        </Typography>
      </Container>
    </Box>
  );
}
