import { Box } from "@mui/material";

export default function VideoSection() {
  return (
    <Box sx={{ position: "relative", width: "100vw", left: "50%", marginLeft: "-50.5vw", height: { xs: 300, md: 600 } }}>
      <video autoPlay muted loop playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <source src="/media/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
}
