// src/pages/Contact.jsx
import React from "react";

// Seksionet
import ContactHero from "../components/contact/ContactHero";
import ContactIntro from "../components/contact/ContactIntro";
import CharterForm from "../components/contact/CharterForm";

export default function Contact() {
  return (
    <>
      <ContactHero />     {/* Hero video me titull "CONTACT US" */}
      <ContactIntro />    {/* Seksioni "PLAN YOUR NEXT VOYAGE" */}
      <CharterForm />     {/* Formulari i madh me info, charter details, premium services */}
    </>
  );
}
