import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Stack } from "@mui/material";
import { useForm } from "react-hook-form";

export default function EnquiryForm({ open, onClose, yacht }){
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data)=>{
    // TODO: POST te API (p.sh. `${import.meta.env.VITE_API_URL}/enquiry`)
    console.log({ ...data, yacht: yacht?.name, slug: yacht?.slug });
    onClose();
    reset();
    alert("Enquiry sent (stub)");
  };
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Enquire about {yacht?.name}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt:1 }}>
          <TextField label="Full name" {...register("name")} required />
          <TextField label="Email" type="email" {...register("email")} required />
          <TextField label="Phone" {...register("phone")} />
          <TextField label="Message" multiline rows={4} {...register("message")} />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit(onSubmit)}>Send</Button>
      </DialogActions>
    </Dialog>
  );
}
