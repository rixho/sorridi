// src/components/sections/DestinationsStrip.jsx
import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const features = [
  {
    id: "what",
    title: "WHAT TO DO",
    button: "CHARTER WITH SORRIDI",
    link: "/what-to-do",
    image: "/media/suncoco/2.jpg",
  },
  {
    id: "where",
    title: "WHERE TO GO",
    button: "CHARTER DESTINATIONS",
    link: "/destinations",
    image: "/media/suncoco/1.jpg",
  },
  {
    id: "choose",
    title: "CHOOSE YOUR YACHT",
    button: "YACHTS FOR CHARTER",
    link: "/yachts-for-charter",
    image: "/media/suncoco/main.jpg",
  },
];

export default function DestinationsStrip() {
  const [hovered, setHovered] = useState(null);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        height: "100vh", // ✅ mbulon gjith ekranin
        overflow: "hidden",
      }}
    >
      <Grid
        container
        sx={{
          height: "100%",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {features.map((f, idx) => {
          let flexValue = 1;
          if (hovered) flexValue = hovered === f.id ? 2 : 0.6;

          return (
            <Grid
              key={f.id}
              item
              onMouseEnter={() => setHovered(f.id)}
              onMouseLeave={() => setHovered(null)}
              sx={{
                flex: { xs: "none", md: flexValue },
                height: { xs: "33.33vh", md: "100%" }, // ✅ në mobile 3 pjesë vertikale
                transition: "flex 0.6s ease",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                color: "#fff",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                borderTop: {
                  xs: idx !== 0 ? "1px solid rgba(255,255,255,0.2)" : "none",
                  md: "none",
                },
                borderLeft: {
                  md: idx !== 0 ? "1px solid rgba(255,255,255,0.2)" : "none",
                },
              }}
            >
              {/* Background image */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${f.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transition: "all 0.6s ease",
                  transform: hovered === f.id ? "scale(1.08)" : "scale(1)",
                  filter:
                    hovered === f.id
                      ? "brightness(0.9)"
                      : "brightness(0.45) grayscale(40%)",
                }}
              />

              {/* Overlay gradient for readability */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                }}
              />

              {/* Text & Button overlay */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  textAlign: "center",
                  mb: { xs: 5, md: 10 },
                  px: { xs: 2, md: 4 },
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    mb: 2,
                    fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" },
                    textShadow: "0 4px 10px rgba(0,0,0,0.8)",
                  }}
                >
                  {f.title}
                </Typography>

                <Button
                  component={Link}
                  to={f.link}
                  variant="outlined"
                  sx={{
                    borderColor: "#fff",
                    color: "#fff",
                    px: { xs: 2.5, md: 3.5 },
                    py: { xs: 0.8, md: 1 },
                    fontSize: { xs: "0.8rem", md: "1rem" },
                    borderWidth: 2,
                    "&:hover": {
                      bgcolor: "#fff",
                      color: "#000",
                    },
                  }}
                >
                  {f.button}
                </Button>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
