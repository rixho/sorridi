import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';

export default function VideoSpotlight() {
  return (
    <Grid container spacing={2} sx={{ my: 6 }}>
      <Grid item xs={12} md={7}>
        <Paper elevation={3} sx={{ overflow: 'hidden', aspectRatio: '16/9' }}>
          <iframe
            width="100%" height="100%"
            src="https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0"
            title="Sorridi Spotlight Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography variant="overline" color="text.secondary">Sorridi Experiences</Typography>
        <Typography variant="h4" sx={{ mb: 1 }}>Beyond the horizon</Typography>
        <Typography color="text.secondary">
          Immerse yourself in cinematic voyages across the Mediterranean. Our crews deliver
          service beyond expectations with tailored itineraries and award-winning hospitality.
        </Typography>
      </Grid>
    </Grid>
  );
}
