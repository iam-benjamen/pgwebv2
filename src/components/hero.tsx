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

const Hero = () => {
  return (
    <Box
      position="relative"
      minH={{ base: "100svh", md: "1023px" }}
      overflow="hidden"
      isolation="isolate"
    >
      <Box position="absolute" inset={0}>
        <Image
          src="/assets/hero-image.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            filter: "blur(5px)",
            transform: "scale(1.04)",
          }}
        />
      </Box>

      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(180deg, rgba(3, 8, 24, 0.12) 0%, rgba(3, 7, 18, 0.34) 52%, rgba(1, 4, 12, 0.82) 100%)"
      />
      <Box
        position="absolute"
        left="-7px"
        bottom={{ base: "18%", md: "160px" }}
        w={{ base: "110%", md: "1455px" }}
        h={{ base: "220px", md: "486px" }}
        bg="rgba(4, 2, 1, 0.4)"
        filter="blur(25px)"
      />
      <Box
        position="absolute"
        left={{ base: "-8%", md: "-173px" }}
        bottom={{ base: "2%", md: "-10px" }}
        w={{ base: "118%", md: "1786px" }}
        h={{ base: "170px", md: "295px" }}
        bg="rgba(0, 6, 33, 0.4)"
        filter="blur(35px)"
      />

      <Box position="absolute" insetX={0} top={0} zIndex={5}>
        <Navbar />
      </Box>

      <Container
        maxW="full"
        px={{ base: 4, md: 10 }}
        position="relative"
        zIndex={4}
      >
        <Stack
          minH={{ base: "100svh", md: "1023px" }}
          pt={{ base: 36, md: 44 }}
          pb={{ base: 12, md: 18 }}
          justify="flex-end"
          gap={{ base: 10, md: 0 }}
        >
          <Stack gap={3} maxW="812px">
            <Heading
              fontFamily="'Monument Extended', var(--font-poppins), sans-serif"
              fontWeight="800"
              fontSize={{ base: "34px", sm: "42px", md: "64px" }}
              lineHeight={{ base: "1.08", md: "63px" }}
              letterSpacing="-0.2px"
              textTransform="uppercase"
              color="#FFFFFF"
            >
              You Don&apos;t Need <br /> More Renderings.
            </Heading>
            <Text
              fontStyle={"italic"}
              fontWeight="300"
              fontSize={{ base: "20px", sm: "24px", md: "30px" }}
              lineHeight={{ base: "1.25", md: "40px" }}
              letterSpacing="-0.3px"
              color="#FFFFFF"
              textShadow="0px 16px 12px rgba(25, 25, 25, 0.6)"
              maxW="716px"
              textTransform={"uppercase"}
            >
              You need <span style={{ fontWeight: 600 }}>buyers</span> to{" "}
              <span style={{ fontWeight: 600 }}>decide</span>
            </Text>
          </Stack>

          <HStack
            align={{ base: "flex-start", lg: "flex-start" }}
            justify="space-between"
            gap={{ base: 8, md: 10 }}
            flexDirection={{ base: "column", lg: "row" }}
          >
            <Stack gap={5} maxW="710px" pt={"1rem"}>
              <Text
                fontFamily="var(--font-poppins)"
                fontWeight="400"
                fontSize={{ base: "16px", md: "16px" }}
                lineHeight="150%"
                color="#F2F0F0"
              >
                Turn your unbuilt project into a compelling sales experience{" "}
                <br />
                that attracts investors and drives early sell-outs.
              </Text>
              <HStack gap={4} flexWrap="wrap">
                <Button
                  bg="#2345EF"
                  color="#FFFFFF"
                  h="63px"
                  px={6}
                  borderRadius="24px"
                  fontFamily="var(--font-poppins)"
                  fontWeight="500"
                  border={".1px solid white"}
                  fontSize="18px"
                  boxShadow="7px 42px 17px rgba(0, 0, 0, 0.01), 4px 23px 14px rgba(0, 0, 0, 0.05), 2px 10px 11px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)"
                  _hover={{ bg: "#2D50FF" }}
                >
                  Book a discovery call
                </Button>
                <Button
                  variant="ghost"
                  color="#FFFFFF"
                  h="63px"
                  px={6}
                  borderRadius="24px"
                  fontFamily="var(--font-poppins)"
                  fontWeight="500"
                  fontSize="18px"
                  bg="rgba(0, 0, 0, 0.08)"
                  border={"1px solid white"}
                  _hover={{ bg: "rgba(255, 255, 255, 0.12)" }}
                >
                  View Live Projects
                </Button>
              </HStack>
            </Stack>

            <Box
              flexShrink={0}
              alignSelf={{ base: "center", lg: "flex-end" }}
              position="relative"
              w={{ base: "132px", md: "175px" }}
              h={{ base: "132px", md: "175px" }}
              display="grid"
              placeItems="center"
              borderRadius="full"
              bg="rgba(0, 0, 0, 0.06)"
              border={".1px solid white"}
              backdropFilter="blur(10px)"
            >
              {/* <Image
                  src={discoverImage}
                  width={200}
                  height={200}
                  alt="Description"
                  style={{ zIndex: 999 }}
                /> */}
              <Box position="absolute" inset={{ base: "14px", md: "16px" }}>
                <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    />
                  </defs>
                  <text
                    fill="#FFFFFF"
                    fontSize="8px !important"
                    fontWeight="400"
                    letterSpacing="2.2px"
                    style={{ fontFamily: "var(--font-urbanist), sans-serif" }}
                  >
                    <textPath href="#circlePath" startOffset="0%">
                      DISCOVER YOUR DREAM DISCOVER YOUR DREAM
                    </textPath>
                  </text>
                </svg>
              </Box>
              <Box
                w={{ base: "48px", md: "64px" }}
                h={{ base: "48px", md: "64px" }}
                borderRadius="full"
                bg="transparent"
                border={"1px solid white"}
                display="grid"
                placeItems="center"
              >
                <Text
                  fontSize={{ base: "24px", md: "30px" }}
                  lineHeight="1"
                  color="#FFFFFF"
                >
                  ↗
                </Text>
              </Box>
            </Box>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
