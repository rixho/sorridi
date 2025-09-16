import React from "react";
import { Table, TableBody, TableCell, TableRow, Paper } from "@mui/material";

export default function SpecTable({ yacht }){
  const rows = [
    ["Length", `${yacht.length_m} m`],
    ["Year", yacht.year],
    ["Builder", yacht.builder],
    ["Guests", yacht.guests],
    ["Crew", yacht.crew],
    ["Speed", yacht.speed_kn ? `${yacht.speed_kn} kn` : "-"],
    ["Range", yacht.range_nm ? `${yacht.range_nm} nm` : "-"],
    ["Staterooms", yacht.staterooms]
  ];

  return (
    <Paper variant="outlined" sx={{ borderRadius:2 }}>
      <Table size="small">
        <TableBody>
          {rows.map(([k,v],i)=> (
            <TableRow key={i}>
              <TableCell width={160}><strong>{k}</strong></TableCell>
              <TableCell>{v}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
