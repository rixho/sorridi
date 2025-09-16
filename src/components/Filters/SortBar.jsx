import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function SortBar({ value, onChange }){
  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth size="small">
        <InputLabel>Sort</InputLabel>
        <Select label="Sort" value={value} onChange={(e)=>onChange(e.target.value)}>
          <MenuItem value="newest">Newest</MenuItem>
          <MenuItem value="length_desc">Length ↓</MenuItem>
          <MenuItem value="length_asc">Length ↑</MenuItem>
          <MenuItem value="year_desc">Year ↓</MenuItem>
          <MenuItem value="year_asc">Year ↑</MenuItem>
          <MenuItem value="price_desc">Price ↓</MenuItem>
          <MenuItem value="price_asc">Price ↑</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
