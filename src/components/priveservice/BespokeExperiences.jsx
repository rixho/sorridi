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
            color: "#141F2F", // ✅ ngjyra që the për headerin
            textTransform: "uppercase",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600, // ✅ SemiBold
            letterSpacing: 0,
            fontSize: { xs: "1.8rem", sm: "2.1rem", md: "2.4rem", lg: "2.6rem" },
            lineHeight: 1.3,
            mb: 4,
          }}
        >
          BESPOKE EXPERIENCES – BEYOND CHARTERING
        </Typography>

        {/* Teksti përshkrues */}
        <Typography
          variant="body1"
          sx={{
             fontFamily: "'Poppins', sans-serif",
            fontWeight: 300,
            fontSize: { xs: "1rem", sm: "1.05rem", md: "1.15rem" },
            lineHeight: 1.5,
            color: "#454545",
            mb: 3,
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
