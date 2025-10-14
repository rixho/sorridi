// src/components/destinations/DiscoverAlbania.jsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

export default function DiscoverAlbania() {
  return (
    <Box
      sx={{
        width: "100vw",
        position: "relative",
        left: "50%",
        marginLeft: "-50.5vw",
      }}
    >
      {/* Foto full-width */}
      <Box sx={{ position: "relative", height: { xs: 400, md: 650 } }}>
        <img
          src="/media/liberty/main.jpg" // FOTO TEST
          alt="Discover Albania"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Bulletpoints të shpërndara */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            top: "15%",
            right: "5%",
            color: "#fff",
            textAlign: "right",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={900}
            sx={{ lineHeight: 1.2 }}
          >
            100+
          </Typography>
          <Typography variant="h6">International Guests Each Year</Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          style={{
            position: "absolute",
            top: "40%",
            left: "8%",
            color: "#fff",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={900}
            sx={{ lineHeight: 1.2 }}
          >
            120+
          </Typography>
          <Typography variant="h6">Charter Days Per Season</Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          style={{
            position: "absolute",
            bottom: "15%",
            right: "10%",
            color: "#fff",
            textAlign: "right",
          }}
        >
          <Typography
            variant="h3"
            fontWeight={900}
            sx={{ lineHeight: 1.2 }}
          >
            1
          </Typography>
          <Typography variant="h6">Hidden Riviera Yours To Discover</Typography>
        </motion.div>
      </Box>

      {/* Teksti poshtë fotos */}
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 6, md: 10 },
          backgroundColor: "#F5F5F5",
        }}
      >
        <Typography
                variant="overline"
                sx={{
                  color: "#0d1b2a",
                  letterSpacing: 2,
                  display: "block",
                  mb: 1,
                  position: "relative",
                  fontSize: "0.85rem",
                }}
              >
                FIND YOUR YACHT
                <Box
                  sx={{
                    width:180,
                    height: 2,
                    backgroundColor: "#8B1E2D",
                    mx: "auto",
                    mt: 1,
                  }}
                />
              </Typography>
        <Typography
          variant="h4"
          fontWeight={700}
          sx={{ mt: 2, mb: 3, color: "#0d1b2a" }}
        >
        READY TO DISCOVER ALBANIA?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: "700px", mx: "auto", mb: 4 }}
        >
          Let our Albanian destination experts help you plan the perfect charter
          itinerary along Europe’s last untouched coastline
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#0d1b2a",
            color: "#fff",
            px: 4,
            py: 1.5,
            "&:hover": { bgcolor: "#16324f" },
          }}
        >
          Plan Your Voyage
        </Button>
      </Box>
    </Box>
  );
}
