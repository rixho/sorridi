// src/components/YachtCard.jsx
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Box,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function YachtCard({ yacht, big = false }) {
  const { i18n } = useTranslation();
  // const lang = i18n.language;
  // const tData = yacht.translations[lang] || yacht.translations["en"];

  return (
    <Card
      component={Link}
      to={`/yacht/${yacht.id}`}
      sx={{
        textDecoration: "none",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
        transition: "transform 0.3s ease",
        "&:hover": { transform: "translateY(-6px)" },
      }}
    >
      {/* Foto */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/9",
          backgroundColor: "#f5f5f5",
        }}
      >
        <CardMedia
          component="img"
          image={yacht.images[0]}
          alt={yacht.name}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Info */}
      <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
        <Typography
          variant="h6"
          gutterBottom
          fontWeight={700}
          sx={{ textTransform: "uppercase" }}
        >
          {yacht.name}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "#d4a017", mb: 2, fontWeight: 600 }}
        >
          {yacht.model}
        </Typography>

        {/* Specs poshtë */}
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          justifyContent="center"
          sx={{ mb: 2 }}
        >
          <Box>
            <Typography fontWeight={700}>{yacht.length_m} m</Typography>
            <Typography variant="caption" sx={{ textTransform: "uppercase" }}>
              Length
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight={700}>{yacht.guests}</Typography>
            <Typography variant="caption" sx={{ textTransform: "uppercase" }}>
              Guests
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight={700}>{yacht.cabins}</Typography>
            <Typography variant="caption" sx={{ textTransform: "uppercase" }}>
              Cabins
            </Typography>
          </Box>
          {yacht.crew && (
            <Box>
              <Typography fontWeight={700}>{yacht.crew}</Typography>
              <Typography
                variant="caption"
                sx={{ textTransform: "uppercase" }}
              >
                Crew
              </Typography>
            </Box>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
