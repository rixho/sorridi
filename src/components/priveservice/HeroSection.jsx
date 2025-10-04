import { Box, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        mt: -6,
        height: { xs: 300, md: 700 },
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src="/media/1.jpg"
        alt="Signature Privileges"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.35)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" fontWeight={700} sx={{ textShadow: "0 2px 6px rgba(0,0,0,0.8)" }}>
          SIGNATURE PRIVILEGES
        </Typography>
      </Box>
    </Box>
  );
}
