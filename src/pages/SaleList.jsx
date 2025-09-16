import React from "react";
import { Grid, Box, Typography, Stack } from "@mui/material";
import yachtsData from "../data/yachts.json";
import YachtCard from "../components/YachtCard";
import SortBar from "../components/Filters/SortBar";

export default function SaleList() {
  const [items, setItems] = React.useState([]);
  const [sort, setSort] = React.useState("newest");

  const applySort = (arr, s) => {
    const a = [...arr];
    switch (s) {
      case "length_desc":
        return a.sort((x, y) => (y.length_m || 0) - (x.length_m || 0));
      case "length_asc":
        return a.sort((x, y) => (x.length_m || 0) - (y.length_m || 0));
      case "year_desc":
        return a.sort((x, y) => (y.year || 0) - (x.year || 0));
      case "year_asc":
        return a.sort((x, y) => (x.year || 0) - (y.year || 0));
      case "price_desc":
        return a.sort((x, y) => (y.price_eur || 0) - (x.price_eur || 0));
      case "price_asc":
        return a.sort((x, y) => (x.price_eur || 0) - (y.price_eur || 0));
      default:
        return a;
    }
  };

  React.useEffect(() => {
    const out = yachtsData.filter((y) => y.status === "for-sale");
    setItems(applySort(out, sort));
  }, [sort]);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Yachts for Sale
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ mb: 1 }}
      >
        <SortBar value={sort} onChange={setSort} />
      </Stack>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {items.map((y) => (
          <Grid key={y.id} item xs={12} sm={6} md={4}>
            <YachtCard yacht={y} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
