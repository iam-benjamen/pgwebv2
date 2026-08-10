"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import FloatingBadge from "@/components/floating-badge";

const filters = [
  "All",
  // "Case Studies",
  "Residential",
  "Commercial",
  "Interior",
  "Animation",
  "AVL / Events",
  // "Virtual Tours",
];

const FILTER_TO_API: Record<string, string> = {
  All: "all",
  Residential: "residential",
  Commercial: "commercial",
  Interior: "interior",
  Animation: "animation",
  "AVL / Events": "avl-events",
};

const SKELETON_RATIOS = ["3/4", "4/5", "4/5", "3/4", "4/5", "3/4", "4/5", "4/5"];

type WorkImage = { url: string; ratio: string };
type WorkVideo = { url: string; thumbnailUrl: string; ratio: string };

function noRightClick(e: React.MouseEvent) {
  e.preventDefault();
}

function SkeletonCard({ ratio }: { ratio: string }) {
  return (
    <Box
      w="100%"
      style={{ aspectRatio: ratio }}
      borderRadius="4px"
      className="works-skeleton"
    />
  );
}

function ProjectCard({ url, ratio, onClick }: WorkImage & { onClick: () => void }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Box
      position="relative"
      w="100%"
      style={{ aspectRatio: ratio }}
      overflow="hidden"
      bg="rgba(255,255,255,0.05)"
      cursor="pointer"
      onClick={onClick}
    >
      <img
        src={url}
        alt=""
        loading="lazy"
        draggable={false}
        onLoad={() => setLoaded(true)}
        onContextMenu={noRightClick}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.4s ease",
          userSelect: "none",
        }}
      />
    </Box>
  );
}

function Lightbox({ image, onClose }: { image: WorkImage; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Swap w_800 → w_1600 for a sharper full-screen view
  const fullUrl = image.url.replace("w_800", "w_1600");

  return (
    <Box
      position="fixed"
      inset={0}
      zIndex={9999}
      bg="rgba(0,0,0,0.92)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      onClick={onClose}
      cursor="zoom-out"
      style={{ backdropFilter: "blur(6px)", animation: "lbFadeIn 0.2s ease" }}
    >
      {/* Close button */}
      <Box
        position="absolute"
        top={{ base: 4, md: 6 }}
        right={{ base: 4, md: 6 }}
        w="40px"
        h="40px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="full"
        bg="rgba(255,255,255,0.1)"
        color="white"
        fontSize="20px"
        fontWeight="300"
        cursor="pointer"
        _hover={{ bg: "rgba(255,255,255,0.2)" }}
        onClick={onClose}
        zIndex={1}
        style={{ lineHeight: 1 }}
      >
        ✕
      </Box>

      {/* Image — stopPropagation so clicking on it doesn't close */}
      <Box
        maxW="90vw"
        maxH="90vh"
        onClick={(e) => e.stopPropagation()}
        cursor="default"
        style={{ animation: "lbScaleIn 0.22s ease" }}
      >
        <img
          src={fullUrl}
          alt=""
          draggable={false}
          onContextMenu={noRightClick}
          style={{
            maxWidth: "90vw",
            maxHeight: "90vh",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            display: "block",
            borderRadius: "4px",
            userSelect: "none",
          }}
        />
      </Box>
    </Box>
  );
}

function VideoCard({ url, ratio }: WorkVideo) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <Box
      position="relative"
      w="100%"
      style={{ aspectRatio: ratio }}
      overflow="hidden"
      bg="rgba(255,255,255,0.05)"
      borderRadius="4px"
    >
      <video
        ref={videoRef}
        src={url}
        preload="metadata"
        controls={playing}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      {!playing && (
        <Box
          position="absolute"
          bottom="12px"
          right="12px"
          w="42px"
          h="42px"
          borderRadius="full"
          bg="rgba(0,0,0,0.55)"
          border="1.5px solid rgba(255,255,255,0.35)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          _hover={{ bg: "rgba(0,0,0,0.75)" }}
          onClick={handlePlay}
          style={{ backdropFilter: "blur(4px)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 3L13 8L5 13V3Z" fill="white" />
          </svg>
        </Box>
      )}
    </Box>
  );
}

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [images, setImages] = useState<WorkImage[]>([]);
  const [videos, setVideos] = useState<WorkVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<WorkImage | null>(null);

  const closeLight = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const apiFilter = FILTER_TO_API[activeFilter];
    if (!apiFilter) {
      setImages([]);
      setVideos([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    if (activeFilter === "Animation") {
      fetch(`/api/works?filter=animation`)
        .then((r) => r.json())
        .then((data) => { setVideos(data.videos ?? []); setImages([]); })
        .finally(() => setLoading(false));
    } else {
      fetch(`/api/works?filter=${apiFilter}`)
        .then((r) => r.json())
        .then((data) => { setImages(data.images ?? []); setVideos([]); })
        .finally(() => setLoading(false));
    }
  }, [activeFilter]);

  return (
    <Box bg="#050816" minH="100svh" color="#F5F7FA">
      <Navbar />

      <Box
        as="section"
        position="relative"
        overflow="hidden"
        minH={{ base: "auto", xl: "673px" }}
        bg="#000000"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
      >
        <Box position="absolute" inset={0}>
          <Image
            src="/assets/works/hero-backgrond.jpg"
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <Box position="absolute" inset={0} bg="rgba(0,4,18,0.68)" />
        </Box>

        <Box position="relative" zIndex={1} pt={{ base: "130px", md: "160px" }}>
          <Flex
            w="93%"
            mx="auto"
            pb={{ base: 8, xl: "52px" }}
            align="flex-end"
            justify="space-between"
            gap={{ base: 10, xl: 16 }}
            direction={{ base: "column", lg: "row" }}
          >
            <Stack gap={3} maxW={{ base: "100%", lg: "55%" }}>
              <Heading
                fontFamily="'Monument Extended', sans-serif"
                fontWeight="800"
                fontSize={{ base: "30px", md: "42px", xl: "48px" }}
                lineHeight={{ base: "1.1", xl: "60px" }}
                letterSpacing="-0.2px"
                textTransform="uppercase"
                color="#FFFFFF"
              >
                Projects That
                <br />
                Sold &amp; Delivered
              </Heading>

              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontStyle="italic"
                fontWeight="700"
                fontSize={{ base: "18px", xl: "24px" }}
                lineHeight={{ base: "1.4", xl: "30px" }}
                letterSpacing="-0.3px"
                color="#FFFFFF"
                textShadow="0px 16px 12px rgba(25,25,25,0.6)"
                maxW={{ base: "100%", xl: "560px" }}
              >
                High-end visual storytelling that accelerates development sales.
              </Text>
            </Stack>

            <Stack
              gap={4}
              maxW={{ base: "100%", xl: "426px" }}
              flexShrink={0}
              align="flex-start"
            >
              <Box w="30px" h="30px" flexShrink={0} position="relative">
                <Image
                  src="/assets/works/Polygon.png"
                  alt=""
                  fill
                  sizes="30px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="400"
                fontSize={{ base: "15px", xl: "18px" }}
                lineHeight="1.5"
                color="#F2F0F0"
              >
                Every project here represents a decision made, a deal closed, or
                a development funded. This is what decision systems look like in
                the real world.
              </Text>
            </Stack>
          </Flex>
        </Box>
      </Box>

      <Box py={{ base: 12, xl: 20 }}>
        <Box w="93%" mx="auto">
          <HStack gap={3} flexWrap="wrap" mb={{ base: 8, xl: 12 }}>
            {filters.map((f) => (
              <Button
                key={f}
                onClick={() => setActiveFilter(f)}
                h="36px"
                px={5}
                borderRadius="full"
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="500"
                fontSize="13px"
                bg={activeFilter === f ? "#2345EF" : "rgba(255,255,255,0.07)"}
                color={activeFilter === f ? "#FFFFFF" : "rgba(255,255,255,0.5)"}
                border={
                  activeFilter === f
                    ? "none"
                    : "1px solid rgba(255,255,255,0.12)"
                }
                _hover={{
                  bg: activeFilter === f ? "#1a37cc" : "rgba(255,255,255,0.13)",
                  color: "#FFFFFF",
                }}
              >
                {f}
              </Button>
            ))}
          </HStack>

          <style>{`
            .works-masonry { columns: 2; column-gap: 12px; }
            @media (min-width: 1280px) { .works-masonry { columns: 4; } }
            .works-masonry-item { break-inside: avoid; margin-bottom: 12px; }
            .animation-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
            .works-skeleton {
              background: linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%);
              background-size: 200% 100%;
              animation: shimmer 1.6s infinite;
            }
            @keyframes lbFadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes lbScaleIn {
              from { transform: scale(0.95); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
          `}</style>

          {loading ? (
            activeFilter === "Animation" ? (
              <div className="animation-grid">
                {Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} ratio="16/9" />
                ))}
              </div>
            ) : (
              <div className="works-masonry">
                {SKELETON_RATIOS.map((ratio, i) => (
                  <div key={i} className="works-masonry-item">
                    <SkeletonCard ratio={ratio} />
                  </div>
                ))}
              </div>
            )
          ) : activeFilter === "Animation" ? (
            videos.length === 0 ? (
              <Box
                color="rgba(255,255,255,0.3)"
                textAlign="center"
                py={20}
                fontFamily="var(--font-poppins), sans-serif"
                fontSize="15px"
              >
                No animations yet.
              </Box>
            ) : (
              <div className="animation-grid">
                {videos.map((vid, i) => (
                  <VideoCard key={i} {...vid} />
                ))}
              </div>
            )
          ) : images.length === 0 ? (
            <Box
              color="rgba(255,255,255,0.3)"
              textAlign="center"
              py={20}
              fontFamily="var(--font-poppins), sans-serif"
              fontSize="15px"
            >
              No images yet for this category.
            </Box>
          ) : (
            <div className="works-masonry">
              {images.map((img, i) => (
                <div key={i} className="works-masonry-item">
                  <ProjectCard {...img} onClick={() => setSelected(img)} />
                </div>
              ))}
            </div>
          )}
        </Box>
      </Box>

      {selected && <Lightbox image={selected} onClose={closeLight} />}

      <CtaSection
        buttonText="Discover the Process"
        minH={{ base: "300px", md: "380px", xl: "420px" }}
        heading={
          <Heading
            fontFamily="'Monument Extended', var(--font-poppins), sans-serif"
            fontWeight="400"
            fontSize={{ base: "2rem", md: "2.4rem", xl: "40px" }}
            lineHeight="1.1"
            letterSpacing="-0.01em"
            color="#E9E9E9"
          >
            Ready to{" "}
            <Box as="span" display="inline-block" position="relative">
              Pre-Sell
              <Box
                position="absolute"
                left="50%"
                bottom={{ base: "-6px", md: "-1px" }}
                transform="translateX(-50%)"
                w={{ base: "180px", md: "240px", xl: "345px" }}
                h={{ base: "4px", md: "5px", xl: "6px" }}
                pointerEvents="none"
              >
                <Image
                  src="/assets/cta-curved-line.svg"
                  alt=""
                  fill
                  sizes="345px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Box>
            <br />
            your Next Project?
          </Heading>
        }
      />
      <Footer />
      <FloatingBadge />
    </Box>
  );
}
