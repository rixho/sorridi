import React from "react";
import { Box } from "@mui/material";

export default function Gallery({ images=[] }){
  return (
    <Box sx={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:1, mb:2 }}>
      <img src={images[0] || "/placeholder.jpg"} alt="main" style={{ width:'100%', height:360, objectFit:'cover', borderRadius:12 }} />
      <Box sx={{ display:'grid', gridTemplateRows:'1fr 1fr', gap:1 }}>
        <img src={images[1] || "/placeholder.jpg"} alt="img2" style={{ width:'100%', height:178, objectFit:'cover', borderRadius:12 }} />
        <img src={images[2] || "/placeholder.jpg"} alt="img3" style={{ width:'100%', height:178, objectFit:'cover', borderRadius:12 }} />
      </Box>
      <Box sx={{ display:'grid', gridTemplateRows:'1fr 1fr', gap:1 }}>
        <img src={images[3] || "/placeholder.jpg"} alt="img4" style={{ width:'100%', height:178, objectFit:'cover', borderRadius:12 }} />
        <img src={images[4] || "/placeholder.jpg"} alt="img5" style={{ width:'100%', height:178, objectFit:'cover', borderRadius:12 }} />
      </Box>
    </Box>
  );
}
