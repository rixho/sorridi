// src/pages/Partners.jsx
import React from "react";
import PartnersHero from "../components/partners/PartnersHero";
import CommissionSection from "../components/partners/CommissionSection";
import WhyPartnerSection from "../components/partners/WhyPartnerSection";
import ProcessSection from "../components/partners/ProcessSection";
import AffiliateSection from "../components/partners/AffiliateSection";
import VideoSection from "../components/partners/VideoSection";   // 🔹 video autoplay
import ApplicationForm from "../components/partners/ApplicationForm"; // 🔹 form

export default function Partners() {
  return (
    <>
      <PartnersHero />
      <CommissionSection />
      <WhyPartnerSection />
      <ProcessSection />
      <AffiliateSection />
      <VideoSection />          {/* seksioni video */}
      <ApplicationForm />       {/* formulari i partnerit */}
    </>
  );
}
