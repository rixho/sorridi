// src/components/charterdetails/Gallery.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Stack,
  Divider,
  Container,
  Fade,
} from "@mui/material";

export default function Gallery({ yacht }) {
  const [mainImage, setMainImage] = useState(yacht?.images?.[0]);
  const [fadeIn, setFadeIn] = useState(true);

  const handleImageClick = (img) => {
    if (img === mainImage) return;
    setFadeIn(false);
    setTimeout(() => {
      setMainImage(img);
      setFadeIn(true);
    }, 150); // smooth fade transition
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 8, md: 12 },
        backgroundColor: "#f3f3f3",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        {/* Titulli */}
        <Box mb={{ xs: 6, md: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#0d1b2a",
              letterSpacing: 2,
              display: "block",
              mb: 1,
            }}
          >
            {yacht.builder} {yacht.model}
          </Typography>

          {/* Vija e kuqe direkt sipër GALLERY */}
          <Divider
            sx={{
              width: 170,
              height: 3,
              bgcolor: "#8B1E2D",
              mx: "auto",
              mb: 2,
              borderRadius: 1,
            }}
          />

          <Typography
            variant="h4"
            fontWeight={700}
            sx={{
              color: "#0d1b2a",
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              textTransform: "uppercase",
            }}
          >
            GALLERY
          </Typography>
        </Box>

        {/* Galeria */}
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          justifyContent="center"
          alignItems="flex-start"
        >
          {/* Foto kryesore */}
          <Grid item xs={12} md={9}>
            <Fade in={fadeIn} timeout={500}>
              <Box
                component="img"
                src={mainImage}
                alt={yacht.name}
                sx={{
                  width: "100%",
                  height: { xs: 360, sm: 460, md: 600, lg: 680 },
                  objectFit: "contain", // ✅ ruan cilesine origjinale
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
                  transition: "all 0.4s ease",
                }}
              />
            </Fade>
          </Grid>

          {/* Thumbnails */}
          <Grid item xs={12} md={3}>
            <Stack spacing={{ xs: 2, md: 2.5 }}>
              {yacht.images?.map((img, i) => (
                <Box
                  key={i}
                  component="img"
                  src={img}
                  alt={`${yacht.name}-${i}`}
                  onClick={() => handleImageClick(img)}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    height: { xs: 100, sm: 130, md: 150 },
                    objectFit: "cover", // shfaqet plot në thumbnail
                    backgroundColor: "#fff",
                    borderRadius: 2,
                    cursor: "pointer",
                    border:
                      mainImage === img
                        ? "3px solid #8B1E2D"
                        : "1px solid #ccc",
                    transition: "all 0.3s ease",
                    boxShadow:
                      mainImage === img
                        ? "0 6px 14px rgba(0,0,0,0.25)"
                        : "0 3px 8px rgba(0,0,0,0.1)",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
                    },
                  }}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Butoni për broshurën */}
        <Box textAlign="center" mt={{ xs: 6, md: 8 }}>
          <a href="/file/test.pdf" download style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#dcdcdc",
                color: "#000",
                px: { xs: 4, md: 6 },
                py: { xs: 1.3, md: 1.6 },
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: 1,
                fontSize: { xs: "0.9rem", md: "1rem" },
                "&:hover": { backgroundColor: "#bdbdbd" },
              }}
            >
              DOWNLOAD BROCHURE
            </Button>
          </a>
        </Box>
      </Container>
    </Box>
  );
}
