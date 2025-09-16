import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
export default function ArticleDetails(){
  const { id } = useParams();
  return <Typography>Article {id}</Typography>;
}
