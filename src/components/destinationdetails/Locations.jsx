import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import {
  Drawer,
  Box,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const yachtIcon = new L.Icon({
  iconUrl: "/media/marker.png",
  iconSize: [35, 35],
  iconAnchor: [17, 34],
});

// FitBounds helper
function FitBounds({ markers }) {
  const map = useMap();

  useEffect(() => {
    if (markers.length > 0) {
      const bounds = L.latLngBounds(markers.map((m) => [m.lat, m.lng]));
      map.fitBounds(bounds, { padding: [200, 200], maxZoom: 12 }); 
      // padding i madh dhe maxZoom i kufizuar që të mos afrohet shumë
    }
  }, [markers, map]);

  return null;
}

export default function Locations({ mapMarkers = [], locations = [] }) {
  const [selected, setSelected] = useState(null);

  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50vw",
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
        zoom={9} // fillon më larg
        style={{
          height: "500px", 
          width: "100%",
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
              icon={yachtIcon}
              eventHandlers={{ click: () => setSelected(m) }}
            />
          ))}
      </MapContainer>

      {/* Drawer për lokacionin */}
      <Drawer
        anchor="right"
        open={!!selected}
        onClose={() => setSelected(null)}
        PaperProps={{ sx: { width: { xs: "100%", md: 400 }, p: 3 } }}
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

        {selected &&
          locations
            .filter((l) => l.title.includes(selected.title))
            .map((l) => (
              <Box key={l.id}>
                <img
                  src={l.image}
                  alt={l.title}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    marginBottom: "16px",
                  }}
                />
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {l.text}
                </Typography>
                <Typography variant="caption" sx={{ fontStyle: "italic" }}>
                  {l.options}
                </Typography>
              </Box>
            ))}
      </Drawer>
    </Box>
  );
}
