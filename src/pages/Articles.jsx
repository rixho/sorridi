import React from "react";
import { Grid, Typography } from "@mui/material";

const mock = [
  { id:"n1", title:"Recent sale: 50m Superyacht", excerpt:"Sorridi announces the sale of...", image:"/news/1.jpg" },
  { id:"n2", title:"New listing: 45m explorer", excerpt:"Introducing...", image:"/news/2.jpg" }
];

export default function Articles(){
  return (
    <div>
      <Typography variant="h4" sx={{ mb:2 }}>News</Typography>
      <Grid container spacing={2}>
        {mock.map(a=> (
          <Grid key={a.id} item xs={12} sm={6} md={4}>
            <div style={{ border:'1px solid rgba(0,0,0,0.12)', padding:12, borderRadius:12 }}>
              <img src={a.image} alt={a.title} style={{ width:'100%', height:180, objectFit:'cover', borderRadius:8 }} />
              <Typography variant="h6" sx={{ mt:1 }}>{a.title}</Typography>
              <Typography variant="body2" color="text.secondary">{a.excerpt}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
