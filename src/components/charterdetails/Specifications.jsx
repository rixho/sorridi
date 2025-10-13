// src/components/charterdetails/Specifications.jsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Divider,
} from "@mui/material";

export default function Specifications({ yacht }) {
  if (!yacht?.specifications) return null;

  const {
    general,
    performance,
    guest_capacity,
    accommodation,
    outdoor_amenities,
    crew_services,
    highlights,
  } = yacht.specifications;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        backgroundColor: "#f8f8f8",
        py: { xs: 8, md: 12 },
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 8, md: 10 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              color: "#141F2F",
              textTransform: "uppercase",
              letterSpacing: 0.5,
              mb: 1,
            }}
          >
            SPECIFICATIONS :
            <span style={{ color: "#d4af37" }}>
              {" "}
              {yacht.name} {yacht.model}
            </span>
          </Typography>
        </Box>

        {/* Sections */}
        <Grid container spacing={{ xs: 6, md: 10 }}>
          {/* GENERAL */}
          {general && (
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{
                  color: "#0d1b2a",
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}
              >
                General
              </Typography>
              <Divider
                sx={{
                  width: "100%",
                  bgcolor: "#8B1E2D",
                  height: 2,
                  mt: 0.6,
                  mb: 2.2,
                }}
              />
              {Object.entries(general).map(([k, v]) => (
                <Typography
                  key={k}
                  variant="body1"
                  sx={{
                    mb: 1.5,
                    color: "#333",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: { xs: "1rem", md: "1.05rem" },
                  }}
                >
                  <strong style={{ fontWeight: 600 }}>{k}</strong>
                  <span style={{ textAlign: "right" }}>{v}</span>
                </Typography>
              ))}
            </Grid>
          )}

          {/* PERFORMANCE */}
          {performance && (
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{
                  color: "#0d1b2a",
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}
              >
                Performance
              </Typography>
              <Divider
                sx={{
                  width: "100%",
                  bgcolor: "#8B1E2D",
                  height: 2,
                  mt: 0.6,
                  mb: 2.2,
                }}
              />
              {Object.entries(performance).map(([k, v]) => (
                <Typography
                  key={k}
                  variant="body1"
                  sx={{
                    mb: 1.5,
                    color: "#333",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: { xs: "1rem", md: "1.05rem" },
                  }}
                >
                  <strong style={{ fontWeight: 600 }}>{k}</strong>
                  <span>{v}</span>
                </Typography>
              ))}
            </Grid>
          )}

          {/* GUEST CAPACITY */}
          {guest_capacity && (
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{
                  color: "#0d1b2a",
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}
              >
                Guest Capacity
              </Typography>
              <Divider
                sx={{
                  width: "100%",
                  bgcolor: "#8B1E2D",
                  height: 2,
                  mt: 0.6,
                  mb: 2.2,
                }}
              />
              {Object.entries(guest_capacity).map(([k, v]) => (
                <Typography
                  key={k}
                  variant="body1"
                  sx={{
                    mb: 1.5,
                    color: "#333",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: { xs: "1rem", md: "1.05rem" },
                  }}
                >
                  <strong style={{ fontWeight: 600 }}>{k}</strong>
                  <span>{v}</span>
                </Typography>
              ))}
            </Grid>
          )}

          {/* ACCOMMODATION */}
          {accommodation && (
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{
                  color: "#0d1b2a",
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}
              >
                Accommodation
              </Typography>
              <Divider
                sx={{
                  width: "100%",
                  bgcolor: "#8B1E2D",
                  height: 2,
                  mt: 0.6,
                  mb: 2.2,
                }}
              />
              {Object.entries(accommodation).map(([k, v]) => (
                <Typography
                  key={k}
                  variant="body1"
                  sx={{
                    mb: 1.5,
                    color: "#333",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: { xs: "1rem", md: "1.05rem" },
                  }}
                >
                  <strong style={{ fontWeight: 600 }}>{k}</strong>
                  <span>{v}</span>
                </Typography>
              ))}
            </Grid>
          )}

          {/* OUTDOOR AMENITIES */}
          {outdoor_amenities && (
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{
                  color: "#0d1b2a",
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}
              >
                Outdoor Amenities
              </Typography>
              <Divider
                sx={{
                  width: "100%",
                  bgcolor: "#8B1E2D",
                  height: 2,
                  mt: 0.6,
                  mb: 2.2,
                }}
              />
              {Object.entries(outdoor_amenities).map(([k, v]) => (
                <Typography
                  key={k}
                  variant="body1"
                  sx={{
                    mb: 1.5,
                    color: "#333",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: { xs: "1rem", md: "1.05rem" },
                  }}
                >
                  <strong style={{ fontWeight: 600 }}>{k}</strong>
                  <span>{v}</span>
                </Typography>
              ))}
            </Grid>
          )}

          {/* CREW & SERVICES */}
          {crew_services && (
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{
                  color: "#0d1b2a",
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}
              >
                Crew & Services
              </Typography>
              <Divider
                sx={{
                  width: "100%",
                  bgcolor: "#8B1E2D",
                  height: 2,
                  mt: 0.6,
                  mb: 2.2,
                }}
              />
              {Object.entries(crew_services).map(([k, v]) => (
                <Typography
                  key={k}
                  variant="body1"
                  sx={{
                    mb: 1.5,
                    color: "#333",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: { xs: "1rem", md: "1.05rem" },
                  }}
                >
                  <strong style={{ fontWeight: 600 }}>{k}</strong>
                  <span>{v}</span>
                </Typography>
              ))}
            </Grid>
          )}
        </Grid>

        {/* Highlights */}
        {highlights?.length > 0 && (
          <Box textAlign="center" mt={{ xs: 8, md: 10 }}>
         
            <Typography
              variant="overline"
              sx={{
                color: "#0d1b2a",
                fontWeight: 600,
                letterSpacing: 1,
              }}
            >
              KEY HIGHLIGHTS
            </Typography>
            
            <Divider
              sx={{
                width: 160,
                height: 2,
                bgcolor: "#d4af37",
                mx: "auto",
                mb: 2.2,
              }}
            />
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                color: "#444",
                fontSize: { xs: "0.95rem", md: "1rem" },
                maxWidth: "900px",
                mx: "auto",
              }}
            >
              {highlights.join(" • ")}
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
