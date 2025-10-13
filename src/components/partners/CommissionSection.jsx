// src/components/partners/CommissionSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function CommissionSection() {
  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 12, md: 18 }, // më shumë hapësirë sipër/poshtë
        px: { xs: 3, md: 6 },
        backgroundColor: "#F7F7F7",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Titulli kryesor */}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: "1.3rem", sm: "1.7rem", md: "2rem" },
          textTransform: "uppercase",
          letterSpacing: 0.5,
          color: "#141F2F",
          mb: 4,
        }}
      >
        WANT TO EARN COMMISSION WHILE YOUR CLIENTS SAIL IN STYLE?
      </Typography>

      {/* Teksti poshtë */}
      <Typography
        sx={{
          maxWidth: 760,
          mx: "auto",
          color: "#454545",
          fontSize: { xs: "0.95rem", md: "1.05rem" },
          lineHeight: 1.8,
          fontWeight: 400,
        }}
      >
        Partner with our yacht-charter company and turn your network into a new
        revenue stream. Recommend our luxury yachts and tailor-made experiences
        to your clients and earn <strong>7.5 – 20 % commission</strong> on every
        confirmed booking.
      </Typography>
    </Box>
  );
}
