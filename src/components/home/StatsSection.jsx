import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Grid, Fade } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MapIcon from "@mui/icons-material/Map";
import DiamondIcon from "@mui/icons-material/Diamond";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PublicIcon from "@mui/icons-material/Public";

const stats = [
  {
    icon: <StarOutlineIcon sx={{ fontSize: { xs: 45, sm: 55, md: 60 }, color: "#d4a017" }} />,
    number: 15,
    suffix: "+",
    label: "EXCLUSIVE YACHTS",
  },
  {
    icon: <CalendarMonthIcon sx={{ fontSize: { xs: 45, sm: 55, md: 60 }, color: "#d4a017" }} />,
    number: 120,
    suffix: "+",
    label: "CHARTER DAYS PER SEASON",
  },
  {
    icon: <MapIcon sx={{ fontSize: { xs: 45, sm: 55, md: 60 }, color: "#d4a017" }} />,
    number: 10,
    suffix: "+",
    label: "RIVIERA DESTINATIONS",
  },
  {
    icon: <DiamondIcon sx={{ fontSize: { xs: 45, sm: 55, md: 60 }, color: "#d4a017" }} />,
    number: 10,
    suffix: "+",
    label: "LUXURY SERVICES",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: { xs: 45, sm: 55, md: 60 }, color: "#d4a017" }} />,
    number: 24,
    suffix: "/7",
    label: "CONCIERGE SERVICE",
  },
  {
    icon: <PublicIcon sx={{ fontSize: { xs: 45, sm: 55, md: 60 }, color: "#d4a017" }} />,
    number: 1300,
    suffix: "+",
    label: "TRUSTED BY GLOBAL TRAVELERS",
  },
];

// ✅ Hook që rrit numrin nga 0 → target çdo herë që është visible
function useCountUp(target, trigger) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    setValue(0);
    let start = null;
    const duration = 1500;
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

  // ✅ Observer që ndez dhe fik animacionin sa herë seksioni shfaqet ose largohet
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisible(entries[0].isIntersecting);
      },
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
        left: "50%",
        right: "50%",
        marginLeft: "-50.5vw",
        marginRight: "-50vw",
        py: { xs: 6, md: 9 },
        backgroundColor: "#E6E6E6",
      }}
    >
      <Box sx={{ maxWidth: "1300px", mx: "auto", textAlign: "center" }}>
        <Typography
          variant="h4"
          fontWeight={700}
          gutterBottom
          sx={{
            textTransform: "uppercase",
            letterSpacing: 1,
            mb: { xs: 2, md: 3 },
            fontSize: { xs: "1.4rem", sm: "1.7rem", md: "2rem" },
            color: "#0d1b2a",
          }}
        >
          REDEFINING LUXURY YACHTING{" "}
          <span style={{ color: "#d4a017" }}>IN ALBANIA</span>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: "850px",
            mx: "auto",
            mb: { xs: 5, md: 6 },
            color: "text.secondary",
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            lineHeight: 1.7,
          }}
        >
          At Aura Voyage, we blend world-class yachting with the hidden beauty
          of the Albanian Riviera. From handpicked yachts to bespoke services,
          we create unforgettable journeys across one of the Mediterranean’s
          last untouched coastlines.
        </Typography>

        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          justifyContent="center"
          alignItems="center"
        >
          {stats.map((s, idx) => {
            const count = useCountUp(s.number, visible);
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
                <Fade in={visible} style={{ transitionDelay: `${idx * 150}ms` }}>
                  <Box
                    sx={{
                      backgroundColor: "rgba(255,255,255,0.9)",
                      borderRadius: 3,
                      height: { xs: 170, sm: 190, md: 210 },
                      width: { xs: "85%", sm: "80%", md: "70%" },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    {s.icon}
                    <Typography
                      variant="h5"
                      fontWeight={800}
                      sx={{
                        mt: 1.5,
                        mb: 0.5,
                        color: "#0d1b2a",
                        fontSize: { xs: "1.8rem", md: "2.1rem" },
                      }}
                    >
                      {count}
                      {s.suffix}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        fontSize: { xs: "0.9rem", md: "0.95rem" },
                        letterSpacing: 0.4,
                      }}
                    >
                      {s.label}
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
