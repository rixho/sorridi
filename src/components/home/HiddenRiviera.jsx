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
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        bgcolor: "#141F2F",
        py: { xs: 8, sm: 10, md: 12 },
        px: { xs: 2, sm: 4, md: 6 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 3,
          p: { xs: 3, sm: 5, md: 7 },
          width: "94%",
          maxWidth: "1400px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          spacing={5}
          alignItems="center"
          flexDirection={{
            xs: "column", // ✅ në mobile, foto sipër
            md: "row", // ✅ në desktop, tekst majtas, foto djathtas
          }}
        >
          {/* Foto sipër në mobile, djathtas në desktop */}
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Box
              component="img"
              src="/test/05.jpeg"
              alt="Riviera Yacht"
              sx={{
                width: "100%",
                height: { xs: 250, sm: 320, md: 480 },
                objectFit: "cover",
                borderRadius: 3,
                boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
              }}
            />
          </Grid>

          {/* Teksti poshtë në mobile, majtas në desktop */}
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Typography
              variant="h3"
              fontWeight={800}
              sx={{
                mb: 3,
                color: "#0d1b2a",
                fontSize: { xs: "1.7rem", sm: "2rem", md: "2.5rem" },
                textAlign: { xs: "center", md: "left" },
                lineHeight: 1.3,
              }}
            >
              ALBANIA'S HIDDEN RIVIERA{" "}
              <Box component="span" sx={{ color: "#d4a017" }}>
                IN STYLE
              </Box>
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                mb: 4,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "1rem", sm: "1.05rem", md: "1.15rem" },
                lineHeight: 1.9,
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
              sx={{
                mb: 4,
                textAlign: "center",
              }}
            >
              {[
                {
                  icon: <StarIcon sx={{ color: "#d4a017", fontSize: 34 }} />,
                  title: "Pristine Destinations",
                  text: "Unspoiled coves & secret anchors of the Albanian Riviera",
                },
                {
                  icon: <DiamondIcon sx={{ color: "#d4a017", fontSize: 34 }} />,
                  title: "Luxury Fleet",
                  text: "Handpicked yachts combining design, comfort & performance",
                },
                {
                  icon: <EmojiEventsIcon sx={{ color: "#d4a017", fontSize: 34 }} />,
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
                    borderRadius: 3,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  {item.icon}
                  <Typography fontWeight={700} mt={1} color="#0d1b2a">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mt: 0.5,
                      lineHeight: 1.6,
                      fontSize: { xs: "0.85rem", sm: "0.9rem" },
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
                  bgcolor: "#0d1b2a",
                  color: "#fff",
                  px: 4,
                  py: 1.2,
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
                  px: 4,
                  py: 1.2,
                  fontWeight: 600,
                  "&:hover": { bgcolor: "#0d1b2a", color: "#fff" },
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
