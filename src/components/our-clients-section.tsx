"use client";

import { Box, Text } from "@chakra-ui/react";

const logos = [
  { src: "/assets/clients/Kayceelaw%20Properties.png", alt: "Kayceelaw Properties" },
  { src: "/assets/clients/VITA%20Bella%20Interiors.png", alt: "VITA Bella Interiors" },
  { src: "/assets/clients/SoundTRIP.png", alt: "SoundTRIP" },
  { src: "/assets/clients/Madelba%20Studios.png", alt: "Madelba Studios" },
  { src: "/assets/clients/PYTHAGORAS%20Group.png", alt: "PYTHAGORAS Group" },
  { src: "/assets/clients/Kirubel%20Logo.png", alt: "Kirubel Logo" },
  { src: "/assets/clients/Keylight%20Development.png", alt: "Keylight Development" },
  { src: "/assets/clients/CRAYDL.png", alt: "CRAYDL" },
  {
    src: "/assets/clients/ANGELIC%20REAL%20ESTATE%20%26%20INVESTMENTS.png",
    alt: "Angelic Real Estate & Investments",
  },
  { src: "/assets/clients/Rockledge%20Remodeling.png", alt: "Rockledge Remodeling" },
  { src: "/assets/clients/HomeBASE.png", alt: "HomeBASE" },
];

const LOGO_H = 64;
const LOGO_GAP = 54;

export function OurClientsSection() {
  return (
    <Box as="section" bg="#1C1C1C" position="relative" zIndex={1} overflow="hidden">
      <style>{`
        @keyframes clients-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .clients-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: clients-scroll 35s linear infinite;
          will-change: transform;
        }
        .clients-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Top drop-shadow bleeding from hero/stats above */}
      <Box
        position="absolute"
        top="-10px"
        left={0}
        right={0}
        h="60px"
        bg="black"
        pointerEvents="none"
        zIndex={1}
        style={{ filter: "blur(30px)", opacity: 0.85 }}
      />

      <Box
        pt={{ base: 16, xl: "134px" }}
        pb={{ base: 16, xl: "135px" }}
        position="relative"
        zIndex={2}
      >
        {/* ◄ CLIENTS ► */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={{ base: "12px", xl: "19px" }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            <polygon points="22,0 0,11 22,22" fill="#0900FF" />
          </svg>

          <Text
            fontFamily="var(--font-poppins)"
            fontWeight="500"
            fontSize={{ base: "1.5rem", xl: "2rem" }}
            lineHeight={{ base: "1.2", xl: "68px" }}
            color="#FFFFFF"
          >
            CLIENTS
          </Text>

          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            <polygon points="0,0 22,11 0,22" fill="#0900FF" />
          </svg>
        </Box>

        {/* Subtitle */}
        <Text
          fontFamily="var(--font-poppins)"
          fontWeight="300"
          fontSize={{ base: "1rem", xl: "1.5rem" }}
          lineHeight={{ base: "1.6", xl: "30px" }}
          color="#FFFFFF"
          textAlign="center"
          maxW={{ base: "90%", xl: "745px" }}
          mx="auto"
          mt={{ base: 4, xl: 0 }}
          mb={{ base: 10, xl: "51px" }}
        >
          Our clients are our top priority, and we help them accelerate decisions, secure funding,
          and sell more effectively
        </Text>

        {/* Faded line — top */}
        <Box
          h="1px"
          maxW={{ base: "80%", xl: "600px" }}
          mx="auto"
          style={{
            background:
              "linear-gradient(90deg, #1C1C1C 9.61%, #FFFFFF 47.12%, #1C1C1C 89.91%)",
          }}
        />

        {/* Marquee */}
        <Box position="relative" overflow="hidden" py={{ base: "16px", xl: "19px" }}>
          <div className="clients-track">
            {[...logos, ...logos].map((logo, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                style={{
                  height: `${LOGO_H}px`,
                  width: "auto",
                  flexShrink: 0,
                  marginRight: `${LOGO_GAP}px`,
                  display: "block",
                }}
              />
            ))}
          </div>

          {/* Fade — left */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: "clamp(100px, 33vw, 479px)",
              background:
                "linear-gradient(90deg, #1C1C1C 0%, #1C1C1C 25%, rgba(28,28,28,0.75) 50%, rgba(28,28,28,0) 100%)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />

          {/* Fade — right */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "clamp(100px, 33vw, 479px)",
              background:
                "linear-gradient(270deg, #1C1C1C 0%, #1C1C1C 25%, rgba(28,28,28,0.75) 50%, rgba(28,28,28,0) 100%)",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
        </Box>

        {/* Faded line — bottom */}
        <Box
          h="1px"
          maxW={{ base: "80%", xl: "600px" }}
          mx="auto"
          style={{
            background:
              "linear-gradient(90deg, #1C1C1C 9.61%, #FFFFFF 47.12%, #1C1C1C 89.91%)",
          }}
        />
      </Box>
    </Box>
  );
}
