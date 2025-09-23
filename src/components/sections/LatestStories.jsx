// src/components/sections/LatestStories.jsx
import React from "react";
import { Box, Typography, Divider, Grid, Card, CardMedia, CardContent } from "@mui/material";

const stories = [
  {
    id: 1,
    title: "Sailing the Untouched Albanian Riviera",
    date: "15 August 2025",
    image: "/media/stories/1.jpg",
  },
  {
    id: 2,
    title: "A Gastronomic Journey at Sea",
    date: "15 August 2025",
    image: "/media/stories/2.jpg",
  },
  {
    id: 3,
    title: "Romance on the Riviera",
    date: "15 August 2025",
    image: "/media/stories/3.jpg",
  },
];

export default function LatestStories() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 8, md: 12 },
        bgcolor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      {/* Header */}
      <Typography
        variant="overline"
        sx={{ letterSpacing: 2, fontWeight: 600 }}
      >
        LATEST STORIES
      </Typography>
      <Divider
        sx={{
          width: 80,
          mx: "auto",
          borderBottomWidth: 2,
          borderColor: "#d4a017",
          my: 4,
        }}
      />

      {/* Stories Grid */}
      <Grid container spacing={4} justifyContent="center" sx={{ px: { xs: 2, md: 8 } }}>
        {stories.map((story) => (
          <Grid item xs={12} sm={6} md={4} key={story.id}>
            <Card
              sx={{
                height: "100%",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px) scale(1.02)",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <CardMedia
                component="img"
                image={story.image}
                alt={story.title}
                sx={{ height: 220 }}
              />
              <CardContent sx={{ textAlign: "left" }}>
                <Typography
                  variant="caption"
                  sx={{ color: "text.secondary", display: "block", mb: 1 }}
                >
                  {story.date}
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={700}
                  sx={{ textTransform: "uppercase", lineHeight: 1.4 }}
                >
                  {story.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
