"use client";

import { useState } from "react";
import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const YOUTUBE_VIDEO_ID = "ScMzIvxBSi4";

const ProblemSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

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
              fontSize={{ base: "2.35rem", md: "3rem" }}
              lineHeight={{ base: "1.08", md: "1.2" }}
              letterSpacing="-0.6px"
            >
              Most projects don&apos;t <br /> struggle because of <br /> bad
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
            maxW="1070px"
            borderRadius={{ base: "22px", md: "28px" }}
            border="10px solid #2345EF"
            overflow="hidden"
            boxShadow="0px 114px 69px rgba(0, 0, 0, 0.05), 0px 51px 51px rgba(0, 0, 0, 0.09), 0px 13px 28px rgba(0, 0, 0, 0.1)"
            bg="#0F0F0F"
          >
            <Box position="relative" aspectRatio={1.93}>
              {isPlaying ? (
                <iframe
                  title="Project walkthrough video"
                  src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ border: 0, width: "100%", height: "100%" }}
                />
              ) : (
                <>
                  <Image
                    src="/assets/hero-image.png"
                    alt="Project walkthrough preview"
                    fill
                    sizes="(max-width: 768px) 100vw, 1070px"
                    style={{ objectFit: "cover" }}
                  />
                  <Box
                    position="absolute"
                    inset={0}
                    bg="linear-gradient(180deg, rgba(6, 7, 12, 0.14) 0%, rgba(6, 7, 12, 0.3) 100%)"
                  />
                  <Button
                    onClick={() => setIsPlaying(true)}
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w={{ base: "76px", md: "84px" }}
                    h={{ base: "76px", md: "84px" }}
                    minW="unset"
                    borderRadius="full"
                    bg="#2345EF"
                    color="#EFF0FE"
                    boxShadow="0 20px 50px rgba(0, 0, 0, 0.28)"
                    _hover={{ bg: "#3555F4" }}
                    _active={{ bg: "#1B3BE2" }}
                    aria-label="Play video"
                  >
                    <Box
                      ml="4px"
                      w="0"
                      h="0"
                      borderTop="14px solid transparent"
                      borderBottom="14px solid transparent"
                      borderLeft="22px solid #EFF0FE"
                    />
                  </Button>
                </>
              )}
            </Box>
          </Box>

          <Button
            onClick={() => setIsPlaying(true)}
            bg="#2345EF"
            color="#FFFFFF"
            h="63px"
            px={8}
            borderRadius="16px"
            fontFamily="var(--font-poppins), sans-serif"
            fontWeight="500"
            fontSize="18px"
            boxShadow="7px 42px 17px rgba(0, 0, 0, 0.01), 4px 23px 14px rgba(0, 0, 0, 0.05), 2px 10px 11px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)"
            _hover={{ bg: "#3555F4" }}
            _active={{ bg: "#1B3BE2" }}
          >
            See How This Changes
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default ProblemSection;
