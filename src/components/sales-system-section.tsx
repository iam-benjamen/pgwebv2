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

const listItems = [
  {
    icon: "/assets/sales-system/icons/Virtual.png",
    label: "Virtual sales galleries",
  },
  {
    icon: "/assets/sales-system/icons/Interactive.png",
    label: "Interactive walkthroughs",
  },
  {
    icon: "/assets/sales-system/icons/Investor.png",
    label: "Investor-ready presentations",
  },
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
        w="80%"
        mx="auto"
        maxW="100%"
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 12, lg: 8, xl: 12 }}
      >
        <Stack maxW={{ base: "100%", lg: "40%" }} flexShrink={0}>
          <Heading
            fontFamily="var(--font-poppins), sans-serif"
            fontWeight="700"
            fontSize={{ base: "36px", md: "48px" }}
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
            fontWeight="500"
            lineHeight="1.55"
            color="#F0F0F0"
            fontFamily="var(--font-poppins), sans-serif"
            fontSize={{ base: "16px", md: "18px" }}
          >
            We build integrated systems that move your <br /> project from a
            vision to a sold-out reality.
          </Text>

          <Button
            fontWeight="400"
            fontSize={{ base: "14px", xl: "16px" }}
            bg="#2345EF"
            color="#FFFFFF"
            borderRadius="10px"
            px={{ base: 4, xl: 6 }}
            h={{ base: "44px", xl: "52px" }}
            fontFamily="var(--font-poppins), sans-serif"
            _hover={{ bg: "#1a37cc" }}
            w={"max-content"}
            mt={{ base: 5, md: "1.5rem" }}
          >
            Build Your System
          </Button>

          <Stack gap={{ base: 4, xl: 3 }} mt={{ base: 0, xl: 4 }}>
            {listItems.map((item) => (
              <HStack
                key={item.label}
                gap={4}
                align="center"
                borderRadius="12px"
                border="1px solid #3F3F3F"
                w={"85%"}
                p={{ base: 2, xl: 3 }}
              >
                <Box flexShrink={0} w="28px" h="28px">
                  <img
                    src={item.icon}
                    alt=""
                    width={28}
                    height={28}
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
                <Text
                  fontFamily="var(--font-poppins), sans-serif"
                  fontWeight="400"
                  fontSize={{ base: "15px", xl: "18px" }}
                  lineHeight="1.5"
                  color="#F0F0F0"
                >
                  {item.label}
                </Text>
              </HStack>
            ))}
          </Stack>
        </Stack>

        <Box
          flexShrink={0}
          w={{ base: "100%", lg: "55%" }}
          h={{ base: "300px", md: "420px", xl: "max-content" }}
          p="1.5px"
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
              src="/assets/sales-system/new-illustration.png"
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
