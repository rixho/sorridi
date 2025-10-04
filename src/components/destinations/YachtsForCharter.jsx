// src/components/yachts/YachtsForCharter.jsx
import React from "react";
import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import yachts from "../../data/yachts.json";

export default function YachtsForCharter() {
  const charterYachts = yachts.filter((y) => y.status === "for-charter").slice(0, 2);;

  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 8, md: 12 },
        backgroundColor: "#fff",
      }}
    >
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="overline"
          sx={{ color: "#8B1E2D", letterSpacing: 2 }}
        >
          FIND YOUR YACHT
        </Typography>
        <Divider
          sx={{
            width: 60,
            mx: "auto",
            borderBottomWidth: 2,
            borderColor: "#8B1E2D",
            my: 2,
          }}
        />
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ mb: 1, color: "#0d1b2a" }}
        >
          Yachts for Charter
        </Typography>
      </Box>

      {/* Grid Yachts */}
      <Grid
        container
        spacing={6}
        justifyContent="center"
        sx={{ maxWidth: "1200px", mx: "auto" }}
      >
        {charterYachts.map((yacht) => (
          <Grid item xs={12} md={6} key={yacht.id}>
            <Box textAlign="center">
              {/* Foto */}
              <Box
                component="img"
                src={yacht.images[0]}
                alt={yacht.name}
                sx={{
                  width: "100%",
                  height: { xs: 220, md: 320 },
                  objectFit: "cover",
                  borderRadius: "8px",
                  mb: 3,
                }}
              />
              {/* Titulli */}
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{ letterSpacing: 1, color: "#0d1b2a" }}
              >
                {yacht.name}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                {yacht.builder} • {yacht.year}
              </Typography>

              {/* Spec-at */}
              <Grid
                container
                spacing={2}
                justifyContent="center"
                sx={{ maxWidth: "420px", mx: "auto" }}
              >
                <Grid item xs={3} textAlign="center">
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    sx={{ color: "#d4a017" }}
                  >
                    {yacht.length_m} m
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Length
                  </Typography>
                </Grid>
                <Grid item xs={3} textAlign="center">
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    sx={{ color: "#d4a017" }}
                  >
                    {yacht.guests}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Guests
                  </Typography>
                </Grid>
                <Grid item xs={3} textAlign="center">
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    sx={{ color: "#d4a017" }}
                  >
                    {yacht.crew}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Crew
                  </Typography>
                </Grid>
                <Grid item xs={3} textAlign="center">
                  <Typography
                    variant="subtitle1"
                    fontWeight={700}
                    sx={{ color: "#d4a017" }}
                  >
                    {yacht.price}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Price
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Butoni poshtë */}
      <Box textAlign="center" mt={6}>
        <Button
          variant="contained"
          component={Link}
          to="/yachts-for-charter"
          sx={{
            backgroundColor: "#0d1b2a",
            "&:hover": { backgroundColor: "#8B1E2D" },
            color: "#fff",
            px: 4,
            py: 1.5,
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          More Yachts for Charter
        </Button>
      </Box>
    </Box>
  );
}
