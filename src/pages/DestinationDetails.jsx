import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Container,
  Stack,
  Divider,
  Button,
} from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import destinations from "../data/destinations.json";

// Default marker icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function DestinationDetails() {
  const { id } = useParams();
  const destination = destinations.find((d) => String(d.id) === id);

  const [mainImage, setMainImage] = useState(destination?.images?.[0] || destination?.heroImage);

  if (!destination) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h6">Destination not found</Typography>
      </Container>
    );
  }

  return (
    <Box>
      {/* Hero gallery */}
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light" ? "#f8f9fb" : theme.palette.background.default,
          py: 4,
        }}
      >
        <Container>
          <Grid container spacing={2} alignItems="flex-start">
            {/* Foto kryesore */}
            <Grid item xs={12} md={9}>
              <Box sx={{ position: "relative" }}>
                <img
                  src={mainImage}
                  alt={destination.title}
                  style={{
                    width: "100%",
                    height: 500,
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 20,
                    left: 20,
                    color: "#fff",
                    textShadow: "0 2px 6px rgba(0,0,0,0.7)",
                  }}
                >
                  <Typography variant="h3" fontWeight={700}>
                    {destination.title}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={400}>
                    {destination.excerpt}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Thumbnail-et djathtas */}
            <Grid item xs={12} md={3}>
              <Stack spacing={1} sx={{ maxHeight: 500, overflowY: "auto" }}>
                {(destination.images || [destination.heroImage]).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${destination.title}-${i}`}
                    style={{
                      width: "100%",
                      height: 100,
                      objectFit: "cover",
                      borderRadius: 6,
                      cursor: "pointer",
                      border: mainImage === img ? "2px solid #1976d2" : "1px solid #ddd",
                    }}
                    onClick={() => setMainImage(img)}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main content */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h5" gutterBottom>
          About {destination.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {destination.description}
        </Typography>

        <Divider sx={{ my: 5 }} />

        {/* Map with ALL destinations */}
        <Typography variant="h5" gutterBottom>
          Explore More Destinations
        </Typography>
        <Box sx={{ height: 400, borderRadius: 2, overflow: "hidden", mt: 2 }}>
          <MapContainer
            center={[destination.lat || 40.1, destination.lng || 19.7]}
            zoom={7}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {destinations
              .filter((d) => typeof d.lat === "number" && typeof d.lng === "number")
              .map((d, i) => (
                <Marker key={i} position={[d.lat, d.lng]}>
                  <Popup>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {d.title}
                    </Typography>
                    <Button size="small" component={Link} to={`/destinations/${d.id}`}>
                      More info
                    </Button>
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        </Box>
      </Container>
    </Box>
  );
}
