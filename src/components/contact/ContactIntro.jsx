// src/components/contact/ContactIntro.jsx
import React from "react";
import { Box, Typography, Container, Divider } from "@mui/material";

export default function ContactIntro() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="md">
        {/* Subtitle with red underline */}
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 2,
            display: "block",
            mb: 1,
            color: "text.secondary",
          }}
        >
          PLAN YOUR NEXT VOYAGE
        </Typography>
        <Divider
          sx={{
            width: 80,
            borderBottomWidth: 2,
            borderColor: "#8B1E2D",
            mx: "auto",
            mb: 3,
          }}
        />

        {/* Main title */}
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{ mb: 3, textTransform: "uppercase" }}
        >
          WE’RE READY TO CRAFT A CHARTER EXPERIENCE TAILORED TO YOU
        </Typography>

        {/* Description */}
        <Typography variant="body1" color="text.secondary">
          Whether you want to book a yacht, request a bespoke itinerary, or
          simply ask a question, our team is here to help. Fill in the form
          below and we’ll respond promptly with the details you need to start
          your journey.
        </Typography>
      </Container>
    </Box>
  );
}
