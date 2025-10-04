// src/components/about/Dedication.jsx
import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";

export default function Dedication() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        backgroundColor: "#F5F5F5",
        px: { xs: 2, md: 6 },
        py: { xs: 6, md: 10 },
      }}
    >
      {/* Titulli mbi seksion */}
      <Typography
        variant="overline"
        sx={{
          display: "block",
          textAlign: "center",
          letterSpacing: 2,
          mb: 1,
          color: "text.secondary",
        }}
      >
        DEDICATION
      </Typography>
      <Divider
        sx={{
          width: 60,
          mx: "auto",
          borderBottomWidth: 2,
          borderColor: "#b71c1c",
          mb: 6,
        }}
      />

      <Grid
        container
        spacing={6}
        justifyContent="center"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="stretch" // 👉 e bën që fotoja të shtrihet
      >
        {/* Foto majtas */}
        <Grid item xs={12} md={5} sx={{ display: "flex" }}>
          <Box
            component="img"
            src="/media/1.jpg"
            alt="Yacht in Albania"
            sx={{
              width: "100%",
              height: { xs: 300, md: "100%" },
              minHeight: { md: 420 }, // 👉 pak më e gjatë se teksti
              maxHeight: { md: 520 },
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
              alignSelf: "stretch", // 👉 shtrihet pak më lart e poshtë
            }}
          />
        </Grid>

        {/* Teksti djathtas */}
        <Grid item xs={12} md={7} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{ mb: 3, color: "#0d1b2a" }}
          >
            Shaping the Future of Yachting in{" "}
            <span style={{ color: "#d4a017" }}>Albania</span>
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
            Aura Voyage is the premier yacht brokerage company in the Albanian
            Riviera. Yacht owners and charterers, as well as family offices and
            corporate service providers, have come to rely on our professional
            approach, unparalleled expertise, deep market insight and extensive
            portfolio of services.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
            We have a dedicated team of superyacht experts and renowned brokers,
            respected for their extremely high standards and unwavering
            commitment to excellence in all areas of the business. Our team
            members have all been selected for their enthusiasm and extensive
            industry knowledge, coupled with a strong ability to think
            innovatively and be solution-oriented.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.8 }}>
            Our comprehensive approach ensures accurate targeting and maximum
            visibility for the yacht listings we represent for sale and charter.
            Our unmatched local expertise allows us to deliver truly unique
            insight and services for our clients, on a level that simply can’t
            be matched by other operators.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            By championing excellence in service, ethics, and sustainability,
            Aura Voyage is highly respected within the industry and has become
            the first choice for owners, charterers, captains, and crew alike in
            the Albanian maritime sector.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
