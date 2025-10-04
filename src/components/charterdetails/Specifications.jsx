// src/components/charterdetails/Specifications.jsx
import React from "react";
import { Box, Typography, Container, Grid, Divider, List, ListItem } from "@mui/material";

export default function Specifications({ yacht }) {
  if (!yacht?.specifications) return null;

  const { general, performance, guest_capacity, accommodation, outdoor_amenities, crew_services, highlights } = yacht.specifications;

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f2f2f2" }}>
      <Container maxWidth="lg">
        {/* Titulli */}
        <Box textAlign="center" mb={5}>
          <Typography variant="overline" sx={{ color: "#8B1E2D", letterSpacing: 2 }}>
            SPECIFICATIONS
          </Typography>
          <Typography variant="h4" fontWeight={700} sx={{ color: "#0d1b2a", mt: 1 }}>
            {yacht.name} {yacht.model}
          </Typography>
          <Divider
            sx={{ width: 60, height: 2, bgcolor: "#8B1E2D", mx: "auto", my: 2 }}
          />
        </Box>

        {/* Seksionet */}
        <Grid container spacing={6}>
          {/* General */}
          {general && (
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight={700} gutterBottom>General</Typography>
              {Object.entries(general).map(([k, v]) => (
                <Typography key={k} variant="body2" sx={{ mb: 1 }}>
                  <strong>{k}:</strong> {v}
                </Typography>
              ))}
            </Grid>
          )}

          {/* Performance */}
          {performance && (
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight={700} gutterBottom>Performance</Typography>
              {Object.entries(performance).map(([k, v]) => (
                <Typography key={k} variant="body2" sx={{ mb: 1 }}>
                  <strong>{k}:</strong> {v}
                </Typography>
              ))}
            </Grid>
          )}

          {/* Guest Capacity */}
          {guest_capacity && (
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight={700} gutterBottom>Guest Capacity</Typography>
              {Object.entries(guest_capacity).map(([k, v]) => (
                <Typography key={k} variant="body2" sx={{ mb: 1 }}>
                  <strong>{k}:</strong> {v}
                </Typography>
              ))}
            </Grid>
          )}

          {/* Accommodation */}
          {accommodation && (
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight={700} gutterBottom>Accommodation</Typography>
              {Object.entries(accommodation).map(([k, v]) => (
                <Typography key={k} variant="body2" sx={{ mb: 1 }}>
                  <strong>{k}:</strong> {v}
                </Typography>
              ))}
            </Grid>
          )}

          {/* Outdoor Amenities */}
          {outdoor_amenities && (
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight={700} gutterBottom>Outdoor Amenities</Typography>
              {Object.entries(outdoor_amenities).map(([k, v]) => (
                <Typography key={k} variant="body2" sx={{ mb: 1 }}>
                  <strong>{k}:</strong> {v}
                </Typography>
              ))}
            </Grid>
          )}

          {/* Crew & Services */}
          {crew_services && (
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight={700} gutterBottom>Crew & Services</Typography>
              {Object.entries(crew_services).map(([k, v]) => (
                <Typography key={k} variant="body2" sx={{ mb: 1 }}>
                  <strong>{k}:</strong> {v}
                </Typography>
              ))}
            </Grid>
          )}
        </Grid>

                {/* Highlights (style si në foto) */}
        {highlights?.length > 0 && (
          <Box mt={8} sx={{ backgroundColor: "#f2f2f2", borderRadius: 2, py: 4 }}>
            <Box textAlign="center">
              <Typography
                variant="overline"
                sx={{ letterSpacing: 1, color: "#0d1b2a" }}
              >
                KEY HIGHLIGHTS
              </Typography>

              {/* vija e artë nën titull */}
              <Box
                sx={{
                  width: 180,
                  height: 2,
                  bgcolor: "#d4af37",
                  mx: "auto",
                  mt: 1,
                  mb: 2,
                }}
              />

              {/* lista në një rresht me ndarës '•' */}
              <Typography variant="body2" color="text.secondary">
                {highlights.join(" • ")}
              </Typography>
            </Box>
          </Box>
        )}

      </Container>
    </Box>
  );
}
