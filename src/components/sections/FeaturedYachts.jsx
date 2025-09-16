import React from "react";
import { Box, Container, Grid, Typography, Button, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import yachts from "../../data/yachts.json";
import YachtCard from "../YachtCard";

export default function FeaturedYachts() {
  const [tab, setTab] = React.useState("buy");

  const sale = yachts.filter((y) => y.status === "for-sale").slice(0, 6);
  const charter = yachts.filter((y) => y.status === "for-charter").slice(0, 6);

  const items = tab === "buy" ? sale : charter;
  const viewAllLink = tab === "buy" ? "/yachts-for-sale" : "/yachts-for-charter";

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: (t) =>
          t.palette.mode === "light" ? "#f8fafc" : "background.default",
      }}
    >
      <Container>
        {/* Header + Tabs */}
        <Box
          sx={{
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Featured Yachts
          </Typography>
        
        </Box>

        <Grid container spacing={2} justifyContent="center">

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Tabs
              value={tab}
              onChange={(e, v) => setTab(v)}
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="Buy" value="buy" />
              <Tab label="Charter" value="charter" />
            </Tabs>
            <Button component={Link} to={viewAllLink}>
              View all
            </Button>
          </Box>
          </Grid>
        {/* Yachts Grid */}
        <Grid container spacing={2} justifyContent="center">
          {items.map((y) => (
            <Grid key={y.id} item xs={12} sm={6} md={4}>
              <YachtCard yacht={y} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
