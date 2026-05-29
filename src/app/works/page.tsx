"use client";

import { useState } from "react";
import { Box, Button, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import FloatingBadge from "@/components/floating-badge";

const filters = ["All", "Residential", "Commercial", "Interior Design", "Pre-Sales", "Lighting"];

function ProjectCard({ title, credit, image }: { title: string; credit: string; image: string }) {
  return (
    <Box position="relative" w="100%" h="100%" borderRadius="17px" overflow="hidden">
      <img
        src={image}
        alt={title}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Blurred shadow behind label */}
      <Box
        position="absolute"
        top="70%"
        left="-10%"
        right="-20%"
        bottom="-10%"
        pointerEvents="none"
        style={{ background: "rgba(16,13,14,0.65)", filter: "blur(28px)" }}
      />

      {/* Frosted glass label */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        px={{ base: 5, xl: 7 }}
        py={{ base: 4, xl: 5 }}
        style={{
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <Box position="absolute" top="14px" right="14px" w="22px" h="22px">
          <img
            src="/assets/featured-works/Polygon.png"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
        <Text
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="800"
          fontSize={{ base: "15px", xl: "22px" }}
          lineHeight="1"
          color="#F9F7F8"
        >
          {title}
        </Text>
        <Text
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="500"
          fontSize={{ base: "11px", xl: "13px" }}
          color="#FFFFFF"
          mt="6px"
        >
          {credit}
        </Text>
      </Box>
    </Box>
  );
}

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <Box bg="#050816" minH="100svh" color="#F5F7FA">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────── */}
      <Box as="section" position="relative" overflow="hidden" minH={{ base: "520px", md: "640px" }}>
        {/* Background image + dark overlay */}
        <Box position="absolute" inset={0}>
          <Image
            src="/assets/works/hero-backgrond.jpg"
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <Box position="absolute" inset={0} bg="rgba(0,4,18,0.74)" />
        </Box>

        <Flex
          position="relative"
          zIndex={1}
          w="93%"
          mx="auto"
          pt={{ base: "130px", md: "160px" }}
          pb={{ base: 16, md: 20 }}
          align="center"
          justify="space-between"
          gap={{ base: 10, xl: 16 }}
          direction={{ base: "column", lg: "row" }}
        >
          {/* Left — heading + subtext */}
          <Stack gap={5} maxW={{ base: "100%", lg: "54%" }}>
            <Heading
              fontFamily="'Monument Extended', sans-serif"
              fontWeight="800"
              fontSize={{ base: "30px", md: "44px", xl: "60px" }}
              lineHeight="1.05"
              letterSpacing="-0.3px"
              textTransform="uppercase"
              color="#FFFFFF"
            >
              Projects That
              <br />
              Sold &amp; Delivered
            </Heading>
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="400"
              fontSize={{ base: "15px", md: "17px" }}
              lineHeight="1.7"
              color="rgba(255,255,255,0.6)"
              maxW="440px"
            >
              High-performance pre-selling and post-sales digital environments
              that move real estate projects from concept to completely sold out.
            </Text>
          </Stack>

          {/* Right — featured project card */}
          <Box
            flexShrink={0}
            w={{ base: "100%", lg: "42%" }}
            h={{ base: "240px", md: "340px", xl: "420px" }}
            borderRadius="20px"
            overflow="hidden"
            position="relative"
          >
            <ProjectCard
              title="AJUBA"
              credit="By Kayceelaw Properties"
              image="/assets/featured-works/featured.png"
            />
          </Box>
        </Flex>
      </Box>

      {/* ── Filters + Grid ────────────────────────────────── */}
      <Box py={{ base: 12, xl: 20 }}>
        <Box w="93%" mx="auto">
          {/* Filter tabs */}
          <HStack gap={3} flexWrap="wrap" mb={{ base: 8, xl: 12 }}>
            {filters.map((f) => (
              <Button
                key={f}
                onClick={() => setActiveFilter(f)}
                h="36px"
                px={5}
                borderRadius="full"
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="500"
                fontSize="13px"
                bg={activeFilter === f ? "#2345EF" : "rgba(255,255,255,0.07)"}
                color={activeFilter === f ? "#FFFFFF" : "rgba(255,255,255,0.5)"}
                border={activeFilter === f ? "none" : "1px solid rgba(255,255,255,0.12)"}
                _hover={{
                  bg: activeFilter === f ? "#1a37cc" : "rgba(255,255,255,0.13)",
                  color: "#FFFFFF",
                }}
              >
                {f}
              </Button>
            ))}
          </HStack>

          {/*
            Top grid:  [    tall left (3fr)    ] [ landscape top-right (2fr) ]
                       [    tall left (3fr)    ] [ landscape bot-right (2fr) ]
            The left card spans both rows; its height is driven by the right cells.
          */}
          <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr", md: "3fr 2fr" }}
            gap={4}
            mb={4}
          >
            {/* Large portrait — spans 2 rows */}
            <Box style={{ gridRow: "1 / span 2" }} minH={{ base: "300px", md: "auto" }}>
              <ProjectCard
                title="AJUBA"
                credit="By Kayceelaw Properties"
                image="/assets/featured-works/featured.png"
              />
            </Box>

            {/* Top-right */}
            <Box borderRadius="17px" overflow="hidden" style={{ aspectRatio: "16 / 10" }}>
              <ProjectCard
                title="AJUBA"
                credit="By Kayceelaw Properties"
                image="/assets/featured-works/featured.png"
              />
            </Box>

            {/* Bottom-right */}
            <Box borderRadius="17px" overflow="hidden" style={{ aspectRatio: "16 / 10" }}>
              <ProjectCard
                title="AJUBA"
                credit="By Kayceelaw Properties"
                image="/assets/featured-works/featured.png"
              />
            </Box>
          </Box>

          {/*
            Bottom grid: [ smaller left (2fr) ] [ wider right (3fr) ]
          */}
          <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr", md: "2fr 3fr" }}
            gap={4}
          >
            <Box borderRadius="17px" overflow="hidden" style={{ aspectRatio: "4 / 3" }}>
              <ProjectCard
                title="AJUBA"
                credit="By Kayceelaw Properties"
                image="/assets/featured-works/featured.png"
              />
            </Box>
            <Box borderRadius="17px" overflow="hidden" style={{ aspectRatio: "16 / 9" }}>
              <ProjectCard
                title="AJUBA"
                credit="By Kayceelaw Properties"
                image="/assets/featured-works/featured.png"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <CtaSection />
      <Footer />
      <FloatingBadge />
    </Box>
  );
}
