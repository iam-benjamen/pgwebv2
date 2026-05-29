"use client";

import { Box, Button, Heading, Text } from "@chakra-ui/react";

const works = [
  { title: "AJUBA", credit: "By Kayceelaw Properties", image: "/assets/featured-works/featured.png" },
  { title: "AJUBA", credit: "By Kayceelaw Properties", image: "/assets/featured-works/featured.png" },
  { title: "AJUBA", credit: "By Kayceelaw Properties", image: "/assets/featured-works/featured.png" },
  { title: "AJUBA", credit: "By Kayceelaw Properties", image: "/assets/featured-works/featured.png" },
];

function WorkCard({ title, credit, image }: { title: string; credit: string; image: string }) {
  return (
    <Box
      position="relative"
      borderRadius="17px"
      overflow="hidden"
      style={{ aspectRatio: "582 / 695" }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />

      <Box
        position="absolute"
        top="75%"
        left="-13%"
        right="-28%"
        bottom="-10%"
        pointerEvents="none"
        style={{
          background: "rgba(16, 13, 14, 0.6)",
          filter: "blur(29px)",
        }}
      />

      <Box
        position="absolute"
        top="83.75%"
        left="-5.8%"
        right="-5.8%"
        bottom="0"
        px="9.94%"
        pt="3.06%"
        pb="0"
        borderRadius="9px"
        cursor="pointer"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <Box
          position="absolute"
          top="20%"
          right="12.5%"
          w={{ base: "20px", md: "24px", xl: "30px" }}
          h={{ base: "20px", md: "24px", xl: "30px" }}
        >
          <img
            src="/assets/featured-works/Polygon.png"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>

        <Text
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="800"
          fontSize={{ base: "16px", md: "18px", xl: "26px" }}
          lineHeight="1"
          color="#F9F7F8"
          letterSpacing="0"
        >
          {title}
        </Text>
        <Text
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="500"
          fontSize={{ base: "11px", md: "12px", xl: "14.5px" }}
          lineHeight="1.2"
          color="#FFFFFF"
          mt={{ base: "6px", xl: "10px" }}
        >
          {credit}
        </Text>
      </Box>
    </Box>
  );
}

export default function FeaturedWorksSection() {
  return (
    <Box as="section" bg="#EFEFEF" py={{ base: 16, xl: "100px" }}>
      <Heading
        fontFamily="'Cormorant Garamond', serif"
        fontWeight="700"
        fontSize={{ base: "44px", md: "56px", xl: "75px" }}
        lineHeight={{ base: "1.1", xl: "58px" }}
        letterSpacing="-0.4px"
        textAlign="center"
        color="#000000"
        mb={{ base: 10, xl: 16 }}
      >
        Featured Work
      </Heading>

      <Box
        w="93%"
        mx="auto"
        maxW="100%"
        display="grid"
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={{ base: 4, xl: 6 }}
        mb={{ base: 10, xl: 14 }}
      >
        {works.map((work, i) => (
          <WorkCard key={i} {...work} />
        ))}
      </Box>

      <Box display="flex" justifyContent="center">
        <Button
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="500"
          fontSize="18px"
          bg="#2345EF"
          color="#FFFFFF"
          borderRadius="12px"
          w="142px"
          h="63px"
          _hover={{ bg: "#1a37cc" }}
          boxShadow="7px 42px 17px rgba(0,0,0,0.01), 4px 23px 14px rgba(0,0,0,0.05), 2px 10px 11px rgba(0,0,0,0.09), 0px 3px 6px rgba(0,0,0,0.1)"
        >
          View Works
        </Button>
      </Box>
    </Box>
  );
}
