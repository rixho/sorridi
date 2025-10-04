// src/components/charter/CharterYachts.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Stack,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom"; // shto Link
import yachtsData from "../../data/yachts.json";

export default function CharterYachts() {
  const yachts = yachtsData.filter((y) => y.status === "for-charter");
  const [visible, setVisible] = useState(3);

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#fff" }}>
      {/* Header */}
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="overline"
            sx={{ color: "#8B1E2D", letterSpacing: 2, mb: 1, fontSize: "0.9rem" }}
          >
            FIND YOUR PERFECT CHARTER
          </Typography>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ color: "#0d1b2a", fontSize: { xs: "1.8rem", md: "2.2rem" } }}
          >
            Explore the Adriatic & Ionian’s Most Exclusive Charter Yachts
          </Typography>
        </Box>
      </Container>

      {/* Full width yachts list */}
      <Box
        sx={{
          width: "100vw",
          position: "relative",
          left: "50%",
          marginLeft: "-50.5vw",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} justifyContent="center">
            {yachts.slice(0, visible).map((yacht) => (
              <Grid key={yacht.id} item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Foto */}
                  <Box
                    component="img"
                    src={yacht.images[0]}
                    alt={yacht.name}
                    sx={{
                      width: "100%",
                      height: 320,
                      objectFit: "cover",
                    }}
                  />

                  {/* Teksti */}
                  <Box sx={{ p: 3, flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      fontWeight={800}
                      sx={{
                        textTransform: "uppercase",
                        fontSize: "1.2rem",
                        mb: 0.5,
                      }}
                    >
                      {yacht.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ mb: 3, color: "text.secondary", fontSize: "0.95rem" }}
                    >
                      {yacht.model}
                    </Typography>

                    {/* Specs */}
                    <Grid container spacing={3} justifyContent="center" mb={3}>
                      <Grid item>
                        <Stack alignItems="center">
                          <Typography sx={{ color: "#d4af37", fontWeight: 700 }}>
                            {yacht.length_m} m
                          </Typography>
                          <Typography variant="caption">Length</Typography>
                        </Stack>
                      </Grid>
                      <Grid item>
                        <Stack alignItems="center">
                          <Typography sx={{ color: "#d4af37", fontWeight: 700 }}>
                            {yacht.guests}
                          </Typography>
                          <Typography variant="caption">Guests</Typography>
                        </Stack>
                      </Grid>
                      <Grid item>
                        <Stack alignItems="center">
                          <Typography sx={{ color: "#d4af37", fontWeight: 700 }}>
                            {yacht.cabins}
                          </Typography>
                          <Typography variant="caption">Cabins</Typography>
                        </Stack>
                      </Grid>
                      {yacht.crew && (
                        <Grid item>
                          <Stack alignItems="center">
                            <Typography sx={{ color: "#d4af37", fontWeight: 700 }}>
                              {yacht.crew}
                            </Typography>
                            <Typography variant="caption">Crew</Typography>
                          </Stack>
                        </Grid>
                      )}
                    </Grid>

                    {/* Price Button -> Link to details */}
                    <Button
                      component={Link}
                      to={`/yacht/${yacht.id}`} // 👉 shkon tek faqja e detajeve
                      fullWidth
                      sx={{
                        backgroundColor: "#f2f2f2",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        py: 1.3,
                        color: "#000",
                      }}
                    >
                      Starting from{" "}
                      <span style={{ marginLeft: "5px", color: "#8B1E2D" }}>
                        {yacht.price}
                      </span>
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Load More */}
      {visible < yachts.length && (
        <Box textAlign="center" mt={6}>
          <Button
            variant="contained"
            onClick={() => setVisible((prev) => prev + 3)}
            sx={{
              backgroundColor: "#0d1b2a",
              px: 5,
              py: 1.6,
              fontWeight: 600,
              textTransform: "uppercase",
              "&:hover": { backgroundColor: "#132f4c" },
            }}
          >
            More Yachts for Charter
          </Button>
        </Box>
      )}
    </Box>
  );
}
