// src/components/sections/FeaturedYachts.jsx
import React from "react";
import { Box, Typography, Button, Grid, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import yachts from "../../data/yachts.json";
import YachtCard from "../YachtCard";

export default function FeaturedYachts() {
  const charter = yachts.filter((y) => y.status === "for-charter").slice(0, 2);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 8, md: 12 },
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      {/* Titulli */}
      <Typography
        variant="h4"
        fontWeight={800}
        gutterBottom
        sx={{
          textTransform: "uppercase",
          letterSpacing: 1,
          fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem" },
          color: "#0d1b2a",
        }}
      >
        Yachts for Charter
      </Typography>

      <Divider
        sx={{
          width: 90,
          mx: "auto",
          borderBottomWidth: 3,
          borderColor: "#d4a017",
          mb: { xs: 6, md: 10 },
        }}
      />

      {/* Grid i jahteve */}
      <Grid
        container
        spacing={{ xs: 5, sm: 7, md: 10 }} // 👉 hapësirë midis jahteve
        justifyContent="center"
        alignItems="stretch"
        sx={{
          px: { xs: 2, sm: 4, md: 10 },
          width: "100%",
          maxWidth: "1600px",
          mx: "auto",
        }}
      >
        {charter.map((y) => (
          <Grid
            key={y.id}
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: "500px", md: "680px", lg: "750px" },
                transform: "scale(1.05)",
                transition: "transform 0.4s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <YachtCard
                yacht={y}
                big
                sx={{
                  height: { xs: 420, sm: 520, md: 620, lg: 700 },
                  "& img": {
                    height: { xs: 260, sm: 360, md: 460, lg: 520 },
                    objectFit: "cover !important",
                    width: "100%",
                  },
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Butoni poshtë */}
      <Box sx={{ mt: { xs: 8, md: 10 } }}>
        <Button
          component={Link}
          to="/yachts-for-charter"
          variant="contained"
          sx={{
            bgcolor: "#0d1b2a",
            color: "#fff",
            px: { xs: 4, md: 6 },
            py: { xs: 1.4, md: 1.8 },
            fontWeight: 700,
            fontSize: { xs: "1rem", md: "1.1rem" },
            borderRadius: "8px",
            "&:hover": { bgcolor: "#16324f" },
          }}
        >
          Explore All Yachts
        </Button>
      </Box>
    </Box>
  );
}
