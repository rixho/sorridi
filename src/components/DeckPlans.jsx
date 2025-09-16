import React from "react";
import { Box } from "@mui/material";
export default function DeckPlans({ images=[] }){
  if (!images?.length) return null;
  return (
    <Box sx={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px,1fr))', gap:1 }}>
      {images.map((src,i)=>(<img key={i} src={src} alt={`deck-${i}`} style={{ width:'100%', borderRadius:12 }} />))}
    </Box>
  );
}
