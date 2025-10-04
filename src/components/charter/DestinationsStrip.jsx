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
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    zIndex: 2,
    textAlign: "center",
  }}
>
  {/* Titulli */}
  <Typography
    variant="h6"
    fontWeight={700}
    sx={{
      textTransform: "uppercase",
      letterSpacing: 1,
      fontSize: { xs: "1rem", md: "1.3rem" },
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
      py: { xs: 0.8, md: 1 },
      fontSize: { xs: "0.8rem", md: "0.9rem" },
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
