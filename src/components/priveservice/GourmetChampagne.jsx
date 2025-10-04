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
        mt: { xs: 6, md: 10 }, // hapësirë nga seksioni sipër
      }}
    >
      {/* Gourmet Catering */}
      <Grid container spacing={0} sx={{ minHeight: { xs: 400, md: 550 } }}>
        {/* Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/media/prive/helicopter.jpg"
            alt="Gourmet Catering"
            sx={{
              width: "100%",
              height: { xs: 250, md: 550 }, // kontroll i lartësisë
              objectFit: "cover",           // crop proporcional
              display: "block",
            }}
          />
        </Grid>

        {/* Text */}
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
          <Typography variant="h5" fontWeight={700} gutterBottom>
            GOURMET CATERING
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              lineHeight: 1.9,
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            Indulge in an exceptional culinary experience at sea. Our top international chefs design bespoke menus
            tailored to your tastes, from Mediterranean seafood feasts to multi-course fine dining. Every dish is
            prepared with premium ingredients and artfully presented, perfectly paired with select wines and vintage
            champagnes. Whether it’s a romantic dinner under the stars or a festive banquet for friends, we transform
            your yacht into a floating restaurant of the highest standard.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0d1b2a",
              alignSelf: "flex-start",
              px: 4,
              py: 1.2,
            }}
          >
            REQUEST YOUR BESPOKE MENU
          </Button>
        </Grid>
      </Grid>

      {/* Champagne Service */}
      <Grid
        container
        spacing={0}
        sx={{
          minHeight: { xs: 400, md: 550 },
          flexDirection: { xs: "column", md: "row-reverse" },
        }}
      >
        {/* Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/media/prive/helicopter.jpg"
            alt="Champagne Service"
            sx={{
              width: "100%",
              height: { xs: 250, md: 550 },
              objectFit: "cover",
              display: "block",
            }}
          />
        </Grid>

        {/* Text */}
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
          <Typography variant="h5" fontWeight={700} gutterBottom>
            SOMMELIER & CHAMPAGNE SERVICE
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              lineHeight: 1.9,
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            Enhance your voyage with an on-board sommelier who curates rare wines and prestige champagnes from the
            world’s most celebrated vineyards. Enjoy guided tastings, food pairings, or elegant sunset toasts, all
            tailored to your preferences. From Dom Pérignon to limited-edition vintages, every pour is served at the
            perfect moment and temperature, turning each sip into an unforgettable celebration of the senses.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0d1b2a",
              alignSelf: "flex-start",
              px: 4,
              py: 1.2,
            }}
          >
            BOOK YOUR PRIVATE TASTING
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
