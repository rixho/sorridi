// src/components/sections/BespokeExperiences.jsx
import { Box, Container, Typography } from "@mui/material";

export default function BespokeExperiences() {
  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50.5vw",
        backgroundColor: "#fff",
        py: { xs: 14, md: 20 }, // 🔥 më shumë hapësirë vertikale
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          px: { xs: 3, md: 8 },
        }}
      >
        {/* Titulli */}
        <Typography
          variant="h5"
          fontWeight={700}
          sx={{
            color: "#0d1b2a",
            textTransform: "uppercase",
            letterSpacing: 1,
            mb: { xs: 4, md: 5 },
            fontSize: { xs: "1.5rem", md: "1.9rem" },
            lineHeight: 1.3,
          }}
        >
          BESPOKE EXPERIENCES – BEYOND CHARTERING
        </Typography>

        {/* Teksti përshkrues */}
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            maxWidth: 900,
            mx: "auto",
            lineHeight: 2.1,
            fontSize: { xs: "1rem", md: "1.1rem" },
            letterSpacing: 0.2,
          }}
        >
          Discover hand-picked yachts and tailor-made itineraries along Albania’s
          stunning coastline and nearby Mediterranean gems. Whether you dream of a
          luxurious week at sea or a single unforgettable day trip, our expert
          brokers curate every detail — from yacht selection to personalized route
          planning — to create the charter vacation you’ve always imagined.
        </Typography>
      </Container>
    </Box>
  );
}
