// src/pages/DestinationDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import iteneraries from "../data/iteneraries.json";

// Importo seksionet që kemi krijuar
import Hero from "../components/destinationdetails/Hero";
import Locations from "../components/destinationdetails/Locations";
import LocationsList from "../components/destinationdetails/LocationsList";
import YachtsForCharter from "../components/destinations/YachtsForCharter";
import CTASection from "../components/destinationdetails/CTASection";

// import MapSection from "../components/destinationdetails/MapSection";

export default function DestinationDetails() {
  const { id } = useParams();
  const itinerary = iteneraries.find((d) => String(d.id) === id);

  if (!itinerary) {
    return <h2>Destination not found</h2>;
  }

  return (
    <>
      <Hero destination={itinerary} />
      {/* Seksoni i dytë: Teksti në qendër */}
<Box
  sx={{
    width: "100%",
    maxWidth: "1000px",
    mx: "auto",
    py: { xs: 6, md: 10 },
    px: 3,
    textAlign: "center",
  }}
>
  <Typography
    variant="body1"
    sx={{
      color: "#333",
      fontSize: { xs: "1rem", md: "1.15rem" },
      lineHeight: 1.9,
      letterSpacing: "0.3px",
      fontWeight: 400,
    }}
  >
    Immerse yourself in the raw beauty of Albania’s Karaburun Peninsula, 
    where secluded coves, sheer cliffs, and shimmering turquoise waters 
    create a world apart. Drop anchor in hidden bays like Shën Jani or 
    Shëngjergji, snorkel through crystal-clear shallows, or simply drift 
    in complete tranquility. With its pristine landscapes, rich marine life, 
    and authentic Mediterranean spirit, Karaburun offers a yacht charter 
    experience that feels both exclusive and untouched—perfect for those 
    seeking discovery off the beaten path.
  </Typography>
</Box>

<Locations mapMarkers={itinerary.mapMarkers} locations={itinerary.locations} />
<YachtsForCharter />

<LocationsList locations={itinerary.locations} />
<CTASection cta={itinerary.cta} />
    </>
  );
}
