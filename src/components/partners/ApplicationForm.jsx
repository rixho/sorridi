// src/components/partners/ApplicationForm.jsx
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
} from "@mui/material";

export default function ApplicationForm() {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 12 },
        backgroundColor: "#f2f2f2",
      }}
    >
      <Container maxWidth="sm">
        {/* Titulli */}
        <Typography
          variant="overline"
          sx={{
            display: "block",
            textAlign: "center",
            mb: 1,
            letterSpacing: 2,
            color: "#8B1E2D",
          }}
        >
          APPLICATION FORM
        </Typography>

        {/* Vija e kuqe */}
        <Box
          sx={{
            width: 60,
            height: 3,
            backgroundColor: "#8B1E2D",
            margin: "0 auto",
            mb: 4,
            borderRadius: 2,
          }}
        />

        {/* Fusha */}
        <Box component="form">
          <Typography
            variant="subtitle2"
            fontWeight={700}
            sx={{ mb: 1 }}
          >
            NAME OF THE COMPANY/INDIVIDUAL:
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            sx={{ mb: 3, backgroundColor: "#fff" }}
          />

          <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1 }}>
            EMAIL
          </Typography>
          <TextField
            fullWidth
            type="email"
            variant="outlined"
            size="small"
            sx={{ mb: 3, backgroundColor: "#fff" }}
          />

          <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1 }}>
            PHONE NUMBER
          </Typography>
          <TextField
            fullWidth
            type="tel"
            placeholder="+355"
            variant="outlined"
            size="small"
            sx={{ mb: 3, backgroundColor: "#fff" }}
          />

          <Typography variant="subtitle2" fontWeight={700} sx={{ mb: 1 }}>
            FIELD OF OPERATION
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            sx={{ mb: 3, backgroundColor: "#fff" }}
          />

          <Typography
            variant="subtitle2"
            fontWeight={700}
            sx={{ mb: 1 }}
          >
            MESSAGE / ADDITIONAL DETAILS (OPTIONAL)
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={5}
            variant="outlined"
            sx={{ mb: 4, backgroundColor: "#fff" }}
          />

          {/* Butoni */}
          <Box textAlign="center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0c1b2b",
                px: 4,
                py: 1,
                "&:hover": { backgroundColor: "#122943" },
              }}
            >
              BE A PARTNER
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
