"use client";

import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function FloatingBadge() {
  return (
    <Box
      position="fixed"
      right={{ base: "20px", md: "4rem" }}
      bottom={{ base: "24px", md: "40px" }}
      w={{ base: "120px", md: "175px" }}
      h={{ base: "120px", md: "175px" }}
      zIndex={100}
      cursor="pointer"
      _hover={{ transform: "scale(1.06)" }}
      transition="transform 0.3s ease"
    >
      <style>{`
        @keyframes badgeSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* Spinning outer ring */}
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
        <svg width="100%" height="100%" viewBox="0 0 175 175" style={{ position: "absolute", inset: 0 }}>
          <defs>
            {/* Clockwise from 12 o'clock */}
            <path id="btc" d="M87.5,24 a63.5,63.5 0 1,1 -0.001,0" />
          </defs>

          {/* Text — spacing="exact" prevents browser from stretching to fill the path */}
          <text fill="white" fontFamily="Urbanist, sans-serif" fontWeight="600" fontSize="10.5" letterSpacing="1">
            <textPath href="#btc" startOffset="5%" spacing="exact">
              DISCOVER YOUR DREAM
            </textPath>
          </text>

          <text fill="white" fontFamily="Urbanist, sans-serif" fontWeight="600" fontSize="10.5" letterSpacing="1">
            <textPath href="#btc" startOffset="67%" spacing="exact">
              LAUNCH NOW
            </textPath>
          </text>

          {/*
            Gap 1 centre (before LAUNCH NOW): ~48% → (87.0, 151.0), rot 173°
            Gap 2 centre (after  LAUNCH NOW): ~91% → (58.7,  30.9), rot 328°
          */}
          {/* <polygon
            points="0,-4.5 3.5,2.5 -3.5,2.5"
            fill="white"
            transform="translate(87.0, 151.0) rotate(173)"
          />
          <polygon
            points="0,-4.5 3.5,2.5 -3.5,2.5"
            fill="white"
            transform="translate(58.7, 30.9) rotate(328)"
          /> */}
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
          boxShadow: "inset 0 0 24px rgba(255,255,255,0.07), 0 0 28px rgba(255,255,255,0.04)",
        }}
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
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
