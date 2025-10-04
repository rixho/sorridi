// src/components/partners/VideoSection.jsx
import React from "react";
import { Box } from "@mui/material";

export default function VideoSection() {
  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        ml: "-50.5vw",
        height: { xs: 300, md: 600 },
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        {/* 👉 vendos këtu videon tënde */}
        <source src="/media/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay nëse do tekst sipër */}
      {/* <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          background: "rgba(0,0,0,0.3)", // për ta errësuar pak
        }}
      >
        <Typography variant="h4" fontWeight={700}>
          Your Video Section Title
        </Typography>
      </Box> */}
    </Box>
  );
}
