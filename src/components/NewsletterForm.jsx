import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export default function NewsletterForm(){
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = (data)=>{ console.log("newsletter:", data); alert("Subscribed (stub)"); reset(); };
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display:'flex', gap:1 }}>
      <TextField size="small" placeholder="Your email" {...register("email", { required:true, pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} error={!!errors.email} helperText={errors.email ? "Invalid email" : ""} />
      <Button variant="contained" type="submit">Subscribe</Button>
    </Box>
  );
}
