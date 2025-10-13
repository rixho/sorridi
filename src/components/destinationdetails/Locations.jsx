import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
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

const createCircleIcon = (imageUrl) =>
  L.divIcon({
    html: `<div style="
      width:45px;
      height:45px;
      border-radius:50%;
      background-image:url('${imageUrl}');
      background-size:cover;
      background-position:center;
      border:2px solid white;
      box-shadow:0 0 5px rgba(0,0,0,0.4);
    "></div>`,
    className: "",
    iconSize: [45, 45],
    iconAnchor: [22, 22],
  });

// Fit bounds for all markers
function FitBounds({ markers }) {
  const map = useMap();
  useEffect(() => {
    if (markers.length > 0) {
      const bounds = L.latLngBounds(markers.map((m) => [m.lat, m.lng]));
      map.fitBounds(bounds, { padding: [200, 200], maxZoom: 12 });
    }
  }, [markers, map]);
  return null;
}

export default function Locations({ mapMarkers = [], locations = [] }) {
  const [selected, setSelected] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const handleMarkerClick = (marker) => {
    const loc = locations.find((l) => l.title.includes(marker.title));
    if (loc) {
      setSelected(loc);
      setActiveImage(loc.images?.[0]);
    } else {
      setSelected(marker);
      setActiveImage(marker.image || "/media/marker.png");
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 6, md: 10 },
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Header */}
      <Box textAlign="center" mb={4}>
        <Typography
          variant="overline"
          sx={{ color: "#8B1E2D", letterSpacing: 2 }}
        >
          SECLUDED SHORES & UNTAMED BEAUTY
        </Typography>
        <Typography variant="h6" fontWeight={700}>
          Hidden coves, crystal waters, and dramatic cliffs
        </Typography>
      </Box>

      {/* Map */}
      <MapContainer
        center={[40.05, 19.8]}
        zoom={9}
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "12px",
          overflow: "hidden",
        }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OSM</a>'
        />
        <FitBounds markers={mapMarkers} />

        {mapMarkers
          .filter((m) => m.lat && m.lng)
          .map((m, i) => (
            <Marker
              key={i}
              position={[m.lat, m.lng]}
              icon={createCircleIcon(m.image || "/media/marker.png")}
              eventHandlers={{ click: () => handleMarkerClick(m) }}
            />
          ))}
      </MapContainer>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={!!selected}
        onClose={() => setSelected(null)}
        PaperProps={{
          sx: { width: { xs: "100%", md: 460 }, p: 3 },
        }}
      >
        {selected && (
          <>
            {/* Header inside drawer */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6" fontWeight={700}>
                {selected.title}
              </Typography>
              <IconButton onClick={() => setSelected(null)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider sx={{ my: 2 }} />

            {/* Foto kryesore */}
            <img
              src={activeImage}
              alt={selected.title}
              style={{
                width: "100%",
                height: "280px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            />

            {/* Thumbnails */}
            {selected.images && selected.images.length > 1 && (
              <Grid container spacing={1} sx={{ mb: 2 }}>
                {selected.images.map((img, idx) => (
                  <Grid item xs={4} key={idx}>
                    <img
                      src={img}
                      alt={`${selected.title}-${idx}`}
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
                        transition: "all 0.3s ease",
                      }}
                      onClick={() => setActiveImage(img)}
                    />
                  </Grid>
                ))}
              </Grid>
            )}

            {/* Përshkrimi */}
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2, whiteSpace: "pre-line" }}
            >
              {selected.text}
            </Typography>

            {selected.options && (
              <Typography
                variant="caption"
                sx={{ fontStyle: "italic", color: "text.secondary" }}
              >
                {selected.options}
              </Typography>
            )}
          </>
        )}
      </Drawer>
    </Box>
  );
}
