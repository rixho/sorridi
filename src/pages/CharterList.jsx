import React from "react";
import { Grid, Box, Typography, Stack, Container, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import yachtsData from "../data/yachts.json";
import YachtCard from "../components/YachtCard";
import SortBar from "../components/Filters/SortBar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import destinations from "../data/destinations.json"; // destinacionet shqiptare

// Custom Leaflet icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function CharterList() {
  const [items, setItems] = React.useState([]);
  const [sort, setSort] = React.useState("newest");
  const navigate = useNavigate();

  const applySort = (arr, s) => {
    const a = [...arr];
    switch (s) {
      case "length_desc":
        return a.sort((x, y) => (y.length_m || 0) - (x.length_m || 0));
      case "length_asc":
        return a.sort((x, y) => (x.length_m || 0) - (y.length_m || 0));
      case "year_desc":
        return a.sort((x, y) => (y.year || 0) - (x.year || 0));
      case "year_asc":
        return a.sort((x, y) => (x.year || 0) - (y.year || 0));
      default:
        return a;
    }
  };

  React.useEffect(() => {
    const out = yachtsData.filter((y) => y.status === "for-charter");
    setItems(applySort(out, sort));
  }, [sort]);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Yachts for Charter
      </Typography>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ mb: 1 }}>
        <SortBar value={sort} onChange={setSort} />
      </Stack>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        {items.map((y) => (
          <Grid key={y.id} item xs={12} sm={6} md={4}>
            <YachtCard yacht={y} />
          </Grid>
        ))}
      </Grid>

      {/* Harta e destinacioneve shqiptare */}
      <Container sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Explore Destinations in Albania
        </Typography>
        <Box sx={{ height: 400, borderRadius: 2, overflow: "hidden" }}>
          <MapContainer
            center={[40.1, 19.7]}
            zoom={8}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {destinations
              .filter((d) => typeof d.lat === "number" && typeof d.lng === "number")
              .map((d, i) => (
                <Marker
                  key={i}
                  position={[d.lat, d.lng]}
                  icon={customIcon}
                  eventHandlers={{
                    click: () => navigate(`/destinations/${d.id}`), // ridrejton direkt
                  }}
                >
                  <Popup>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {d.title}
                    </Typography>
                    <Button
                      size="small"
                      component={Link}
                      to={`/destinations/${d.id}`}
                    >
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
