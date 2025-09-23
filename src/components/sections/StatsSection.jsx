// src/components/sections/StatsSection.jsx
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MapIcon from "@mui/icons-material/Map";
import DiamondIcon from "@mui/icons-material/Diamond";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PublicIcon from "@mui/icons-material/Public";

const stats = [
  {
    icon: <StarOutlineIcon sx={{ fontSize: 40, color: "#d4a017" }} />,
    number: "15+",
    label: "EXCLUSIVE YACHTS",
  },
  {
    icon: <CalendarMonthIcon sx={{ fontSize: 40, color: "#d4a017" }} />,
    number: "120+",
    label: "CHARTER DAYS PER SEASON",
  },
  {
    icon: <MapIcon sx={{ fontSize: 40, color: "#d4a017" }} />,
    number: "10+",
    label: "RIVIERA DESTINATIONS",
  },
  {
    icon: <DiamondIcon sx={{ fontSize: 40, color: "#d4a017" }} />,
    number: "10+",
    label: "LUXURY SERVICES",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: "#d4a017" }} />,
    number: "24/7",
    label: "CONCIERGE SERVICE",
  },
  {
    icon: <PublicIcon sx={{ fontSize: 40, color: "#d4a017" }} />,
    number: "1300+",
    label: "TRUSTED BY GLOBAL TRAVELERS",
  },
];

export default function StatsSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 8, md: 12 },
        backgroundColor: "#f5f6f8", // background gri si në foto
        textAlign: "center",
      }}
    >
      {/* Titulli dhe përshkrimi */}
      <Typography
        variant="h5"
        fontWeight={700}
        gutterBottom
        sx={{ textTransform: "uppercase", letterSpacing: 1 }}
      >
        REDEFINING LUXURY YACHTING{" "}
        <span style={{ color: "#d4a017" }}>IN ALBANIA</span>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: "800px",
          mx: "auto",
          mb: 6,
          color: "text.secondary",
        }}
      >
        At Aura Voyage, we blend world-class yachting with the hidden beauty of
        the Albanian Riviera. From handpicked yachts to bespoke services, we
        create unforgettable journeys across one of the Mediterranean’s last
        untouched coastlines.
      </Typography>

      {/* Grid me statistika */}
      <Grid container spacing={6} justifyContent="center">
        {stats.map((s, idx) => (
          <Grid key={idx} item xs={12} sm={6} md={4}>
            <Box>
              {s.icon}
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ mt: 2, mb: 1, color: "#0d1b2a" }}
              >
                {s.number}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {s.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
