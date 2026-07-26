"use client";

import { useRef, useState } from "react";
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
import Link from "next/link";
import { Navbar } from "./navbar";
import FloatingBadge from "./floating-badge";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <Box
      bg="#000000"
      position="relative"
      minH={{ base: "100svh", md: "1017px" }}
      overflow="hidden"
      display={{ base: "flex", md: "block" }}
      flexDirection="column"
    >
      <Box
        position={{ base: "relative", md: "absolute" }}
        top={{ md: "36%" }}
        left={{ md: 0 }}
        w="100%"
        flex={{ base: "1", md: "initial" }}
        minH={{ base: "280px", md: "auto" }}
        h={{ md: "860px" }}
        order={{ base: 2 }}
        zIndex={0}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="auto"
          poster="https://res.cloudinary.com/djskbsz2k/video/upload/q_auto,w_1920,so_0/v1784996138/GALLERY/VIDEOS/Hero_Section_MP4_kabeeh.jpg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source
            src="https://res.cloudinary.com/djskbsz2k/video/upload/q_auto,w_1920/v1784996134/GALLERY/VIDEOS/Hero_Section_WebM_vstlzt.webm"
            type="video/webm"
          />
          <source
            src="https://res.cloudinary.com/djskbsz2k/video/upload/q_auto,w_1920/v1784996138/GALLERY/VIDEOS/Hero_Section_MP4_kabeeh.mp4"
            type="video/mp4"
          />
        </video>

        <Box
          position="absolute"
          insetX={0}
          top={0}
          h="220px"
          bg="linear-gradient(180deg, #000000 0%, rgba(0,0,0,0) 100%)"
          zIndex={1}
        />
      </Box>

      <Box
        as="button"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        position="absolute"
        bottom="20px"
        right="20px"
        zIndex={3}
        w="36px"
        h="36px"
        borderRadius="full"
        bg="rgba(0,0,0,0.55)"
        border="1px solid rgba(255,255,255,0.18)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        _hover={{ bg: "rgba(0,0,0,0.8)" }}
        style={{ transition: "background 0.2s" }}
      >
        {isMuted ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </svg>
        )}
      </Box>

      <Box position="relative" zIndex={2}>
        <Navbar />

        <Container maxW="100%" mx="auto" px={{ base: 4, md: 6 }}>
          <Stack
            align="center"
            pt={{ base: "9rem", md: "11rem" }}
            gap={{ base: 3, md: "14px" }}
          >
            <Heading
              fontFamily="'Monument Extended', sans-serif"
              fontWeight="800"
              fontSize={{ base: "30px", sm: "40px", md: "48px" }}
              lineHeight={{ base: "1.2", md: "60px" }}
              letterSpacing="-0.2px"
              textTransform="uppercase"
              textAlign="center"
              color="#FFFFFF"
            >
              We exist to help
              <br />
              Real estate projects
            </Heading>

            <Text
              fontFamily="'Cormorant Garamond', serif"
              fontStyle="italic"
              fontWeight="600"
              fontSize={{ base: "48px", md: "64px" }}
              lineHeight={{ base: "1", md: "48px" }}
              letterSpacing="-0.3px"
              textAlign="center"
              color="#FFFFFF"
              textShadow="0px 16px 12px rgba(25, 25, 25, 0.6)"
            >
              Sell Smarter
            </Text>

            <Box position="relative" w="271px" h="10px">
              <Image
                src="/assets/hero-section/Curved Line.png"
                alt=""
                fill
                sizes="271px"
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Stack>

          
        </Container>
      </Box>

      <FloatingBadge />
    </Box>
  );
};

export default Hero;
