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
        backgroundColor: "#FAFAFA",
        py: { xs: 8, sm: 10, md: 14, lg: 16 },
        px: { xs: 2, sm: 4, md: 6 },
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 0,
      }}
    >
      <Box
        sx={{
          maxWidth: "950px",
          mx: "auto",
          width: "100%",
          fontFamily: "'Poppins', sans-serif", // ✅ font global për këtë seksion
        }}
      >
        {/* Titulli kryesor */}
        <Typography
          variant="h4"
          gutterBottom
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
          ALBANIA’S #1 LUXURY YACHT CHARTER
        </Typography>

        {/* Paragrafi 1 */}
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
          Aura Voyage is Albania’s foremost luxury yacht charter agency,
          dedicated to unveiling the hidden beauty of the Adriatic and Ionian
          seas. Discerning travelers, yacht owners, and international agencies
          rely on our expertise to charter, buy, or sell yachts while
          discovering a coastline still untouched by mass tourism.
        </Typography>

        {/* Paragrafi 2 */}
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
          With a team of passionate professionals based in Albania and connected
          across the Mediterranean, Aura Voyage curates bespoke journeys along
          the Albanian Riviera — from the secluded coves of Himarë to the crystal
          waters of Ksamil.
        </Typography>

        {/* Paragrafi 3 */}
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 300,
            fontSize: { xs: "1rem", sm: "1.05rem", md: "1.15rem" },
            lineHeight: 1.5,
            color: "#454545",
          }}
        >
          Each voyage is tailored to perfection, combining world-class yachts
          with authentic local experiences.
        </Typography>
      </Box>
    </Box>
  );
}
