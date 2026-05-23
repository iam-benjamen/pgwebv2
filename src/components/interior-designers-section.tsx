"use client";

import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";

const dotPattern = {
  backgroundImage:
    "radial-gradient(circle at center, rgba(255, 255, 255, 0.42) 0 4px, transparent 4.5px)",
  backgroundSize: "24px 24px",
} as const;

const InteriorDesignersSection = () => {
  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      bg="#191919"
      minH={{ base: "auto", xl: "247px" }}
      py={{ base: 12, md: 16, xl: 0 }}
      display="flex"
      alignItems="center"
    >
      <Box
        position="absolute"
        top={{ base: "-148px", md: "-260px", xl: "-364px" }}
        left={{ base: "-360px", md: "-520px", xl: "-620px" }}
        w={{ base: "620px", md: "900px", xl: "1152px" }}
        h={{ base: "370px", md: "540px", xl: "680px" }}
        opacity="0.9"
        transform="rotate(-90deg)"
        transformOrigin="center"
        pointerEvents="none"
        css={{
          ...dotPattern,
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0%, #000 26%, #000 74%, transparent 100%)",
          maskImage:
            "linear-gradient(180deg, transparent 0%, #000 26%, #000 74%, transparent 100%)",
        }}
      />

      <Box
        position="absolute"
        top={{ base: "-148px", md: "-260px", xl: "-364px" }}
        left={{ base: "46%", md: "58%", xl: "760px" }}
        w={{ base: "620px", md: "900px", xl: "1152px" }}
        h={{ base: "370px", md: "540px", xl: "680px" }}
        opacity="0.9"
        transform="rotate(-90deg)"
        transformOrigin="center"
        pointerEvents="none"
        css={{
          ...dotPattern,
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0%, #000 26%, #000 74%, transparent 100%)",
          maskImage:
            "linear-gradient(180deg, transparent 0%, #000 26%, #000 74%, transparent 100%)",
        }}
      />

      <Box
        position="absolute"
        inset={0}
        bg="linear-gradient(90deg, rgba(25, 25, 25, 0.72) 0%, rgba(25, 25, 25, 0.86) 48%, rgba(25, 25, 25, 0.6) 100%)"
        pointerEvents="none"
      />

      <Container maxW="1440px" px={{ base: 4, md: 10 }} position="relative">
        <Flex
          align={{ base: "flex-start", lg: "center" }}
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 6, md: 8, xl: 12 }}
        >
          <Heading
            color="#FFFFFF"
            fontFamily="'PP Monument Extended', 'Monument Extended', var(--font-poppins), sans-serif"
            fontWeight="800"
            fontSize={{ base: "30px", sm: "36px", md: "45px" }}
            lineHeight="120%"
            letterSpacing="0"
            maxW="714px"
          >
            Also Built for Luxury Interior Designers
          </Heading>

          <Box
            aria-hidden="true"
            bg="#D9D9D9"
            flexShrink={0}
            w={{ base: "100%", lg: "1px" }}
            h={{ base: "1px", lg: "92px" }}
            opacity="0.9"
          />

          <Text
            color="#F0F0F0"
            fontFamily="var(--font-poppins), sans-serif"
            fontWeight="500"
            fontSize={{ base: "18px", md: "22px", xl: "24px" }}
            lineHeight={{ base: "1.35", md: "30px" }}
            letterSpacing="-0.15px"
            maxW="472px"
          >
            Help clients visualize, choose, and commit faster while reducing
            revisions and elevating presentation quality.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default InteriorDesignersSection;
