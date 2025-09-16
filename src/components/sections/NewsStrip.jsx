import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const news = [
  { id:"n1", title:"Recent sale: 50m Superyacht", excerpt:"Sorridi announces the sale of...", image:"/news/1.jpg" },
  { id:"n2", title:"New listing: 45m Explorer", excerpt:"Introducing our latest...", image:"/news/2.jpg" },
  { id:"n3", title:"Charter in the Med", excerpt:"Top itineraries for summer...", image:"/news/3.jpg" }
];

export default function NewsStrip(){
  return (
    <Box sx={{ py:{ xs:6, md:10 }, backgroundColor:(t)=>t.palette.mode==='light' ? '#f8fafc' : 'background.default' }}>
      <Container>
        <Typography variant="h4" sx={{ fontWeight:700, mb:2 }}>News</Typography>
        <Grid container spacing={2}>
          {news.map(a=>(
            <Grid key={a.id} item xs={12} sm={6} md={4}>
              <Box sx={{ border:'1px solid', borderColor:'divider', borderRadius:2, overflow:'hidden' }}>
                <img src={a.image} alt={a.title} style={{ width:'100%', height:180, objectFit:'cover' }} />
                <Box sx={{ p:2 }}>
                  <Typography variant="h6">{a.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{a.excerpt}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
