import React from "react";
import { Box, Button, Chip, Drawer, IconButton, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function CompareBar({ items=[], onRemove }){
  const [open, setOpen] = React.useState(false);
  const keys = ["length_m", "year", "builder", "guests", "crew", "speed_kn", "range_nm", "staterooms", "price_eur"];

  return (
    <Box sx={{ position:'fixed', bottom:16, left:0, right:0, display:'flex', justifyContent:'center', zIndex:1200 }}>
      {items.length>0 && (
        <Box sx={{ bgcolor:'background.paper', p:1, borderRadius:999, boxShadow:3, display:'flex', alignItems:'center', gap:1 }}>
          {items.map(y=>(<Chip key={y.id} label={y.name} onDelete={()=>onRemove(y.id)} />))}
          <Button variant="contained" onClick={()=>setOpen(true)}>Compare ({items.length})</Button>
        </Box>
      )}
      <Drawer anchor="bottom" open={open} onClose={()=>setOpen(false)}>
        <Box sx={{ p:2 }}>
          <Box sx={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
            <Typography variant="h6">Compare yachts</Typography>
            <IconButton onClick={()=>setOpen(false)}><CloseIcon/></IconButton>
          </Box>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                {items.map(y=>(<TableCell key={y.id}>{y.name}</TableCell>))}
              </TableRow>
              {keys.map(k=> (
                <TableRow key={k}>
                  <TableCell><strong>{k}</strong></TableCell>
                  {items.map(y=>(<TableCell key={y.id+"-"+k}>{y[k] ?? "-"}</TableCell>))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Drawer>
    </Box>
  );
}
