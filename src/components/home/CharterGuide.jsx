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
      if (res.ok) setSuccess(true);
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
        bgcolor: "#FFFFFF",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Titulli sipër */}
      <Box sx={{ py: { xs: 2.5, md: 3 } }}>
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 1.5,
            fontWeight: 600,
            color: "#000",
            fontSize: { xs: "0.7rem", md: "0.75rem" },
          }}
        >
          EXPLORE
        </Typography>

        <Box
          sx={{
            width: 100,
            height: 3,
            backgroundColor: "#80131F",
            mx: "auto",
            mb: 2,
          }}
        />

        <Typography
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
            textTransform: "uppercase",
            color: "#141F2F",
            lineHeight: 1.05,
          }}
        >
          <span style={{ color: "#D4AF37" }}>ALBANIA </span>
          CHARTERING GUIDE 2025
        </Typography>
      </Box>

      {/* Seksioni me sfond të errët dhe imazhin në qendër */}
      <Box
        sx={{
          backgroundColor: "#141F2F",
          py: { xs: 3, md: 4 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src="/media/suncoco/main.jpg"
          alt="Albania Chartering Guide 2025"
          sx={{
            width: { xs: "80%", sm: "55%", md: "32%", lg: "30%" },
            maxWidth: "480px",
            height: "auto",
            objectFit: "contain",
            objectPosition: "center",
            transition: "transform 0.4s ease",
            "&:hover": { transform: "scale(1.02)" },
          }}
        />
      </Box>

      {/* Teksti poshtë dhe butoni */}
      <Box sx={{ py: { xs: 3.5, md: 4 }, maxWidth: 550, mx: "auto" }}>
        <Typography
          sx={{
            mb: 2,
            color: "#454545",
            fontWeight: 400,
            fontSize: { xs: "0.85rem", md: "1.2rem" },
            lineHeight: 1.45,
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
            color: "#FFFFFF",
            px: { xs: 4, md: 6 },
            py: { xs: 1.4, md: 1.8 },
            fontWeight: 600,
            fontSize: { xs: "1rem", md: "1.1rem" },
            borderRadius: 0,
            letterSpacing: "0.5px",
            "&:hover": { bgcolor: "#0D1623" },
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
            p: { xs: 3, md: 3.5 },
            borderRadius: 2,
            width: { xs: "90%", md: 360 },
            textAlign: "center",
            boxShadow: "0 8px 30px rgba(0,0,0,0.45)",
          }}
        >
          {!success ? (
            <>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.2rem", md: "1.3rem" },
                  color: "#141F2F",
                  mb: 0.8,
                }}
              >
                🚤 Get Your Free Guide
              </Typography>
              <Typography
                sx={{
                  mb: 2,
                  color: "#454545",
                  fontSize: { xs: "0.82rem", md: "0.88rem" },
                }}
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
                sx={{ mb: 1.8 }}
              />
              <Stack spacing={1.2}>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#141F2F",
                    color: "#fff",
                    py: 1,
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    "&:hover": { bgcolor: "#0D1623" },
                  }}
                  onClick={handleSubmit}
                  disabled={loading || !email}
                >
                  {loading ? "Sending..." : "Send Me The Guide"}
                </Button>
                <Button
                  variant="text"
                  onClick={() => setOpen(false)}
                  sx={{ color: "#454545", fontSize: "0.8rem" }}
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
