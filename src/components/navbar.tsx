"use client";

import { Box, Button, HStack, Link as ChakraLink } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <Box
      as="header"
      position="fixed"
      top="33px"
      left="50%"
      transform="translateX(-50%)"
      w={{ base: "calc(100% - 32px)", xl: "93%" }}
      zIndex={1000}
    >
      <HStack
        mx="auto"
        w="full"
        justify="space-between"
        gap={{ base: 6, lg: 20 }}
        h="60px"
        px={4}
        borderRadius="12px"
        bg="rgba(255, 255, 255, 0.08)"
        border="1px solid"
        borderColor="rgba(255, 255, 255, 0.15)"
        boxShadow="0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
        backdropFilter="blur(16px)"
        style={{ isolation: "isolate" }}
        flexWrap={{ base: "wrap", md: "nowrap" }}
      >
        <Link href="/" aria-label="PGStudio home">
          <Box
            position="relative"
            w={{ base: "190px", md: "243px" }}
            h={{ base: "22px", md: "28px" }}
          >
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
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <ChakraLink
                key={item.label}
                asChild
                color={isActive ? "#F1F1F1" : "#9B9B9B"}
                fontSize={isActive ? "18px" : "14px"}
                fontWeight={isActive ? "500" : "500"}
                lineHeight="150%"
                transition="color 0.2s ease"
                _hover={{ color: "#F1F1F1" }}
              >
                <Link href={item.href}>{item.label}</Link>
              </ChakraLink>
            );
          })}

          <Button
            asChild
            bg="#2345EF"
            color="#FFFFFF"
            h="34px"
            px={4}
            borderRadius="6px"
            fontFamily="var(--font-poppins)"
            fontWeight="500"
            fontSize="13px"
            boxShadow="7px 42px 17px rgba(0,0,0,0.01), 4px 23px 14px rgba(0,0,0,0.05), 2px 10px 11px rgba(0,0,0,0.09), 0px 3px 6px rgba(0,0,0,0.1)"
            _hover={{ bg: "#2D50FF" }}
            flexShrink={0}
          >
            <Link href="#contact">Apply Now</Link>
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
}
