// src/components/sections/DestinationsStrip.jsx
import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const features = [
  {
    id: "what",
    title: "WHAT TO DO",
    button: "CHARTER WITH FRASER",
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
        height: { xs: "auto", md: "75vh" },
        overflow: "hidden",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Grid
        container
        sx={{
          height: { xs: "auto", md: "100%" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {features.map((f, idx) => {
          let flexValue = 1;
          if (hovered) {
            flexValue = hovered === f.id ? 2 : 0.5;
          }

          return (
            <Grid
              key={f.id}
              item
              onMouseEnter={() => setHovered(f.id)}
              onMouseLeave={() => setHovered(null)}
              sx={{
                flex: { xs: "none", md: flexValue },
                height: { xs: "60vh", md: "100%" },
                transition: "flex 0.6s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
                position: "relative",
                cursor: "pointer",
                overflow: "hidden",
                borderTop: { xs: idx !== 0 ? "1px solid rgba(255,255,255,0.3)" : "none", md: "none" },
                borderLeft: { md: idx !== 0 ? "1px solid rgba(255,255,255,0.3)" : "none" },
              }}
            >
              {/* Background */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${f.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "all 0.6s ease",
                  filter:
                    hovered === f.id
                      ? "brightness(0.9)"
                      : "brightness(0.4) grayscale(40%)",
                  transform: hovered === f.id ? "scale(1.05)" : "scale(1)",
                }}
              />
              {/* Overlay text */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  p: { xs: 3, md: 4 },
                  bgcolor: "rgba(0,0,0,0.35)",
                  borderRadius: 2,
                  mx: { xs: 2, md: 0 },
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{
                    mb: 2,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
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
                    px: { xs: 2, md: 3 },
                    py: { xs: 0.8, md: 1 },
                    fontSize: { xs: "0.8rem", md: "1rem" },
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
