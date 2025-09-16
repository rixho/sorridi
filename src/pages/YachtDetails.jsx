import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Button,
  Stack,
  Container,
  Chip,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import yachts from "../data/yachts.json";
import destinations from "../data/destinations.json";
import EnquiryForm from "../components/EnquiryForm";

// Default marker icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function YachtDetails() {
  const { id } = useParams();
  const yacht = yachts.find(
    (y) => String(y.id) === id || String(y.slug) === id
  );

  const [mainImage, setMainImage] = useState(yacht?.images?.[0]);
  const [openEnquiry, setOpenEnquiry] = useState(false);

  if (!yacht) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h6">Yacht not found</Typography>
      </Container>
    );
  }

  return (
    <Box>
      {/* Hero gallery */}
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#f8f9fb"
              : theme.palette.background.default,
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
                  alt={yacht.name}
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
                    {yacht.name}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={400}>
                    {yacht.shortDescription ||
                      "Luxury motor yacht for unforgettable journeys."}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Thumbnail-et djathtas */}
            <Grid item xs={12} md={3}>
              <Stack spacing={1} sx={{ maxHeight: 500, overflowY: "auto" }}>
                {yacht.images?.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${yacht.name}-${i}`}
                    style={{
                      width: "100%",
                      height: 100,
                      objectFit: "cover",
                      borderRadius: 6,
                      cursor: "pointer",
                      border:
                        mainImage === img
                          ? "2px solid #1976d2"
                          : "1px solid #ddd",
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
        <Grid container spacing={4}>
          {/* Highlights */}
          <Grid item xs={12} md={7}>
            <Typography variant="h5" gutterBottom>
              Highlights
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              {yacht.description}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              sx={{ mb: 3, flexWrap: "wrap" }}
            >
              {yacht.special_features?.map((f, i) => (
                <Chip key={i} label={f} />
              ))}
            </Stack>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Button variant="contained" onClick={() => setOpenEnquiry(true)}>
                Enquire
              </Button>
              <Button variant="outlined">Download brochure</Button>
            </Stack>
          </Grid>

          {/* Spec table */}
          <Grid item xs={12} md={5}>
            <Paper variant="outlined" sx={{ borderRadius: 2 }}>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell>Length</TableCell>
                    <TableCell>{yacht.length_m} m</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Year</TableCell>
                    <TableCell>{yacht.year}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Builder</TableCell>
                    <TableCell>{yacht.builder}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Guests</TableCell>
                    <TableCell>{yacht.guests}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Crew</TableCell>
                    <TableCell>{yacht.crew}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />

        {/* Extended Info */}
        <Typography variant="h5" gutterBottom>
          More Information
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          {yacht.moreInfo ||
            "This yacht is perfect for exploring the Mediterranean, offering luxury and comfort for long voyages."}
        </Typography>

        <Divider sx={{ my: 5 }} />

        {/* Map with Albanian beaches */}
        <Typography variant="h5" gutterBottom>
          Explore Destinations in Albania
        </Typography>
        <Box sx={{ height: 400, borderRadius: 2, overflow: "hidden", mt: 2 }}>
          <MapContainer
            center={[40.1, 19.7]}
            zoom={8}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
           {destinations
  .filter((d) => typeof d.lat === "number" && typeof d.lng === "number")
  .map((d, i) => {
    const customIcon = L.icon({
      iconUrl: d.heroImage, // përdorim imazhin e destinacionit
      iconSize: [40, 40],   // madhësia e ikonës
      iconAnchor: [20, 40], // pika që prek hartën
      popupAnchor: [0, -40], // pozicioni i popup
      className: "destination-marker"
    });

    return (
      <Marker key={i} position={[d.lat, d.lng]} icon={customIcon}>
        <Popup>
          <Box sx={{ textAlign: "center" }}>
            <img
              src={d.heroImage}
              alt={d.title}
              style={{
                width: "100%",
                maxHeight: 120,
                objectFit: "cover",
                borderRadius: 6,
                marginBottom: 8,
              }}
            />
            <Typography variant="subtitle1" fontWeight={600}>
              {d.title}
            </Typography>
            <Button
              size="small"
              component={Link}
              to={`/destinations/${d.id}`}
              sx={{ mt: 1 }}
            >
              More info
            </Button>
          </Box>
        </Popup>
      </Marker>
    );
  })}

          </MapContainer>
        </Box>
      </Container>

      {/* Enquiry Form Modal */}
      <EnquiryForm
        open={openEnquiry}
        onClose={() => setOpenEnquiry(false)}
        yacht={yacht}
      />
    </Box>
  );
}
