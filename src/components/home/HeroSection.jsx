import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",           // ✅ full width
        left: "50%",
        marginLeft: "-50.5vw",      // ✅ e qendonon dhe heq boshësitë anash
        mt: 0,
        pt: 0, // ✅ fillon poshtë header-it
        height: isMobile ? 400 : "calc(100vh - 50px)",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          height: "100%",
          objectFit: "cover",   // ✅ mbulon pa crop
          zIndex: 1,
        }}
      >
        <source src="/media/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Text */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.25)",
          color: "#fff",
          textAlign: "center",
          zIndex: 2,
        }}
      >
        <Typography
          variant="h3"
          fontWeight={700}
          letterSpacing={4}
          sx={{
            textTransform: "uppercase",
            textShadow: "0 4px 12px rgba(0,0,0,0.6)",
            fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.5rem" },
          }}
        >
          VOYAGE&nbsp;&nbsp;COUTURE
        </Typography>
      </Box>
    </Box>
  );
}
