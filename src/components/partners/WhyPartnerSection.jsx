// src/components/partners/WhyPartnerSection.jsx
import React from "react";
import { Box, Typography, Grid } from "@mui/material";

export default function WhyPartnerSection() {
  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 10, md: 16 },
        backgroundColor: "#FFFFFF",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Header */}
      <Box textAlign="center" mb={8}>
        <Typography
          variant="overline"
          sx={{
            color: "#141F2F",
            letterSpacing: 2,
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Why Partner With Us
        </Typography>

        <Box
          sx={{
            width: 60,
            height: 3,
            backgroundColor: "#80131F",
            mx: "auto",
            my: 2,
          }}
        />

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" },
            color: "#141F2F",
            textTransform: "uppercase",
          }}
        >
          Smooth Collaboration, Premium Service
        </Typography>
      </Box>

      {/* Përmbajtja kryesore */}
      <Grid
        container
        spacing={0}
        alignItems="stretch"
        sx={{
          width: "100%",
          mx: 0,
        }}
      >
        {/* 🖼️ Foto majtas */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: 0, // pa padding
            m: 0, // pa margin
          }}
        >
          <Box
            component="img"
            src="/media/1.jpg"
            alt="Partner Yacht"
            sx={{
              width: "100%",
              height: { xs: 420, sm: 550, md: 700 },
              objectFit: "cover",
              display: "block",
            }}
          />
        </Grid>

        {/* 🧾 Teksti djathtas */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: 0, // pa padding
            m: 0, // pa margin
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              px: { xs: 2, md: 3 }, // vetëm pak për lexueshmëri në mobile
              py: { xs: 4, md: 6 },
            }}
          >
            {[
              `Join a select network of trusted travel agencies, yacht brokers, tour operators, and lifestyle concierges who rely on us to craft exceptional charter experiences across the Adriatic and Mediterranean. Our partners are not just collaborators — they are an integral part of a growing community that values professionalism, trust, and the pursuit of excellence.`,
              `We believe successful partnerships are built on clarity, integrity, and shared ambition. That’s why we offer a seamless onboarding process, dedicated partner support, and complete transparency at every stage — from lead generation to client confirmation and post-charter follow-up.`,
              `Enjoy high commission rates ranging from 7.5% to 20% per booking, along with fast, secure payments processed directly and transparently. Every transaction is handled with precision to ensure peace of mind for our partners and an effortless experience for their clients.`,
              `Your clients will benefit from a portfolio of hand-selected luxury yachts, professional crews, and perfectly planned itineraries — all designed to deliver unforgettable moments at sea.`,
              `As a partner, you gain access to priority booking, co-branded marketing materials, and personalized support from our charter specialists. We work quietly behind the scenes to protect your client relationships while elevating your brand through excellence and consistency.`,
            ].map((text, index) => (
              <Typography
                key={index}
                sx={{
                  color: "#454545",
                  fontSize: { xs: "0.85rem", md: "0.93rem" },
                  lineHeight: 1.9,
                  mb: 3.2,
                  fontWeight: 400,
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
