import { Box, Container, HStack, Stack, Text } from "@chakra-ui/react";

const statItems = [
  {
    value: (
      <HStack gap="1" align="baseline" color="#050816">
        <Text as="span" fontSize={{ base: "2.5rem", md: "3.75rem" }} lineHeight="0.8">
          $
        </Text>
        <Text as="span" fontSize={{ base: "3.5rem", md: "5.625rem" }} lineHeight="0.8">
          100
        </Text>
        <Text as="span" fontSize={{ base: "2.5rem", md: "3.75rem" }} lineHeight="0.8">
          M
        </Text>
        <Text as="span" fontSize={{ base: "2.5rem", md: "3.75rem" }} lineHeight="0.8" color="#FFFFFF">
          +
        </Text>
      </HStack>
    ),
    label: "DEVELOPMENT VALUE\nSUPPORTED",
  },
  {
    value: (
      <Text color="#050816" fontStyle="italic" fontSize={{ base: "3rem", md: "3.75rem" }} lineHeight="0.8">
        Forbes
      </Text>
    ),
    label: "PROJECT CREDIT",
  },
  {
    value: (
      <Text color="#050816" fontStyle="italic" fontSize={{ base: "3rem", md: "3.75rem" }} lineHeight="0.8">
        U.S. <Box as="span" color="#FFFFFF">+ Int&apos;l</Box>
      </Text>
    ),
    label: "MARKET REACH",
  },
  {
    value: (
      <HStack gap="2" align="baseline">
        <Text as="span" color="#050816" fontSize={{ base: "3.5rem", md: "5.625rem" }} lineHeight="0.8">
          25
        </Text>
        <Text as="span" color="#FFFFFF" fontSize={{ base: "2.5rem", md: "3.75rem" }} lineHeight="0.8">
          Years
        </Text>
      </HStack>
    ),
    label: "COMBINED LEADERSHIP\nTEAM EXPERIENCE",
  },
] as const;

const Stats = () => {
  return (
    <Box as="section" bg="#2345EF">
      <Container maxW="1440px" px={{ base: 4, md: 10 }} py={{ base: 10, md: 8 }}>
        <Box
          display={{ base: "grid", xl: "flex" }}
          gridTemplateColumns={{ base: "1fr", sm: "repeat(2, minmax(0, 1fr))" }}
          gap={{ base: 8, md: 10 }}
          justifyContent="space-between"
          alignItems="center"
        >
          {statItems.map((item) => (
            <Stack
              key={item.label}
              gap={{ base: 4, md: 5 }}
              minH={{ base: "auto", xl: "101px" }}
              justify="center"
              flex={{ xl: "0 0 auto" }}
            >
              <Box
                fontFamily="var(--font-cormorant), serif"
                fontWeight="500"
                letterSpacing="-0.15px"
              >
                {item.value}
              </Box>

              <Text
                color="#FFFFFF"
                fontFamily="'Monument Extended', var(--font-poppins), sans-serif"
                fontSize="0.9375rem"
                lineHeight="1.33"
                letterSpacing="-0.15px"
                whiteSpace="pre-line"
                textTransform="uppercase"
              >
                {item.label}
              </Text>
            </Stack>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Stats;
