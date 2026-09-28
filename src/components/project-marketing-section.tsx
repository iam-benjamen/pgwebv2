"use client";

import { useState, useEffect } from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const BASE = "https://res.cloudinary.com/djskbsz2k/image/upload/v1790162263/GALLERY/Marketing%20Content";

const leftCol = [
  { url: `${BASE}/Frame_1_pajdkg.png`, alt: "Samuel Court Christmas Promo", ratio: "288/284" },
  { url: `${BASE}/Frame_2_pii9dk.png`, alt: "2505 Townsend Presale Poster", ratio: "288/404" },
];

const midCol = [
  { url: `${BASE}/Frame_3_wj7srh.png`, alt: "AJUBA Billboard Mockup", ratio: "460/164" },
  { url: null, alt: "Slideshow", ratio: "541/344" },
  { url: `${BASE}/Frame_5_cqkkpp.png`, alt: "AJUBA Banner", ratio: "541/164" },
];

const rightCol = [
  { url: `${BASE}/Frame_6_ztgc8g.png`, alt: "Brochure Mockup", ratio: "445/164" },
  { url: `${BASE}/Frame_7_opow5o.png`, alt: "Harmony Hills", ratio: "363/224" },
  { url: "https://res.cloudinary.com/djskbsz2k/image/upload/v1790162264/GALLERY/Marketing%20Content/Frame_8_uffji3.png", alt: "AJUBA Phase 1 Sold Out", ratio: "363/284" },
];

const SLIDESHOW_IMAGES = [
  "https://res.cloudinary.com/djskbsz2k/image/upload/v1790581892/GALLERY/Marketing%20Content/Kayceelaw_Properties_-_SOGAL_Banner_1_dtmyxd.png",
  "https://res.cloudinary.com/djskbsz2k/image/upload/v1790581889/GALLERY/Marketing%20Content/BELMONT_PRESERVE_-_1_1_mpdvgo.png",
  "https://res.cloudinary.com/djskbsz2k/image/upload/v1790581889/GALLERY/Marketing%20Content/RRR_Realty_-_Bethel_Villas_Apartments_1_uyedjy.png",
  "https://res.cloudinary.com/djskbsz2k/image/upload/v1790581884/GALLERY/Marketing%20Content/KLP_Aaron_-_HILL_VIEW_ESTATE_1_lvyfhl.png",
  `${BASE}/Frame_1_pajdkg.png`,
  `${BASE}/Frame_2_pii9dk.png`,
  `${BASE}/Frame_7_opow5o.png`,
  "https://res.cloudinary.com/djskbsz2k/image/upload/v1790162264/GALLERY/Marketing%20Content/Frame_8_uffji3.png",
];

function ImageSlideshow({ ratio }: { ratio: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % SLIDESHOW_IMAGES.length);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <Box position="relative" w="100%" overflow="hidden" style={{ aspectRatio: ratio }}>
      {SLIDESHOW_IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          loading={i === 0 ? "eager" : "lazy"}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.9s ease",
          }}
        />
      ))}
    </Box>
  );
}

function CollageImg({ url, alt, ratio }: { url: string | null; alt: string; ratio: string }) {
  if (!url) {
    return <ImageSlideshow ratio={ratio} />;
  }

  return (
    <img
      src={url}
      alt={alt}
      loading="lazy"
      style={{
        width: "100%",
        height: "auto",
        aspectRatio: ratio,
        objectFit: "cover",
        display: "block",
      }}
    />
  );
}

export default function ProjectMarketingSection() {
  return (
    <Box as="section" bg="#030303" py={{ base: 16, xl: "120px" }}>
      <Flex
        w="93%"
        mx="auto"
        justify="space-between"
        align="flex-start"
        mb={{ base: 10, xl: "40px" }}
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 6, lg: 8 }}
      >
        <Heading
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="700"
          fontSize={{ base: "36px", md: "48px", xl: "56px" }}
          lineHeight="1"
          letterSpacing="-0.277px"
          color="#FFFFFF"
          maxW={{ base: "100%", lg: "532px" }}
        >
          Project Marketing Content
        </Heading>
        <Text
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="400"
          fontSize={{ base: "15px", xl: "16px" }}
          lineHeight="1.2"
          color="#999999"
          maxW={{ base: "100%", lg: "401px" }}
          alignSelf={{ lg: "flex-end" }}
        >
          We create the visual and media content needed to communicate a real
          estate project across every channel. From social content and motion
          graphics to brochures, sales collateral, and video, we keep the
          project&apos;s story consistent from launch to sale.
        </Text>
      </Flex>

      <Flex
        w="93%"
        mx="auto"
        gap="16px"
        align="flex-start"
        direction={{ base: "column", md: "row" }}
      >
        {/* Left column */}
        <Flex direction="column" gap="16px" style={{ flex: "288" }}>
          {leftCol.map((img) => (
            <CollageImg key={img.url} {...img} />
          ))}
        </Flex>

        {/* Middle column */}
        <Flex direction="column" gap="16px" style={{ flex: "541" }}>
          {midCol.map((img, i) => (
            <CollageImg key={img.url ?? i} {...img} />
          ))}
        </Flex>

        {/* Right column */}
        <Flex direction="column" gap="16px" style={{ flex: "363" }}>
          {rightCol.map((img) => (
            <CollageImg key={img.url} {...img} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
