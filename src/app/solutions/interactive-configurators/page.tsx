"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import FloatingBadge from "@/components/floating-badge";

const bullets = [
  "Faster buyer decision-making across every project type",
  "Reduced back-and-forth with your sales team",
  "Increased perceived value and buyer confidence",
  "Higher commitment rates before construction begins",
];

const howItWorksCards = [
  {
    label: "Floor Plan selection",
    caption:
      "Buyers can easily view and explore interactive floor plan layouts.",
    image: "/assets/interactive/first-frame.png",
  },
  {
    label: "Interior & Exterior Customization",
    caption:
      "Buyers choose materials in real-time to see how their unit will look.",
    image: "/assets/interactive/second-frame.png",
  },
  {
    label: "Real-time Visual Feedback",
    caption:
      "Real-time updates let buyers try out choices before committing, reducing doubt.",
    image: "/assets/interactive/third-frame.png",
  },
];

export default function InteractiveConfiguratorsPage() {
  return (
    <Box bg="#F3F3F3" minH="100svh" color="#F5F7FA">
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <Box
        as="section"
        position="relative"
        overflow="hidden"
        minH={{ base: "auto", xl: "673px" }}
        bg="#000000"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
      >
        <Box position="absolute" inset={0}>
          <Image
            src="/assets/interactive/interactive-bg.png"
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </Box>

        <Box position="relative" zIndex={1} pt={{ base: "130px", md: "160px" }}>
          <Flex
            w="93%"
            mx="auto"
            pb={{ base: 8, xl: "52px" }}
            align="flex-end"
            justify="space-between"
            gap={{ base: 10, xl: 16 }}
            direction={{ base: "column", lg: "row" }}
          >
            <Stack gap={3} maxW={{ base: "100%", lg: "55%" }}>
              <Heading
                fontFamily="'Monument Extended', sans-serif"
                fontWeight="800"
                fontSize={{ base: "30px", md: "42px", xl: "48px" }}
                lineHeight={{ base: "1.1", xl: "60px" }}
                letterSpacing="-0.2px"
                textTransform="uppercase"
                color="#FFFFFF"
              >
                Turn Buyer Uncertainty
                <br />
                Into Decisions
              </Heading>
            </Stack>

            <Stack
              gap={4}
              maxW={{ base: "100%", xl: "420px" }}
              flexShrink={0}
              align="flex-start"
            >
              <Box w="30px" h="30px" flexShrink={0} position="relative">
                <Image
                  src="/assets/works/Polygon.png"
                  alt=""
                  fill
                  sizes="30px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="500"
                fontSize={{ base: "16px", xl: "20px" }}
                lineHeight="24px"
                color="#C1C1C1"
              >
                A real-time interactive system that allows buyers to explore
                options, layouts, and finishes instantly.
              </Text>
            </Stack>
          </Flex>
        </Box>
      </Box>

      {/* ── Why It Matters ──────────────────────────────────────── */}
      <Box as="section" bg="#121212" py={{ base: 16, xl: "100px" }}>
        <Box w="93%" mx="auto">
          <Text
            fontFamily="var(--font-poppins), sans-serif"
            fontWeight="700"
            fontSize={{ base: "36px", xl: "56px" }}
            lineHeight="68px"
            letterSpacing="-0.5px"
            textAlign="center"
            color="#FFFFFF"
            mb={{ base: 12, xl: "80px" }}
          >
            Why It Matters
          </Text>

          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 10, xl: "80px" }}
            align={{ base: "flex-start", lg: "center" }}
          >
            {/* Illustration */}
            <Box
              position="relative"
              flexShrink={0}
              w={{ base: "100%", lg: "480px", xl: "575px" }}
              style={{ aspectRatio: "575 / 536" }}
            >
              <Image
                src="/assets/interactive/ILLUSTRATION.png"
                alt="Interactive configurator illustration"
                fill
                sizes="(max-width: 1024px) 100vw, 575px"
                style={{ objectFit: "contain" }}
              />
            </Box>

            {/* Content */}
            <Stack gap={6} flex="1">
              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="700"
                fontSize={{ base: "26px", xl: "36px" }}
                lineHeight="120%"
                color="#FFFFFF"
              >
                Give buyers the ability to <br />
                <Box as="span" color="#2345EF" fontStyle="italic">
                  explore and commit.
                </Box>
              </Text>

              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="400"
                fontSize={{ base: "16px", xl: "18px" }}
                lineHeight="150%"
                color="#F2F0F0"
              >
                Our interactive configurators allow buyers to explore layouts,
                finishes, and options in real-time. No static PDFs. No email
                chains. No lost deals from indecision.
              </Text>

              <Stack gap={0}>
                {bullets.map((item, i) => (
                  <Box key={i}>
                    <HStack gap={3} py={{ base: "14px", xl: "16px" }}>
                      <Box
                        w="13px"
                        h="14px"
                        flexShrink={0}
                        bg="#FFFFFF"
                        style={{
                          clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",
                        }}
                      />
                      <Text
                        fontFamily="var(--font-poppins), sans-serif"
                        fontWeight="400"
                        fontSize={{ base: "15px", xl: "18px" }}
                        lineHeight="150%"
                        color="#F2F0F0"
                      >
                        {item}
                      </Text>
                    </HStack>
                    <Box w="full" h="1px" bg="rgba(128,128,128,0.25)" />
                  </Box>
                ))}
              </Stack>

              <Box>
                <Button
                  asChild
                  bg="#2345EF"
                  color="#FFFFFF"
                  h="63px"
                  px={6}
                  borderRadius="12px"
                  fontFamily="var(--font-poppins), sans-serif"
                  fontWeight="500"
                  fontSize="18px"
                  boxShadow="7px 42px 17px rgba(0,0,0,0.01), 4px 23px 14px rgba(0,0,0,0.05), 2px 10px 11px rgba(0,0,0,0.09), 0px 3px 6px rgba(0,0,0,0.1)"
                  _hover={{ bg: "#2D50FF" }}
                >
                  <Link href="#contact">Request a Demo</Link>
                </Button>
              </Box>
            </Stack>
          </Flex>
        </Box>
      </Box>

      <Box as="section" bg="#222222" py={{ base: 16, xl: "100px" }}>
        <Box w="93%" mx="auto">
          <Stack align="center" gap={3} mb={{ base: 12, xl: "80px" }}>
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="700"
              fontSize={{ base: "36px", xl: "56px" }}
              lineHeight="68px"
              letterSpacing="-0.5px"
              textAlign="center"
              color="#FFFFFF"
            >
              How It Works
            </Text>
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="700"
              fontSize={{ base: "22px", xl: "36px" }}
              lineHeight="120%"
              textAlign="center"
              color="#F2F0F0"
            >
              Three steps from interest to{" "}
              <Box as="span" color="#2345EF" fontStyle="italic">
                signed commitment.
              </Box>
            </Text>
          </Stack>

          <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={{ base: 8, xl: "38px" }}
          >
            {howItWorksCards.map((card) => (
              <Box key={card.label}>
                <Box
                  bg="#212121"
                  borderRadius="37px"
                  p="20px"
                  h={{ base: "360px", xl: "31rem" }}
                  minHeight={"30rem"}
                  display="flex"
                  flexDirection="column"
                  gap="25px"
                  boxShadow={"10px 10px 25px rgba(0,0,0,0.25)"}
                >
                  <Box
                    bg="#000103"
                    borderRadius="18px"
                    flex="1"
                    overflow="overlay"
                  >
                    <img
                      src={card.image}
                      alt={card.label}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                  <Text
                    fontFamily="var(--font-poppins), sans-serif"
                    fontWeight="500"
                    fontSize={{ base: "16px", xl: "22px" }}
                    lineHeight="34px"
                    textAlign="center"
                    letterSpacing="-0.28px"
                    color="rgba(233, 233, 233, 0.6)"
                    flexShrink={0}
                  >
                    {card.label}
                  </Text>
                </Box>

                <Box px="26px" pt="20px" pb="26px">
                  <Text
                    fontFamily="var(--font-poppins), sans-serif"
                    fontWeight="400"
                    fontSize={{ base: "14px", xl: "16px" }}
                    lineHeight="120%"
                    textAlign="center"
                    color="#999999"
                  >
                    {card.caption}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <CtaSection
        heading={
          <Heading
            fontFamily="'Monument Extended', var(--font-poppins), sans-serif"
            fontWeight="400"
            fontSize={{ base: "2rem", md: "2.4rem", xl: "40px" }}
            lineHeight="1.1"
            letterSpacing="-0.01em"
            color="#E9E9E9"
            textAlign="center"
          >
            Ready to Let the Tool
            <br />
            Sell for You?
          </Heading>
        }
        buttonText="Request a Demo"
      />

      <Footer />
      <FloatingBadge />
    </Box>
  );
}
