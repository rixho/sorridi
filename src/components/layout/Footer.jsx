import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import NewsletterForm from "../NewsletterForm";

export default function Footer(){
  return (
    <Box component="footer" sx={{ py: 6, borderTop: (t)=>`1px solid ${t.palette.divider}` }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Sorridi Yachts</Typography>
            <Typography variant="body2">Luxury Yacht Sales • Charter • Management</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" align="right">
              © {new Date().getFullYear()} Sorridi. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt:2 }}><NewsletterForm /></Box>
        <Typography variant="caption" display="block" sx={{ mt:2 }}>
          Built with React, MUI, i18n, Leaflet.
        </Typography>
      </Container>
    </Box>
  );
}
