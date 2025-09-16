import React from "react";
import { Box, Grid, TextField, MenuItem, Button } from "@mui/material";

export default function FilterBar({ onChange, showPrice=false }){
  const [state, setState] = React.useState({ q:"", type:"", minLength:"", maxLength:"", minYear:"", maxYear:"", destination:"", minPrice:"", maxPrice:"" });

  const apply = ()=> onChange({
    q: state.q || undefined,
    type: state.type || undefined,
    minLength: state.minLength? Number(state.minLength): undefined,
    maxLength: state.maxLength? Number(state.maxLength): undefined,
    minYear: state.minYear? Number(state.minYear): undefined,
    maxYear: state.maxYear? Number(state.maxYear): undefined,
    destination: state.destination || undefined,
    minPrice: state.minPrice? Number(state.minPrice): undefined,
    maxPrice: state.maxPrice? Number(state.maxPrice): undefined,
  });

  const reset = ()=>{ setState({ q:"", type:"", minLength:"", maxLength:"", minYear:"", maxYear:"", destination:"", minPrice:"", maxPrice:"" }); onChange({}); };

  return (
    <Box sx={{ p:2, border: (t)=>`1px solid ${t.palette.divider}`, borderRadius:2, mb:2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}><TextField fullWidth label="Search" value={state.q} onChange={e=>setState(s=>({...s,q:e.target.value}))} /></Grid>
        <Grid item xs={6} md={2}>
          <TextField fullWidth select label="Type" value={state.type} onChange={e=>setState(s=>({...s,type:e.target.value}))}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="motor">Motor</MenuItem>
            <MenuItem value="sail">Sail</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6} md={2}><TextField fullWidth type="number" label="Min Length" value={state.minLength} onChange={e=>setState(s=>({...s,minLength:e.target.value}))}/></Grid>
        <Grid item xs={6} md={2}><TextField fullWidth type="number" label="Max Length" value={state.maxLength} onChange={e=>setState(s=>({...s,maxLength:e.target.value}))}/></Grid>
        <Grid item xs={6} md={1}><TextField fullWidth type="number" label="Min Year" value={state.minYear} onChange={e=>setState(s=>({...s,minYear:e.target.value}))}/></Grid>
        <Grid item xs={6} md={1}><TextField fullWidth type="number" label="Max Year" value={state.maxYear} onChange={e=>setState(s=>({...s,maxYear:e.target.value}))}/></Grid>
        <Grid item xs={12} md={2}><TextField fullWidth label="Destination" value={state.destination} onChange={e=>setState(s=>({...s,destination:e.target.value}))}/></Grid>
        {showPrice && (
          <>
            <Grid item xs={6} md={2}><TextField fullWidth type="number" label="Min Price" value={state.minPrice} onChange={e=>setState(s=>({...s,minPrice:e.target.value}))}/></Grid>
            <Grid item xs={6} md={2}><TextField fullWidth type="number" label="Max Price" value={state.maxPrice} onChange={e=>setState(s=>({...s,maxPrice:e.target.value}))}/></Grid>
          </>
        )}
        <Grid item xs={12} md={2} sx={{ display:'flex', gap:1 }}>
          <Button variant="contained" onClick={apply}>Apply</Button>
          <Button onClick={reset}>Reset</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
