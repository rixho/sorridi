// src/components/sections/DestinationsCarousel.jsx
import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import iteneraries from "../../data/iteneraries.json";

// Custom Left Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: "-40px",
        transform: "translateY(-50%)",
        zIndex: 2,
        bgcolor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        "&:hover": { bgcolor: "#f0f0f0" },
      }}
    >
      <ArrowBackIosNewIcon fontSize="small" />
    </IconButton>
  );
}

// Custom Right Arrow
function NextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: "-40px",
        transform: "translateY(-50%)",
        zIndex: 2,
        bgcolor: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        "&:hover": { bgcolor: "#f0f0f0" },
      }}
    >
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  );
}

export default function DestinationsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 6, md: 10 },
        backgroundColor: "#F5F5F5",
      }}
    >
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography
          variant="overline"
          sx={{ color: "#8B1E2D", letterSpacing: 2 }}
        >
          PRE MADE ITINERARIES
        </Typography>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ mb: 1, color: "#0d1b2a" }}
        >
          Explore Our Destinations
        </Typography>
      </Box>

      {/* Carousel */}
      <Box sx={{ maxWidth: "1200px", mx: "auto", position: "relative" }}>
        <Slider {...settings}>
          {iteneraries.map((d) => (
            <Box key={d.id} px={2}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  textAlign: "left",
                  minHeight: 480, // 🔑 lartësia fikse për kartën
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Foto */}
                <Box
                  component="img"
                  src={d.heroImage}
                  alt={d.title}
                  sx={{
                    width: "100%",
                    height: 220, // 🔑 fikse për të gjitha imazhet
                    objectFit: "cover",
                  }}
                />

                {/* Teksti */}
                <Box
                  sx={{
                    p: 3,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                    {d.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      flexGrow: 1, // 🔑 merr hapësirën që mbetet
                    }}
                  >
                    {d.description.slice(0, 160)}...
                  </Typography>

                  <Button
                    component={Link}
                    to={`/destinations/${d.id}`}
                    sx={{
                      color: "#8B1E2D",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      mt: "auto", // 🔑 gjithmonë në fund
                    }}
                  >
                    Full Itinerary &gt;
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
