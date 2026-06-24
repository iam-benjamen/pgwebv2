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
            src="/assets/visual-system/hero-background.png"
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
                CLARITY THAT
                <br />
                <Box as="span" color="#2345EF">
                  DRIVES DECISIONS
                </Box>
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
                Visual systems designed to help buyers, investors, and
                stakeholders understand and commit faster.
              </Text>
            </Stack>
          </Flex>
        </Box>
      </Box>


      <CtaSection
        minH={{ base: "300px", md: "380px", xl: "420px" }}
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
            Show More
            <br />
            Than a Vision
          </Heading>
        }
        buttonText="Schedule a Consultation"
      />

      <Footer />
      <FloatingBadge />
    </Box>
  );
}
