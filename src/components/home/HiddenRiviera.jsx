// src/components/sections/HiddenRiviera.jsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Stack,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import StarIcon from "@mui/icons-material/Star";
import DiamondIcon from "@mui/icons-material/Diamond";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function HiddenRiviera() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        bgcolor: "#141F2F",
        py: { xs: 4, sm: 6, md: 8 }, // ✅ e njëjtë lart dhe poshtë
        px: { xs: 2, sm: 3, md: 4 }, // ✅ e njëjtë anash
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          borderRadius: 0, // ✅ cepa të drejtë
          p: { xs: 3, sm: 5, md: 8 },
          width: "94%", // ✅ pak më e ngushtë që të ketë të njëjtën hapësirë blu
          maxWidth: "1400px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        }}
      >
        <Grid
          container
          spacing={5}
          alignItems="center"
          flexDirection={{
            xs: "column",
            md: "row",
          }}
        >
          {/* Foto djathtas në desktop */}
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box
              component="img"
              src="/test/05.jpeg"
              alt="Riviera Yacht"
              sx={{
                width: "100%",
                height: { xs: 250, sm: 320, md: 460 },
                objectFit: "cover",
                borderRadius: 0,
              }}
            />
          </Grid>

          {/* Teksti majtas */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            {/* Titulli */}
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: { xs: "1.8rem", sm: "2rem", md: "2.4rem" },
                color: "#131E2D",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                mb: 1,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              ALBANIA'S HIDDEN RIVIERA
            </Typography>

            {/* Nën-titulli */}
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.6rem" },
                color: "#D4AF37",
                letterSpacing: "-0.02em",
                mb: 3,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              IN STYLE
            </Typography>

            {/* Paragrafi */}
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
                color: "#454545",
                lineHeight: 1.8,
                textAlign: { xs: "center", md: "left" },
                mb: 4,
              }}
            >
              From the turquoise waters of Saranda to the dramatic cliffs of
              Himarë, Aura Voyage transforms Albania’s untouched coastline into
              a stage for unforgettable experiences. Our yachts aren’t just
              vessels — they’re floating sanctuaries of elegance, where every
              journey is curated to perfection.
            </Typography>

            {/* 3 Box-at */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              sx={{
                mb: 4,
                textAlign: "center",
                alignItems: "stretch",
              }}
            >
              {[
                {
                  icon: <StarIcon sx={{ color: "#D4AF37", fontSize: 34 }} />,
                  title: "Pristine Destinations",
                  text: "Unexplored coves & secret anchorages of the Albanian Riviera",
                },
                {
                  icon: <DiamondIcon sx={{ color: "#D4AF37", fontSize: 34 }} />,
                  title: "Luxury Fleet",
                  text: "Handpicked yachts with design, comfort & performance at the highest level",
                },
                {
                  icon: (
                    <EmojiEventsIcon sx={{ color: "#D4AF37", fontSize: 34 }} />
                  ),
                  title: "Royal Services",
                  text: "World-class service with attention to every detail",
                },
              ].map((item, index) => (
                <Paper
                  key={index}
                  elevation={3}
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    flex: 1,
                    minHeight: { xs: "auto", sm: 200, md: 220 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    borderRadius: 2,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  {item.icon}
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "#131E2D",
                      mt: 1,
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      color: "#454545",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.text}
                  </Typography>
                </Paper>
              ))}
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
                  bgcolor: "#0D1B2A",
                  color: "#FFFFFF",
                  px: 4,
                  py: 1.2,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderRadius: "25px",
                  "&:hover": { bgcolor: "#16324F" },
                }}
              >
                MORE ABOUT US
              </Button>
              <Button
                component={Link}
                to="/destinations"
                variant="outlined"
                sx={{
                  borderColor: "#0D1B2A",
                  color: "#0D1B2A",
                  px: 4,
                  py: 1.2,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderRadius: "25px",
                  "&:hover": { bgcolor: "#0D1B2A", color: "#FFFFFF" },
                }}
              >
                EXPLORE DESTINATIONS
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
