"use client";

import { Box, Button, Container, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface CtaSectionProps {
  image?: string;
  heading?: React.ReactNode;
  buttonText?: string;
  minH?: { base: string; md: string; xl: string };
}

const DefaultHeading = () => (
  <Heading
    fontFamily="'Monument Extended', var(--font-poppins), sans-serif"
    fontWeight="400"
    fontSize={{ base: "2rem", md: "2.4rem", xl: "40px" }}
    lineHeight="1.1"
    letterSpacing="-0.01em"
    color="#E9E9E9"
  >
    If Your Project{" "}
    <Box as="span" display="inline-block" position="relative">
      Needs to Sell
      <Box
        position="absolute"
        left="50%"
        bottom={{ base: "-6px", md: "-8px" }}
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
    Not Just Look Good
  </Heading>
);

const CtaSection = ({
  image = "/assets/container.png",
  heading,
  buttonText = "Book a Strategy Call",
  minH = { base: "520px", md: "640px", xl: "711px" },
}: CtaSectionProps) => {
  return (
    <Box as="section" bg="#020100" py={{ base: 10, md: 14, xl: 16 }}>
      <Container maxW="100%" w="93%" mx="auto">
        <Box
          position="relative"
          overflow="hidden"
          borderRadius={{ base: "28px", md: "40px" }}
          minH={minH}
          isolation="isolate"
        >
          <Image
            src={image}
            alt="Interior scene"
            fill
            sizes="(max-width: 768px) 100vw, 1288px"
            style={{ objectFit: "cover" }}
          />

          <Box
            position="absolute"
            inset={0}
            bg="linear-gradient(180deg, rgba(0, 0, 0, 0.22) 0%, rgba(0, 0, 0, 0.42) 100%)"
          />

          <Stack
            position="relative"
            zIndex={1}
            align="center"
            justify="center"
            minH={minH}
            px={{ base: 6, md: 12 }}
            gap={{ base: 8, md: 10 }}
            textAlign="center"
          >
            <Box position="relative" maxW="813px">
              {heading ?? <DefaultHeading />}
            </Box>

            <Button
              bg="#2345EF"
              color="#FFFFFF"
              h="63px"
              px={8}
              borderRadius=".5rem"
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="500"
              fontSize="18px"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              _hover={{ bg: "#3555F4" }}
              _active={{ bg: "#1B3BE2" }}
            >
              {buttonText}
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default CtaSection;
