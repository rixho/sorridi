// src/components/destinationdetails/LocationsList.jsx
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

export default function LocationsList({ locations = [], itineraryTitle }) {
  if (!locations.length) return null;

  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50vw",
        py: { xs: 6, md: 10 },
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Header */}
      <Box textAlign="center" mb={8}>
        <Typography
          variant="overline"
          sx={{ color: "#8B1E2D", letterSpacing: 2 }}
        >
          WANT TO SEE
        </Typography>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ mb: 1, color: "#0d1b2a", textTransform: "uppercase" }}
        >
          {itineraryTitle} – Sail into Albania’s Wild Blue
        </Typography>
      </Box>

      {/* Rendero lokacionet */}
      {locations.map((loc, index) => (
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{
            mb: 10,
            px: { xs: 2, md: 10 }, // më shumë hapësirë majtas/djathtas
          }}
          key={loc.id}
          direction={index % 2 === 0 ? "row" : "row-reverse"}
        >
          {/* Foto */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={loc.image}
              alt={loc.title}
              sx={{
                width: "100%",
                height: { xs: 250, md: 400 },
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
              }}
            />
          </Grid>

          {/* Teksti */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              {loc.title}
            </Typography>

            {/* Shfaqim paragrafët e plotë */}
            {loc.text.split("\n").map((para, i) => (
              <Typography
                key={i}
                variant="body1"
                color="text.secondary"
                sx={{ mb: 2, fontSize: "1.05rem", lineHeight: 1.8 }}
              >
                {para}
              </Typography>
            ))}

            <Typography
              variant="caption"
              sx={{ color: "#8B1E2D", display: "block", mb: 2 }}
            >
              {loc.options}
            </Typography>

            <Button
              variant="contained"
              sx={{
                bgcolor: "#0d1b2a",
                "&:hover": { bgcolor: "#8B1E2D" },
                fontWeight: 600,
              }}
            >
              Plan Your Trip
            </Button>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}
