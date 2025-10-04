// src/components/about/AuraExperience.jsx
import React from "react";
import { Box, Typography, Divider, Stack } from "@mui/material";

const items = [
  {
    title: "Tailored Luxury Service",
    description:
      "From itinerary planning to onboard details, our team ensures each journey is customized to exceed your expectations.",
  },
  {
    title: "Insider Knowledge",
    description:
      "With deep local expertise, we reveal hidden coves, pristine beaches, and secluded anchorages unknown to most travelers.",
  },
  {
    title: "Authentic Experiences",
    description:
      "We blend luxury with culture, offering curated dining, historic excursions, and moments that connect you to Albania.",
  },
];

export default function AuraExperience() {
  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50.5vw",
        backgroundColor: "#F5F5F5", // background i faqes
      }}
    >
      {/* Titulli jashtë seksionit blu */}
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{
          mb: 4,
          textAlign: "center",
          color: "#0d1b2a",
          fontSize: { xs: "1.6rem", md: "2rem" },
        }}
      >
        The Aura Experience
      </Typography>

      {/* Box blu i plotë (nga e majta në të djathtë) */}
      <Box
        sx={{
          backgroundColor: "#0d1b2a",
          py: { xs: 6, md: 10 },
          px: { xs: 2, md: 6 },
        }}
      >
        <Stack spacing={6} sx={{ maxWidth: "1200px", mx: "auto", textAlign: "center" }}>
          {items.map((item, idx) => (
            <Box key={idx}>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ color: "#d4a017", mb: 1 }}
              >
                {item.title}
              </Typography>
              <Divider
                sx={{
                  width: 60,
                  mx: "auto",
                  borderBottomWidth: 2,
                  borderColor: "#8B1E2D",
                  mb: 2,
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.85)",
                  maxWidth: "800px",
                  mx: "auto",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
