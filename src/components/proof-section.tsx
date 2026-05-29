"use client";

import { Box, Heading, Stack, Text } from "@chakra-ui/react";

function TriangleIcon() {
  return (
    <img src="/assets/proof/Polygon.png" alt="" width={16} height={16} style={{ display: "block" }} />
  );
}

const cards = [
  {
    image: "/assets/proof/graph-container.png",
    label: "Supporting $200M+ in development value",
  },
  {
    image: "/assets/proof/histogram-container.png",
    label: "Increasing buyer engagement and confidence",
  },
  {
    image: "/assets/proof/map-container.png",
    label: "Helping attract investors through digital sales systems",
    wide: true,
  },
];

export default function ProofSection() {
  return (
    <Box
      as="section"
      bg="#EFEFEF"
      py={{ base: 16, xl: "100px" }}
    >
      {/* Heading */}
      <Heading
        fontFamily="'Cormorant Garamond', serif"
        fontStyle="italic"
        fontWeight="700"
        fontSize={{ base: "44px", md: "56px", xl: "75px" }}
        lineHeight={{ base: "1.1", xl: "65px" }}
        letterSpacing="-0.5px"
        textAlign="center"
        color="#1D1D1B"
        mb={{ base: 10, xl: 20 }}
        px={4}
      >
        Proven Across
        <br />
        <Box as="span" color="#2345EF">
          Multi-Million Dollar
        </Box>
        <br />
        Developments
      </Heading>

      {/* Cards grid */}
      <Box
        w="93%"
        mx="auto"
        maxW="100%"
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 4, xl: 6 }}
      >
        {cards.map((card) => (
          <Box
            key={card.label}
            gridColumn={card.wide ? { base: "1", md: "1 / -1" } : undefined}
            bg="#FFFFFF"
            borderRadius="20px"
            overflow="hidden"
            boxShadow="0 1px 4px rgba(0,0,0,0.06)"
          >
            <Box
              w="100%"
              overflow="hidden"
              bg="#FAFAFA"
            >
              <img
                src={card.image}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>

            <Stack gap={3} px={{ base: 5, xl: 7 }} py={{ base: 5, xl: 6 }}>
              <TriangleIcon />
              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="400"
                fontSize={{ base: "15px", xl: "18px" }}
                lineHeight="1.5"
                color="#666666"
              >
                {card.label}
              </Text>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
