// src/components/sections/HiddenRiviera.jsx
import React from "react";
import { Box, Typography, Grid, Button, Stack } from "@mui/material";
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
        bgcolor: "#0d1b2a",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 2,
          p: { xs: 3, md: 6 },
          maxWidth: "1200px",
          width: "100%",
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
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
              variant="h5"
              fontWeight={800}
              sx={{
                mb: 2,
                color: "black",
                fontSize: { xs: "1.4rem", md: "1.8rem" },
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
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              From the turquoise waters of Saranda to the dramatic cliffs of
              Himarë, Aura Voyage transforms Albania’s untouched coastline into
              a stage for unforgettable experiences. Our yachts aren’t just
              vessels — they’re floating sanctuaries of elegance, where every
              journey is curated to perfection.
            </Typography>

            {/* Ikonat */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              sx={{ mb: 3, textAlign: { xs: "center", sm: "left" } }}
            >
              <Box>
                <StarIcon sx={{ color: "#d4a017", fontSize: 32 }} />
                <Typography fontWeight={600}>Pristine Destinations</Typography>
                <Typography variant="body2" color="text.secondary">
                  Unspoiled coves & secret anchors of the Albanian Riviera
                </Typography>
              </Box>
              <Box>
                <DiamondIcon sx={{ color: "#d4a017", fontSize: 32 }} />
                <Typography fontWeight={600}>Luxury Fleet</Typography>
                <Typography variant="body2" color="text.secondary">
                  Handpicked yachts with design, comfort & performance
                </Typography>
              </Box>
              <Box>
                <EmojiEventsIcon sx={{ color: "#d4a017", fontSize: 32 }} />
                <Typography fontWeight={600}>Royal Services</Typography>
                <Typography variant="body2" color="text.secondary">
                  Handpicked yachts with design, comfort & performance
                </Typography>
              </Box>
            </Stack>

            {/* Butonat */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#0d1b2a",
                  color: "#fff",
                  px: 3,
                  "&:hover": { bgcolor: "#16324f" },
                }}
              >
                MORE ABOUT US
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#0d1b2a",
                  color: "#0d1b2a",
                  px: 3,
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
              src="/media/yacht-riviera.jpg"
              alt="Riviera Yacht"
              sx={{
                width: "100%",
                maxHeight: { xs: 280, md: 400 },
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
