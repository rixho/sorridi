// src/components/sections/StatsSection.jsx
import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Grid, Fade } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MapIcon from "@mui/icons-material/Map";
import DiamondIcon from "@mui/icons-material/Diamond";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PublicIcon from "@mui/icons-material/Public";

// Lista e statistikave (pa ngjyrë të paracaktuar për ikonat)
const stats = [
  { icon: <StarOutlineIcon />, number: 15, suffix: "+", label: "EXCLUSIVE YACHTS" },
  { icon: <CalendarMonthIcon />, number: 120, suffix: "+", label: "CHARTER DAYS PER SEASON" },
  { icon: <MapIcon />, number: 10, suffix: "+", label: "RIVIERA DESTINATIONS" },
  { icon: <DiamondIcon />, number: 10, suffix: "+", label: "LUXURY SERVICES" },
  { icon: <SupportAgentIcon />, number: 24, suffix: "/7", label: "CONCIERGE SERVICE" },
  { icon: <PublicIcon />, number: 1300, suffix: "+", label: "TRUSTED BY GLOBAL TRAVELERS" },
];

// Hook që numëron gradualisht deri në vlerën e caktuar sapo seksioni bëhet i dukshëm
function useCountUp(target, trigger) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    setValue(0);
    let start = null;
    const duration = 1500; // kohëzgjatja e animacionit në ms
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) frame.current = requestAnimationFrame(animate);
    };
    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, [target, trigger]);

  return value;
}

export default function StatsSection() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  // Observer për të aktivizuar animacionet kur seksioni shfaqet në viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setVisible(entries[0].isIntersecting),
      { threshold: 0.4 }
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
        marginLeft: "-50.5vw",
        left: "50%",
        py: { xs: 6, md: 9 },
        backgroundColor: "#E6E6E6", // sfondi gri i lehtë
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Box sx={{ maxWidth: "1300px", mx: "auto", textAlign: "center", px: 2 }}>
        {/* Titulli kryesor me highlight të artë për “IN ALBANIA” */}
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.4rem" },
            color: "#141F2F",
            textTransform: "uppercase",
            mb: { xs: 2, md: 3 },
          }}
        >
          REDEFINING LUXURY YACHTING{" "}
          <span style={{ color: "#D4AF37" }}>IN ALBANIA</span>
        </Typography>

        {/* Paragrafi nën titull */}
        <Typography
          sx={{
            maxWidth: "850px",
            mx: "auto",
            mb: { xs: 5, md: 6 },
            color: "#454545",
            fontWeight: 300,
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            lineHeight: 1.6,
            letterSpacing: "-0.02em",
          }}
        >
          At Aura Voyage, we blend world-class yachting with the hidden beauty
          of the Albanian Riviera. From handpicked yachts to bespoke services,
          we create unforgettable journeys across one of the Mediterranean’s
          last untouched coastlines.
        </Typography>

        {/* Statistikat pa karta – vetëm ikonë, numër dhe etiketë */}
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          justifyContent="center"
          alignItems="center"
        >
          {stats.map((stat, idx) => {
            const count = useCountUp(stat.number, visible);
            return (
              <Grid
                key={idx}
                item
                xs={12}
                sm={6}
                md={4}
                display="flex"
                justifyContent="center"
              >
                {/* Animacion i butë ndërsa shfaqen elementët */}
                <Fade in={visible} style={{ transitionDelay: `${idx * 150}ms` }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    {/* Ikona brenda kutie të lehtë gri me kënde të rrumbullakosura */}
                    <Box
                      sx={{
                        backgroundColor: "#F5F5F5",
                        borderRadius: 2,
                        p: 1.5,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 1.5,
                      }}
                    >
                      {React.cloneElement(stat.icon, {
                        sx: {
                          fontSize: { xs: 40, sm: 48, md: 52 },
                          color: "#D4AF37",
                        },
                      })}
                    </Box>

                    {/* Numri – i animuar dhe në ngjyrë të errët */}
                    <Typography
                      sx={{
                        fontWeight: 700,
                        color: "#141F2F",
                        fontSize: { xs: "1.8rem", md: "2.1rem" },
                        mt: 0.5,
                      }}
                    >
                      {count}
                      {stat.suffix}
                    </Typography>

                    {/* Etiketa – e vogël dhe uppercase */}
                    <Typography
                      sx={{
                        fontWeight: 400,
                        color: "#141F2F",
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        letterSpacing: 0.5,
                        textTransform: "uppercase",
                        mt: 0.25,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Fade>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
