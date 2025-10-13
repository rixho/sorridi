// src/components/sections/DestinationsStrip.jsx
import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const features = [
  {
    id: "luxury",
    title: "Luxury Transfers",
    button: "BOOK YOUR TRANSFER",
    link: "/luxury-transfers",
    image: "/media/suncoco/2.jpg",
  },
  {
    id: "events",
    title: "Special Events",
    button: "PLAN YOUR EVENT",
    link: "/special-events",
    image: "/media/suncoco/1.jpg",
  },
  {
    id: "watersports",
    title: "Water Sports",
    button: "START YOUR ADVENTURE",
    link: "/water-sports",
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
        height: { xs: "auto", md: "90vh" }, // më e madhe për desktop
        overflow: "hidden",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
          height: "100%",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {features.map((f, idx) => {
          const flexValue = hovered
            ? hovered === f.id
              ? 2.2
              : 0.6
            : 1; // efekt smooth kur një kolonë është hover

          return (
            <Grid
              key={f.id}
              item
              onMouseEnter={() => setHovered(f.id)}
              onMouseLeave={() => setHovered(null)}
              sx={{
                flex: { xs: "none", md: flexValue },
                height: { xs: "65vh", sm: "70vh", md: "100%" },
                transition: "flex 0.7s ease",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                cursor: "pointer",
                overflow: "hidden",
                borderLeft: {
                  md: idx !== 0 ? "1px solid rgba(255,255,255,0.3)" : "none",
                },
                borderTop: {
                  xs: idx !== 0 ? "1px solid rgba(255,255,255,0.3)" : "none",
                  md: "none",
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
                  transition: "all 0.6s ease",
                  filter:
                    hovered === f.id
                      ? "brightness(0.9)"
                      : "brightness(0.45) grayscale(30%)",
                  transform: hovered === f.id ? "scale(1.07)" : "scale(1)",
                }}
              />

              {/* Overlay tekst + buton */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: 30, md: 50 },
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  color: "#fff",
                  px: 2,
                  zIndex: 2,
                }}
              >
                {/* Titulli */}
                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: 1.5,
                    fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.6rem" },
                    mb: 1,
                  }}
                >
                  {f.title}
                </Typography>

                {/* Vijë e kuqe */}
                <Box
                  sx={{
                    width: "70px",
                    height: 2,
                    bgcolor: "#8B1E2D",
                    mx: "auto",
                    mb: 2,
                  }}
                />

                {/* Butoni */}
                <Button
                  component={Link}
                  to={f.link}
                  variant="outlined"
                  sx={{
                    borderColor: "#fff",
                    color: "#FFD700",
                    fontWeight: 600,
                    px: { xs: 2, md: 3 },
                    py: { xs: 0.8, md: 1.1 },
                    fontSize: { xs: "0.8rem", md: "0.95rem" },
                    letterSpacing: 0.8,
                    "&:hover": {
                      bgcolor: "#fff",
                      color: "#000",
                    },
                  }}
                >
                  {f.button}
                </Button>
              </Box>

              {/* Overlay gradient për kontrast */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.6) 100%)",
                  zIndex: 1,
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
