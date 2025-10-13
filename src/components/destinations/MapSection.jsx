// src/components/destinations/MapSection.jsx
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import {
  Drawer,
  Box,
  Typography,
  Divider,
  IconButton,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import destinations from "../../data/destinations.json";

export default function MapSection() {
  const [selected, setSelected] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [heights, setHeights] = useState({ xs: 300, md: 700 });

  // 🔧 Lartësia dinamike si HeroSection
  useEffect(() => {
    const updateHeights = () => {
      const screenH = window.innerHeight;
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;
      setHeights({
        xs: Math.min(screenH * 0.45, 420),
        md: screenH - headerHeight,
      });
    };
    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  // Ikonë rrethore me imazh destinacioni
  const createCircleIcon = (imageUrl) =>
    L.divIcon({
      html: `<div style="
        width:48px;
        height:48px;
        border-radius:50%;
        background-image:url('${imageUrl}');
        background-size:cover;
        background-position:center;
        border:2px solid white;
        box-shadow:0 0 8px rgba(0,0,0,0.4);
      "></div>`,
      className: "",
      iconSize: [48, 48],
      iconAnchor: [24, 24],
    });

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        overflow: "hidden",
        mt: { xs: 8, md: 12 },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 4, md: 6 },
          backgroundColor: "#fff",
        }}
      >
        <Typography
          variant="overline"
          sx={{ color: "#8B1E2D", letterSpacing: 2 }}
        >
          YOUR JOURNEY
        </Typography>
        <Divider
          sx={{
            width: 60,
            mx: "auto",
            borderBottomWidth: 2,
            borderColor: "#8B1E2D",
            mb: 2,
          }}
        />
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ mb: 1, color: "#0D1B2A" }}
        >
          Explore the Albanian Riviera
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 700, mx: "auto", lineHeight: 1.8 }}
        >
          From the wild peninsula of Karaburun to the serene shores of Ksamil — 
          trace the coastline that defines Albania’s most breathtaking beauty.
        </Typography>
      </Box>

      {/* 🌍 Harta full width si Hero */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          left: "50%",
          marginLeft: "-50vw",
          height: { xs: heights.xs, md: heights.md },
        }}
      >
        <MapContainer
          center={[40.05, 19.5]} // ✅ Qendër balancuar (Karaburun në veri, Ksamil në jug)
          zoom={9.5} // ✅ mjaftueshëm për të parë gjithë rivierën
          style={{
            width: "100%",
            height: "100%",
          }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          />

          {destinations
            .filter((d) => d.lat && d.lng)
            .map((d) => (
              <Marker
                key={d.id}
                position={[d.lat, d.lng]}
                icon={createCircleIcon(d.heroImage)}
                eventHandlers={{
                  click: () => {
                    setSelected(d);
                    setActiveImage(d.heroImage);
                  },
                }}
              />
            ))}
        </MapContainer>
      </Box>

      {/* Drawer me info destinacioni */}
      <Drawer
        anchor="right"
        open={!!selected}
        onClose={() => setSelected(null)}
        PaperProps={{
          sx: {
            width: { xs: "100%", md: 480 },
            p: { xs: 2.5, md: 3.5 },
            backgroundColor: "#fafafa",
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight={700} color="#0D1B2A">
            {selected?.title}
          </Typography>
          <IconButton onClick={() => setSelected(null)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ my: 2 }} />

        {selected && (
          <>
            <img
              src={activeImage}
              alt={selected.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "16px",
              }}
            />

            <Grid container spacing={1.5}>
              {(selected.images || []).map((img, i) => (
                <Grid item xs={4} key={i}>
                  <img
                    src={img}
                    alt={`${selected.title}-${i}`}
                    style={{
                      width: "100%",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      cursor: "pointer",
                      border:
                        img === activeImage
                          ? "2px solid #8B1E2D"
                          : "2px solid transparent",
                    }}
                    onClick={() => setActiveImage(img)}
                  />
                </Grid>
              ))}
            </Grid>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 3, lineHeight: 1.8 }}
            >
              {selected.description}
            </Typography>
          </>
        )}
      </Drawer>
    </Box>
  );
}
