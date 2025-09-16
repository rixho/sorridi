import React from "react";
import { Card, CardMedia, CardContent, Typography, Chip, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function YachtCard({ yacht }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const tData = yacht.translations[lang] || yacht.translations["en"];

  return (
    <Card component={Link} to={`/yacht/${yacht.id}`} sx={{ textDecoration: "none" }}>
      <CardMedia
        component="img"
        height="200"
        image={yacht.images[0]}
        alt={tData.name}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>{tData.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {yacht.builder} • {yacht.length_m}m • {yacht.year}
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 1 }}>
          {tData.highlights.map((h, i) => (
            <Chip key={i} label={h} size="small" />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
