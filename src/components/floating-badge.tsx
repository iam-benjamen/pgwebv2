"use client";

import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function FloatingBadge() {
  return (
    <Box
      position="fixed"
      right={{ base: "20px", md: "4rem" }}
      bottom={{ base: "24px", md: "40px" }}
      w={{ base: "120px", md: "175px" }}
      h={{ base: "120px", md: "175px" }}
      borderRadius="full"
      border="2px solid transparent"
      zIndex={100}
      cursor="pointer"
      _hover={{ transform: "scale(1.05)" }}
      transition="transform 0.2s ease"
    >
      <Image
        src="/assets/hero-section/badge-export.png"
        alt="Claim Free Strategy Session — Launch Now"
        fill
        sizes="(max-width: 768px) 120px, 175px"
        style={{ objectFit: "contain", borderRadius: "50%" }}
      />
    </Box>
  );
}
