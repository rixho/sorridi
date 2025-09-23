// src/components/sections/FeaturedYachts.jsx
import React from "react";
import {
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
  Grid,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import yachts from "../../data/yachts.json";
import YachtCard from "../YachtCard";

export default function FeaturedYachts() {
  const [tab, setTab] = React.useState("charter");

  const sale = yachts.filter((y) => y.status === "for-sale").slice(0, 4);
  const charter = yachts.filter((y) => y.status === "for-charter").slice(0, 4);

  const items = tab === "buy" ? sale : charter;
  const viewAllLink =
    tab === "buy" ? "/yachts-for-sale" : "/yachts-for-charter";

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 6, md: 10 },
        backgroundColor: "#fff",
        textAlign: "center",
      }}
    >
      {/* Titulli */}
      <Typography
        variant="h5"
        fontWeight={700}
        gutterBottom
        sx={{
          textTransform: "uppercase",
          letterSpacing: 1,
          fontSize: { xs: "1.5rem", md: "2rem" },
        }}
      >
        Your Choice
      </Typography>
      <Divider
        sx={{
          width: 60,
          mx: "auto",
          borderBottomWidth: 2,
          borderColor: "#d4a017",
          mb: { xs: 4, md: 6 },
        }}
      />

      {/* Tabs */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mb: { xs: 4, md: 6 },
          px: 2,
        }}
      >
        <Tabs
          value={tab}
          onChange={(e, v) => setTab(v)}
          textColor="inherit"
          variant="fullWidth"
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{
            width: { xs: "100%", sm: "auto" },
            "& .MuiTab-root": {
              fontSize: { xs: "0.85rem", sm: "1rem" },
            },
          }}
        >
          <Tab
            value="charter"
            label="YACHTS FOR CHARTER"
            sx={{
              px: { xs: 2, md: 5 },
              border: "1px solid #0d1b2a",
              borderRadius: 0,
              mr: { sm: 1 },
              fontWeight: 600,
              bgcolor: tab === "charter" ? "#0d1b2a" : "transparent",
              color: tab === "charter" ? "#fff" : "#0d1b2a",
              "&:hover": { bgcolor: "#16324f", color: "#fff" },
            }}
          />
          <Tab
            value="buy"
            label="YACHTS FOR SALE"
            sx={{
              px: { xs: 2, md: 5 },
              border: "1px solid #0d1b2a",
              borderRadius: 0,
              fontWeight: 600,
              bgcolor: tab === "buy" ? "#0d1b2a" : "transparent",
              color: tab === "buy" ? "#fff" : "#0d1b2a",
              "&:hover": { bgcolor: "#16324f", color: "#fff" },
            }}
          />
        </Tabs>
      </Box>

      {/* Yachts Grid */}
      <Grid
        container
        spacing={{ xs: 3, md: 6 }}
        justifyContent="center"
        sx={{ px: { xs: 2, md: 12 } }}
      >
        {items.map((y) => (
          <Grid key={y.id} item xs={12} sm={6} md={6}>
            <YachtCard yacht={y} big />
          </Grid>
        ))}
      </Grid>

      {/* Butoni poshtë */}
      <Box sx={{ mt: { xs: 6, md: 8 } }}>
        <Button
          component={Link}
          to={viewAllLink}
          variant="contained"
          sx={{
            bgcolor: "#0d1b2a",
            color: "#fff",
            px: { xs: 3, md: 5 },
            py: { xs: 1.2, md: 1.8 },
            fontWeight: 600,
            "&:hover": { bgcolor: "#16324f" },
          }}
        >
          More Yachts for {tab === "buy" ? "Sale" : "Charter"}
        </Button>
      </Box>
    </Box>
  );
}
