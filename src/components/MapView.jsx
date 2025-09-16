import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useTheme } from "@mui/material";
import "leaflet/dist/leaflet.css";

export default function MapView({ items=[] }){
  const theme = useTheme();
  const dark = theme.palette.mode === "dark";
  const center = [41.3275, 19.8187]; // Tirana
  return (
    <div style={{ height: 480, width: '100%', borderRadius: 12, overflow:'hidden' }}>
      <MapContainer center={center} zoom={3} style={{ height: '100%', width: '100%' }}>
        <TileLayer url={dark ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png" : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"} />
        {items.map((y, idx)=> (
          y.coords ? (
            <Marker key={idx} position={[y.coords.lat, y.coords.lng]}>
              <Popup>
                <strong>{y.name}</strong><br/>
                {y.builder} • {y.length_m}m
              </Popup>
            </Marker>
          ) : null
        ))}
      </MapContainer>
    </div>
  );
}
