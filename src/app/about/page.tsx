"use client";

import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import FloatingBadge from "@/components/floating-badge";

const teamMembers = [
  {
    name: "Inioluwa Adediran",
    title: "Director of Business Strategy",
    imageSrc:
      "https://res.cloudinary.com/djskbsz2k/image/upload/v1785075453/TEAM/Inioluwa_Adediran_w1y6vv.jpg",
  },
  {
    name: "Benjamen Areo",
    title: "Director of Technology",
    imageSrc:
      "https://res.cloudinary.com/djskbsz2k/image/upload/v1785075452/TEAM/Benjamen_Areo_yev7kk.jpg",
  },
  {
    name: "Abdulmalik Adeleke",
    title: "Director of Interactive Visualization",
    imageSrc:
      "https://res.cloudinary.com/djskbsz2k/image/upload/v1785075455/TEAM/Abdulmalik_Adeleke_m0bzvm.jpg",
  },
  {
    name: "David Bamikunle",
    title: "Creative Director",
    imageSrc:
      "https://res.cloudinary.com/djskbsz2k/image/upload/v1785075453/TEAM/David_Bamikunle_uesufq.jpg",
  },
  {
    name: "Mazen Tail",
    title: "Director of Operations",
    imageSrc:
      "https://res.cloudinary.com/djskbsz2k/image/upload/v1785075455/TEAM/Mazen_Tail_tsyjpw.jpg",
  },
  {
    name: "Paul Kobia",
    title: "Director of Paid Media",
    imageSrc:
      "https://res.cloudinary.com/djskbsz2k/image/upload/v1785075456/TEAM/Paul_Kobia_lyq3d8.jpg",
  },
  {
    name: "Iyanuoluwa Adediran",
    title: "Director of People Operations",
    imageSrc:
      "https://res.cloudinary.com/djskbsz2k/image/upload/v1785075455/TEAM/Iyanuoluwa_Adediran_skkgjd.jpg",
  },
  {
    name: "Archibong Okon",
    title: "Regional Director of Architecture (Africa)",
    imageSrc:
      "https://res.cloudinary.com/djskbsz2k/image/upload/v1785075455/TEAM/Archibong_Okon_oa6wgm.jpg",
  },
  {
    name: "Kirubel Sileshi",
    title: "Interactive Visualization Engineer",
    imageSrc:
      "https://res.cloudinary.com/djskbsz2k/image/upload/v1785075453/TEAM/Kirubel_Sileshi_albp5u.jpg",
  },
  {
    name: "Marwan Abdelkader",
    title: "Automation & Systems Engineer",
    imageSrc:
    "https://res.cloudinary.com/djskbsz2k/image/upload/v1785075452/TEAM/Marwan_Abdelkader_oykzle.jpg",
  },
  {
    name: "Mody Hesham",
    title: "Motion Director",
    imageSrc:
      "https://res.cloudinary.com/djskbsz2k/image/upload/v1785075453/TEAM/Mody_Hesham_n7tl2z.jpg",
  },
  {
    name: "Blessing Darasimi",
    title: "Social Media Strategist",
    imageSrc:
      "https://res.cloudinary.com/djskbsz2k/image/upload/v1785075452/TEAM/Blessing_Darasimi_ildmdw.jpg",
  },
];

export default function AboutPage() {
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
            src="/assets/about/hero-bg.png"
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
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
            <Stack gap={0} maxW={{ base: "100%", lg: "55%" }}>
              <Heading
                fontFamily="'Monument Extended', sans-serif"
                fontWeight="800"
                fontSize={{ base: "30px", md: "42px", xl: "48px" }}
                lineHeight={{ base: "1.1", xl: "60px" }}
                letterSpacing="-0.2px"
                textTransform="uppercase"
                color="#FFFFFF"
                mb={{ base: 2, xl: "10px" }}
              >
                A Team Building
                <br />
                Systems That
                <br />
                Sell Real Estate
              </Heading>

              <Box
                position="relative"
                display={{ base: "none", md: "block" }}
                w={{ base: "260px", xl: "479px" }}
                h="9px"
                mt="-16px"
                ml="2rem"
                flexShrink={0}
              >
                <Image
                  src="/assets/about/Curved Line.png"
                  alt=""
                  fill
                  sizes="479px"
                  style={{
                    objectFit: "contain",
                    objectPosition: "left center",
                  }}
                />
              </Box>
            </Stack>

            <Stack
              gap={4}
              maxW={{ base: "100%", xl: "400px" }}
              flexShrink={0}
              align="flex-start"
            >
              <Box w="30px" h="30px" flexShrink={0} position="relative">
                <Image
                  src="/assets/about/Polygon.png"
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
                lineHeight="1.6"
                color="#F2F0F0"
              >
                Architectural intelligence and interactive sales systems built
                to accelerate buyer decisions and secure investor confidence.
              </Text>
            </Stack>
          </Flex>
        </Box>
      </Box>

      <Box as="section" bg="#121212" py={{ base: 16, xl: "100px" }}>
        <Flex
          w="93%"
          mx="auto"
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 10, xl: 16 }}
          align="flex-start"
        >
          <Stack
            gap={4}
            minW={"30%"}
            maxW={{ base: "100%", lg: "37%" }}
            flexShrink={0}
          >
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="700"
              fontSize="20px"
              letterSpacing="-0.5px"
              color="#535353"
            >
              OUR STORY
            </Text>
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="500"
              fontSize={{ base: "20px", xl: "24px" }}
              lineHeight="30px"
              color="#EFF0FE"
            >
              PGStudio was built to <br /> bridge the gap between <br />
              <Box as="span" color="#2345EF" fontStyle="italic">
                design and decision-making.
              </Box>
            </Text>
          </Stack>

          <Stack gap={6} flex="1">
            {[
              "Developers often have strong visions, great designs, and real demand, but lack the systems needed to move buyers, investors, and stakeholders to action.",
              "PGStudio is a decision systems company that combines architectural intelligence, visualization technology, and commercial strategy to help real estate projects secure support, funding, and sales. Based in the U.S. and operating globally, we&apos;ve supported $200M+ in development value and contributed to Forbes-recognized projects.",
            ].map((p, i) => (
              <Text
                key={i}
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="400"
                fontSize={{ base: "16px", xl: "18px" }}
                lineHeight="150%"
                color="#F2F0F0"
              >
                {p}
              </Text>
            ))}
          </Stack>
        </Flex>
      </Box>

      {/* ── Core Framework ────────────────────────────────────── */}
      <Box as="section" bg="#222222" py={{ base: 16, xl: "90px" }}>
        <Box w="93%" mx="auto">
          {/* Header row */}
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 8, xl: 16 }}
            mb={{ base: 12, xl: "60px" }}
            align="flex-start"
          >
            <Stack gap={3} maxW={{ base: "100%", lg: "37%" }} flexShrink={0}>
              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="700"
                fontSize="20px"
                letterSpacing="-0.5px"
                color="#535353"
              >
                OUR CORE FRAMEWORK
              </Text>
              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="500"
                fontSize={{ base: "20px", xl: "24px" }}
                lineHeight="30px"
                color="#EFF0FE"
              >
                Our work is drive by three beliefs.
              </Text>
            </Stack>

            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="400"
              fontSize={{ base: "16px", xl: "18px" }}
              lineHeight="150%"
              color="#FFFFFF"
              flex="1"
            >
              Beautiful design that doesn't drive decisions is decoration.
              Everything we build is designed to accelerate approvals, attract
              capital, and drive sales.
            </Text>
          </Flex>

          <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          >
            {[
              {
                title: "Decisions Over Visuals",
                body: "If it doesn't influence action, we don't build it.",
              },
              {
                title: "Systems Over Deliverables",
                body: "We build sales ecosystem, not one-off assets",
              },
              {
                title: "Revenue Over Aesthetics",
                body: "Revenue is the metric. Design is the vehicle.",
              },
            ].map((card, i, arr) => (
              <Box
                key={card.title}
                bg="#1D1D1D"
                borderTop="10px solid #2345EF"
                borderRight={
                  i < arr.length - 1
                    ? { base: "none", md: "4px solid #383838" }
                    : "none"
                }
                borderBottom={{
                  base: i < arr.length - 1 ? "4px solid #383838" : "none",
                  md: "none",
                }}
                px={{ base: 6, xl: "47px" }}
                py={{ base: 8, xl: "39px" }}
                h={"max-content"}
              >
                <Text
                  fontFamily="var(--font-poppins), sans-serif"
                  fontWeight="800"
                  fontSize={{ base: "18px", xl: "24px" }}
                  lineHeight="150%"
                  color="#FFFFFF"
                  mb={4}
                >
                  {card.title}
                </Text>
                <Text
                  fontFamily="var(--font-poppins), sans-serif"
                  fontWeight="400"
                  fontSize={{ base: "14px", xl: "16px" }}
                  lineHeight="120%"
                  color="#FFFFFF"
                >
                  {card.body}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box as="section" bg="#000000">
        <Box bg="#1D1D1D" py={{ base: 10, xl: "69px" }}>
          <Flex
            w="93%"
            mx="auto"
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 6, xl: 16 }}
            align={{ base: "flex-start", lg: "center" }}
            justify="space-between"
          >
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="700"
              fontSize={{ base: "32px", xl: "52px" }}
              lineHeight="150%"
              color="#FFFFFF"
              flexShrink={0}
            >
              LEADERSHIP & TEAM
            </Text>
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="400"
              fontSize={{ base: "15px", xl: "18px" }}
              lineHeight="150%"
              color="#FFFFFF"
              maxW={{ base: "100%", xl: "615px" }}
            >
              We don't just assign account managers; we deploy a purpose-built
              team engineered to align with your project's capital requirements,
              sales goal and timeline.
            </Text>
          </Flex>
        </Box>

        <Box w="93%" mx="auto" py={{ base: 14, xl: "80px" }}>
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 10, xl: "80px" }}
            align="flex-end"
          >
            <Box
              position="relative"
              flexShrink={0}
              w={{ base: "100%", lg: "320px", xl: "398px" }}
            >
              <Box
                position="relative"
                w="100%"
                h={{ base: "420px", xl: "530px" }}
                overflow="hidden"
              >
                <Image
                  src="/assets/about/principal-image.png"
                  alt="Promise (Ilerioluwa) Adediran"
                  fill
                  sizes="(max-width: 768px) 100vw, 398px"
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
              </Box>
            </Box>

            <Stack gap={4} flex="1" pt={{ base: 0, lg: "20px" }}>
              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="600"
                fontSize={{ base: "24px", xl: "36px" }}
                lineHeight="150%"
                color="#FFFFFF"
              >
                Promise (Ilerioluwa) Adediran
              </Text>
              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="500"
                fontSize={{ base: "16px", xl: "24px" }}
                lineHeight="150%"
                color="#848484"
              >
                FOUNDER · PRINCIPAL
              </Text>
              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="400"
                fontSize={{ base: "15px", xl: "18px" }}
                lineHeight="150%"
                color="#FFFFFF"
              >
                As a real estate strategist and visualization expert, Promise
                founded PGStudio on the conviction that successful developments
                require more than design—they require strong market positioning.
                The studio works with developers and investment groups across
                the U.S. and international markets, delivering
                institutional-grade visualizations, capital-raise materials, and
                strategic sales infrastructure.
              </Text>
              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="400"
                fontSize={{ base: "15px", xl: "18px" }}
                lineHeight="150%"
                color="#FFFFFF"
              >
                These systems de-risk projects, speed up decision-making, and
                improve market absorption. With a global focus, PGStudio turns
                early-stage architectural concepts into investable, market-ready
                assets for developers and private capital.
              </Text>
            </Stack>
          </Flex>
        </Box>

        <Box w="93%" mx="auto" pb={{ base: 14, xl: "80px" }}>
          <Box
            display="grid"
            gridTemplateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap={{ base: 6, xl: "18px" }}
            rowGap={{ base: 10, xl: "60px" }}
          >
            {teamMembers.map((member, i) => (
              <Box key={i}>
                <Box
                  position="relative"
                  w="100%"
                  style={{ aspectRatio: "309 / 324" }}
                  overflow="hidden"
                  bg="#FFFFFF"
                >
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 45vw, 309px"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                </Box>
                <Box mt={3}>
                  <Text
                    fontFamily="var(--font-poppins), sans-serif"
                    fontWeight="500"
                    fontSize={{ base: "16px", xl: "24px" }}
                    lineHeight="30px"
                    letterSpacing="-0.15px"
                    color="#F1F1F1"
                  >
                    {member.name}
                  </Text>
                  <Text
                    fontFamily="var(--font-poppins), sans-serif"
                    fontWeight="400"
                    fontSize={{ base: "13px", xl: "20px" }}
                    lineHeight="22px"
                    letterSpacing="-0.18px"
                    color="#848484"
                  >
                    {member.title}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box as="section" bg="#FFFFFF" py={{ base: 16, xl: "100px" }}>
        <Box w="93%" mx="auto">
          <Stack align="center" gap={3} mb={8}>
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="500"
              fontSize="20px"
              color="#5C5C5C"
              textAlign="center"
            >
              OUR CLIENTS & PARTNERS
            </Text>
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="500"
              fontSize={{ base: "28px", xl: "40px" }}
              lineHeight="60px"
              color="#000000"
              textAlign="center"
            >
              Trusted by the Industry
            </Text>
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="400"
              fontSize={{ base: "15px", xl: "18px" }}
              lineHeight="27px"
              color="#5C5C5C"
              textAlign="center"
              maxW="648px"
            >
              Collaborating with strategic partners to deliver elite service and
              measurable ROI for our clients.
            </Text>
            <Box
              w={{ base: "200px", xl: "367px" }}
              h="1px"
              bg="#5B5B5B"
              opacity={0.2}
              mt={2}
            />
          </Stack>

          <Box
            display="grid"
            gridTemplateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            gap={4}
          >
            {[
              "KEYLIGHT",
              "CRAYDL",
              "ANGELIC",
              "ROCKLEDGE",
              "HOMEBASE",
              "KAYCEELAW",
              "VITABELLA",
              "SOUNDTRIP",
              "MADELBA",
              "PYTHAGORAS",
              "KIRUBEL",
              "IMMERSA",
            ].map((name) => (
              <Box
                key={name}
                position="relative"
                style={{ aspectRatio: "271 / 120" }}
              >
                <Image
                  src={`/assets/about/client logos/${name}.png`}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 45vw, 271px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* <Box as="section" bg="#F3F3F3" py={{ base: 16, xl: "100px" }}>
        <Box w="93%" mx="auto">
          <Stack align="center" gap={2} mb={{ base: 10, xl: "60px" }}>
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="500"
              fontSize="20px"
              color="#5C5C5C"
              textAlign="center"
            >
              CLIENT RESULTS
            </Text>
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="500"
              fontSize={{ base: "26px", xl: "40px" }}
              lineHeight={{ base: "1.2", xl: "60px" }}
              color="#000000"
              textAlign="center"
            >
              Why our Partners Trust Us
            </Text>
          </Stack>

          <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={{ base: 5, xl: "29px" }}
            rowGap={{ base: 10, xl: "60px" }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <Box
                key={i}
                bg="#FFFFFF"
                borderRadius="9.65px"
                px={{ base: 5, xl: "24px" }}
                pt={{ base: 5, xl: "20px" }}
                pb={{ base: 5, xl: "20px" }}
                position="relative"
                overflow="visible"
              >
                <Box
                  position="absolute"
                  right={{ base: "16px", xl: "32px" }}
                  bottom={{ base: "-2.5rem", md: "-3.5rem" }}
                  fontFamily="var(--font-poppins), sans-serif"
                  fontWeight="600"
                  fontSize={{ base: "160px", xl: "193px" }}
                  lineHeight="1"
                  letterSpacing="-12px"
                  color="transparent"
                  transform="rotate(180deg)"
                  pointerEvents="none"
                  userSelect="none"
                  aria-hidden="true"
                  zIndex={90}
                  style={{ WebkitTextStroke: "1px #2345EF" }}
                >
                  &ldquo;
                </Box>
                <HStack gap="3px" mb={4}>
                  {Array.from({ length: 5 }).map((_, s) => {
                    const filled = s < 4;
                    const c = filled ? "#2345EF" : "#2345EF33";
                    return (
                      <svg
                        key={s}
                        width="13"
                        height="13"
                        viewBox="-1 -1 28 27"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M13 1L15.9 8.3L23 9.3L18 14.1L19.1 21L13 17.8L6.9 21L8 14.1L3 9.3L10.1 8.3Z"
                          fill={c}
                          stroke={c}
                          strokeWidth="2.5"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </svg>
                    );
                  })}
                </HStack>

                <Text
                  fontFamily="var(--font-poppins), sans-serif"
                  fontWeight="400"
                  fontSize={{ base: "13px", xl: "16.9px" }}
                  lineHeight="22px"
                  color="#000000"
                  mb={5}
                >
                  &ldquo;These guys are the best to work with. Lorem ipsum dolor
                  sit amet and every other things people write. But all I know
                  is that PGStudio is second to none.&rdquo;
                </Text>

                <HStack gap="9.65px">
                  <Box
                    w="38.61px"
                    h="38.61px"
                    borderRadius="full"
                    bg="#D9D9D9"
                    flexShrink={0}
                  />
                  <Box>
                    <Text
                      fontFamily="var(--font-poppins), sans-serif"
                      fontWeight="800"
                      fontSize="14.5px"
                      letterSpacing="0.14px"
                      textTransform="uppercase"
                      color="#000000"
                      lineHeight="1.2"
                    >
                      Promise Adediran
                    </Text>
                    <Text
                      fontFamily="var(--font-poppins), sans-serif"
                      fontWeight="400"
                      fontSize="10px"
                      letterSpacing="0.14px"
                      color="#000000"
                      lineHeight="13px"
                    >
                      Founder, PGStudio
                    </Text>
                  </Box>
                </HStack>
              </Box>
            ))}
          </Box>
        </Box>
      </Box> */}

      <CtaSection
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
            Let's Talk About
            <br />
            Your Project
          </Heading>
        }
        buttonText="Book a Discovery Call"
      />
      <Footer />
      <FloatingBadge />
    </Box>
  );
}
