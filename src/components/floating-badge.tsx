"use client";

import { Box, Link as ChakraLink } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function FloatingBadge() {
  return (
    <ChakraLink
      asChild
      display="block"
      zIndex={100}
      position="fixed"
      cursor="pointer"
      right={{ base: "20px", md: "3.25rem" }}
      bottom={{ base: "24px", md: "40px" }}
      w={{ base: "120px", md: "175px" }}
      h={{ base: "120px", md: "175px" }}
      _hover={{ transform: "scale(1.06)" }}
      _focus={{ outline: "none" }}
      _focusVisible={{ outline: "none" }}
      transition="transform 0.3s ease"
    >
      <Link href="/book-call">
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

            <path
              d="M9.76064 11.0094L8.04918 -1.19542e-05L5.5691 5.02326L0.000563622 5.63569L9.76064 11.0094Z"
              fill="white"
              transform="translate(91.35, 25.44) rotate(120) translate(-15, -10.5)"
            />

            <text
              fill="white"
              fontFamily="Urbanist, sans-serif"
              fontWeight="600"
              fontSize="10"
              letterSpacing="1"
            >
              <textPath href="#btc" startOffset="5.5%" spacing="exact">
                Claim Free Strategy Session
              </textPath>
            </text>

            <path
              d="M-0.000869546 11.0094L1.71059 -1.19542e-05L4.19066 5.02326L9.7592 5.63569L-0.000869546 11.0094Z"
              fill="white"
              transform="translate(60.49, 144.97) rotate(90) translate(-26, 26.5)"
            />

            <text
              fill="white"
              fontFamily="Urbanist, sans-serif"
              fontWeight="600"
              fontSize="10.5"
              letterSpacing="1"
            >
              <textPath href="#btc" startOffset="70%" spacing="exact">
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
      </Link>
    </ChakraLink>
  );
}
