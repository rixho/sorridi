import { Box, Typography, Button } from "@mui/material";

export default function CTASection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        backgroundColor: "#f2f2f2",
        py: { xs: 6, md: 10 },
        textAlign: "center",
      }}
    >
      {/* Subtitle */}
      <Typography
        variant="overline"
        sx={{
          letterSpacing: 2,
          fontSize: { xs: "0.75rem", md: "0.85rem" },
          color: "#8B1E2D",
          display: "inline-block",
          position: "relative",
          mb: 2,
        }}
      >
        BEYOND CHARTERING
        <Box
          sx={{
            position: "absolute",
            bottom: -4,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: 2,
            backgroundColor: "#8B1E2D",
          }}
        />
      </Typography>

      {/* Title */}
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{ mt: 3, mb: 2, color: "#0d1b2a" }}
      >
        Ready to Elevate Your Voyage?
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: 900,
          mx: "auto",
          mb: 3,
          color: "text.secondary",
          lineHeight: 1.8,
          fontSize: { xs: "0.9rem", md: "1rem" },
        }}
      >
        Elevate every moment of your voyage with tailor-made services—from luxury
        transfers and curated celebrations to gourmet catering and exclusive wine
        tastings. Every detail is seamlessly orchestrated for you.
      </Typography>

      {/* Button */}
      <Button
        variant="contained"
        size="medium"
        sx={{
          backgroundColor: "#0d1b2a",
          px: { xs: 3, md: 5 },
          py: 1.2,
          fontSize: { xs: "0.8rem", md: "0.95rem" },
          "&:hover": { backgroundColor: "#132f4c" },
        }}
      >
        START PLANNING YOUR EXPERIENCE
      </Button>
    </Box>
  );
}
