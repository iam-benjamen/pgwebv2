"use client";

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { Navbar } from "./navbar";
import FloatingBadge from "./floating-badge";

const Hero = () => {
  return (
    <Box
      bg="#000000"
      position="relative"
      minH={{ base: "100svh", md: "1017px" }}
      overflow="hidden"
    >
      <Box
        position="absolute"
        left="50%"
        style={{ transform: "translateX(-50%)" }}
        top={{ base: "40%", md: "35%" }}
        w={{ base: "95%", md: "90%" }}
        h={{ base: "60%", md: "860px" }}
        zIndex={0}
      >
        <Image
          src="/assets/hero-section/hero-Illustration.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1290px"
          style={{ objectFit: "cover" }}
        />
        <Box
          position="absolute"
          insetX={0}
          top={0}
          h="220px"
          bg="linear-gradient(180deg, #000000 0%, rgba(0,0,0,0) 100%)"
          zIndex={1}
        />
      </Box>

      <Box position="relative" zIndex={2}>
        <Navbar />

        <Container maxW="100%" mx="auto" px={{ base: 4, md: 6 }}>
          <Stack align="center" pt={{ base: 16, md: "11rem" }} gap={{ base: 3, md: "14px" }}>
            <Heading
              fontFamily="'Monument Extended', sans-serif"
              fontWeight="800"
              fontSize={{ base: "32px", sm: "40px", md: "48px" }}
              lineHeight={{ base: "1.2", md: "60px" }}
              letterSpacing="-0.2px"
              textTransform="uppercase"
              textAlign="center"
              color="#FFFFFF"
            >
              We exist to help
              <br />
              Real estate projects
            </Heading>

            <Text
              fontFamily="'Cormorant Garamond', serif"
              fontStyle="italic"
              fontWeight="600"
              fontSize={{ base: "48px", md: "64px" }}
              lineHeight={{ base: "1", md: "48px" }}
              letterSpacing="-0.3px"
              textAlign="center"
              color="#FFFFFF"
              textShadow="0px 16px 12px rgba(25, 25, 25, 0.6)"
            >
              Sell Smarter
            </Text>

            <Box position="relative" w="271px" h="10px">
              <Image
                src="/assets/hero-section/Curved Line.png"
                alt=""
                fill
                sizes="271px"
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Stack>

          <Stack align="center" mt={{ base: 8, md: "1.5rem" }} gap={6}>
            <Text
              fontFamily="var(--font-poppins)"
              fontWeight="400"
              fontSize={{ base: "16px", md: "18px" }}
              lineHeight="150%"
              textAlign="center"
              color="#F2F0F0"
              maxW="549px"
            >
              Turn your unbuilt project into a compelling sales experience
              <br />
              that attracts investors and drives early sell-outs.
            </Text>

            <HStack gap={4} flexWrap="wrap" justify="center">
              <Button
                bg="#2345EF"
                color="#FFFFFF"
                h="63px"
                px={6}
                borderRadius="16px"
                fontFamily="var(--font-poppins)"
                fontWeight="500"
                fontSize="18px"
                boxShadow="7px 42px 17px rgba(0,0,0,0.01), 4px 23px 14px rgba(0,0,0,0.05), 2px 10px 11px rgba(0,0,0,0.09), 0px 3px 6px rgba(0,0,0,0.1)"
                _hover={{ bg: "#2D50FF" }}
              >
                Book a Strategy Call
              </Button>
              <Button
                variant="ghost"
                color="#FFFFFF"
                h="63px"
                px={6}
                borderRadius="16px"
                fontFamily="var(--font-poppins)"
                fontWeight="500"
                fontSize="18px"
                border="1px solid rgba(255,255,255,0.5)"
                _hover={{ bg: "rgba(255,255,255,0.08)" }}
              >
                View Live Projects
              </Button>
            </HStack>
          </Stack>
        </Container>
      </Box>

      <FloatingBadge />
    </Box>
  );
};

export default Hero;
