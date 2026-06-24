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
import { CloudinaryVideo } from "@/components/cloudinary-video";

const offeringCards = [
  {
    label: "Photorealistic Renderings",
    shadow: "-10px 10px 25px rgba(0,0,0,0.5)",
    href: "/works",
  },
  {
    label: "Cinematic Animations",
    shadow: "0px 10px 25px rgba(0,0,0,0.5)",
    href: "/works?filter=animation",
    video: "GALLERY%2FVIDEOS%2FKirubel_VR_Walkthrough_-_2_l5ndej",
  },
  {
    label: "VR/AR Experiences",
    shadow: "10px 10px 25px rgba(0,0,0,0.5)",
    href: "/works?filter=virtual-tours",
  },
];

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

      <Box as="section" bg="#121212" py={{ base: 14, xl: "120px" }}>
        <Text
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="500"
          fontSize={{ base: "20px", md: "26px", xl: "32px" }}
          lineHeight={{ base: "1.45", xl: "38px" }}
          letterSpacing="-0.2px"
          color="#AEAEAE"
          textAlign="center"
          maxW={{ base: "90%", xl: "693px" }}
          mx="auto"
          mb={{ base: 10, xl: "80px" }}
        >
          Our visuals do more than{" "}
          <Box as="span" color="#ffff">
            present ideas
          </Box>
          . They{" "}
          <Box as="span" color="#ffff">
            create clarity, build confidence
          </Box>
          , and{" "}
          <Box as="span" color="#ffff">
            accelerate decisions
          </Box>
          .
        </Text>

        <Flex
          direction={{ base: "column", xl: "row" }}
          justify="center"
          align="center"
          gap={{ base: 6, xl: "36.5px" }}
          px={{ base: 4, xl: 0 }}
        >
          {offeringCards.map((card) => (
            <Box
              key={card.label}
              position="relative"
              w={{ base: "100%", xl: "405px" }}
              maxW="405px"
              h={{ base: "auto", xl: "457px" }}
              bg="#101010"
              border="1px solid #4A4A4A"
              boxShadow={card.shadow}
              borderRadius="22px"
              overflow="hidden"
              flexShrink={0}
            >
              <Box
                position="relative"
                w="100%"
                h={{ base: "240px", xl: "383px" }}
                bg="#000103"
                borderRadius="21px 21px 0 0"
                overflow="hidden"
              >
                {card.video ? (
                  <CloudinaryVideo publicId={card.video} />
                ) : (
                  <Image
                    src="/assets/visual-system/Image.png"
                    alt={card.label}
                    fill
                    sizes="(max-width: 1279px) 100vw, 464px"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                )}
              </Box>

              <Link href={card.href} style={{ textDecoration: "none" }}>
                <HStack
                  px="29px"
                  justify="space-between"
                  align="center"
                  h={{ base: "56px", xl: "74px" }}
                  cursor="pointer"
                  _hover={{ opacity: 0.8 }}
                  transition="opacity 0.2s ease"
                >
                  <Text
                    fontFamily="var(--font-poppins), sans-serif"
                    fontWeight="500"
                    fontSize={{ base: "16px", xl: "21px" }}
                    lineHeight="34px"
                    letterSpacing="-0.277px"
                    color="#FFFFFF"
                  >
                    {card.label}
                  </Text>
                  <Box w="25px" h="25px" flexShrink={0} position="relative">
                    <Image
                      src="/assets/visual-system/Polygon.png"
                      alt=""
                      fill
                      sizes="25px"
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </HStack>
              </Link>
            </Box>
          ))}
        </Flex>
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
