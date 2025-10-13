// src/components/sections/FeaturedYachts.jsx
import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import yachts from "../../data/yachts.json";

export default function FeaturedYachts() {
  const charter = yachts.filter((y) => y.status === "for-charter").slice(0, 2);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw", // ✅ full width nga borderi majtas në djathtas
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 8, md: 12 },
        backgroundColor: "#FFFFFF",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Titulli sipër */}
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: { xs: "0.95rem", sm: "1rem" },
          color: "#141F2F",
          letterSpacing: "0.5px",
          mb: 1,
        }}
      >
        YOUR CHOICE
      </Typography>

      {/* Vijë e kuqe poshtë titullit */}
      <Box
        sx={{
          width: "70px",
          height: "2px",
          backgroundColor: "#80131F",
          mx: "auto",
          mb: { xs: 6, md: 8 },
        }}
      />

      {/* Kartat e jahteve */}
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        alignItems="stretch"
        sx={{
          px: 0, // ✅ pa padding anash
          width: "100%",
          margin: 0,
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
              p: 0,
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
                borderRadius: 0,
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.4s ease",
                "&:hover": { transform: "scale(1.02)" },
              }}
            >
              {/* Foto e jahtit */}
              <Box
                component="img"
                src={y.images[0]}
                alt={y.name}
                sx={{
                  width: "100%",
                  height: { xs: 300, sm: 380, md: 480, lg: 560 },
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Përmbajtja e kartës */}
              <Box sx={{ py: 4, px: { xs: 2, sm: 3, md: 5 } }}>
                {/* Emri */}
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "1.3rem", sm: "1.6rem", md: "1.8rem" },
                    color: "#141F2F",
                    textTransform: "uppercase",
                    mb: 1,
                  }}
                >
                  {y.name}
                </Typography>

                {/* Vijë e kuqe midis emrit dhe modelit */}
                <Box
                  sx={{
                    width: "60px",
                    height: "2px",
                    backgroundColor: "#80131F",
                    mx: "auto",
                    mb: 1.5,
                  }}
                />

                {/* Modeli */}
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                    color: "#454545",
                    textTransform: "uppercase",
                    mb: 2.5,
                  }}
                >
                  {y.model}
                </Typography>

                {/* Detajet e jahtit */}
                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  alignItems="center"
                >
                  {[
                    { value: y.length, label: "LENGTH" },
                    { value: y.guests, label: "GUESTS" },
                    { value: y.cabins, label: "CABINS" },
                    { value: y.crew, label: "CREW" },
                  ].map((item, idx) => (
                    <Grid
                      key={idx}
                      item
                      xs={3}
                      sx={{
                        borderRight: idx < 3 ? "1px solid #E5E5E5" : "none",
                        py: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#D4AF37",
                          fontSize: { xs: "1rem", sm: "1.1rem" },
                        }}
                      >
                        {item.value}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 400,
                          color: "#454545",
                          fontSize: { xs: "0.7rem", sm: "0.8rem" },
                          textTransform: "uppercase",
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
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
            bgcolor: "#141F2F",
            color: "#FFFFFF",
            px: { xs: 4, md: 6 },
            py: { xs: 1.4, md: 1.8 },
            fontWeight: 600,
            fontSize: { xs: "1rem", md: "1.1rem" },
            borderRadius: 0,
            letterSpacing: "0.5px",
            "&:hover": { bgcolor: "#0D1623" },
          }}
        >
          MORE YACHTS FOR CHARTER
        </Button>
      </Box>
    </Box>
  );
}
