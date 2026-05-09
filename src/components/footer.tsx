"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  HStack,
  Input,
  Link as ChakraLink,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  {
    heading: "Solutions",
    links: [
      { label: "Configurators", href: "#solutions" },
      { label: "Sales Systems", href: "#solutions" },
      { label: "Visual Systems", href: "#solutions" },
      { label: "Interior Design", href: "#solutions" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Works", href: "#works" },
      { label: "Team", href: "#team" },
    ],
  },
  {
    heading: "Quick Links",
    links: [
      { label: "Book a Strategy Call", href: "#contact" },
      { label: "Client Results", href: "#results" },
      { label: "Build Your Sales System", href: "#solutions" },
    ],
  },
] as const;

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: "/assets/social-media/Facebook.svg" },
  { label: "Instagram", href: "https://instagram.com", icon: "/assets/social-media/Instagram.svg" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "/assets/social-media/LinkedIn.svg" },
  { label: "YouTube", href: "https://youtube.com", icon: "/assets/social-media/YouTube.svg" },
  { label: "TikTok", href: "https://tiktok.com", icon: "/assets/social-media/Tiktok.svg" },
  { label: "Twitter", href: "https://x.com", icon: "/assets/social-media/Twitter.svg" },
] as const;

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="linear-gradient(180deg, #000000 21.63%, #2345EF 100%)"
      color="#FFFFFF"
      pt={{ base: 16, md: 24 }}
      pb={{ base: 10, md: 8 }}
    >
      <Container maxW="1440px" px={{ base: 4, md: 10 }}>
        <Grid
          templateColumns={{ base: "1fr", xl: "minmax(0, 440px) minmax(0, 1fr)" }}
          gap={{ base: 14, lg: 16, xl: 24 }}
          alignItems="start"
        >
          <Stack gap={6} maxW="403px">
            <Box>
              <Text
                fontFamily="var(--font-cormorant), serif"
                fontWeight="500"
                fontSize={{ base: "2.35rem", md: "2.65rem" }}
                lineHeight="0.95"
                letterSpacing="-0.3px"
              >
                Stay Ahead of
              </Text>
              <Text
                fontFamily="var(--font-cormorant), serif"
                fontWeight="500"
                fontSize={{ base: "2.35rem", md: "2.65rem" }}
                lineHeight="0.95"
                letterSpacing="-0.3px"
              >
                Every <Text as="span" color="#2345EF" fontStyle="italic">Deal</Text> in
              </Text>
              <Text
                fontFamily="var(--font-cormorant), serif"
                fontWeight="500"
                fontSize={{ base: "2.35rem", md: "2.65rem" }}
                lineHeight="0.95"
                letterSpacing="-0.3px"
              >
                the Room
              </Text>
            </Box>

            <Text
              maxW="403px"
              color="rgba(255, 255, 255, 0.72)"
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="500"
              fontSize="12px"
              lineHeight="1.65"
            >
              A monthly brief for real estate developers, builders, and investment teams
              covering pre-sale strategies, buyer psychology, visualization trends, and
              case studies from live projects.
            </Text>

            <HStack
              align="stretch"
              gap={0}
              maxW="396px"
              borderRadius="8px"
              overflow="hidden"
            >
              <Input
                placeholder="Your email address"
                h="53px"
                ps="16px"
                borderRadius="8px 0 0 8px"
                border="1px solid #6D6D6D"
                borderRight="0"
                bg="rgba(18, 23, 71, 0.46)"
                color="#F0F0F0"
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="500"
                fontSize="14px"
                _placeholder={{ color: "#8D8D8C" }}
                _focusVisible={{
                  borderColor: "#8EA2FF",
                  boxShadow: "none",
                }}
              />
              <Button
                h="53px"
                minW={{ base: "124px", md: "145px" }}
                px={6}
                gap={3}
                borderRadius="0 8px 8px 0"
                bg="#2345EF"
                color="#FFFFFF"
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="500"
                fontSize="14px"
                letterSpacing="0.1em"
                textTransform="uppercase"
                _hover={{ bg: "#3555F4" }}
                _active={{ bg: "#1B3BE2" }}
              >
                Subscribe
                <Box position="relative" w="10px" h="10px" flexShrink={0}>
                  <Image
                    src="/assets/polygon.svg"
                    alt=""
                    fill
                    sizes="10px"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Button>
            </HStack>

            <HStack gap={3} flexWrap="wrap">
              {socialLinks.map((item) => (
                <ChakraLink
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer"
                  display="inline-flex"
                  alignItems="center"
                  justifyContent="center"
                  w="30px"
                  h="30px"
                  transition="transform 0.2s ease, opacity 0.2s ease"
                  _hover={{ transform: "translateY(-1px)", opacity: 0.88 }}
                >
                  <Box position="relative" w="30px" h="30px">
                    <Image src={item.icon} alt="" fill sizes="30px" style={{ objectFit: "contain" }} />
                  </Box>
                </ChakraLink>
              ))}
            </HStack>

            <Stack gap={1}>
              <HStack
                align="end"
                gap={1}
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="500"
                fontSize="14px"
                lineHeight="1.5"
              >
                <Text pb={"4px"}>Need help?</Text>
                <Box position="relative" display="inline-block" pb="4px">
                  <ChakraLink href="mailto:office@thepgstudio.com" color="#8EA2FF">
                    office@thepgstudio.com
                  </ChakraLink>
                  <Box
                    position="absolute"
                    left={0}
                    bottom={0}
                    w="170px"
                    h="5px"
                    pointerEvents="none"
                  >
                    <Image
                      src="/assets/curved-line.svg"
                      alt=""
                      fill
                      sizes="170px"
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Box>
              </HStack>

              <Box position="relative" w={{ base: "180px", md: "210px" }} h={{ base: "20px", md: "24px" }}>
                <Image
                  src="/assets/social-media/footer-logo.svg"
                  alt="PGStudio"
                  fill
                  sizes="(max-width: 768px) 180px, 210px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Stack>
          </Stack>

          <Grid
            templateColumns={{ base: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" }}
            gap={{ base: 10, sm: 12, lg: 16, xl: 20 }}
            justifyItems={{ base: "start", xl: "end" }}
          >
            {footerGroups.map((group) => (
              <Stack key={group.heading} gap={6} minW={0}>
                <Text
                  color="#8D8D8C"
                  fontFamily="var(--font-poppins), sans-serif"
                  fontWeight="500"
                  fontSize="20px"
                  lineHeight="1.5"
                >
                  {group.heading}
                </Text>

                <Stack gap={4} align="start">
                  {group.links.map((item) => (
                    <ChakraLink
                      asChild
                      key={item.label}
                      color="#F0F0F0"
                      fontFamily="var(--font-poppins), sans-serif"
                      fontWeight="500"
                      fontSize="16px"
                      lineHeight="1.5"
                      _hover={{ color: "#BFD0FF" }}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </ChakraLink>
                  ))}
                </Stack>
              </Stack>
            ))}
          </Grid>
        </Grid>

        <Text
          mt={{ base: 14, md: 16 }}
          textAlign="center"
          color="rgba(207, 207, 207, 0.6)"
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="500"
          fontSize="14px"
          lineHeight="1.5"
        >
          @2026 PGSTUDIO. All Rights Reserved.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
