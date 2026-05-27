"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const dotPattern = {
  backgroundImage:
    "radial-gradient(circle at center, rgba(255,255,255,0.42) 0 4px, transparent 4.5px)",
  backgroundSize: "24px 24px",
} as const;

const dotMask = {
  WebkitMaskImage:
    "linear-gradient(180deg, transparent 0%, #000 26%, #000 74%, transparent 100%)",
  maskImage:
    "linear-gradient(180deg, transparent 0%, #000 26%, #000 74%, transparent 100%)",
} as const;

const InteriorDesignersSection = () => {
  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      bg="#191919"
      minH={{ base: "auto", xl: "247px" }}
      py={{ base: 12, xl: 0 }}
      display="flex"
      alignItems="center"
    >
      {/* Dot pattern — extreme left */}
      <Box
        position="absolute"
        top="-200px"
        left="-480px"
        w="1152px"
        h="680px"
        opacity={0.9}
        transform="rotate(-90deg)"
        transformOrigin="center"
        pointerEvents="none"
        style={{ ...dotPattern, ...dotMask }}
      />

      {/* Dot pattern — extreme right */}
      <Box
        position="absolute"
        top="-200px"
        right="-480px"
        w="1152px"
        h="680px"
        opacity={0.9}
        transform="rotate(-90deg)"
        transformOrigin="center"
        pointerEvents="none"
        style={{ ...dotPattern, ...dotMask }}
      />

      {/* Centre overlay so dots don't compete with text */}
      <Box
        position="absolute"
        inset={0}
        pointerEvents="none"
        style={{
          background:
            "linear-gradient(90deg, rgba(25,25,25,0.8) 0%, rgba(25,25,25,0.3) 40%, rgba(25,25,25,0.3) 60%, rgba(25,25,25,0.8) 100%)",
        }}
      />

      {/* Content — always centred */}
      <Flex
        position="relative"
        w="93%"
        mx={'auto'}
        maxW="100%"
        align="center"
        justify="space-between"
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 6, lg: 10 }}
        textAlign={{ base: "center", lg: "left" }}
      >
        <Heading
          color="#FFFFFF"
          fontFamily="'PP Monument Extended', 'Monument Extended', var(--font-poppins), sans-serif"
          fontWeight="800"
          fontSize={{ base: "28px", md: "40px", xl: "45px" }}
          lineHeight="120%"
          maxW="50%"
        >
          Also Built for Luxury Interior Designers
        </Heading>

        <Box
          flexShrink={0}
          bg="#D9D9D9"
          w={{ base: "60px", lg: "1px" }}
          h={{ base: "1px", lg: "92px" }}
          opacity={0.9}
        />

        <Text
          color="#F0F0F0"
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="500"
          fontSize={{ base: "16px", md: "20px", xl: "24px" }}
          lineHeight={{ base: "1.5", xl: "30px" }}
          letterSpacing="-0.15px"
          maxW="40%"
        >
          Help clients visualize, choose, and commit faster while reducing revisions and elevating
          presentation quality.
        </Text>
      </Flex>
    </Box>
  );
};

export default InteriorDesignersSection;
