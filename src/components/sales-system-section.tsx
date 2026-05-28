"use client";

import { Box, Button, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";

const listItems = [
  { icon: "/assets/sales-system/icons/Virtual.png", label: "Virtual sales galleries" },
  { icon: "/assets/sales-system/icons/Interactive.png", label: "Interactive walkthroughs" },
  { icon: "/assets/sales-system/icons/Investor.png", label: "Investor-ready presentations" },
];

export default function SalesSystemSection() {
  return (
    <Box
      as="section"
      bg="#000000"
      py={{ base: 16, xl: "100px" }}
      overflow="hidden"
    >
      <Flex
        w="93%"
        mx="auto"
        maxW="100%"
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 12, lg: 8, xl: 12 }}
      >
        {/* Left column */}
        <Stack gap={{ base: 6, xl: 8 }} maxW={{ base: "100%", lg: "40%",  }} flexShrink={0}>
          <Heading
            fontFamily="var(--font-poppins), sans-serif"
            fontWeight="700"
            fontSize={{ base: "36px", md: "44px", xl: "56px" }}
            lineHeight="1.15"
            letterSpacing="-0.5px"
          >
            <Box as="span" color="#8B8B8B">
              Turn Your Project
              <br />
              Into a{" "}
            </Box>
            <Box as="span" color="#FFFFFF">
              Digital Sales
              <br />
              Environment
            </Box>
          </Heading>

          <Text
            fontFamily="var(--font-poppins), sans-serif"
            fontWeight="500"
            fontSize={{ base: "16px", md: "18px", xl: "24px" }}
            lineHeight="1.55"
            color="#F0F0F0"
            // maxW="max-content"
          >
            We build integrated systems that move your project from a vision to a sold-out reality.
          </Text>

          <Box>
            <Button
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="400"
              fontSize={{ base: "14px", xl: "16px" }}
              bg="#2345EF"
              color="#FFFFFF"
              borderRadius="10px"
              px={{ base: 6, xl: 8 }}
              h={{ base: "44px", xl: "52px" }}
              _hover={{ bg: "#1a37cc" }}
            >
              See How This Changes
            </Button>
          </Box>

          <Stack gap={{ base: 4, xl: 5 }} mt={{ base: 0, xl: 2 }}>
            {listItems.map((item) => (
              <HStack key={item.label} gap={4} align="center">
                <Box flexShrink={0} w="28px" h="28px">
                  <img
                    src={item.icon}
                    alt=""
                    width={28}
                    height={28}
                    style={{ objectFit: "contain", width: "100%", height: "100%" }}
                  />
                </Box>
                <Text
                  fontFamily="var(--font-poppins), sans-serif"
                  fontWeight="400"
                  fontSize={{ base: "15px", xl: "22px" }}
                  lineHeight="1.5"
                  color="#F0F0F0"
                >
                  {item.label}
                </Text>
              </HStack>
            ))}
          </Stack>
        </Stack>

        {/* Right column — illustration with gradient border */}
        <Box
          flexShrink={0}
          w={{ base: "100%", lg: "50%", xl: "645px" }}
          h={{ base: "300px", md: "420px", xl: "567px" }}
          borderRadius="40px"
          p="1.5px"
          style={{
            background:
              "linear-gradient(145deg, #2345EF 0%, #0B1240 35%, #080C1A 60%, #1a2f9e 100%)",
          }}
          boxShadow="0 0 40px rgba(35,69,239,0.25), 0 0 80px rgba(35,69,239,0.1)"
        >
          <Box
            w="100%"
            h="100%"
            borderRadius="39px"
            bg="#080C1A"
            overflow="hidden"
            position="relative"
          >
            <img
              src="/assets/sales-system/Illustration.png"
              alt="Digital Sales Environment illustration"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
