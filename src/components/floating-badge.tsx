"use client";

import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function FloatingBadge() {
  return (
    <Box
      zIndex={100}
      position="fixed"
      cursor="pointer"
      right={{ base: "20px", md: "3.25rem" }}
      bottom={{ base: "24px", md: "40px" }}
      w={{ base: "120px", md: "175px" }}
      h={{ base: "120px", md: "175px" }}
      _hover={{ transform: "scale(1.06)" }}
      transition="transform 0.3s ease"
    >
      <style>{`
        @keyframes badgeSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      <Box
        position="absolute"
        inset={0}
        borderRadius="full"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.14)",
          animation: "badgeSpin 18s linear infinite",
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 175 175"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <path id="btc" d="M87.5,24 a63.5,63.5 0 1,1 -0.001,0" />
          </defs>

          <text
            fill="white"
            fontFamily="Urbanist, sans-serif"
            fontWeight="600"
            fontSize="10.5"
            letterSpacing="1"
          >
            <textPath href="#btc" startOffset="5%" spacing="exact">
              DISCOVER YOUR DREAM
            </textPath>
          </text>

          <text
            fill="white"
            fontFamily="Urbanist, sans-serif"
            fontWeight="600"
            fontSize="10.5"
            letterSpacing="1"
          >
            <textPath href="#btc" startOffset="66%" spacing="exact">
              LAUNCH NOW
            </textPath>
          </text>
        </svg>
      </Box>

      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w={{ base: "66px", md: "79.55px" }}
        h={{ base: "66px", md: "79.55px" }}
        borderRadius="full"
        overflow="hidden"
        style={{
          background: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1.5px solid rgba(255,255,255,0.2)",
          boxShadow:
            "inset 0 0 24px rgba(255,255,255,0.07), 0 0 28px rgba(255,255,255,0.04)",
        }}
      >
        <Box
          top="50%"
          left="50%"
          position="absolute"
          w={{ base: "36px", md: "45px" }}
          h={{ base: "31px", md: "39px" }}
          style={{ transform: "translate(-65%, -55%) rotate(32.12deg)" }}
        >
          <Image
            src="/assets/floating-badge/Polygon 1.png"
            alt="Discover your dream — Launch Now"
            fill
            sizes="45px"
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
