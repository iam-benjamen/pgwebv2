"use client";

import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { CloudinaryVideo } from "@/components/cloudinary-video";

const VIDEO_PUBLIC_ID =
  "v1783375830/GALLERY/VIDEOS/Problem_Section_Video_xymebs.mp4";

const ProblemSection = () => {
  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      bg="#171717"
      py={{ base: 20, md: 24, xl: 28 }}
      w="full"
    >
      <Box
        position="absolute"
        top={{ base: "-120px", md: "-180px" }}
        left="50%"
        transform="translateX(-50%)"
        w={{ base: "520px", md: "100%" }}
        h={{ base: "220px", md: "320px" }}
        borderRadius="full"
        filter="blur(110px)"
        pointerEvents="none"
      />

      <Container maxW="100%" px={{ base: 4, md: 10 }}>
        <Stack align="center" gap={{ base: 8, md: 10 }}>
          <Stack align="center" gap={{ base: 4, md: 5 }} maxW="720px">
            <Heading
              color="#FFFFFF"
              textAlign="center"
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="700"
              fontSize={{ base: "1.75rem", md: "3rem" }}
              lineHeight={{ base: "1.08", md: "1.2" }}
              letterSpacing="-0.6px"
            >
              Most projects don&apos;t struggle because of bad
              design.
            </Heading>

            <Text
              color="#B9B8B8"
              textAlign="center"
              fontFamily="var(--font-poppins), sans-serif"
              fontStyle="italic"
              fontWeight="300"
              fontSize={{ base: "1.25rem", md: "1.5rem" }}
              lineHeight="1.2"
              maxW="640px"
            >
              They struggle because vision isn&apos;t fully understood, buyers
              hesitate, sales teams lack leverage.
            </Text>
          </Stack>

          <Box
            position="relative"
            w="full"
            maxW="1170px"
            borderRadius={{ base: "18px", md: "28px" }}
            overflow="hidden"
            boxShadow={"lg"}
            bg="#0F0F0F"
          >
            <Box position="relative" aspectRatio={1.93}>
              <CloudinaryVideo publicId={VIDEO_PUBLIC_ID} />
            </Box>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
};

export default ProblemSection;
