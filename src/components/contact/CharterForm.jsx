// src/components/contact/CharterForm.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Paper,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DateCalendar } from "@mui/x-date-pickers";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import StarIcon from "@mui/icons-material/Star";

export default function CharterForm() {
  const [date, setDate] = useState(null);

  const guests = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const durations = [3, 5, 7, 10, 14];
  const destinations = ["Karaburun", "Himarë", "Ksamil", "Tongo"];
  const yachts = ["Azimut 68", "Ferretti 550", "Sunseeker Predator"];

  const services = [
    { label: "Gourmet Dining at Sea", desc: "World-class cuisine prepared onboard by private chefs.", tag: "Culinary" },
    { label: "Adrenaline Water Sports", desc: "Jet skis, diving and exclusive water toys for adventure.", tag: "Activities" },
    { label: "Luxury Transfers", desc: "Chauffeured cars or helicopter transfers for seamless travel.", tag: "Transport" },
    { label: "Professional Photo & Film", desc: "Cinematic photography & videography tailored to yachting.", tag: "Experience" },
    { label: "Wine & Champagne Sommelier", desc: "Curated wine & champagne selections guided by sommeliers.", tag: "Culinary" },
    { label: "Private Events at Sea", desc: "Celebrations, proposals or parties styled to perfection.", tag: "Events" },
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, backgroundColor: "#f0f0f0" }}>
      <Grid container spacing={4}>
        {/* Left: Your Information */}
        <Grid item xs={12} md={8}>
          <Paper elevation={0} sx={{ p: 3, backgroundColor: "#e0e0e0" }}>
            <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#d7c0c3", p: 1.5, mb: 3 }}>
              <PersonIcon sx={{ mr: 1, color: "#d4a017" }} />
              <Typography fontWeight={700}>YOUR INFORMATION</Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Full Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Email Address" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Phone Number" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField select fullWidth label="Number of Guests" defaultValue="">
                  {guests.map((g) => (
                    <MenuItem key={g} value={g}>
                      {g}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Right: Calendar */}
        <Grid item xs={12} md={4}>
          <Paper elevation={0} sx={{ p: 3, backgroundColor: "#e0e0e0" }}>
            <Box sx={{ backgroundColor: "#d7c0c3", p: 1.5, mb: 3 }}>
              <Typography fontWeight={700}>CALENDAR</Typography>
            </Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar value={date} onChange={(newDate) => setDate(newDate)} />
            </LocalizationProvider>
          </Paper>
        </Grid>

        {/* Charter Details */}
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 3, backgroundColor: "#e0e0e0" }}>
            <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#d7c0c3", p: 1.5, mb: 3 }}>
              <DirectionsBoatIcon sx={{ mr: 1, color: "#d4a017" }} />
              <Typography fontWeight={700}>CHARTER DETAILS</Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <TextField select fullWidth label="Preferred Duration (Days)">
                  {durations.map((d) => (
                    <MenuItem key={d} value={d}>
                      {d}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField select fullWidth label="Preferred Destination">
                  {destinations.map((d) => (
                    <MenuItem key={d} value={d}>
                      {d}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField select fullWidth label="Preferred Yacht">
                  {yachts.map((y) => (
                    <MenuItem key={y} value={y}>
                      {y}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Premium Services */}
        <Grid item xs={12}>
          <Paper elevation={0} sx={{ p: 3, backgroundColor: "#e0e0e0" }}>
            <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "#d7c0c3", p: 1.5, mb: 3 }}>
              <StarIcon sx={{ mr: 1, color: "#d4a017" }} />
              <Typography fontWeight={700}>PREMIUM SERVICES</Typography>
            </Box>
            {services.map((s, idx) => (
              <Box key={idx} sx={{ p: 2, mb: 2, borderRadius: 2, border: "1px solid #ddd", backgroundColor: "#fff" }}>
                <FormControlLabel control={<Checkbox />} label={s.label} />
                <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                  {s.desc}
                </Typography>
                <Typography variant="caption" sx={{ ml: 4, color: "gray", fontStyle: "italic" }}>
                  {s.tag}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
