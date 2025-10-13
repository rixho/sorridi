// src/components/priveservice/GourmetChampagne.jsx
import { Box, Grid, Typography, Button } from "@mui/material";

export default function GourmetChampagne() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        backgroundColor: "#fff",
        py: { xs: 8, md: 12 }, // më shumë hapësirë sipër & poshtë
      }}
    >
      {/* 🍽️ Gourmet Catering */}
      <Grid
        container
        spacing={0}
        sx={{
          minHeight: { xs: 420, md: 600 },
          alignItems: "center",
          px: { xs: 2, md: 8 },
        }}
      >
        {/* Foto */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/media/prive/helicopter.jpg"
            alt="Gourmet Catering"
            sx={{
              width: "100%",
              height: { xs: 280, md: 550 },
              objectFit: "cover",
              display: "block",
              borderRadius: { xs: 0, md: 2 },
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            }}
          />
        </Grid>

        {/* Teksti */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: { xs: 3, md: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              mb: 2,
              color: "#141F2F",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Gourmet Catering
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#454545",
              lineHeight: 1.9,
              mb: 3,
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: 600,
            }}
          >
            Indulge in an exceptional culinary experience at sea. Our top
            international chefs design bespoke menus tailored to your tastes,
            from Mediterranean seafood feasts to multi-course fine dining. Every
            dish is prepared with premium ingredients and artfully presented,
            perfectly paired with select wines and vintage champagnes. Whether
            it’s a romantic dinner under the stars or a festive banquet for
            friends, we transform your yacht into a floating restaurant of the
            highest standard.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0D1B2A",
              alignSelf: "flex-start",
              px: 4,
              py: 1.2,
              fontWeight: 600,
              textTransform: "uppercase",
              "&:hover": { backgroundColor: "#8B1E2D" },
            }}
          >
            Request Your Bespoke Menu
          </Button>
        </Grid>
      </Grid>

      {/* 🥂 Sommelier & Champagne Service */}
      <Grid
        container
        spacing={0}
        sx={{
          minHeight: { xs: 420, md: 600 },
          mt: { xs: 10, md: 14 }, // më shumë hapësirë midis dy seksioneve
          alignItems: "center",
          flexDirection: { xs: "column", md: "row-reverse" },
          px: { xs: 2, md: 8 },
        }}
      >
        {/* Foto */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/media/prive/helicopter.jpg"
            alt="Sommelier & Champagne Service"
            sx={{
              width: "100%",
              height: { xs: 280, md: 550 },
              objectFit: "cover",
              display: "block",
              borderRadius: { xs: 0, md: 2 },
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
            }}
          />
        </Grid>

        {/* Teksti */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: { xs: 3, md: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              mb: 2,
              color: "#141F2F",
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Sommelier & Champagne Service
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#454545",
              lineHeight: 1.9,
              mb: 3,
              fontSize: { xs: "1rem", md: "1.1rem" },
              maxWidth: 600,
            }}
          >
            Enhance your voyage with an on-board sommelier who curates rare
            wines and prestige champagnes from the world’s most celebrated
            vineyards. Enjoy guided tastings, food pairings, or elegant sunset
            toasts, all tailored to your preferences. From Dom Pérignon to
            limited-edition vintages, every pour is served at the perfect moment
            and temperature, turning each sip into an unforgettable celebration
            of the senses.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0D1B2A",
              alignSelf: "flex-start",
              px: 4,
              py: 1.2,
              fontWeight: 600,
              textTransform: "uppercase",
              "&:hover": { backgroundColor: "#8B1E2D" },
            }}
          >
            Book Your Private Tasting
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
