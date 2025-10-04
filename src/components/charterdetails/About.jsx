// src/components/charterdetails/About.jsx
import React from "react";
import { Box, Typography, Container, Divider, List, ListItem } from "@mui/material";

export default function About({ yacht }) {
  if (!yacht?.about) return null;

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="md">
        {/* Titulli kryesor */}
        <Box textAlign="center" mb={5}>
          <Typography variant="overline" sx={{ color: "#8B1E2D", letterSpacing: 2 }}>
            ABOUT
          </Typography>
          <Typography variant="h4" fontWeight={700} sx={{ color: "#0d1b2a", mt: 1 }}>
            {yacht.translations?.en?.name} {yacht.model}
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

        {/* Subtitulli */}
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ fontWeight: 600, mb: 4 }}
        >
          {yacht.about.title}
        </Typography>

        {/* Paragrafët */}
        {yacht.about.paragraphs?.map((p, i) => (
          <Typography key={i} variant="body1" sx={{ mb: 3, textAlign: "justify" }}>
            {p}
          </Typography>
        ))}

        {/* Highlights */}
        {yacht.about.highlights && (
          <>
            <Typography variant="h6" fontWeight={700} sx={{ mt: 4, mb: 2 }}>
              Key Highlights
            </Typography>
            <List>
              {yacht.about.highlights.map((h, i) => (
                <ListItem key={i} sx={{ display: "list-item", pl: 2 }}>
                  <Typography variant="body2">{h}</Typography>
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Container>
    </Box>
  );
}
