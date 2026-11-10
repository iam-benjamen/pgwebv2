"use client";

import { Box } from "@chakra-ui/react";
import { Navbar } from "@/components/navbar";
import BlogSection from "@/components/blog-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function NewsPage() {
  return (
    <Box bg="#050816" minH="100svh" color="#F5F7FA">
      <Navbar />
      <Box pt={{ base: "100px", md: "120px" }}>
        <BlogSection />
      </Box>
      <CtaSection minH={{ base: "300px", md: "380px", xl: "420px" }} />
      <Footer />
    </Box>
  );
}
