"use client";

import { Box } from "@chakra-ui/react";
import Hero from "@/components/hero";
import ProblemSection from "@/components/problem-section";
import Stats from "@/components/stats";
import SystemSection from "@/components/system-section";
import TestimonialsSection from "@/components/testimonials-section";
import InteriorDesignersSection from "@/components/interior-designers-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <Box minH="100svh" bg="#050816" color="#F5F7FA">
      <Hero />
      <Stats />
      <ProblemSection />
      <SystemSection />
      <TestimonialsSection />
      <InteriorDesignersSection />
      <CtaSection />
      <Footer />
    </Box>
  );
}
