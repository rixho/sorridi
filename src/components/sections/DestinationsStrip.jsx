import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import destinations from "../../data/destinations.json";

export default function DestinationStrip() {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: (t) =>
          t.palette.mode === "light" ? "#fff" : t.palette.background.default,
      }}
    >
      <Container>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography variant="h4" fontWeight={700}>
            Destinations
          </Typography>
          <Button component={Link} to="/destinations">
            View all
          </Button>
        </Box>

        {/* Strip */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            overflowX: "auto",
            pb: 1,
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {destinations.map((d) => (
            <Box
              key={d.id}
              component={Link}
              to={`/destinations/${d.id}`}
              sx={{
                minWidth: 280,
                height: 180,
                borderRadius: 3,
                overflow: "hidden",
                position: "relative",
                flexShrink: 0,
                backgroundImage: `url(${d.heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: 2,
                  background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                }}
              >
                <Typography variant="h6" fontWeight={600}>
                  {d.title}
                </Typography>
                <Typography variant="body2">{d.excerpt}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
