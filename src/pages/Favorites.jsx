import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useYachtActions } from "../hooks/useYachtActions";
import YachtCard from "../components/YachtCard";

export default function Favorites(){
  const { favorites } = useYachtActions();
  return (
    <Box>
      <Typography variant="h4" sx={{ mb:2 }}>Favorites</Typography>
      <Grid container spacing={2}>
        {favorites.length === 0 ? (
          <Grid item xs={12}><Typography>No favorites yet.</Typography></Grid>
        ) : favorites.map(y => (
          <Grid key={y.id} item xs={12} sm={6} md={4}><YachtCard yacht={y} /></Grid>
        ))}
      </Grid>
    </Box>
  );
}
