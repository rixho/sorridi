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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// ✅ Ikonat rrethore
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

// ✅ FitBounds për të fokusuar markerët
function FitBounds({ markers, isMobile }) {
  const map = useMap();
  useEffect(() => {
    if (markers.length > 0) {
      const bounds = L.latLngBounds(markers.map((m) => [m.lat, m.lng]));
      map.fitBounds(bounds, {
        padding: isMobile ? [80, 80] : [200, 200],
        maxZoom: isMobile ? 8.3 : 12,
      });
    }
  }, [markers, map, isMobile]);
  return null;
}

export default function Locations({ mapMarkers = [], locations = [] }) {
  const [selected, setSelected] = useState(null);
  const [activeImage, setActiveImage] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // ✅ Kur klikojmë marker, hapim drawer-in
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
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        backgroundColor: "#fff",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
      }}
    >
      {/* Header */}
      <Box textAlign="center" mb={4} sx={{ px: 2 }}>
        <Typography
          variant="overline"
          sx={{ color: "#0d1b2a",
              letterSpacing: 2,
              display: "block",
              mb: 1,}}
        >
          SECLUDED SHORES & UNTAMED BEAUTY
        </Typography>
         <Divider
                  sx={{
                    width: 360,
                    mx: "auto",
                    borderBottomWidth: 2,
                    borderColor: "#8B1E2D",
                    mb: 2,
                  }}
                />
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{  fontWeight: 700,
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
            textTransform: "uppercase",
            color: "#141F2F",
            lineHeight: 1.05,}}
        >
          Hidden coves, crystal waters, and dramatic cliffs
        </Typography>
      </Box>

      {/* 🌍 Harta */}
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          left: "50%",
          marginLeft: "-50vw",
          height: isMobile ? "100vh" : { xs: 500, md: 700 },
          overflow: "hidden",
        }}
      >
        <MapContainer
          center={isMobile ? [39.95, 19.8] : [40.05, 19.8]}
          zoom={isMobile ? 8.3 : 9.5}
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
          <FitBounds markers={mapMarkers} isMobile={isMobile} />

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
      </Box>

      {/* Drawer për informacionet */}
      <Drawer
        anchor="right"
        open={!!selected}
        onClose={() => setSelected(null)}
        PaperProps={{
          sx: {
            width: { xs: "100%", md: 460 },
            p: 3,
            backgroundColor: "#fafafa",
          },
        }}
      >
        {selected && (
          <>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6" fontWeight={700} color="#0D1B2A">
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
              sx={{ mb: 2, lineHeight: 1.8 }}
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
