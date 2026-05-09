"use client";

import { Box, Container, Grid, Heading, Stack, Text } from "@chakra-ui/react";

const systemCards = [
  {
    title: "The Decision Engine",
    description: "Interactive tools that turn interest into action.",
    pattern: "dots",
  },
  {
    title: "Revenue Infrastructure",
    description: "Sales environments that attract and convert buyers.",
    pattern: "grid",
  },
  {
    title: "Aesthetic Vision",
    description: "Design direction aligned with your market.",
    pattern: "dots",
  },
  {
    title: "Decision Support",
    description: "Visuals that make saying yes easy.",
    pattern: "grid",
  },
] as const;

const patternStyles = {
  dots: {
    backgroundImage: `
      radial-gradient(circle at center, rgba(255, 255, 255, 0.26) 0 3px, transparent 3.2px),
      linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 62%)
    `,
    backgroundSize: "28px 28px, 100% 100%",
    backgroundPosition: "0 0, 0 0",
    opacity: 0.62,
  },
  grid: {
    backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
      linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 65%)
    `,
    backgroundSize: "32px 32px, 32px 32px, 100% 100%",
    backgroundPosition: "0 0, 0 0, 0 0",
    opacity: 0.5,
  },
} as const;

const SystemSection = () => {
  return (
    <Box as="section" position="relative" overflow="hidden" bg="#1B1B1B" py={{ base: 20, md: 24, xl: 28 }}>
      <Box
        position="absolute"
        insetX="10%"
        bottom="-120px"
        h="260px"
        bg="radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 72%)"
        filter="blur(36px)"
        pointerEvents="none"
      />

      <Container maxW="1440px" px={{ base: 4, md: 10 }}>
        <Stack gap={{ base: 12, md: 14 }}>
          <Stack gap={2} maxW="820px">
            <Heading
              color="#FFFFFF"
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="700"
              fontSize={{ base: "2.5rem", md: "3.25rem", xl: "3.5rem" }}
              lineHeight={{ base: "1.08", md: "1.14", xl: "68px" }}
              letterSpacing="-0.5px"
            >
              We don&apos;t create renderings.
            </Heading>

            <Heading
              color="#9B9B9B"
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="700"
              fontSize={{ base: "2.5rem", md: "3.25rem", xl: "3.5rem" }}
              lineHeight={{ base: "1.08", md: "1.14", xl: "68px" }}
              letterSpacing="-0.5px"
              maxW={{ base: "full", lg: "540px" }}
            >
              We build systems that Sell.
            </Heading>
          </Stack>

          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, minmax(0, 1fr))", xl: "repeat(4, minmax(0, 1fr))" }}
            gap={{ base: 5, lg: 4 }}
          >
            {systemCards.map((card) => (
              <Box
                key={card.title}
                position="relative"
                minH={{ base: "320px", md: "380px", xl: "418px" }}
                borderRadius="12px"
                overflow="hidden"
                border="1px solid rgba(255, 255, 255, 0.22)"
                bg="linear-gradient(347.95deg, #3F3F3F 54.1%, #A5A5A5 118.77%)"
                boxShadow="inset 0 1px 0 rgba(255, 255, 255, 0.18)"
              >
                <Box
                  position="absolute"
                  inset={0}
                  transform={card.pattern === "grid" ? "skewY(-2deg) scale(1.03)" : undefined}
                  {...patternStyles[card.pattern]}
                />
                <Box
                  position="absolute"
                  inset={0}
                  bg="linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(35, 35, 35, 0.16) 35%, rgba(35, 35, 35, 0.62) 100%)"
                />
                <Stack
                  position="relative"
                  justify="flex-end"
                  h="full"
                  px={6}
                  pb={8}
                  pt={10}
                  gap={5}
                >
                  <Heading
                    color="#F0F0F0"
                    fontFamily="var(--font-poppins), sans-serif"
                    fontWeight="700"
                    fontSize={{ base: "2rem", md: "2.15rem", xl: "2.25rem" }}
                    lineHeight={{ base: "1.05", xl: "38px" }}
                    letterSpacing="-0.2px"
                  >
                    {card.title}
                  </Heading>

                  <Text
                    color="#F0F0F0"
                    fontFamily="var(--font-poppins), sans-serif"
                    fontWeight="400"
                    fontSize="1rem"
                    lineHeight="1.45"
                    letterSpacing="-0.18px"
                    maxW="295px"
                  >
                    {card.description}
                  </Text>
                </Stack>
              </Box>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default SystemSection;
