// src/components/sections/CharterGuide.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Modal,
  TextField,
  Stack,
} from "@mui/material";

export default function CharterGuide() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/send-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSuccess(true);
      }
    } catch (err) {
      console.error("Error sending guide:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        left: "50%",
        marginLeft: "-50.5vw",
        textAlign: "center",
        bgcolor: "#fff",
      }}
    >
      {/* Header i bardhë */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="overline" sx={{ letterSpacing: 2 }}>
          EXPLORE
        </Typography>
        <Typography variant="h5" fontWeight={700}>
          <span style={{ color: "#d4a017" }}>ALBANIA</span> CHARTERING GUIDE 2025
        </Typography>
      </Box>

      {/* Zona e errët me foto të fiksuar në ekran */}
      <Box
        sx={{
          backgroundColor: "#141F2F",
          height: "50vh", // seksioni plot ekran
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src="/media/suncoco/main.jpg"
          alt="Chartering Guide"
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain", // ose "cover" nëse do mbulim total
            borderRadius: 2,
            boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
          }}
        />
      </Box>

      {/* Teksti shpjegues dhe butoni poshtë seksionit */}
      <Box sx={{ py: { xs: 6, md: 10 }, maxWidth: 700, mx: "auto" }}>
        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: "text.secondary",
          }}
        >
          Discover the best sailing routes, top marinas, and insider tips for
          exploring Albania by sea. Download our complete 2025 guide to plan
          your next yacht adventure with up-to-date, practical information.
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#141F2F",
            color: "#fff",
            px: 5,
            py: 1.5,
            fontWeight: 600,
            "&:hover": { bgcolor: "#16324f" },
          }}
          onClick={() => setOpen(true)}
        >
          FREE GUIDE
        </Button>
      </Box>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#fff",
            p: 6,
            borderRadius: 3,
            width: { xs: "90%", md: 450 },
            textAlign: "center",
            boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
          }}
        >
          {!success ? (
            <>
              <Typography
                variant="h5"
                fontWeight={700}
                sx={{ mb: 2, color: "#0d1b2a" }}
              >
                🚤 Get Your Free Guide
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 4, color: "text.secondary" }}
              >
                Enter your email and receive our{" "}
                <strong>Albania Chartering Guide 2025</strong> directly in your
                inbox – packed with routes, marinas & insider tips.
              </Typography>
              <TextField
                fullWidth
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ mb: 3 }}
              />
              <Stack spacing={2}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#0d1b2a",
                    color: "#fff",
                    py: 1.5,
                    fontWeight: 600,
                    "&:hover": { bgcolor: "#16324f" },
                  }}
                  onClick={handleSubmit}
                  disabled={loading || !email}
                >
                  {loading ? "Sending..." : "Send Me The Guide"}
                </Button>
                <Button
                  variant="text"
                  onClick={() => setOpen(false)}
                  sx={{ color: "text.secondary" }}
                >
                  Cancel
                </Button>
              </Stack>
            </>
          ) : (
            <Typography variant="h6" color="success.main">
              ✅ Guide sent successfully! Check your inbox.
            </Typography>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
