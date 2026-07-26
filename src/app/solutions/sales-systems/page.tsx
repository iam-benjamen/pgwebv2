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
  "Virtual sales galleries — fully branded digital environment",
  "Interactive walkthroughs — buyers explore every detail",
  "Investor-ready presentations — built to attract capital",
  "Structured buyer journeys — guided path to commitment",
];

const outcomeCards = [
  {
    image: "/assets/sales-system-page/first-frame.png",
    label: "Shorter Sales Cycles",
    caption:
      "Immersive project experiences ensure buyers arrive ready to close, not just browsing.",
  },
  {
    image: "/assets/sales-system-page/second-frame.png",
    label: "Stronger Investor Confidence",
    caption:
      "Buyers choose materials in real-time to see how their unit will look and feel.",
  },
  {
    image: "/assets/sales-system-page/third-frame.png",
    label: "Higher Buyer Commitment",
    caption:
      "Real-time updates let buyers explore choices before committing, reducing doubt.",
  },
];

export default function SalesSystemsPage() {
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
        <Box
          display={{ base: "none", lg: "block" }}
          position="absolute"
          inset={0}
        >
          <Image
            src="/assets/sales-system-page/hero-background.png"
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center right" }}
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
            {/* Left — text overlapping dark portion of bg */}
            <Stack gap={5} maxW={{ base: "100%", lg: "60%" }}>
              <Heading
                fontFamily="'Monument Extended', sans-serif"
                fontWeight="800"
                fontSize={{ base: "30px", md: "42px", xl: "52px" }}
                lineHeight={{ base: "1.1", xl: "62px" }}
                letterSpacing="-0.2px"
                textTransform="uppercase"
                color="#FFFFFF"
              >
                Digital{" "}
                <Box as="span" color="#2345EF">
                  Sales Engine
                </Box>
                <br />
                Built to{" "}
                <Box as="span" color="#2345EF">
                  Close
                </Box>
              </Heading>

              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="400"
                fontSize={{ base: "16px", xl: "18px" }}
                lineHeight="150%"
                color="#C1C1C1"
                maxW="440px"
              >
                Move past static PDFs, bring your project to life with an
                interactive experience.
              </Text>
            </Stack>
          </Flex>
        </Box>
      </Box>

      <Box as="section" bg="#121212" py={{ base: 16, xl: "100px" }}>
        <Box w="85%" mx="auto">
          <Text
            fontFamily="var(--font-poppins), sans-serif"
            fontWeight="700"
            fontSize={{ base: "36px", xl: "56px" }}
            lineHeight={{ base: "1.2", xl: "68px" }}
            letterSpacing="-0.5px"
            textAlign="center"
            color="#FFFFFF"
            mb={{ base: 12, xl: "80px" }}
          >
            Everything You Need to <br />
            <Box as="span" color="#2345EF" fontStyle="italic">
              Sell Smarter
            </Box>
          </Text>

          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 10, xl: "1.5rem" }}
            align={{ base: "flex-start", lg: "stretch" }}
          >
            <Stack gap={6} maxW={{ base: "100%", lg: "45%" }} flexShrink={0}>
              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="700"
                fontSize={{ base: "22px", xl: "30px" }}
                lineHeight="120%"
                color="#FFFFFF"
              >
                Every component your <br />
                project needs to{" "}
                <Box as="span" color="#2345EF" fontStyle="italic">
                  sell.
                </Box>
              </Text>

              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="400"
                fontSize={{ base: "15px", xl: "16px" }}
                lineHeight="150%"
                color="#C1C1C1"
              >
                We build complete virtual sales galleries and interactive
                systems that allow buyers and investors to fully experience your
                project before it exists.
              </Text>

              <Stack gap={0}>
                {bullets.map((b) => (
                  <Box key={b}>
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
                        {b}
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
                  h="52px"
                  px={6}
                  borderRadius="8px"
                  fontFamily="var(--font-poppins), sans-serif"
                  fontWeight="500"
                  fontSize="16px"
                  _hover={{ bg: "#2D50FF" }}
                >
                  <Link href="#contact">Build your Sales System</Link>
                </Button>
              </Box>
            </Stack>

            <Box flex="1" overflow="hidden" position="relative">
              <Image
                src="https://res.cloudinary.com/djskbsz2k/image/upload/v1785088250/GALLERY/ILLUSTRATION_g0vpbd.png"
                alt="Sales system illustration"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </Box>
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
              lineHeight={{ base: "1.2", xl: "68px" }}
              letterSpacing="-0.5px"
              textAlign="center"
              color="#FFFFFF"
            >
              Outcomes
            </Text>
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="700"
              fontSize={{ base: "24px", xl: "40px" }}
              lineHeight="1.3"
              textAlign="center"
              color="#F2F0F0"
            >
              Shorter{" "}
              <Box as="span" color="#2345EF" fontStyle="italic">
                cycles.
              </Box>
              <br />
              Stronger{" "}
              <Box as="span" color="#2345EF" fontStyle="italic">
                confidence.
              </Box>
              <br />
              Higher{" "}
              <Box as="span" color="#2345EF" fontStyle="italic">
                commitment.
              </Box>
            </Text>
          </Stack>

          <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={{ base: 8, xl: "38px" }}
          >
            {outcomeCards.map((card) => (
              <Box key={card.label}>
                <Box
                  bg="#212121"
                  borderRadius="37px"
                  p="20px"
                  h={{ base: "360px", xl: "31rem" }}
                  minHeight="30rem"
                  display="flex"
                  flexDirection="column"
                  gap="25px"
                  boxShadow="10px 10px 25px rgba(0,0,0,0.25)"
                >
                  <Box
                    bg="#000103"
                    borderRadius="18px"
                    flex="1"
                    overflow="hidden"
                  >
                    <img
                      src={card.image}
                      alt={card.label}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        display: "block",
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
            Turn your vision into Buyer
            <Box as="span" display="inline-block" position="relative">
              Confidence
            </Box>
          </Heading>
        }
        buttonText="Build Your System"
      />

      <Footer />
      <FloatingBadge />
    </Box>
  );
}
