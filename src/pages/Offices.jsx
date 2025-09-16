import React from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import offices from "../data/offices.json";

export default function Offices(){
  const [q, setQ] = React.useState("");
  const list = offices.filter(o => (o.city+o.country+o.services.join(",")).toLowerCase().includes(q.toLowerCase()));
  return (
    <Box>
      <Typography variant="h4" sx={{ mb:2 }}>Offices</Typography>
      <TextField fullWidth placeholder="Search city/country/service" value={q} onChange={e=>setQ(e.target.value)} sx={{ mb:2 }} />
      <Grid container spacing={2}>
        {list.map(o=> (
          <Grid key={o.id} item xs={12} sm={6} md={4}>
            <Box sx={{ border:'1px solid', borderColor:'divider', p:2, borderRadius:2 }}>
              <Typography variant="h6">{o.city}, {o.country}</Typography>
              <Typography variant="body2">{o.address}</Typography>
              <Typography variant="body2">{o.phone}</Typography>
              <Typography variant="caption">Services: {o.services.join(', ')}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
