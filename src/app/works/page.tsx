"use client";

import { useState } from "react";
import { Box, Button, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import FloatingBadge from "@/components/floating-badge";

const filters = ["All", "CS Studios", "Residential", "Commercial", "Interior", "Animation", "AV / Lighting", "Virtual Tours"];

const projects = [
  { title: "AJUBA", credit: "By Kayceelaw Properties", image: "/assets/featured-works/featured.png", ratio: "3/4" },
  { title: "AJUBA", credit: "By Kayceelaw Properties", image: "/assets/featured-works/featured.png", ratio: "4/5" },
  { title: "AJUBA", credit: "By Kayceelaw Properties", image: "/assets/featured-works/featured.png", ratio: "3/4" },
  { title: "AJUBA", credit: "By Kayceelaw Properties", image: "/assets/featured-works/featured.png", ratio: "4/5" },
  { title: "AJUBA", credit: "By Kayceelaw Properties", image: "/assets/featured-works/featured.png", ratio: "2/5" },
  { title: "AJUBA", credit: "By Kayceelaw Properties", image: "/assets/featured-works/featured.png", ratio: "3/4" },
  { title: "AJUBA", credit: "By Kayceelaw Properties", image: "/assets/featured-works/featured.png", ratio: "4/5" },
];

function ProjectCard({ title, image, ratio = "4/5" }: { title: string; credit: string; image: string; ratio?: string }) {
  return (
    <Box position="relative" w="100%" style={{ aspectRatio: ratio }} overflow="hidden">
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
    </Box>
  );
}

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <Box bg="#050816" minH="100svh" color="#F5F7FA">
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
            src="/assets/works/hero-backgrond.jpg"
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <Box position="absolute" inset={0} bg="rgba(0,4,18,0.68)" />
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
                Projects That
                <br />
                Sold &amp; Delivered
              </Heading>

              <Box
                position="relative"
                w={{ base: "260px", xl: "479px" }}
                h="9px"
                mt="-16px"
                ml="2rem"
                flexShrink={0}
              >
                <Image
                  src="/assets/works/Curved-Line.png"
                  alt=""
                  fill
                  sizes="479px"
                  style={{ objectFit: "contain", objectPosition: "left center" }}
                />
              </Box>

              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontStyle="italic"
                fontWeight="700"
                fontSize={{ base: "18px", xl: "24px" }}
                lineHeight={{ base: "1.4", xl: "30px" }}
                letterSpacing="-0.3px"
                color="#FFFFFF"
                textShadow="0px 16px 12px rgba(25,25,25,0.6)"
                maxW={{ base: "100%", xl: "560px" }}
              >
                High-end visual storytelling that accelerates development sales.
              </Text>
            </Stack>

            <Stack gap={4} maxW={{ base: "100%", xl: "426px" }} flexShrink={0} align="flex-start">
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
                fontWeight="400"
                fontSize={{ base: "15px", xl: "18px" }}
                lineHeight="1.5"
                color="#F2F0F0"
              >
                Every project here represents a decision made, a deal closed, or a development funded.
                This is what decision systems look like in the real world.
              </Text>
            </Stack>
          </Flex>

        </Box>
      </Box>

      <Box py={{ base: 12, xl: 20 }}>
        <Box w="93%" mx="auto">
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

          <style>{`
            .works-masonry { columns: 2; column-gap: 12px; }
            @media (min-width: 1280px) { .works-masonry { columns: 4; } }
            .works-masonry-item { break-inside: avoid; margin-bottom: 12px; }
          `}</style>
          <div className="works-masonry">
            {projects.map((p, i) => (
              <div key={i} className="works-masonry-item">
                <ProjectCard {...p} />
              </div>
            ))}
          </div>
        </Box>
      </Box>

      <CtaSection
        buttonText="Discover the Process"
        minH={{ base: "300px", md: "380px", xl: "420px" }}
        heading={
          <Heading
            fontFamily="'Monument Extended', var(--font-poppins), sans-serif"
            fontWeight="400"
            fontSize={{ base: "2rem", md: "2.4rem", xl: "40px" }}
            lineHeight="1.1"
            letterSpacing="-0.01em"
            color="#E9E9E9"
          >
            Ready to{" "}
            <Box as="span" display="inline-block" position="relative">
              Pre-Sell
              <Box
                position="absolute"
                left="50%"
                bottom={{ base: "-6px", md: "-1px" }}
                transform="translateX(-50%)"
                w={{ base: "180px", md: "240px", xl: "345px" }}
                h={{ base: "4px", md: "5px", xl: "6px" }}
                pointerEvents="none"
              >
                <Image
                  src="/assets/cta-curved-line.svg"
                  alt=""
                  fill
                  sizes="345px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Box>
            <br />
            your Next Project?
          </Heading>
        }
      />
      <Footer />
      <FloatingBadge />
    </Box>
  );
}
