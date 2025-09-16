import React from "react";
import { Box, Container, Typography, Grid, Paper, Divider } from "@mui/material";

export default function AboutUs() {
  return (
    <Box sx={{ py: 8 }}>
      <Container>
        {/* Header */}
        <Typography variant="h3" fontWeight={700} gutterBottom>
          About Sorridi Yachts
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Crafting unforgettable journeys across the world’s seas.
        </Typography>

        {/* Story */}
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Our Story
        </Typography>
        <Typography variant="body1" paragraph>
          Sorridi Yachts was founded with a single mission: to create exceptional yachting
          experiences for clients worldwide. From luxury yacht sales to bespoke charters and
          personalized management services, we combine passion, expertise, and attention to detail
          to make every voyage truly unforgettable.
        </Typography>

        <Divider sx={{ my: 5 }} />

        {/* Key Sections */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: "100%" }} elevation={3}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Global Presence
              </Typography>
              <Typography variant="body2">
                With partners and agents around the world, Sorridi Yachts provides global reach
                with local expertise — wherever your journey takes you.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: "100%" }} elevation={3}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Expertise
              </Typography>
              <Typography variant="body2">
                Our team combines decades of experience in sales, charter, and management with a
                forward-looking approach, ensuring you receive trusted advice and innovative
                solutions.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: "100%" }} elevation={3}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Values
              </Typography>
              <Typography variant="body2">
                Integrity, transparency, and excellence define our work. We are committed to
                providing an exceptional standard of service to every client.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />

        {/* Mission & Vision */}
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Mission & Vision
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to deliver unparalleled yachting services that redefine luxury on the sea.
          Our vision is to remain the trusted partner of choice for yacht owners and charterers,
          known for our professionalism, innovation, and global reach.
        </Typography>
      </Container>
    </Box>
  );
}
