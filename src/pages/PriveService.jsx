import { Box, Typography } from "@mui/material";
import HeroSection from "../components/priveservice/HeroSection";
import BespokeExperiences from "../components/priveservice/BespokeExperiences";
import ServicesSection from "../components/priveservice/ServicesSection";
import VideoSection from "../components/priveservice/VideoSection";
import GourmetChampagne from "../components/priveservice/GourmetChampagne";
import CTASection from "../components/priveservice/CTASection";

export default function PriveService() {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <HeroSection />
      <BespokeExperiences />
      <ServicesSection />
  {/* EVENTS & CELEBRATIONS */}
<Box
  sx={{
    position: "relative",
    width: "100vw",
    left: "50%",
    marginLeft: "-50.5vw",
    backgroundColor: "#F7F7F7",
    py: { xs: 12, md: 18 }, // 🔥 më shumë hapësirë sipër & poshtë
    textAlign: "center",
  }}
>
  {/* Titulli */}
  <Typography
    variant="h5"
    fontWeight={700}
    sx={{
      mb: 2,
      color: "#0D1B2A",
      letterSpacing: 1,
      textTransform: "uppercase",
      fontSize: { xs: "1.4rem", md: "1.8rem" },
    }}
  >
    EVENTS & CELEBRATIONS
  </Typography>

  {/* Vija e kuqe */}
  <Box
    sx={{
      width: 70,
      height: 3,
      backgroundColor: "#8B1E2D",
      mx: "auto",
      mb: { xs: 4, md: 6 },
      borderRadius: 2,
    }}
  />

  {/* Përshkrimi */}
  <Typography
    variant="body1"
    sx={{
      color: "#555",
      maxWidth: 900,
      mx: "auto",
      lineHeight: 2,
      fontWeight: 400,
      letterSpacing: 0.3,
      fontSize: { xs: "0.95rem", md: "1.1rem" },
      px: { xs: 3, md: 0 },
    }}
  >
    From intimate dinners to grand yacht parties, every detail is curated with
    flawless elegance — from bespoke décor, floral design, and lighting to
    entertainment, music, and on-board service — so you and your guests can
    simply enjoy the celebration.
  </Typography>
</Box>



      <VideoSection />
      <GourmetChampagne />
      <CTASection />
    </Box>
  );
}
