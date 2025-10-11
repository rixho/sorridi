import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function AlbaniaLuxurySection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        backgroundColor: "#E6E6E6",
        py: { xs: 8, sm: 10, md: 14, lg: 16 },
        px: { xs: 2, sm: 4, md: 6 },
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // ❌ hiq margjinën e poshtme që shtonte hapsirë
        mb: 0,
      }}
    >
      <Box
        sx={{
          maxWidth: "950px",
          mx: "auto",
          width: "100%",
        }}
      >
        {/* Subtitle */}
        <Typography
          variant="overline"
          sx={{
            color: "#8B1E2D",
            letterSpacing: 2,
            mb: 1,
            display: "block",
            fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
          }}
        >
          DISCOVER AURA VOYAGE
        </Typography>

        {/* Title */}
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem", lg: "3rem" },
            lineHeight: 1.3,
            mb: 4,
          }}
        >
          Albania’s #1 Luxury Yacht Charter
        </Typography>

        {/* Text 1 */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.05rem", md: "1.15rem" },
            lineHeight: { xs: 1.8, sm: 2 },
            color: "text.primary",
            mb: 3,
          }}
        >
          Aura Voyage is Albania’s foremost luxury yacht charter agency,
          dedicated to unveiling the hidden beauty of the Adriatic and Ionian
          seas. Discerning travelers, yacht owners, and international agencies
          rely on our expertise to charter, buy, or sell yachts while
          discovering a coastline still untouched by mass tourism.
        </Typography>

        {/* Text 2 */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", sm: "1.05rem", md: "1.15rem" },
            lineHeight: { xs: 1.8, sm: 2 },
            color: "text.primary",
          }}
        >
          With a team of passionate professionals based in Albania and connected
          across the Mediterranean, Aura Voyage curates bespoke journeys along
          the Albanian Riviera — from the secluded coves of Himarë to the crystal
          waters of Ksamil. Each voyage is tailored to perfection, combining
          world-class yachts with authentic local experiences.
        </Typography>
      </Box>
    </Box>
  );
}
