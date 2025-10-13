// src/components/partners/ProcessSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function ProcessSection() {
  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50vw",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      {/* Teksti sipër */}
      <Box sx={{ textAlign: "center", py: { xs: 8, md: 10 } }}>
        <Typography
          variant="overline"
          sx={{
            color: "#80131F",
            letterSpacing: 2,
            display: "block",
            mb: 1,
            textTransform: "uppercase",
          }}
        >
          How It Works
        </Typography>

        <Box
          sx={{
            width: 60,
            height: 2,
            backgroundColor: "#80131F",
            mx: "auto",
            mb: 2,
          }}
        />

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.2rem", md: "1.6rem" },
            color: "#0d1b2a",
            textTransform: "uppercase",
          }}
        >
          A Simple, Transparent Process
        </Typography>
      </Box>

      {/* Foto full width me tekst mbi të */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "70vh", md: "100vh" }, // e mbulon çdo ekran
          backgroundImage: "url('/test/04.jpeg')", // zëvendëso me rrugën reale të fotos
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Teksti kryesor EN-ROUTE */}
        <Typography
          sx={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#FFFFFF",
            fontSize: { xs: "2.8rem", sm: "4rem", md: "6rem", lg: "7rem" },
            fontWeight: 900,
            letterSpacing: { xs: 3, md: 8 },
            textTransform: "uppercase",
            textShadow: "0 6px 20px rgba(0,0,0,0.8)",
            zIndex: 2,
            transformOrigin: "center",
            // efekti harkuar (simulojmë harkun me CSS transform)
            display: "inline-block",
            rotate: "-6deg",
          }}
        >
          EN-ROUTE
        </Typography>

        {/* Teksti majtas */}
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            bottom: "10%",
            left: { xs: "6%", md: "10%" },
            color: "#FFFFFF",
            fontSize: { xs: "1rem", md: "1.3rem" },
            lineHeight: 1.7,
            textShadow: "0 3px 10px rgba(0,0,0,0.8)",
            fontWeight: 400,
            zIndex: 2,
          }}
        >
          Every Step You Take <br /> I will be watching you
        </Typography>

        {/* Teksti djathtas */}
        <Typography
          variant="body1"
          sx={{
            position: "absolute",
            bottom: "10%",
            right: { xs: "6%", md: "10%" },
            color: "#FFFFFF",
            fontSize: { xs: "1rem", md: "1.3rem" },
            lineHeight: 1.7,
            textShadow: "0 3px 10px rgba(0,0,0,0.8)",
            fontWeight: 400,
            zIndex: 2,
            textAlign: "right",
          }}
        >
          God Bless You <br /> Every Time
        </Typography>
      </Box>
    </Box>
  );
}
