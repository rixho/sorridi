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
} from "@mui/material";

export default function Gallery({ yacht }) {
  const [mainImage, setMainImage] = useState(yacht?.images?.[0]);

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        {/* Titulli */}
        <Box textAlign="center" mb={5}>
          <Typography
            variant="overline"
            sx={{ color: "#8B1E2D", letterSpacing: 2 }}
          >
            {yacht.builder} {yacht.model}
          </Typography>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ color: "#0d1b2a", mt: 1 }}
          >
            GALLERY
          </Typography>
          <Divider
            sx={{
              width: 60,
              height: 2,
              bgcolor: "#8B1E2D",
              mx: "auto",
              my: 2,
            }}
          />
        </Box>

        {/* Gallery */}
        <Grid container spacing={3} justifyContent="center">
          {/* Foto kryesore */}
          <Grid item xs={12} md={9}>
            <Box
              component="img"
              src={mainImage}
              alt={yacht.name}
              sx={{
                width: "100%",
                height: { xs: 300, md: 450 },
                objectFit: "cover",
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
            />
          </Grid>

          {/* Thumbnails */}
          <Grid item xs={12} md={3}>
            <Stack spacing={2}>
              {yacht.images?.map((img, i) => (
                <Box
                  key={i}
                  component="img"
                  src={img}
                  alt={`${yacht.name}-${i}`}
                  onClick={() => setMainImage(img)}
                  sx={{
                    width: "100%",
                    height: 120,
                    objectFit: "cover",
                    borderRadius: 1.5,
                    cursor: "pointer",
                    border:
                      mainImage === img
                        ? "3px solid #8B1E2D"
                        : "1px solid #ddd",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Butoni i broshurës */}
        <Box textAlign="center" mt={6}>
         <a
  href="/file/test.pdf"   // path relativ nga public
  download
  style={{ textDecoration: "none" }}
>
  <Button
    variant="contained"
    sx={{
      backgroundColor: "#dcdcdc",
      color: "#000",
      px: 5,
      py: 1.5,
      fontWeight: 600,
      textTransform: "uppercase",
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
