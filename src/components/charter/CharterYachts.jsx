// src/components/charter/CharterYachts.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import yachtsData from "../../data/yachts.json";

export default function CharterYachts() {
  const yachts = yachtsData.filter((y) => y.status === "for-charter");
  const [visible, setVisible] = useState(3);

  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 10, md: 14 },
        backgroundColor: "#F7F7F7",
      }}
    >
      {/* Header */}
      <Box textAlign="center" mb={8}>
        <Typography
          variant="overline"
          sx={{
            color: "#80131F",
            letterSpacing: 2,
            mb: 1,
            fontWeight: 600,
            fontSize: "0.85rem",
          }}
        >
          Find Your Perfect Charter
        </Typography>
        <Box
          sx={{
            width: 60,
            height: 3,
            backgroundColor: "#80131F",
            mx: "auto",
            my: 2,
            borderRadius: 2,
          }}
        />
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            color: "#141F2F",
            textTransform: "uppercase",
            fontSize: { xs: "1.6rem", md: "2.2rem" },
            letterSpacing: 0.5,
          }}
        >
          Explore the Adriatic & Ionian’s Most Exclusive Charter Yachts
        </Typography>
      </Box>

      {/* Lista e jahteve full-width */}
      <Box sx={{ px: { xs: 2, md: 6 } }}>
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          justifyContent="center"
          sx={{
            maxWidth: "1800px",
            mx: "auto",
          }}
        >
          {yachts.slice(0, visible).map((yacht) => (
            <Grid key={yacht.id} item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  textAlign: "center",
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-6px)" },
                }}
              >
                {/* Foto */}
                <Box
                  component="img"
                  src={yacht.images[0]}
                  alt={yacht.name}
                  sx={{
                    width: "100%",
                    height: { xs: 250, md: 380 },
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Teksti */}
                <Box sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography
                    variant="h6"
                    fontWeight={800}
                    sx={{
                      textTransform: "uppercase",
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                      mb: 0.5,
                      color: "#141F2F",
                    }}
                  >
                    {yacht.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 3,
                      color: "#454545",
                      fontSize: { xs: "0.9rem", md: "0.95rem" },
                    }}
                  >
                    {yacht.model}
                  </Typography>

                  {/* Specifikimet */}
                  <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                    sx={{ mb: 3 }}
                  >
                    <Grid item>
                      <Stack alignItems="center">
                        <Typography sx={{ color: "#D4AF37", fontWeight: 700 }}>
                          {yacht.length_m} m
                        </Typography>
                        <Typography variant="caption">Length</Typography>
                      </Stack>
                    </Grid>
                    <Grid item>
                      <Stack alignItems="center">
                        <Typography sx={{ color: "#D4AF37", fontWeight: 700 }}>
                          {yacht.guests}
                        </Typography>
                        <Typography variant="caption">Guests</Typography>
                      </Stack>
                    </Grid>
                    <Grid item>
                      <Stack alignItems="center">
                        <Typography sx={{ color: "#D4AF37", fontWeight: 700 }}>
                          {yacht.cabins}
                        </Typography>
                        <Typography variant="caption">Cabins</Typography>
                      </Stack>
                    </Grid>
                    {yacht.crew && (
                      <Grid item>
                        <Stack alignItems="center">
                          <Typography sx={{ color: "#D4AF37", fontWeight: 700 }}>
                            {yacht.crew}
                          </Typography>
                          <Typography variant="caption">Crew</Typography>
                        </Stack>
                      </Grid>
                    )}
                  </Grid>

                  {/* Butoni për çmimin */}
                  <Button
                    component={Link}
                    to={`/yacht/${yacht.id}`}
                    fullWidth
                    sx={{
                      backgroundColor: "#F1F1F1",
                      fontWeight: 700,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      py: 1.4,
                      color: "#141F2F",
                      borderRadius: "4px",
                      "&:hover": {
                        backgroundColor: "#e6e6e6",
                      },
                    }}
                  >
                    Starting from{" "}
                    <span
                      style={{
                        marginLeft: "6px",
                        color: "#8B1E2D",
                        fontWeight: 800,
                      }}
                    >
                      {yacht.price}
                    </span>
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Load More */}
      {visible < yachts.length && (
        <Box textAlign="center" mt={10}>
          <Button
            variant="contained"
            onClick={() => setVisible((prev) => prev + 3)}
            sx={{
              backgroundColor: "#141F2F",
              px: 6,
              py: 1.8,
              fontWeight: 600,
              textTransform: "uppercase",
              "&:hover": { backgroundColor: "#8B1E2D" },
            }}
          >
            More Yachts for Charter
          </Button>
        </Box>
      )}
    </Box>
  );
}
