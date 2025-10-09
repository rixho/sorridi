// src/components/sections/HiddenRiviera.jsx
import React from "react";
import { Box, Typography, Grid, Button, Stack, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import DiamondIcon from "@mui/icons-material/Diamond";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function HiddenRiviera() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        bgcolor: "#141F2F",
        py: { xs: 6, md: 8 }, // më i vogël që të mos dalë jashtë
        px: { xs: 2, md: 3 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 2,
          p: { xs: 3, md: 5 }, // zvogëluar
          width: "92%",
          maxWidth: "1400px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          flexDirection={{ xs: "column", md: "row" }}
        >
          {/* Teksti Majtas */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight={800}
              sx={{
                mb: 2,
                color: "black",
                fontSize: { xs: "1.4rem", md: "1.9rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              ALBANIA'S HIDDEN RIVIERA{" "}
              <span style={{ color: "#d4a017" }}>IN STYLE</span>
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 3,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.7,
              }}
            >
              From the turquoise waters of Saranda to the dramatic cliffs of
              Himarë, Aura Voyage transforms Albania’s untouched coastline into
              a stage for unforgettable experiences. Our yachts aren’t just
              vessels — they’re floating sanctuaries of elegance, where every
              journey is curated to perfection.
            </Typography>

            {/* Ikonat në formë karte */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 3, textAlign: "center" }}
            >
              <Paper elevation={2} sx={{ p: 2, flex: 1, borderRadius: 2 }}>
                <StarIcon sx={{ color: "#d4a017", fontSize: 30 }} />
                <Typography fontWeight={600} mt={1}>
                  Pristine Destinations
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Unspoiled coves & secret anchors of the Albanian Riviera
                </Typography>
              </Paper>

              <Paper elevation={2} sx={{ p: 2, flex: 1, borderRadius: 2 }}>
                <DiamondIcon sx={{ color: "#d4a017", fontSize: 30 }} />
                <Typography fontWeight={600} mt={1}>
                  Luxury Fleet
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Handpicked yachts with design, comfort & performance
                </Typography>
              </Paper>

              <Paper elevation={2} sx={{ p: 2, flex: 1, borderRadius: 2 }}>
                <EmojiEventsIcon sx={{ color: "#d4a017", fontSize: 30 }} />
                <Typography fontWeight={600} mt={1}>
                  Royal Services
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Handpicked yachts with design, comfort & performance
                </Typography>
              </Paper>
            </Stack>

            {/* Butonat */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Button
                component={Link}
                to="/about"
                variant="contained"
                sx={{
                  bgcolor: "#0d1b2a",
                  color: "#fff",
                  px: 3,
                  fontWeight: 600,
                  "&:hover": { bgcolor: "#16324f" },
                }}
              >
                MORE ABOUT US
              </Button>
              <Button
                component={Link}
                to="/destinations"
                variant="outlined"
                sx={{
                  borderColor: "#0d1b2a",
                  color: "#0d1b2a",
                  px: 3,
                  fontWeight: 600,
                  "&:hover": { bgcolor: "#0d1b2a", color: "#fff" },
                }}
              >
                EXPLORE DESTINATIONS
              </Button>
            </Stack>
          </Grid>

          {/* Foto Djathas */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/test/05.jpeg"
              alt="Riviera Yacht"
              sx={{
                width: "100%",
                maxHeight: { xs: 250, md: 380 }, // kufizim që të mos e zmadhojë seksionin
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
