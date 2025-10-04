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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import destinations from "../../data/destinations.json";

// custom icon
const yachtIcon = new L.Icon({
  iconUrl: "/media/marker.png",
  iconSize: [35, 35],
  iconAnchor: [17, 34],
});

export default function MapSection() {
  const [selected, setSelected] = useState(null);

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
        {destinations.filter(d => d.lat && d.lng).map((d) => (
          <Marker
            key={d.id}
            position={[d.lat, d.lng]}
            icon={yachtIcon}
            eventHandlers={{
              click: () => setSelected(d),
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
          sx: { width: { xs: "100%", md: 400 }, p: 3 },
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
            <img
              src={selected.heroImage}
              alt={selected.title}
              style={{
                width: "100%",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            />
            <Typography variant="body1" color="text.secondary">
              {selected.description}
            </Typography>
          </>
        )}
      </Drawer>
    </Box>
  );
}
