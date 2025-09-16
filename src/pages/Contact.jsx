import React from "react";
import { Box, Container, Typography, Grid, TextField, Button, Paper } from "@mui/material";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Contact form submitted:", data);
    alert("Your message has been sent (stub).");
    reset();
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        {/* Header */}
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Get in touch with Sorridi Yachts. Our team is here to assist you.
        </Typography>

        <Grid container spacing={4}>
          {/* Form */}
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 4 }} elevation={3}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField label="Full Name" fullWidth {...register("name")} required />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField label="Email" type="email" fullWidth {...register("email")} required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Phone" fullWidth {...register("phone")} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      fullWidth
                      multiline
                      rows={5}
                      {...register("message")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" size="large">
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Headquarters
              </Typography>
              <Typography variant="body2">
                Rr. Sorridi Marina, Tirana, Albania
                <br />
                Phone: +355 123 456 789
                <br />
                Email: info@sorridiyachts.com
              </Typography>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Working Hours
                </Typography>
                <Typography variant="body2">
                  Monday – Friday: 09:00 – 18:00
                  <br />
                  Saturday: 10:00 – 14:00
                  <br />
                  Sunday: Closed
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
