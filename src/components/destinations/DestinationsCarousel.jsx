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
        left: { xs: "-10px", md: "-50px" },
        transform: "translateY(-50%)",
        zIndex: 2,
        bgcolor: "#fff",
        boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
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
        right: { xs: "-10px", md: "-50px" },
        transform: "translateY(-50%)",
        zIndex: 2,
        bgcolor: "#fff",
        boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
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
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 800, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 8, md: 14 },
        backgroundColor: "#F7F7F7",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box textAlign="center" mb={8}>
        <Typography
          variant="overline"
          sx={{
             fontWeight: 400,
          fontSize: { xs: "0.95rem", sm: "1rem" },
          color: "#141F2F",
          letterSpacing: "0.5px",
          mb: 1,
          }}
        >
          Pre-Made Itineraries
        </Typography>
        <Box
          sx={{
             width: 250,
             height: "2px",
          backgroundColor: "#80131F",
          mx: "auto",
          mb: { xs: 6, md: 8 },
          }}
        />
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            color: "#141F2F",
            textTransform: "uppercase",
            fontSize: { xs: "1.7rem", md: "2.3rem" },
          }}
        >
          Explore Our Destinations
        </Typography>
      </Box>

      {/* Carousel */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1900px",
          mx: "auto",
          position: "relative",
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Slider {...settings}>
          {iteneraries.map((d) => (
            <Box key={d.id} px={2}>
              <Box
                sx={{
                  bgcolor: "#fff",
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  height: { xs: 480, md: 540 }, // 🔑 më e madhe për desktop
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "translateY(-6px)" },
                }}
              >
                {/* Foto */}
                <Box
                  component="img"
                  src={d.heroImage}
                  alt={d.title}
                  sx={{
                    width: "100%",
                    height: { xs: 240, md: 300 },
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />

                {/* Teksti */}
                <Box
                  sx={{
                    p: { xs: 3, md: 4 },
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={800}
                    sx={{
                      mb: 1,
                      color: "#141F2F",
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                      textTransform: "uppercase",
                    }}
                  >
                    {d.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#454545",
                      mb: 3,
                      flexGrow: 1,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      lineHeight: 1.7,
                    }}
                  >
                    {d.description.slice(0, 170)}...
                  </Typography>

                  <Button
                    component={Link}
                    to={`/destinations/${d.id}`}
                    sx={{
                      color: "#8B1E2D",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
                      alignSelf: "flex-start",
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
