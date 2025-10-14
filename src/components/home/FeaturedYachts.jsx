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
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 5, md: 8 }, // 🔹 më kompakt
        backgroundColor: "#FFFFFF",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
        borderTop: "1px solid rgba(0,0,0,0.08)",
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
          width: "150px",
          height: "2px",
          backgroundColor: "#80131F",
          mx: "auto",
          mb: { xs: 5, md: 7 },
        }}
      />

      {/* Kartat */}
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        alignItems="stretch"
        sx={{
          px: 0,
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
                boxShadow: "0 3px 8px rgba(0, 0, 0, 0.08)",
                transition: "transform 0.4s ease",
                "&:hover": { transform: "scale(1.01)" },
              }}
            >
              {/* Foto e jahtit - plotësisht e paprërë */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  backgroundColor: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={y.images[0]}
                  alt={y.name}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: { xs: 260, sm: 340, md: 400, lg: 440 }, // 🔹 pak më e vogël
                    objectFit: "contain", // ✅ mos pritet asnjëherë
                    backgroundColor: "#fff",
                    transition: "transform 0.6s ease",
                  }}
                />
              </Box>

              {/* Përmbajtja e kartës */}
              <Box sx={{ py: 3, px: { xs: 2, sm: 3, md: 4 } }}>
                {/* Emri */}
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.7rem" },
                    color: "#141F2F",
                    textTransform: "uppercase",
                    mb: 0.8,
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
                    mb: 1,
                  }}
                />

                {/* Modeli */}
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem" },
                    color: "#454545",
                    textTransform: "uppercase",
                    mb: 2,
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
                        py: 0.8,
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#D4AF37",
                          fontSize: { xs: "0.95rem", sm: "1.05rem" },
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
      <Box sx={{ mt: { xs: 6, md: 8 } }}>
        <Button
          component={Link}
          to="/yachts-for-charter"
          variant="contained"
          sx={{
            bgcolor: "#141F2F",
            color: "#FFFFFF",
            px: { xs: 4, md: 6 },
            py: { xs: 1.2, md: 1.5 },
            fontWeight: 600,
            fontSize: { xs: "1rem", md: "1.05rem" },
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
