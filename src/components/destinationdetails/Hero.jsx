// src/components/destinations/Hero.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function Hero({ destination }) {
  console.log(destination);
  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50.5vw",
        mt: -6,        
        height: { xs: 300, md: 700 },
        overflow: "hidden",
      }}
    >
      {/* Nëse ka video */}
      {destination?.video ? (
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
          <source src={destination.video} type="video/mp4" />
        </video>
      ) : (
        <img
          src={destination?.heroImage}
          alt={destination?.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      )}

      {/* Overlay tekstit */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.35)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        {/* Teksti sipër */}
        <Typography
          variant="overline"
          sx={{
            color: "#fff",
            letterSpacing: 2,
            mb: 1,
            fontSize: { xs: "0.9rem", md: "1.2rem" },
            textShadow: "0px 2px 6px rgba(0,0,0,0.6)",
          }}
        >
          BEST TIME TO VISIT: MAY – SEPTEMBER
        </Typography>

        {/* Titulli me EXCLUSIVE YACHT ESCAPE */}
        <Typography
          variant="h3"
          fontWeight={800}
          sx={{
            color: "#fff",
            textShadow: "0px 3px 10px rgba(0,0,0,0.7)",
            fontSize: { xs: "1.8rem", md: "3rem" },
            textTransform: "uppercase",
          }}
        >
          {destination?.title} · Exclusive Yacht Escape
        </Typography>
      </Box>
    </Box>
  );
}
