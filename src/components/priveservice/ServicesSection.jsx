import React, { useState } from "react";
import { Box, Typography, Button, Grid, Divider } from "@mui/material";

const services = [
  {
    id: "driver",
    title: "PRIVATE DRIVER TRANSFERS",
    button: "ARRIVE IN STYLE",
    image: "/media/prive/limusine.jpg",
    link: "/private-driver",
  },
  {
    id: "helicopter",
    title: "PRIVATE HELICOPTER RIDE",
    button: "TAKE OFF IN ELEGANCE",
    image: "/media/prive/helicopter.jpg",
    link: "/helicopter",
  },
];

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        height: { xs: "auto", md: "70vh" },
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
        {services.map((s, idx) => {
          let flexValue = 1;
          if (hovered) {
            flexValue = hovered === s.id ? 2 : 0.5;
          }

          return (
            <Grid
              key={s.id}
              item
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
              sx={{
                flex: { xs: "none", md: flexValue },
                height: { xs: "60vh", md: "100%" },
                transition: "flex 0.6s ease",
                display: "flex",
                justifyContent: "flex-end", // shtyn overlay poshtë
                textAlign: "center",
                color: "#fff",
                position: "relative",
                cursor: "pointer",
                overflow: "hidden",
                borderTop: {
                  xs: idx !== 0 ? "1px solid rgba(255,255,255,0.3)" : "none",
                  md: "none",
                },
                borderLeft: {
                  md: idx !== 0 ? "1px solid rgba(255,255,255,0.3)" : "none",
                },
              }}
            >
              {/* Background image */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${s.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "all 0.6s ease",
                  filter:
                    hovered === s.id
                      ? "brightness(0.9)"
                      : "brightness(0.4) grayscale(40%)",
                  transform: hovered === s.id ? "scale(1.05)" : "scale(1)",
                }}
              />

              {/* Overlay content */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  p: { xs: 3, md: 4 },
                  bgcolor: "rgba(0,0,0,0.35)",
                  borderRadius: 2,
                  mx: { xs: 2, md: 0 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end", // përmbajtja poshtë
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight={700}
                  gutterBottom
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  {s.title}
                </Typography>
                <Divider
                  sx={{ bgcolor: "#8B1E2D", width: 60, mx: "auto", mb: 2 }}
                />
                <Button
                  href={s.link}
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
                  {s.button}
                </Button>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
