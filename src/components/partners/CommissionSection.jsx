// src/components/partners/CommissionSection.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function CommissionSection() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{ mb: 2, textTransform: "uppercase" }}
      >
        WANT TO EARN COMMISSION WHILE YOUR CLIENTS SAIL IN STYLE?
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: "auto" }}>
        Partner with our yacht-charter company and turn your network into a new revenue stream.  
        Recommend our luxury yachts and tailor-made experiences to your clients and earn  
        <strong> 7.5 – 20 % commission</strong> on every confirmed booking.
      </Typography>
    </Box>
  );
}
