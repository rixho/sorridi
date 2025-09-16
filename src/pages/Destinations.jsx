import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import data from "../data/destinations.json";

export default function Destinations(){
  return (
    <div>
      <Typography variant="h4" sx={{ mb:2 }}>Destinations</Typography>
      <Grid container spacing={2}>
        {data.map(d=> (
          <Grid key={d.id} item xs={12} sm={6} md={4}>
            <Link to={`/destinations/${d.id}`} style={{ textDecoration:'none' }}>
              <div style={{ border:'1px solid rgba(0,0,0,0.12)', padding:12, borderRadius:12 }}>
                <img src={d.heroImage} alt={d.title} style={{ width:'100%', height:180, objectFit:'cover', borderRadius:8 }} />
                <Typography variant="h6" sx={{ mt:1 }}>{d.title}</Typography>
                <Typography variant="body2" color="text.secondary">{d.excerpt}</Typography>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
