// src/components/charterdetails/About.jsx
import React from "react";
import {
  Box,
  Typography,
  Container,
  Divider,
  List,
  ListItem,
} from "@mui/material";

export default function About({ yacht }) {
  if (!yacht?.about) return null;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw", // ✅ full nga borderi majtas në të djathtë
        left: "50%",
        marginLeft: "-50.5vw",
        backgroundColor: "#f3f3f3", // ngjyrë e lehtë neutrale si në seksionet e tjera
        py: { xs: 8, md: 12 },
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Container maxWidth="md">
        {/* Titulli kryesor */}
        <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#8B1E2D",
              letterSpacing: 2,
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            ABOUT
          </Typography>

          {/* Vija e kuqe sipër emrit */}
          <Divider
            sx={{
              width: 70,
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
              fontSize: { xs: "1.8rem", md: "2.3rem" },
              textTransform: "uppercase",
            }}
          >
            {yacht.translations?.en?.name} {yacht.model}
          </Typography>
        </Box>

        {/* Subtitulli */}
        <Typography
          variant="h6"
          align="center"
          sx={{
            fontWeight: 600,
            mb: { xs: 4, md: 6 },
            color: "#141F2F",
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: 1.8,
            letterSpacing: "0.3px",
          }}
        >
          {yacht.about.title}
        </Typography>

        {/* Paragrafët kryesorë */}
        {yacht.about.paragraphs?.map((p, i) => (
          <Typography
            key={i}
            variant="body1"
            sx={{
              mb: 3,
              textAlign: "justify",
              color: "#333",
              fontSize: { xs: "1rem", md: "1.15rem" },
              lineHeight: 1.9,
              letterSpacing: "0.2px",
            }}
          >
            {p}
          </Typography>
        ))}

        {/* Highlights */}
        {yacht.about.highlights && (
          <>
            <Typography
              variant="h6"
              fontWeight={700}
              sx={{
                mt: 6,
                mb: 3,
                color: "#0d1b2a",
                textTransform: "uppercase",
                fontSize: { xs: "1.2rem", md: "1.4rem" },
              }}
            >
              Key Highlights
            </Typography>

            <List sx={{ pl: 3 }}>
              {yacht.about.highlights.map((h, i) => (
                <ListItem
                  key={i}
                  sx={{
                    display: "list-item",
                    pl: 1,
                    color: "#444",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    lineHeight: 1.8,
                  }}
                >
                  {h}
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Container>
    </Box>
  );
}
