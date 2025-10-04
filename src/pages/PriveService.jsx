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
    backgroundColor: "#f2f2f2",
    py: { xs: 6, md: 10 },
    textAlign: "center",
  }}
>
  <Typography
    variant="h5"
    fontWeight={700}
    sx={{
      mb: 2,
      color: "#0d1b2a",
      letterSpacing: 1,
      textTransform: "uppercase",
    }}
  >
    EVENTS & CELEBRATIONS
  </Typography>

  {/* Red underline */}
  <Box
    sx={{
      width: 80,
      height: 3,
      backgroundColor: "#8B1E2D",
      mx: "auto",
      mb: 4,
    }}
  />

  <Typography
    variant="h6"
    sx={{
      color: "text.secondary",
      maxWidth: 1000,
      mx: "auto",
      lineHeight: 1.9,
      fontSize: { xs: "1rem", md: "1.25rem" }, // pak më i madh se body1
    }}
  >
    From intimate dinners to grand yacht parties, every detail is curated with
    flawless elegance—from bespoke décor, floral design, and lighting to
    entertainment, music, and on-board service—so you and your guests can simply
    enjoy the celebration.
  </Typography>
</Box>


      <VideoSection />
      <GourmetChampagne />
      <CTASection />
    </Box>
  );
}
