// src/components/sections/DestinationsStrip.jsx
import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Button, Grid, Divider, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const features = [
  {
    id: "what",
    title: "WHAT TO DO",
    button: "CHARTER WITH SORRIDI",
    link: "/what-to-do",
    image: "/media/suncoco/2.jpg",
  },
  {
    id: "where",
    title: "WHERE TO GO",
    button: "CHARTER DESTINATIONS",
    link: "/destinations",
    image: "/media/suncoco/1.jpg",
  },
  {
    id: "choose",
    title: "CHOOSE YOUR YACHT",
    button: "YACHTS FOR CHARTER",
    link: "/yachts-for-charter",
    image: "/media/suncoco/main.jpg",
  },
];

// Custom arrows (mobile carousel)
const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      right: 14,
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
      left: 14,
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

export default function DestinationsStrip() {
  const [hovered, setHovered] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Dynamic red line width (slightly wider than text)
  const textRefs = useRef({});
  const [lineWidths, setLineWidths] = useState({});
  useEffect(() => {
    const updateWidths = () => {
      const nw = {};
      Object.entries(textRefs.current).forEach(([id, el]) => {
        if (el) nw[id] = el.offsetWidth + 20; // 20px më shumë se teksti
      });
      setLineWidths(nw);
    };
    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, []);

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
      {/* 📱 Mobile: full-screen carousel */}
      {isMobile && (
        <Box sx={{ height: "100vh", width: "100vw", position: "relative" }}>
          <Slider {...sliderSettings}>
            {features.map((f) => (
              <Box key={f.id} sx={{ height: "100vh", width: "100vw", position: "relative" }}>
                {/* Background */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${f.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.65)",
                  }}
                />
                {/* Gradient & content bottom */}
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
                    ref={(el) => (textRefs.current[f.id] = el)}
                    variant="h4"
                    fontWeight={700}
                    sx={{
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                      fontSize: "1.6rem",
                      textShadow: "0 4px 10px rgba(0,0,0,0.8)",
                    }}
                  >
                    {f.title}
                  </Typography>

                  {/* Dynamic red line */}
                  <Divider
                    sx={{
                      bgcolor: "#8B1E2D",
                      width: `${lineWidths[f.id] || 90}px`,
                      height: 2,
                      mx: "auto",
                      mt: 1.5,
                      mb: 3,
                      transition: "width 0.3s ease",
                    }}
                  />

                  {/* Gold button with glow hover */}
                  <Button
                    component={Link}
                    to={f.link}
                    variant="outlined"
                    sx={{
                      borderColor: "#fff",
                      color: "#D4AF37",
                      px: 3,
                      py: 0.9,
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      borderWidth: 2,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "#fff",
                        color: "#D4AF37",
                        bgcolor: "transparent",
                        transform: "scale(1.05)",
                        boxShadow: "0 0 12px rgba(212,175,55,0.6)",
                      },
                    }}
                  >
                    {f.button}
                  </Button>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      )}

      {/* 🖥️ Desktop: horizontal strip */}
      {!isMobile && (
        <Box sx={{ height: "100vh" }}>
          <Grid container sx={{ height: "100%", flexDirection: "row" }}>
            {features.map((f, idx) => {
              let flexValue = 1;
              if (hovered) flexValue = hovered === f.id ? 2 : 0.6;

              return (
                <Grid
                  key={f.id}
                  item
                  onMouseEnter={() => setHovered(f.id)}
                  onMouseLeave={() => setHovered(null)}
                  sx={{
                    flex: flexValue,
                    height: "100%",
                    transition: "flex 0.6s ease",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    color: "#fff",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    borderLeft: idx !== 0 ? "1px solid rgba(255,255,255,0.2)" : "none",
                  }}
                >
                  {/* Background */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url(${f.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "all 0.6s ease",
                      transform: hovered === f.id ? "scale(1.08)" : "scale(1)",
                      filter:
                        hovered === f.id
                          ? "brightness(0.9)"
                          : "brightness(0.45) grayscale(40%)",
                    }}
                  />
                  {/* Gradient */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)",
                    }}
                  />
                  {/* Content */}
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 2,
                      textAlign: "center",
                      mb: 10,
                      px: 4,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      ref={(el) => (textRefs.current[f.id] = el)}
                      variant="h4"
                      fontWeight={700}
                      sx={{
                        textTransform: "uppercase",
                        letterSpacing: 1.5,
                        fontSize: "2rem",
                        textShadow: "0 4px 10px rgba(0,0,0,0.8)",
                      }}
                    >
                      {f.title}
                    </Typography>

                    <Divider
                      sx={{
                        bgcolor: "#8B1E2D",
                        width: `${lineWidths[f.id] || 100}px`,
                        height: 2,
                        mx: "auto",
                        mt: 1.5,
                        mb: 3,
                        transition: "width 0.3s ease",
                      }}
                    />

                    <Button
                      component={Link}
                      to={f.link}
                      variant="outlined"
                      sx={{
                        borderColor: "#fff",
                        color: "#D4AF37",
                        px: 3.5,
                        py: 1,
                        fontSize: "1rem",
                        borderWidth: 2,
                        fontWeight: 600,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: "#fff",
                          color: "#D4AF37",
                          bgcolor: "transparent",
                          transform: "scale(1.05)",
                          boxShadow: "0 0 12px rgba(212,175,55,0.6)",
                        },
                      }}
                    >
                      {f.button}
                    </Button>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}
    </Box>
  );
}
