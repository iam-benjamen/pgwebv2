"use client";

import { Box, Heading, HStack, Link as ChakraLink, Text, Stack } from "@chakra-ui/react";
import { useState } from "react";

const PRESS_FILTERS = ["All", "Project Features", "Company Features", "Founder Interviews", "Expert Commentary"];
const INSIGHT_FILTERS = ["All", "Development & Sales Strategy", "Market Intelligence", "Case Studies"];

const pressArticles = [
  {
    categoryKey: "Project Features",
    categoryLabel: "Project Feature",
    categoryColor: "#2345EF",
    publication: "Forbes",
    date: "MAR 12, 2024",
    title: "How Real Estate Developers Are Shaping Stronger, More Inclusive Communities",
    excerpt: "A feature on PGStudio's immersive marketing approach and how it's transforming community-focused development to drive early absorption.",
    image: "https://res.cloudinary.com/djskbsz2k/image/upload/v1781820848/GALLERY/Residential/1_A_qoeo3j.jpg",
  },
  {
    categoryKey: "Founder Interviews",
    categoryLabel: "Founder Interview",
    categoryColor: "#F59E0B",
    publication: "Real Estate Weekly",
    date: "JAN 28, 2024",
    title: "Rethinking Real Estate Sales in the Digital Age",
    excerpt: "PGStudio founder Promise Adediran on how immersive experiences and data-driven marketing are changing how developments attract buyers.",
    image: "https://res.cloudinary.com/djskbsz2k/image/upload/v1781820723/GALLERY/Commercial/ImgHunt_Behance_20260611_47b7f8192034665.65d566bcc9567_tn2wit.jpg",
  },
  {
    categoryKey: "Company Features",
    categoryLabel: "Company Feature",
    categoryColor: "#10B981",
    publication: "Bisnow",
    date: "NOV 03, 2023",
    title: "The Technology Powering Tomorrow's Communities",
    excerpt: "A look at how PGStudio is helping developers create immersive sales experiences that drive early interest and stronger absorption.",
    image: "https://res.cloudinary.com/djskbsz2k/image/upload/v1781820850/GALLERY/Residential/SCENE_2_ksfgtw.jpg",
  },
  {
    categoryKey: "Expert Commentary",
    categoryLabel: "Expert Commentary",
    categoryColor: "#8B5CF6",
    publication: "GlobeSt.",
    date: "AUG 17, 2023",
    title: "Why the Next Generation of Buyers Expects More Than a Model Home",
    excerpt: "PGStudio contributes expert commentary on evolving buyer expectations and the role of immersive digital experiences in real estate.",
    image: "https://res.cloudinary.com/djskbsz2k/image/upload/v1781820832/GALLERY/Residential/ImgHunt_Behance_20260611_cdf299178982257.64f16d630a777_fx8vzw.jpg",
  },
];

const insightArticles = [
  {
    categoryKey: "Development & Sales Strategy",
    categoryColor: "#2345EF",
    date: "OCT 13, 2024",
    title: "Your Sales Center Can Do More Than Sell",
    excerpt: "Key considerations to ensure your on-site experience drives forward-thinking developers and measurable sales results.",
    image: "https://res.cloudinary.com/djskbsz2k/image/upload/v1781820848/GALLERY/Residential/1_A_qoeo3j.jpg",
  },
  {
    categoryKey: "Market Intelligence",
    categoryColor: "#F59E0B",
    date: "OCT 02, 2024",
    title: "3 Things to Know Before You Spend Six Figures on Your Next Community",
    excerpt: "Key considerations to ensure your marketing investment drives real demand and measurable results for your project.",
    image: "https://res.cloudinary.com/djskbsz2k/image/upload/v1781820723/GALLERY/Commercial/ImgHunt_Behance_20260611_47b7f8192034665.65d566bcc9567_tn2wit.jpg",
  },
  {
    categoryKey: "Case Studies",
    categoryColor: "#10B981",
    date: "SEP 18, 2024",
    title: "A Beautiful Development Can Still Be a Difficult Sell",
    excerpt: "How to bridge the gap between design, marketing and buyer perception to achieve stronger absorption rates.",
    image: "https://res.cloudinary.com/djskbsz2k/image/upload/v1781820850/GALLERY/Residential/SCENE_2_ksfgtw.jpg",
  },
];

function FilterTabs({
  filters,
  active,
  onChange,
}: {
  filters: string[];
  active: string;
  onChange: (f: string) => void;
}) {
  return (
    <HStack gap={2} flexWrap="wrap">
      {filters.map((f) => (
        <Box
          key={f}
          as="button"
          onClick={() => onChange(f)}
          px={{ base: "12px", xl: "16px" }}
          py="7px"
          borderRadius="full"
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="500"
          fontSize={{ base: "12px", xl: "13px" }}
          cursor="pointer"
          transition="all 0.2s"
          bg={active === f ? "#2345EF" : "rgba(255,255,255,0.06)"}
          color={active === f ? "#FFFFFF" : "rgba(255,255,255,0.55)"}
          border={active === f ? "1px solid #2345EF" : "1px solid rgba(255,255,255,0.1)"}
          _hover={{ bg: active === f ? "#1a37cc" : "rgba(255,255,255,0.1)" }}
        >
          {f}
        </Box>
      ))}
    </HStack>
  );
}

function PressCard({ article }: { article: (typeof pressArticles)[0] }) {
  return (
    <Box
      borderRadius="16px"
      overflow="hidden"
      bg="rgba(255,255,255,0.03)"
      border="1px solid rgba(255,255,255,0.08)"
      display="flex"
      flexDirection="column"
      transition="border-color 0.2s ease, transform 0.2s ease"
      _hover={{ borderColor: "rgba(255,255,255,0.2)", transform: "translateY(-4px)" }}
    >
      <Box position="relative" style={{ aspectRatio: "16/9" }} overflow="hidden" flexShrink={0}>
        <img
          src={article.image}
          alt={article.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <Box
          position="absolute"
          top="12px"
          left="12px"
          px="10px"
          py="4px"
          borderRadius="full"
          bg={article.categoryColor}
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="600"
          fontSize="10px"
          color="#FFFFFF"
          letterSpacing="0.5px"
          textTransform="uppercase"
        >
          {article.categoryLabel}
        </Box>
      </Box>

      <Stack gap={3} p={{ base: 4, xl: 5 }} flex={1}>
        <HStack justify="space-between" align="center">
          <Text
            fontFamily="var(--font-poppins), sans-serif"
            fontWeight="700"
            fontSize={{ base: "13px", xl: "14px" }}
            color="#FFFFFF"
            letterSpacing="0.3px"
          >
            {article.publication}
          </Text>
          <Text
            fontFamily="var(--font-poppins), sans-serif"
            fontWeight="400"
            fontSize="11px"
            color="rgba(255,255,255,0.35)"
            letterSpacing="0.3px"
          >
            {article.date}
          </Text>
        </HStack>

        <Text
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="600"
          fontSize={{ base: "14px", xl: "15px" }}
          lineHeight="1.45"
          color="#F5F7FA"
        >
          {article.title}
        </Text>

        <Text
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="400"
          fontSize={{ base: "12px", xl: "13px" }}
          lineHeight="1.65"
          color="rgba(255,255,255,0.45)"
          flex={1}
        >
          {article.excerpt}
        </Text>

        <ChakraLink
          href="#"
          display="flex"
          alignItems="center"
          gap="6px"
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="500"
          fontSize="13px"
          color="#2345EF"
          _hover={{ color: "#4B6CF5" }}
          transition="color 0.2s"
        >
          Read Article →
        </ChakraLink>
      </Stack>
    </Box>
  );
}

function InsightCard({ article }: { article: (typeof insightArticles)[0] }) {
  return (
    <Box
      borderRadius="16px"
      overflow="hidden"
      bg="rgba(255,255,255,0.03)"
      border="1px solid rgba(255,255,255,0.08)"
      display="flex"
      flexDirection="column"
      transition="border-color 0.2s ease, transform 0.2s ease"
      _hover={{ borderColor: "rgba(255,255,255,0.2)", transform: "translateY(-4px)" }}
    >
      <Box position="relative" style={{ aspectRatio: "16/9" }} overflow="hidden" flexShrink={0}>
        <img
          src={article.image}
          alt={article.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <Box
          position="absolute"
          inset={0}
          bg="linear-gradient(to bottom, transparent 50%, rgba(5,8,22,0.65) 100%)"
          pointerEvents="none"
        />
      </Box>

      <Stack gap={3} p={{ base: 4, xl: 5 }} flex={1}>
        <HStack justify="space-between" align="center">
          <Box
            px="10px"
            py="3px"
            borderRadius="full"
            bg="rgba(255,255,255,0.08)"
            border="1px solid rgba(255,255,255,0.1)"
            fontFamily="var(--font-poppins), sans-serif"
            fontWeight="500"
            fontSize="10px"
            color="rgba(255,255,255,0.65)"
            letterSpacing="0.3px"
          >
            {article.categoryKey}
          </Box>
          <Text
            fontFamily="var(--font-poppins), sans-serif"
            fontWeight="400"
            fontSize="11px"
            color="rgba(255,255,255,0.35)"
          >
            {article.date}
          </Text>
        </HStack>

        <Text
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="600"
          fontSize={{ base: "14px", xl: "16px" }}
          lineHeight="1.45"
          color="#F5F7FA"
          flex={1}
        >
          {article.title}
        </Text>

        <Text
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="400"
          fontSize={{ base: "12px", xl: "13px" }}
          lineHeight="1.65"
          color="rgba(255,255,255,0.45)"
        >
          {article.excerpt}
        </Text>

        <ChakraLink
          href="#"
          display="flex"
          alignItems="center"
          gap="6px"
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="500"
          fontSize="13px"
          color="#2345EF"
          _hover={{ color: "#4B6CF5" }}
          transition="color 0.2s"
        >
          Read Article →
        </ChakraLink>
      </Stack>
    </Box>
  );
}

function SubsectionHeader({
  eyebrow,
  title,
  viewAllLabel,
}: {
  eyebrow: string;
  title: string;
  viewAllLabel: string;
}) {
  return (
    <HStack justify="space-between" align="flex-end" mb={6} flexWrap="wrap" gap={4}>
      <Stack gap="6px">
        <HStack gap="8px" align="center">
          <Box w="5px" h="5px" borderRadius="full" bg="rgba(255,255,255,0.3)" flexShrink={0} />
          <Text
            fontFamily="var(--font-poppins), sans-serif"
            fontWeight="500"
            fontSize="11px"
            color="rgba(255,255,255,0.4)"
            letterSpacing="1.5px"
            textTransform="uppercase"
          >
            {eyebrow}
          </Text>
        </HStack>
        <Heading
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="700"
          fontSize={{ base: "19px", xl: "22px" }}
          color="#FFFFFF"
          lineHeight="1.2"
        >
          {title}
        </Heading>
      </Stack>
      <ChakraLink
        href="#"
        fontFamily="var(--font-poppins), sans-serif"
        fontWeight="500"
        fontSize="13px"
        color="#2345EF"
        _hover={{ color: "#4B6CF5" }}
        transition="color 0.2s"
        whiteSpace="nowrap"
      >
        {viewAllLabel} →
      </ChakraLink>
    </HStack>
  );
}

export default function BlogSection() {
  const [pressFilter, setPressFilter] = useState("All");
  const [insightFilter, setInsightFilter] = useState("All");

  const filteredPress =
    pressFilter === "All" ? pressArticles : pressArticles.filter((a) => a.categoryKey === pressFilter);

  const filteredInsights =
    insightFilter === "All" ? insightArticles : insightArticles.filter((a) => a.categoryKey === insightFilter);

  return (
    <Box as="section" bg="#050816" py={{ base: 16, xl: "100px" }}>
      <Box maxW="1280px" mx="auto" px={{ base: 5, md: 8, xl: 12 }}>

        {/* Section header */}
        <Stack gap={{ base: 4, xl: 5 }} mb={{ base: 14, xl: 20 }} align="center" textAlign="center">
          <HStack
            gap={2}
            align="center"
            border="1px solid rgba(255,255,255,0.12)"
            borderRadius="full"
            px={4}
            py="6px"
            display="inline-flex"
          >
            <Box w="6px" h="6px" borderRadius="full" bg="#2345EF" flexShrink={0} />
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="500"
              fontSize="11px"
              color="rgba(255,255,255,0.6)"
              letterSpacing="1.5px"
              textTransform="uppercase"
            >
              News &amp; Insights
            </Text>
          </HStack>

          <Heading
            fontFamily="'Monument Extended', 'PP Monument Extended', var(--font-poppins), sans-serif"
            fontWeight="800"
            fontSize={{ base: "26px", md: "36px", xl: "48px" }}
            lineHeight="1.1"
            letterSpacing="-0.5px"
            textTransform="uppercase"
            color="#FFFFFF"
            maxW="680px"
          >
            Ideas, Recognition &amp; Perspectives
          </Heading>

          <Text
            fontFamily="var(--font-poppins), sans-serif"
            fontWeight="400"
            fontSize={{ base: "14px", xl: "15px" }}
            lineHeight="1.75"
            color="rgba(255,255,255,0.5)"
            maxW="520px"
          >
            Media coverage, project features, and original insights on how real estate developments attract capital, engage buyers, and achieve stronger sales outcomes.
          </Text>
        </Stack>

        {/* In the Press */}
        <Box mb={{ base: 16, xl: 20 }}>
          <SubsectionHeader
            eyebrow="In the Press"
            title="Media Coverage & Project Features"
            viewAllLabel="View All Coverage"
          />
          <Box mb={5}>
            <FilterTabs filters={PRESS_FILTERS} active={pressFilter} onChange={setPressFilter} />
          </Box>
          <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr", xl: "repeat(4, 1fr)" }}
            gap={{ base: 4, xl: 5 }}
          >
            {filteredPress.map((article, i) => (
              <PressCard key={i} article={article} />
            ))}
          </Box>
        </Box>

        {/* PGStudio Insights */}
        <Box>
          <SubsectionHeader
            eyebrow="PGStudio Insights"
            title="Articles, Market Intelligence & Case Studies"
            viewAllLabel="View All Articles"
          />
          <Box mb={5}>
            <FilterTabs filters={INSIGHT_FILTERS} active={insightFilter} onChange={setInsightFilter} />
          </Box>
          <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", xl: "repeat(3, 1fr)" }}
            gap={{ base: 4, xl: 5 }}
          >
            {filteredInsights.map((article, i) => (
              <InsightCard key={i} article={article} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
