// src/pages/YachtDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import yachts from "../data/yachts.json";
import Hero from "../components/charterdetails/Hero";
import Gallery from "../components/charterdetails/Gallery";
import About from "../components/charterdetails/About";
import Specifications from "../components/charterdetails/Specifications";


export default function YachtDetails() {
  const { id } = useParams();
  const yacht = yachts.find(
    (y) => String(y.id) === id || String(y.slug) === id
  );

  if (!yacht) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h6">Yacht not found</Typography>
      </Container>
    );
  }

  return (
    <>
      <Hero yacht={yacht} />
      <Gallery yacht={yacht} />
      <About yacht={yacht} />
      <Specifications yacht={yacht} />

    </>
  );
}
