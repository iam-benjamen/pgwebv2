"use client";

import { Box, Container, HStack, Link as ChakraLink } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Works", href: "#works" },
  { label: "Our Clients", href: "#clients" },
];

export function Navbar() {
  return (
    <Box as="header" position="relative" zIndex={10} pt={{ base: 4, md: 8 }}>
      <Container maxW="full" px={{ base: 4, md: 6 }}>
        <HStack
          mx="auto"
          w="full"
          maxW="100%"
          justify="space-between"
          gap={{ base: 6, lg: 20 }}
          minH="60px"
          px={4}
          py={3}
          borderRadius="12px"
          bg="rgba(255, 255, 255, 0.1)"
          border="1px solid"
          borderColor="rgba(255, 255, 255, 0.12)"
          boxShadow="0 24px 60px rgba(7, 10, 24, 0.24)"
          backdropFilter="blur(5px)"
          flexWrap={{ base: "wrap", md: "nowrap" }}
        >
          <Link href="/" aria-label="PGStudio home">
            <Box position="relative" w={{ base: "190px", md: "243px" }} h={{ base: "22px", md: "28px" }}>
              <Image
                src="/assets/nav-logo.png"
                alt="PGStudio"
                fill
                priority
                sizes="(max-width: 768px) 190px, 243px"
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Link>

          <HStack
            flex="1"
            gap={{ base: 5, md: 8 }}
            flexWrap="wrap"
            justify={{ base: "center", md: "flex-end" }}
            fontFamily="var(--font-poppins)"
          >
            {navItems.map((item) => {
              const isActive = item.label === "Home";

              return (
                <ChakraLink
                  key={item.label}
                  asChild
                  color={isActive ? "#F1F1F1" : "#9B9B9B"}
                  fontSize={isActive ? "18px" : "16px"}
                  fontWeight={isActive ? "700" : "500"}
                  lineHeight="150%"
                  transition="color 0.2s ease"
                  _hover={{ color: "#F1F1F1" }}
                >
                  <Link href={item.href}>{item.label}</Link>
                </ChakraLink>
              );
            })}
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
