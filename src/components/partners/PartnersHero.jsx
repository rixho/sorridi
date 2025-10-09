import React from "react";
import { Box, Typography } from "@mui/material";

export default function PartnersHero() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        height: { xs: 300, md: 700 },
        mt: -6,
        backgroundImage: "url('/test/01.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#fff",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography
        variant="h3"
        fontWeight={700}
        sx={{ textShadow: "0px 2px 6px rgba(0,0,0,0.6)" }}
      >
        GROW WITH US
      </Typography>
      {/* <Typography
        variant="h6"
        sx={{
          mt: 2,
          maxWidth: 700,
          textShadow: "0px 1px 4px rgba(0,0,0,0.5)",
        }}
      >
        Partner with us and create new opportunities in luxury yachting.  
        Join a growing network built on trust, collaboration, and premium service.
      </Typography> */}
    </Box>
  );
}
