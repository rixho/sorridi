// src/components/sections/ServicesSection.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Divider,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    id: "driver",
    title: "PRIVATE DRIVER TRANSFERS",
    button: "ARRIVE IN STYLE",
    image: "/media/prive/limusine.jpg",
    link: "/private-driver",
  },
  {
    id: "helicopter",
    title: "PRIVATE HELICOPTER RIDE",
    button: "TAKE OFF IN ELEGANCE",
    image: "/media/prive/helicopter.jpg",
    link: "/helicopter",
  },
  {
    id: "jet",
    title: "PRIVATE JET EXPERIENCE",
    button: "FLY WITH LUXURY",
    image: "/media/prive/jet.jpg",
    link: "/private-jet",
  },
];

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: 16,
      top: "50%",
      transform: "translateY(-50%)",
      color: "#fff",
      backgroundColor: "rgba(0,0,0,0.4)",
      "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
      zIndex: 3,
    }}
  >
    <ArrowForwardIos />
  </IconButton>
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      left: 16,
      top: "50%",
      transform: "translateY(-50%)",
      color: "#fff",
      backgroundColor: "rgba(0,0,0,0.4)",
      "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
      zIndex: 3,
    }}
  >
    <ArrowBackIos />
  </IconButton>
);

export default function ServicesSection() {
  const [hovered, setHovered] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // 🔴 Measure text width dynamically
  const textRefs = useRef({});
  const [lineWidths, setLineWidths] = useState({});

  useEffect(() => {
    const updateWidths = () => {
      const newWidths = {};
      Object.entries(textRefs.current).forEach(([id, el]) => {
        if (el) newWidths[id] = el.offsetWidth + 20; // 20px më shumë se teksti
      });
      setLineWidths(newWidths);
    };
    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        overflow: "hidden",
      }}
    >
      {/* 🖥️ Desktop layout */}
      {!isMobile && (
        <Grid container sx={{ height: "85vh", flexDirection: "row" }}>
          {services.map((s, idx) => {
            let flexValue = 1;
            if (hovered) flexValue = hovered === s.id ? 2 : 0.5;

            return (
              <Grid
                key={s.id}
                item
                onMouseEnter={() => setHovered(s.id)}
                onMouseLeave={() => setHovered(null)}
                sx={{
                  flex: flexValue,
                  height: "100%",
                  transition: "flex 0.6s ease",
                  display: "flex",
                  position: "relative",
                  overflow: "hidden",
                  borderLeft: idx !== 0 ? "1px solid rgba(255,255,255,0.3)" : "none",
                  cursor: "pointer",
                }}
              >
                {/* Background */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${s.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "all 0.6s ease",
                    filter:
                      hovered === s.id
                        ? "brightness(0.9)"
                        : "brightness(0.4) grayscale(40%)",
                    transform: hovered === s.id ? "scale(1.08)" : "scale(1)",
                  }}
                />

                {/* Overlay */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    p: 5,
                    bgcolor: "rgba(0,0,0,0.35)",
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "100%",
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  <Typography
                    ref={(el) => (textRefs.current[s.id] = el)}
                    variant="h6"
                    fontWeight={700}
                    gutterBottom
                    sx={{
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      fontSize: "1.3rem",
                    }}
                  >
                    {s.title}
                  </Typography>

                  <Divider
                    sx={{
                      bgcolor: "#8B1E2D",
                      width: `${lineWidths[s.id] || 60}px`,
                      mx: "auto",
                      mb: 2,
                      transition: "width 0.3s ease",
                    }}
                  />

                  <Button
                    href={s.link}
                    variant="outlined"
                    sx={{
                      borderColor: "#fff",
                      color: "#D4AF37",
                      px: 3,
                      py: 1,
                      fontWeight: 600,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "#fff",
                        color: "#D4AF37",
                        bgcolor: "transparent",
                        transform: "scale(1.05)",
                        boxShadow: "0 0 12px rgba(212, 175, 55, 0.6)",
                      },
                    }}
                  >
                    {s.button}
                  </Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      )}

      {/* 📱 Mobile layout */}
      {isMobile && (
        <Box sx={{ height: "100vh", width: "100vw", position: "relative" }}>
          <Slider {...sliderSettings}>
            {services.map((s) => (
              <Box
                key={s.id}
                sx={{
                  height: "100vh",
                  width: "100vw",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Background */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${s.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.65)",
                  }}
                />

                {/* Overlay bottom */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "45%",
                    background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.85))",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    color: "#fff",
                    textAlign: "center",
                    px: 3,
                    pb: 6,
                  }}
                >
                  <Typography
                    ref={(el) => (textRefs.current[s.id] = el)}
                    variant="h6"
                    fontWeight={700}
                    sx={{
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      mb: 1.5,
                    }}
                  >
                    {s.title}
                  </Typography>

                  <Divider
                    sx={{
                      bgcolor: "#8B1E2D",
                      width: `${lineWidths[s.id] || 90}px`,
                      mx: "auto",
                      mb: 2.5,
                      transition: "width 0.3s ease",
                    }}
                  />

                  <Button
                    href={s.link}
                    variant="outlined"
                    sx={{
                      borderColor: "#fff",
                      color: "#D4AF37",
                      px: 3,
                      py: 0.8,
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "#fff",
                        color: "#D4AF37",
                        bgcolor: "transparent",
                        transform: "scale(1.05)",
                        boxShadow: "0 0 10px rgba(212,175,55,0.7)",
                      },
                    }}
                  >
                    {s.button}
                  </Button>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      )}
    </Box>
  );
}
