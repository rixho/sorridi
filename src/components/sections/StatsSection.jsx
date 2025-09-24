// src/components/sections/StatsSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MapIcon from "@mui/icons-material/Map";
import DiamondIcon from "@mui/icons-material/Diamond";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PublicIcon from "@mui/icons-material/Public";

const stats = [
  {
    icon: <StarOutlineIcon sx={{ fontSize: 40, color: "#d4a017" }} />,
    number: 15,
    suffix: "+",
    label: "EXCLUSIVE YACHTS",
  },
  {
    icon: <CalendarMonthIcon sx={{ fontSize: 40, color: "#d4a017" }} />,
    number: 120,
    suffix: "+",
    label: "CHARTER DAYS PER SEASON",
  },
  {
    icon: <MapIcon sx={{ fontSize: 40, color: "#d4a017" }} />,
    number: 10,
    suffix: "+",
    label: "RIVIERA DESTINATIONS",
  },
  {
    icon: <DiamondIcon sx={{ fontSize: 40, color: "#d4a017" }} />,
    number: 10,
    suffix: "+",
    label: "LUXURY SERVICES",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: "#d4a017" }} />,
    number: 24,
    suffix: "/7",
    label: "CONCIERGE SERVICE",
  },
  {
    icon: <PublicIcon sx={{ fontSize: 40, color: "#d4a017" }} />,
    number: 1300,
    suffix: "+",
    label: "TRUSTED BY GLOBAL TRAVELERS",
  },
];

function useCountUp(target, startWhenVisible) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    if (!startWhenVisible) return;

    let start = null;
    const duration = 1500; // 1.5s animacion
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) {
        frame.current = requestAnimationFrame(animate);
      }
    };
    frame.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame.current);
  }, [target, startWhenVisible]);

  return value;
}

export default function StatsSection() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  // Observer për të kapur kur seksioni shfaqet
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        py: { xs: 8, md: 12 },
        backgroundColor: "#E6E6E6",
        textAlign: "center",
      }}
    >
      {/* Titulli */}
      <Typography
        variant="h5"
        fontWeight={700}
        gutterBottom
        sx={{ textTransform: "uppercase", letterSpacing: 1 }}
      >
        REDEFINING LUXURY YACHTING{" "}
        <span style={{ color: "#d4a017" }}>IN ALBANIA</span>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: "800px",
          mx: "auto",
          mb: 6,
          color: "text.secondary",
        }}
      >
        At Aura Voyage, we blend world-class yachting with the hidden beauty of
        the Albanian Riviera. From handpicked yachts to bespoke services, we
        create unforgettable journeys across one of the Mediterranean’s last
        untouched coastlines.
      </Typography>

      {/* Grid me statistika */}
      <Grid container spacing={6} justifyContent="center">
        {stats.map((s, idx) => {
          const count = useCountUp(s.number, visible);
          return (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <Box>
                {s.icon}
                <Typography
                  variant="h6"
                  fontWeight={700}
                  sx={{ mt: 2, mb: 1, color: "#0d1b2a" }}
                >
                  {count}
                  {s.suffix}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {s.label}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
