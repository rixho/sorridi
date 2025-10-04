import { Container, Typography } from "@mui/material";

export default function BespokeExperiences() {
  return (
    <Container sx={{ py: { xs: 6, md: 10 }, textAlign: "center" }}>
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{ mb: 2, color: "#0d1b2a" }}
      >
        BESPOKE EXPERIENCES – BEYOND CHARTERING
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          maxWidth: 800,
          mx: "auto",
          mb: 3,
          lineHeight: 1.8,
        }}
      >
        Discover hand-picked yachts and tailor-made itineraries along Albania’s
        stunning coastline and nearby Mediterranean gems. Whether you dream of a
        luxurious week at sea or a single unforgettable day trip, our expert
        brokers curate every detail—from yacht selection to personalized route
        planning—to create the charter vacation you’ve always imagined.
      </Typography>
    </Container>
  );
}
