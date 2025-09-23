// src/components/layout/Footer.jsx
import React from "react";
import { Box, Grid, Typography, Link, IconButton, Stack } from "@mui/material";
import {
  Facebook,
  Instagram,
  YouTube,
  LocationOn,
  Phone,
  Email,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        bgcolor: "#0d1b2a",
        color: "#fff",
        py: { xs: 6, md: 10 },
        px: { xs: 4, md: 10 },
      }}
    >
      <Grid container spacing={6} justifyContent="space-between">
        {/* Column 1: Logo + Text + Contact */}
        <Grid item xs={12} md={4}>
          <Box sx={{ mb: 2 }}>
            <Box
              component="img"
              src="/media/logo.png"
              alt="Aura Voyage"
              sx={{ height: 60, mb: 2 }}
            />
            <Typography variant="subtitle1" fontWeight={700}>
              AURA VOYAGE
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Albania's premier luxury yacht charter company, offering exclusive
              access to the pristine Albanian Riviera. Experience authentic
              Mediterranean luxury with our expert local crew and world-class
              vessels.
            </Typography>
          </Box>

          <Stack spacing={1}>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
              <LocationOn sx={{ fontSize: 18, mr: 1, color: "#d4a017" }} />
              Saranda Marina, Albanian Riviera, Albania
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
              <Phone sx={{ fontSize: 18, mr: 1, color: "#d4a017" }} />
              +355 69 123 4567
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "center" }}>
              <Email sx={{ fontSize: 18, mr: 1, color: "#d4a017" }} />
              info@auravoyage.com
            </Typography>
          </Stack>

          {/* Social Media */}
          <Box sx={{ mt: 3 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              FIND US ON:
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton color="inherit" size="small">
                <Facebook sx={{ color: "#d4a017" }} />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Instagram sx={{ color: "#d4a017" }} />
              </IconButton>
              <IconButton color="inherit" size="small">
                <YouTube sx={{ color: "#d4a017" }} />
              </IconButton>
            </Stack>
          </Box>
        </Grid>

        {/* Column 2: Quick Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2 }}>
            QUICK LINKS
          </Typography>
          <Stack spacing={1}>
            <Link href="/yachts-for-charter" underline="hover" color="inherit">
              Yachts for Charter
            </Link>
            <Link href="/yachts-for-sale" underline="hover" color="inherit">
              Yachts for Sale
            </Link>
            <Link href="/destinations" underline="hover" color="inherit">
              Destinations
            </Link>
            <Link href="/about" underline="hover" color="inherit">
              About Us
            </Link>
            <Link href="/contact" underline="hover" color="inherit">
              Contact
            </Link>
          </Stack>
        </Grid>

        {/* Column 3: Destinations */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="subtitle1" fontWeight={700} sx={{ mb: 2 }}>
            DESTINATIONS
          </Typography>
          <Stack spacing={1}>
            <Link href="/yachts-for-charter" underline="hover" color="inherit">
              Yachts for Charter
            </Link>
            <Link href="/yachts-for-sale" underline="hover" color="inherit">
              Yachts for Sale
            </Link>
            <Link href="/destinations" underline="hover" color="inherit">
              Destinations
            </Link>
            <Link href="/about" underline="hover" color="inherit">
              About Us
            </Link>
            <Link href="/contact" underline="hover" color="inherit">
              Contact
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
