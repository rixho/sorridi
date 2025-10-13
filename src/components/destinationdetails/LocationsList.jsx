// src/components/destinationdetails/LocationsList.jsx
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

export default function LocationsList({ locations = [], itineraryTitle }) {
  if (!locations.length) return null;

  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 10, md: 14 },
        backgroundColor: "#F7F7F7",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Header */}
      <Box textAlign="center" mb={10}>
        <Typography
          variant="overline"
          sx={{
            color: "#141F2F",
            letterSpacing: 2,
            textTransform: "uppercase",
            fontWeight: 500,
            mb: 1,
          }}
        >
          What to See
        </Typography>

        <Box
          sx={{
            width: 60,
            height: 3,
            backgroundColor: "#80131F",
            mx: "auto",
            mb: 2,
          }}
        />

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
            color: "#141F2F",
            textTransform: "uppercase",
          }}
        >
          {itineraryTitle} – Sail into Albania’s Wild Blue
        </Typography>
      </Box>

      {/* Lista e lokacioneve */}
      {locations.map((loc, index) => (
        <Grid
          container
          spacing={6}
          alignItems="center"
          sx={{
            mb: { xs: 12, md: 16 },
            px: { xs: 3, md: 10 },
          }}
          key={loc.id}
          direction={index % 2 === 0 ? "row" : "row-reverse"}
        >
          {/* Foto */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={loc.image}
              alt={loc.title}
              sx={{
                width: "100%",
                height: { xs: 360, sm: 440, md: 520 }, // 🖼️ më e madhe që të dalë sipër e poshtë tekstit
                objectFit: "cover",
                borderRadius: "6px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
              }}
            />
          </Grid>

          {/* Teksti */}
          <Grid item xs={12} md={6}>
            <Box sx={{ px: { xs: 1, md: 4 } }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.4rem", md: "1.8rem" },
                  color: "#141F2F",
                  mb: 2,
                  textTransform: "uppercase",
                }}
              >
                {loc.title}
              </Typography>

              {loc.text.split("\n").map((para, i) => (
                <Typography
                  key={i}
                  sx={{
                    mb: 2,
                    color: "#454545",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    lineHeight: 1.9,
                    fontWeight: 400,
                  }}
                >
                  {para}
                </Typography>
              ))}

              <Typography
                sx={{
                  color: "#D4AF37",
                  fontWeight: 600,
                  letterSpacing: 0.4,
                  mb: 3,
                }}
              >
                {loc.options}
              </Typography>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#141F2F",
                  "&:hover": { bgcolor: "#80131F" },
                  px: { xs: 4, md: 5 },
                  py: { xs: 1.3, md: 1.6 },
                  fontWeight: 600,
                  textTransform: "uppercase",
                  borderRadius: 0,
                  boxShadow: "none",
                }}
              >
                Plan Your Trip
              </Button>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}
