import React from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function CtaBand(){
  return (
    <Box sx={{
      py:{ xs:6, md:10 },
      background: (t)=> t.palette.mode==='light'
        ? 'linear-gradient(180deg,#0b1420 0%, #0b1420 60%, #0f172a 100%)'
        : 'linear-gradient(180deg,#0b0f14 0%, #0b0f14 60%, #0f172a 100%)',
      color:'#fff'
    }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h4" sx={{ fontWeight:700, mb:1 }}>Sell or Manage your yacht with Sorridi</Typography>
            <Typography variant="body1" sx={{ opacity:.9 }}>
              Our brokers and managers deliver world-class results across sales, charter and management.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} sx={{ textAlign:{ xs:'left', md:'right' } }}>
            <Button component={Link} to="/yachts-for-sale" variant="contained" sx={{ mr:1, borderRadius:999 }}>Sell</Button>
            <Button component={Link} to="/yachts-for-charter" variant="outlined" sx={{ borderRadius:999, color:'#fff', borderColor:'rgba(255,255,255,0.4)' }}>
              Management
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
