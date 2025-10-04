// src/components/destinations/MapSection.jsx
import React, { useState } from "react";
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

  // funksion që krijon ikonë rrethore me imazhin e destinacionit
  const createCircleIcon = (imageUrl) =>
    L.divIcon({
      html: `<div style="
        width:40px; 
        height:40px; 
        border-radius:50%; 
        background-image:url('${imageUrl}');
        background-size:cover;
        background-position:center;
        border:2px solid white;
        box-shadow:0 0 5px rgba(0,0,0,0.5);
      "></div>`,
      className: "", // heq klasen default
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    });

  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50.5vw",
        backgroundColor: "#F5F5F5",
        py: { xs: 8, md: 12 },
      }}
    >
      {/* Header */}
      <Box textAlign="center" mb={4}>
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
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Explore Our Destinations
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Navigate the Albanian Riviera and discover hidden gems along the
          coastline
        </Typography>
      </Box>

      {/* Map */}
      <MapContainer
        center={[40.05, 19.8]}
        zoom={9}
        style={{ height: "500px", borderRadius: "12px", overflow: "hidden" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OSM</a>'
        />
        {destinations
          .filter((d) => d.lat && d.lng)
          .map((d) => (
            <Marker
              key={d.id}
              position={[d.lat, d.lng]}
              icon={createCircleIcon(d.heroImage)} // përdorim foton kryesore si ikonë
              eventHandlers={{
                click: () => {
                  setSelected(d);
                  setActiveImage(d.heroImage);
                },
              }}
            />
          ))}
      </MapContainer>

      {/* Drawer Modal */}
      <Drawer
        anchor="right"
        open={!!selected}
        onClose={() => setSelected(null)}
        PaperProps={{
          sx: { width: { xs: "100%", md: 500 }, p: 3 },
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight={700}>
            {selected?.title}
          </Typography>
          <IconButton onClick={() => setSelected(null)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ my: 2 }} />

        {selected && (
          <>
            {/* Foto kryesore */}
            <img
              src={activeImage}
              alt={selected.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            />

            {/* Thumbnail-at */}
            <Grid container spacing={2}>
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
              sx={{ mt: 3 }}
            >
              {selected.description}
            </Typography>
          </>
        )}
      </Drawer>
    </Box>
  );
}
