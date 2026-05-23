"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";

const testimonials = [
  {
    rating: 4,
    quote:
      "These guys are the best to work with. Lorem Ipsum dolor sit amet and every other things people write. But all I know is that PGStudio is second to none.",
    name: "Promise Adediran",
    role: "Founder, PGStudio",
  },
  {
    rating: 5,
    quote:
      "We needed clients to gain confidence fast and save their decisions forever. Many teams promise it. PGStudio made it clear.",
    name: "Amara Lowell",
    role: "Principal Designer",
  },
  {
    rating: 5,
    quote:
      "Financial planning, knowledge and money in the right places helped people all of our team understand the vision faster.",
    name: "Guy Hawkins",
    role: "Medical Assistant",
  },
] as const;

const slideDuration = 380;
type SlideDirection = "previous" | "next";

const Stars = ({ rating, muted = false }: { rating: number; muted?: boolean }) => (
  <HStack gap={{ base: 1.5, md: 2 }}>
    {Array.from({ length: 5 }).map((_, index) => (
      <Box
        key={index}
        as="span"
        color={
          index < rating
            ? muted
              ? "#1F3CC8"
              : "#2747E8"
            : muted
              ? "rgba(39, 71, 232, 0.28)"
              : "#E3E8FF"
        }
        fontSize={{ base: "24px", md: "30px" }}
        lineHeight="1"
      >
        ★
      </Box>
    ))}
  </HStack>
);

const TestimonialCard = ({
  testimonial,
  active,
}: {
  testimonial: (typeof testimonials)[number];
  active: boolean;
}) => (
  <Box
    flex="0 0 auto"
    w={
      active
        ? { base: "calc(100vw - 32px)", md: "640px", xl: "786px" }
        : { base: "calc(100vw - 80px)", md: "430px", xl: "474px" }
    }
    minH={active ? { base: "470px", md: "469px" } : { base: "380px", md: "468px" }}
    borderRadius={{ base: "18px", md: "18px" }}
    bg={active ? "#FFFFFF" : "linear-gradient(90deg, #111111 0%, #1B1B1B 100%)"}
    color={active ? "#050505" : "rgba(255, 255, 255, 0.62)"}
    px={active ? { base: 7, md: 12 } : { base: 7, md: 12 }}
    py={active ? { base: 9, md: 14 } : { base: 8, md: 12 }}
    opacity={active ? 1 : 0.82}
    overflow="hidden"
    position="relative"
    boxShadow={active ? "0 34px 80px rgba(0, 0, 0, 0.34)" : "none"}
    transition="width 260ms ease, opacity 260ms ease, transform 260ms ease"
  >
    <Stack gap={{ base: 7, md: 9 }} h="full" justify="space-between">
      <Stack gap={{ base: 7, md: 9 }}>
        <Stars rating={testimonial.rating} muted={!active} />

        <Text
          fontFamily="var(--font-poppins), sans-serif"
          fontWeight="500"
          fontSize={active ? { base: "26px", md: "35px" } : { base: "24px", md: "34px" }}
          lineHeight={active ? { base: "1.24", md: "41px" } : { base: "1.25", md: "41px" }}
          letterSpacing="-0.45px"
          maxW={active ? "690px" : "420px"}
        >
          “{testimonial.quote}”
        </Text>
      </Stack>

      <HStack gap={{ base: 4, md: 5 }} align="center">
        <Box
          w={{ base: "62px", md: "74px" }}
          h={{ base: "62px", md: "74px" }}
          borderRadius="full"
          flexShrink={0}
          bg={active ? "#D9D9D9" : "linear-gradient(135deg, #F2F2F2 0%, #A9A9A9 100%)"}
        />
        <Stack gap={1}>
          <Text
            fontFamily="var(--font-poppins), sans-serif"
            fontWeight="800"
            fontSize={{ base: "20px", md: "26px" }}
            lineHeight="1"
            textTransform="uppercase"
            color={active ? "#050505" : "rgba(255, 255, 255, 0.62)"}
          >
            {testimonial.name}
          </Text>
          <Text
            fontFamily="var(--font-poppins), sans-serif"
            fontWeight="500"
            fontSize={{ base: "13px", md: "15px" }}
            lineHeight="1.2"
            color={active ? "#050505" : "rgba(255, 255, 255, 0.38)"}
          >
            {testimonial.role}
          </Text>
        </Stack>
      </HStack>
    </Stack>

    {active ? (
      <>
        <Button
          aria-label="Play testimonial video"
          position="absolute"
          right={{ base: 7, md: 14 }}
          bottom={{ base: 9, md: 15 }}
          w={{ base: "56px", md: "64px" }}
          h={{ base: "56px", md: "64px" }}
          minW="unset"
          borderRadius="full"
          bg="#2345EF"
          _hover={{ bg: "#3555F4" }}
          _active={{ bg: "#1B3BE2" }}
        >
          <Box
            ml="4px"
            w="0"
            h="0"
            borderTop={{ base: "11px solid transparent", md: "13px solid transparent" }}
            borderBottom={{ base: "11px solid transparent", md: "13px solid transparent" }}
            borderLeft={{ base: "17px solid #FFFFFF", md: "21px solid #FFFFFF" }}
          />
        </Button>

        <Box
          aria-hidden="true"
          position="absolute"
          right={{ base: "-10px", md: "10px" }}
          bottom="-52px"
          color="#2345EF"
          fontFamily="Georgia, serif"
          fontSize={{ base: "140px", md: "190px" }}
          fontWeight="400"
          lineHeight="0.7"
          letterSpacing="-22px"
          transform="rotate(180deg)"
          css={{ WebkitTextStroke: "1px #2345EF" }}
        >
          “
        </Box>
      </>
    ) : null}
  </Box>
);

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<SlideDirection | null>(null);
  const slideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (slideTimeoutRef.current) {
        clearTimeout(slideTimeoutRef.current);
      }
    };
  }, []);

  const orderedTestimonials = useMemo(() => {
    const previous =
      testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length];
    const active = testimonials[activeIndex];
    const next = testimonials[(activeIndex + 1) % testimonials.length];

    return [previous, active, next];
  }, [activeIndex]);

  const startSlide = (direction: SlideDirection) => {
    if (slideDirection) return;

    setSlideDirection(direction);
    slideTimeoutRef.current = setTimeout(() => {
      setActiveIndex((index) =>
        direction === "next"
          ? (index + 1) % testimonials.length
          : (index - 1 + testimonials.length) % testimonials.length,
      );
      setSlideDirection(null);
    }, slideDuration);
  };

  return (
    <Box
      as="section"
      bg="#000000"
      color="#FFFFFF"
      overflow="hidden"
      position="relative"
      py={{ base: 18, md: 24, xl: 28 }}
    >
      <Box
        position="absolute"
        insetX={0}
        top="270px"
        h="470px"
        bg="radial-gradient(circle at center, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 62%)"
        pointerEvents="none"
      />
      <Container maxW="1440px" px={{ base: 4, md: 10 }} position="relative">
        <Stack align="center" gap={{ base: 10, md: 14 }}>
          <Heading
            fontFamily="'PP Monument Extended', 'Monument Extended', var(--font-poppins), sans-serif"
            fontWeight="800"
            fontSize={{ base: "32px", md: "48px" }}
            lineHeight={{ base: "1.18", md: "64px" }}
            letterSpacing="0.3px"
            textTransform="uppercase"
            textAlign="center"
            color="#FFFFFF"
          >
            What our clients say
          </Heading>

          <Flex
            align="center"
            justify="center"
            gap={{ base: 4, md: 7 }}
            w="max-content"
            maxW="none"
            transform={
              slideDirection === "next"
                ? {
                    base: "translateX(calc(-1 * (100vw - 64px)))",
                    md: "translateX(-458px)",
                    xl: "translateX(-502px)",
                  }
                : slideDirection === "previous"
                  ? {
                      base: "translateX(calc(100vw - 64px))",
                      md: "translateX(458px)",
                      xl: "translateX(502px)",
                    }
                  : "translateX(0)"
            }
            transition={
              slideDirection
                ? `transform ${slideDuration}ms cubic-bezier(0.65, 0, 0.35, 1)`
                : "none"
            }
            willChange="transform"
          >
            {orderedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.name}-${index}`}
                testimonial={testimonial}
                active={index === 1}
              />
            ))}
          </Flex>

          <HStack gap={7}>
            <Button
              aria-label="Previous testimonial"
              onClick={() => startSlide("previous")}
              disabled={Boolean(slideDirection)}
              w="56px"
              h="56px"
              minW="unset"
              borderRadius="full"
              bg="#1A1A1A"
              color="#FFFFFF"
              fontSize="25px"
              _hover={{ bg: "#262626" }}
              _active={{ bg: "#101010" }}
              _disabled={{ opacity: 0.45, cursor: "not-allowed" }}
            >
              ←
            </Button>
            <Button
              aria-label="Next testimonial"
              onClick={() => startSlide("next")}
              disabled={Boolean(slideDirection)}
              w="56px"
              h="56px"
              minW="unset"
              borderRadius="full"
              bg="#FFFFFF"
              color="#050505"
              fontSize="25px"
              _hover={{ bg: "#EDEDED" }}
              _active={{ bg: "#DCDCDC" }}
              _disabled={{ opacity: 0.65, cursor: "not-allowed" }}
            >
              →
            </Button>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
