// src/components/charterdetails/Hero.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import yachts from "../../data/yachts.json";

export default function Hero({ yacht }) {
  const navigate = useNavigate();

  // filtrojmë vetëm jahtet që janë për charter
  const charterYachts = yachts.filter((y) => y.status === "for-charter");

  // gjej indeksin e jahtit aktual vetëm brenda listës së charter
  const currentIndex = charterYachts.findIndex((y) => y.id === yacht.id);
  const prevYacht =
    charterYachts[(currentIndex - 1 + charterYachts.length) % charterYachts.length];
  const nextYacht =
    charterYachts[(currentIndex + 1) % charterYachts.length];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        mt: -6,
        height: { xs: 400, md: 700 },
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <Box
        component="img"
        src={yacht.images?.[0]}
        alt={yacht.translations?.en?.name || yacht.name}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.35)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end", // teksti në fund
          textAlign: "center",
          color: "#fff",
          pb: { xs: 6, md: 10 },
          px: 2,
        }}
      >
        {/* Teksti poshtë në mes */}
        <Typography variant="overline" sx={{ letterSpacing: 2 }}>
          AVAILABLE FOR CHARTER
        </Typography>

        {/* Emri i madh + model */}
        <Typography
          variant="h3"
          fontWeight={700}
          sx={{
            textShadow: "0px 2px 6px rgba(0,0,0,0.8)",
            fontSize: { xs: "2rem", md: "3rem" },
            textTransform: "uppercase",
          }}
        >
          {yacht.translations?.en?.name}{" "}
          <span style={{ fontWeight: 400 }}>{yacht.model}</span>
        </Typography>

        {/* Pershkrimi */}
        <Typography
          variant="subtitle1"
          sx={{
            textShadow: "0px 1px 3px rgba(0,0,0,0.8)",
            fontWeight: 400,
            mt: 1,
            maxWidth: "800px",
          }}
        >
          {yacht.translations?.en?.description ||
            yacht.shortDescription ||
            "Luxury charter yacht for unforgettable journeys."}
        </Typography>

        {/* Butonat Previous & Next */}
        <Box
          sx={{
            position: "absolute",
            bottom: 20,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            px: 3,
          }}
        >
          <Button
            variant="text"
            sx={{ color: "#fff" }}
            onClick={() => navigate(`/yacht/${prevYacht.id}`)}
          >
            &lt; PREVIOUS CHARTER
          </Button>
          <Button
            variant="text"
            sx={{ color: "#fff" }}
            onClick={() => navigate(`/yacht/${nextYacht.id}`)}
          >
            NEXT CHARTER &gt;
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
