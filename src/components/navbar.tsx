"use client";

import { Box, Button, HStack, Link as ChakraLink } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "#solutions" },
  { label: "Works", href: "/works" },
  { label: "About", href: "/about" },
];

const solutionsDropdown = [
  { label: "Interactive Configurators", href: "/solutions/interactive-configurators", letterSpacing: "-0.18px" },
  { label: "Sales Systems", href: "/solutions/sales-systems", letterSpacing: undefined },
  { label: "Visual Systems", href: "/solutions/visual-system", letterSpacing: "-0.18px" },
];

const glassStyle = {
  bg: "rgba(255, 255, 255, 0.08)",
  border: "1px solid",
  borderColor: "rgba(255, 255, 255, 0.15)",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(16px)",
};

export function Navbar() {
  const pathname = usePathname();
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <Box
      as="header"
      position="fixed"
      top="33px"
      left="50%"
      transform="translateX(-50%)"
      w={{ base: "calc(100% - 28px)", xl: "93%" }}
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
        style={{ isolation: "isolate" }}
        {...glassStyle}
      >
        <Link href="/" aria-label="PGStudio home" onClick={closeMobileMenu}>
          <Box position="relative" w={{ base: "160px", md: "243px" }} h={{ base: "22px", md: "28px" }}>
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
          justify="flex-end"
          fontFamily="var(--font-poppins)"
          alignSelf="stretch"
          display={{ base: "none", md: "flex" }}
        >
          {navItems.map((item) => {
            const isActive =
              item.label === "Solutions"
                ? pathname.startsWith("/solutions")
                : pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

            if (item.label === "Solutions") {
              return (
                <Box
                  key={item.label}
                  position="relative"
                  display="flex"
                  alignItems="center"
                  alignSelf="stretch"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <ChakraLink
                    asChild
                    color={isActive || solutionsOpen ? "#F1F1F1" : "#9B9B9B"}
                    fontSize={isActive ? "18px" : "14px"}
                    fontWeight="500"
                    lineHeight="150%"
                    transition="color 0.2s ease"
                    _hover={{ color: "#F1F1F1" }}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </ChakraLink>

                  <Box
                    position="absolute"
                    top="100%"
                    left="50%"
                    transform="translateX(-50%)"
                    pt="8px"
                    display={solutionsOpen ? "block" : "none"}
                  >
                    <Box
                      w="255px"
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                      px="12px"
                      py="24px"
                      gap="14px"
                      borderRadius="12px"
                      {...glassStyle}
                    >
                      {solutionsDropdown.map((s) => {
                        const isDropdownActive = pathname === s.href;
                        return (
                          <ChakraLink
                            key={s.label}
                            asChild
                            fontFamily="var(--font-poppins), sans-serif"
                            fontWeight={isDropdownActive ? "700" : "500"}
                            fontSize="14px"
                            lineHeight="20px"
                            color={isDropdownActive ? "#FFFFFF" : "#9B9B9B"}
                            letterSpacing={s.letterSpacing}
                            _hover={{ color: "#FFFFFF" }}
                            transition="color 0.2s ease"
                            w="full"
                          >
                            <Link href={s.href}>{s.label}</Link>
                          </ChakraLink>
                        );
                      })}
                    </Box>
                  </Box>
                </Box>
              );
            }

            return (
              <ChakraLink
                key={item.label}
                asChild
                color={isActive ? "#F1F1F1" : "#9B9B9B"}
                fontSize={isActive ? "16px" : "14px"}
                fontWeight="500"
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
            <Link href="/book-call">Book a Call</Link>
          </Button>
        </HStack>

        <Box
          as="button"
          display={{ base: "flex", md: "none" }}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="5px"
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          p="8px"
          cursor="pointer"
          color="white"
          flexShrink={0}
        >
          {mobileMenuOpen ? (
            <Box position="relative" w="20px" h="20px">
              <Box
                position="absolute"
                top="50%"
                left="0"
                w="20px"
                h="2px"
                bg="white"
                borderRadius="2px"
                style={{ transform: "translateY(-50%) rotate(45deg)" }}
              />
              <Box
                position="absolute"
                top="50%"
                left="0"
                w="20px"
                h="2px"
                bg="white"
                borderRadius="2px"
                style={{ transform: "translateY(-50%) rotate(-45deg)" }}
              />
            </Box>
          ) : (
            <>
              <Box w="20px" h="2px" bg="white" borderRadius="2px" />
              <Box w="20px" h="2px" bg="white" borderRadius="2px" />
              <Box w="20px" h="2px" bg="white" borderRadius="2px" />
            </>
          )}
        </Box>
      </HStack>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div
          initial={{ scaleY: 0.92, y: -8 }}
          animate={{ scaleY: 1, y: 0 }}
          exit={{ opacity: 0, scaleY: 0.92, y: -8 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "top center" }}
        >
        <Box
          display={{ base: "flex", md: "none" }}
          flexDirection="column"
          mt="8px"
          w="full"
          py="20px"
          px="20px"
          gap="4px"
          borderRadius="12px"
          fontFamily="var(--font-poppins)"
          style={{ isolation: "isolate" }}
          {...glassStyle}
        >
          {navItems.map((item) => {
            const isActive =
              item.label === "Solutions"
                ? pathname.startsWith("/solutions")
                : pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

            if (item.label === "Solutions") {
              return (
                <Box key={item.label}>
                  <Box
                    as="button"
                    w="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    py="12px"
                    px="4px"
                    cursor="pointer"
                    color={isActive || mobileSolutionsOpen ? "#F1F1F1" : "#9B9B9B"}
                    fontSize="15px"
                    fontWeight="500"
                    onClick={() => setMobileSolutionsOpen((v) => !v)}
                    fontFamily="var(--font-poppins)"
                  >
                    <span>Solutions</span>
                    <Box
                      w="16px"
                      h="16px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      style={{
                        transform: mobileSolutionsOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Box>
                  </Box>

                  <AnimatePresence initial={false}>
                  {mobileSolutionsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <Box
                        display="flex"
                        flexDirection="column"
                        gap="2px"
                        pl="16px"
                        pb="8px"
                        borderLeft="1px solid"
                        borderColor="rgba(255,255,255,0.15)"
                        ml="4px"
                      >
                        {solutionsDropdown.map((s) => {
                          const isDropdownActive = pathname === s.href;
                          return (
                            <ChakraLink
                              key={s.label}
                              asChild
                              fontWeight={isDropdownActive ? "700" : "500"}
                              fontSize="14px"
                              lineHeight="20px"
                              color={isDropdownActive ? "#FFFFFF" : "#9B9B9B"}
                              letterSpacing={s.letterSpacing}
                              _hover={{ color: "#FFFFFF" }}
                              transition="color 0.2s ease"
                              py="10px"
                              display="block"
                            >
                              <Link href={s.href} onClick={closeMobileMenu}>{s.label}</Link>
                            </ChakraLink>
                          );
                        })}
                      </Box>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </Box>
              );
            }

            return (
              <ChakraLink
                key={item.label}
                asChild
                color={isActive ? "#F1F1F1" : "#9B9B9B"}
                fontSize="15px"
                fontWeight="500"
                lineHeight="150%"
                transition="color 0.2s ease"
                _hover={{ color: "#F1F1F1" }}
                py="12px"
                px="4px"
                display="block"
                borderBottom="1px solid"
                borderColor="rgba(255,255,255,0.06)"
              >
                <Link href={item.href} onClick={closeMobileMenu}>{item.label}</Link>
              </ChakraLink>
            );
          })}

          <Button
            asChild
            bg="#2345EF"
            color="#FFFFFF"
            h="44px"
            mt="12px"
            borderRadius="8px"
            fontFamily="var(--font-poppins)"
            fontWeight="500"
            fontSize="14px"
            w="full"
            _hover={{ bg: "#2D50FF" }}
          >
            <Link href="/book-call" onClick={closeMobileMenu}>Book a Call</Link>
          </Button>
        </Box>
        </motion.div>
      )}
      </AnimatePresence>
    </Box>
  );
}
