"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Box, Button, Heading, HStack, Stack, Text } from "@chakra-ui/react";

function StarIcon({ filled, color }: { filled: boolean; color: string }) {
  const c = filled ? color : `${color}33`;
  return (
    <svg width="26" height="26" viewBox="-1 -1 28 27" fill="none" aria-hidden="true">
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
}

const testimonials = [
  {
    rating: 5,
    quote:
      "These guys are the best to work with. Lorem Ipsum dolor sit amet and every other things people write. But all I know is that PGStudio is second to none.",
    name: "Promise Adediran",
    role: "Founder, PGStudio",
    starColor: "#2345EF",
  },
  {
    rating: 5,
    quote:
      "We needed clients to gain confidence fast and save their decisions forever. Many teams promise it. PGStudio made it clear.",
    name: "Amara Lowell",
    role: "Principal Designer",
    starColor: "#2345EF",
  },
  {
    rating: 4,
    quote:
      "Financial planning and knowledge in the right places helped our entire team understand the vision faster than ever.",
    name: "Guy Hawkins",
    role: "Medical Assistant",
    starColor: "#2345EF",
  },
];

function Stars({ count, color }: { count: number; color: string }) {
  return (
    <HStack gap="8px" justify="center">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} filled={i < count} color={color} />
      ))}
    </HStack>
  );
}

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <Box
      as="section"
      bg="#000000"
      color="#FFFFFF"
      py={{ base: 16, xl: 24 }}
      overflow="hidden"
      position="relative"
    >
      {/* Heading */}
      <Heading
        fontFamily="'Monument Extended', 'PP Monument Extended', var(--font-poppins), sans-serif"
        fontWeight="800"
        fontSize={{ base: "28px", md: "40px", xl: "48px" }}
        lineHeight={{ base: "1.2", xl: "64px" }}
        letterSpacing="0.3px"
        textTransform="uppercase"
        textAlign="center"
        color="#FFFFFF"
        mb={{ base: 10, xl: 20 }}
        px={4}
      >
        What our clients say
      </Heading>

      {/* Carousel viewport */}
      <Box position="relative">
        <Box ref={emblaRef} overflow="hidden" pt="48px" mt="-48px">
          <Box display="flex" alignItems="flex-end" style={{ gap: "24px" }}>
            {testimonials.map((t, i) => {
              const isActive = i === selectedIndex;
              return (
                <Box
                  key={t.name}
                  // flex="0 0 auto"
                  display={"flex"}
                  w={
                    isActive
                      ? { base: "min(850px, calc(100vw - 48px))", xl: "850px" }
                      : { base: "min(474px, calc(100vw - 96px))", xl: "474px" }
                  }
                  minH={
                    isActive
                      ? { base: "460px", xl: "506px" }
                      : { base: "400px", xl: "460px" }
                  }
                  transform={isActive ? "translateY(-40px)" : "translateY(0)"}
                  transition="transform 0.4s ease, width 0.4s ease, opacity 0.4s ease"
                  borderRadius="20px"
                  bg={isActive ? "#FFFFFF" : "#191919"}
                  color={isActive ? "#000000" : "rgba(255,255,255,0.65)"}
                  px={isActive ? { base: 7, xl: 12 } : { base: 6, xl: 9 }}
                  py={isActive ? { base: 8, xl: 16 } : { base: 7, xl: 10 }}
                  opacity={isActive ? 1 : 0.65}
                  boxShadow={isActive ? "0 40px 80px rgba(0,0,0,0.5)" : "none"}
                  position="relative"
                  // overflow="hidden"
                  cursor={isActive ? "default" : "pointer"}
                  onClick={
                    isActive
                      ? undefined
                      : i < selectedIndex
                        ? scrollPrev
                        : scrollNext
                  }
                  justifyContent={"center"}
                  // my={"auto"}
                >
                  <Stack
                    align={"start"}
                    gap={isActive ? { base: 6, xl: 9 } : 5}
                    h="100%"
                  >
                    {/* Stars + quote */}
                    <Stack gap={isActive ? { base: 5, xl: 8 } : 5}>
                      <HStack justify="start">
                        <Stars
                          count={t.rating}
                          color={isActive ? "#2345EF" : t.starColor}
                        />
                      </HStack>
                      <Text
                        fontFamily="var(--font-poppins), sans-serif"
                        fontWeight="400"
                        fontSize={
                          isActive
                            ? { base: "20px", xl: "32px" }
                            : { base: "15px", xl: "20px" }
                        }
                        lineHeight={
                          isActive ? { base: "1.4", xl: "45px" } : "1.5"
                        }
                        textAlign="left"
                        w="full"
                      >
                        &ldquo;{t.quote}&rdquo;
                      </Text>
                    </Stack>

                    {/* Avatar + name */}
                    <HStack gap={4} justify="start" align="center">
                      <Box
                        w={{ base: "56px", xl: "74px" }}
                        h={{ base: "56px", xl: "74px" }}
                        borderRadius="full"
                        flexShrink={0}
                        bg={isActive ? "#D9D9D9" : "rgba(255,255,255,0.12)"}
                      />
                      <Stack gap="4px">
                        <Text
                          fontFamily="'Monument Extended', var(--font-poppins), sans-serif"
                          fontWeight="800"
                          fontSize={{ base: "14px", xl: "18px" }}
                          lineHeight="1.2"
                          textTransform="uppercase"
                          letterSpacing="0.3px"
                          color={
                            isActive ? "#000000" : "rgba(255,255,255,0.85)"
                          }
                        >
                          {t.name}
                        </Text>
                        <Text
                          fontFamily="var(--font-poppins), sans-serif"
                          fontWeight="400"
                          fontSize={{ base: "12px", xl: "14px" }}
                          color={
                            isActive ? "#555555" : "rgba(255,255,255,0.38)"
                          }
                        >
                          {t.role}
                        </Text>
                      </Stack>
                    </HStack>
                  </Stack>

                  {isActive && (
                    <Box
                      position="absolute"
                      right={{ base: "16px", xl: "32px" }}
                      bottom="-4.5rem"
                      fontFamily="var(--font-poppins), sans-serif"
                      fontWeight="600"
                      fontSize={{ base: "160px", xl: "250px" }}
                      lineHeight="1"
                      letterSpacing="-12px"
                      color="transparent"
                      transform="rotate(180deg)"
                      pointerEvents="none"
                      userSelect="none"
                      zIndex={90}
                      style={{ WebkitTextStroke: "1px #2345EF" }}
                    >
                      &ldquo;
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          position="absolute"
          insetY={0}
          left={0}
          w={{ base: "60px", md: "160px", xl: "260px" }}
          pointerEvents="none"
          bg="linear-gradient(90deg, #000 30%, transparent 100%)"
        />
        <Box
          position="absolute"
          insetY={0}
          right={0}
          w={{ base: "60px", md: "160px", xl: "260px" }}
          pointerEvents="none"
          bg="linear-gradient(270deg, #000 30%, transparent 100%)"
        />
      </Box>

      <HStack justify="center" gap={5} mt={{ base: 10, xl: 12 }}>
        <Button
          aria-label="Previous testimonial"
          onClick={scrollPrev}
          w={{ base: "52px", xl: "60px" }}
          h={{ base: "52px", xl: "60px" }}
          minW="unset"
          borderRadius="full"
          bg="rgba(255,255,255,0.08)"
          color="#FFFFFF"
          fontSize="22px"
          border="1px solid rgba(255,255,255,0.12)"
          _hover={{ bg: "rgba(255,255,255,0.15)" }}
        >
          ←
        </Button>
        <Button
          aria-label="Next testimonial"
          onClick={scrollNext}
          w={{ base: "52px", xl: "60px" }}
          h={{ base: "52px", xl: "60px" }}
          minW="unset"
          borderRadius="full"
          bg="#FFFFFF"
          color="#000000"
          fontSize="22px"
          _hover={{ bg: "#EDEDED" }}
        >
          →
        </Button>
      </HStack>
    </Box>
  );
}
