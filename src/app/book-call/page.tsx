"use client";

import { useState } from "react";
import { Box, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { toaster } from "@/lib/toaster";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";

const inputStyles = {
  bg: "#242424",
  border: "1px solid #4A4A4A",
  borderRadius: "10px",
  h: "53px",
  px: "20px",
  color: "#FFFFFF",
  fontFamily: "var(--font-poppins), sans-serif",
  fontWeight: "300",
  fontSize: "16px",
  _placeholder: { color: "#8D8D8D" },
  _focus: { borderColor: "#2345EF", outline: "none", boxShadow: "none" },
};

function FormInput({
  placeholder,
  iconSrc,
  type = "text",
  value,
  onChange,
  required,
}: {
  placeholder: string;
  iconSrc: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <HStack
      {...inputStyles}
      gap="14px"
      as="label"
      cursor="text"
      transition="border-color 0.2s"
    >
      <Box w="16px" h="16px" flexShrink={0} position="relative">
        <Image
          src={iconSrc}
          alt=""
          fill
          sizes="16px"
          style={{ objectFit: "contain" }}
        />
      </Box>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        style={{
          background: "transparent",
          border: "none",
          outline: "none",
          width: "100%",
          color: "#FFFFFF",
          fontFamily: "var(--font-poppins), sans-serif",
          fontWeight: 300,
          fontSize: "16px",
        }}
      />
    </HStack>
  );
}

function FormSelect({
  placeholder,
  iconSrc,
  options,
  value,
  onChange,
  required,
}: {
  placeholder: string;
  iconSrc: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <HStack {...inputStyles} gap="14px" position="relative" pr="44px">
      <Box w="16px" h="16px" flexShrink={0} position="relative">
        <Image
          src={iconSrc}
          alt=""
          fill
          sizes="16px"
          style={{ objectFit: "contain" }}
        />
      </Box>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        style={{
          background: "transparent",
          border: "none",
          outline: "none",
          width: "100%",
          color: value ? "#FFFFFF" : "#8D8D8D",
          fontFamily: "var(--font-poppins), sans-serif",
          fontWeight: 300,
          fontSize: "16px",
          appearance: "none",
          cursor: "pointer",
        }}
      >
        <option
          value=""
          disabled
          style={{
            background: "#1a1a1a",
            color: "#8D8D8D",
            padding: "10px 14px",
          }}
        >
          {placeholder}
        </option>
        {options.map((o) => (
          <option
            key={o}
            value={o}
            style={{
              background: "#1a1a1a",
              color: "#FFFFFF",
              padding: "10px 14px",
            }}
          >
            {o}
          </option>
        ))}
      </select>
      <Box
        position="absolute"
        right="20px"
        pointerEvents="none"
        color="#C0C0C0"
      >
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
          <path
            d="M1 1L6 6L11 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
    </HStack>
  );
}

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/thepgstudios" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/thepgstudios" },
  { label: "YouTube", href: "https://www.youtube.com/@thepgstudios" },
  { label: "Facebook", href: "https://www.facebook.com/thepgstudios" },
];

const contactItems = [
  {
    label: "LOCATION",
    value: "Texas, USA\nOperating nationally + internationally",
    icon: "/assets/book-call-page/Location.png",
  },
  {
    label: "EMAIL",
    value: "office@thepgstudio.com",
    icon: "/assets/book-call-page/Email.png",
  },
  {
    label: "SOCIAL",
    value: "@thepgstudios",
    icon: "/assets/book-call-page/Social-Media.png",
  },
];

const budgetOptions = ["Under $20K", "$20K - $50K", "$50K - $100K", "$100K+"];

const btnStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  background: "#2345EF",
  borderRadius: "12px",
  border: "none",
  cursor: "pointer",
  transition: "background 0.2s ease",
};

function ProceedBtn({
  label,
  onClick,
  fullWidth,
}: {
  label: string;
  onClick?: () => void;
  fullWidth?: boolean;
}) {
  return (
    <button
      type={onClick ? "button" : "submit"}
      onClick={onClick}
      style={{
        ...btnStyle,
        justifyContent: "center",
        padding: "0 24px",
        height: "53px",
        width: fullWidth ? "100%" : undefined,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#1a37d4")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#2345EF")}
    >
      <span
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
          fontWeight: 500,
          fontSize: fullWidth ? "18px" : "14px",
          letterSpacing: fullWidth ? undefined : "0.1em",
          color: "#FFFFFF",
        }}
      >
        {label}
      </span>
      <div
        style={{
          width: "12px",
          height: "14px",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <Image
          src="/assets/book-call-page/form-icons/button-polygon.png"
          alt=""
          fill
          sizes="12px"
          style={{ objectFit: "contain" }}
        />
      </div>
    </button>
  );
}

function PrivacyNote({ text, icon = "/assets/book-call-page/form-icons/inquiry.png" }: { text: string; icon?: string }) {
  return (
    <HStack gap={3} align="flex-start">
      <Box w="16px" h="16px" flexShrink={0} position="relative" mt="1px">
        <Image
          src={icon}
          alt=""
          fill
          sizes="16px"
          style={{ objectFit: "contain" }}
        />
      </Box>
      <Text
        fontFamily="var(--font-poppins), sans-serif"
        fontWeight="300"
        fontSize="12px"
        lineHeight="1.5"
        color="#8D8D8D"
      >
        {text}
      </Text>
    </HStack>
  );
}

export default function BookCallPage() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    projectStage: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const set = (k: keyof typeof form) => (v: string) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  async function handleStep1Submit(e: React.SyntheticEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/inquiries/partial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          company: form.company,
          projectType: form.projectType,
          projectStage: form.projectStage,
        }),
      });
    } catch {
    } finally {
      setSubmitting(false);
      setStep(2);
    }
  }

  async function handleFinalSubmit() {
    if (!form.budget) {
      toaster.create({ title: "Please select a budget range.", type: "error" });
      return;
    }
    if (!form.timeline) {
      toaster.create({ title: "Please select a preferred timeline.", type: "error" });
      return;
    }
    if (!form.description.trim()) {
      toaster.create({ title: "Please tell us about your project.", type: "error" });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/inquiries/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toaster.create({
          title: "Request submitted!",
          description: "We'll be in touch within 24 hours.",
          type: "success",
        });
        setStep(1);
        setForm({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          projectStage: "",
          budget: "",
          timeline: "",
          description: "",
        });
      } else {
        toaster.create({
          title: "Something went wrong.",
          description: "Please try again or email us directly.",
          type: "error",
        });
      }
    } catch {
      toaster.create({
        title: "Something went wrong.",
        description: "Please try again or email us directly.",
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Box bg="#000000" minH="100svh" color="#FFFFFF">
      <Navbar />

      <Box
        as="section"
        position="relative"
        overflow="hidden"
        minH={{ base: "auto", xl: "576px" }}
        bg="#000000"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
      >
        <Box position="absolute" inset={0}>
          <Image
            src="/assets/book-call-page/hero-background.png"
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </Box>

        <Box
          position="relative"
          zIndex={1}
          pt={{ base: "140px", md: "160px" }}
          pb={{ base: 12, xl: "72px" }}
          px={4}
        >
          <Stack align="center" gap={{ base: 4, xl: 5 }} maxW="924px" mx="auto">
            <HStack gap={3} align="center">
              <Box w="20px" h="20px" flexShrink={0} position="relative">
                <Image
                  src="/assets/book-call-page/polygon-left.png"
                  alt=""
                  fill
                  sizes="20px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="500"
                fontSize={{ base: "13px", xl: "20px" }}
                lineHeight="24px"
                color="#DFDFDF"
                textAlign="center"
              >
                FOR DEVELOPERS, BUILDERS &amp; INVESTMENT TEAMS
              </Text>
              <Box w="20px" h="20px" flexShrink={0} position="relative">
                <Image
                  src="/assets/book-call-page/polygon-right.png"
                  alt=""
                  fill
                  sizes="20px"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </HStack>

            <Heading
              fontFamily="'Monument Extended', sans-serif"
              fontWeight="800"
              fontSize={{ base: "28px", md: "40px", xl: "48px" }}
              lineHeight={{ base: "1.1", xl: "50px" }}
              letterSpacing="-0.2px"
              textTransform="uppercase"
              textAlign="center"
              color="#FFFFFF"
            >
              MOVE YOUR PROJECT FROM
              <br />
              CONCEPT TO COMMITMENT
            </Heading>

            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="500"
              fontSize={{ base: "15px", md: "17px", xl: "20px" }}
              lineHeight={{ base: "1.5", xl: "24px" }}
              textAlign="center"
              color="#DFDFDF"
              maxW={{ base: "100%", xl: "919px" }}
            >
              Tell us what you&apos;re building, where the project stands, and
              what needs to happen next. We will help identify the right sales,
              investor, and presentation system for your timeline.
            </Text>
          </Stack>
        </Box>
      </Box>

      <Box as="section" bg="#121212" py={{ base: 14, xl: "100px" }}>
        <Flex
          direction={{ base: "column", xl: "row" }}
          gap={{ base: 14, xl: "80px" }}
          maxW="1290px"
          mx="auto"
          px={{ base: 5, xl: 0 }}
          align="flex-start"
        >
          <Stack flex="1" gap={0} minW={0}>
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="500"
              fontSize="18px"
              lineHeight="24px"
              letterSpacing="4px"
              color="rgba(155,155,155,0.6)"
              mb={3}
            >
              CONTACT
            </Text>

            <Heading
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="700"
              fontSize={{ base: "28px", xl: "36px" }}
              lineHeight="1.2"
              color="#FFFFFF"
              mb={5}
            >
              Ready to{" "}
              <Box as="em" fontStyle="italic" color="#2345EF">
                move
              </Box>{" "}
              the
              <br />
              <Box as="em" fontStyle="italic" color="#2345EF">
                project forward?
              </Box>
            </Heading>

            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="400"
              fontSize={{ base: "15px", xl: "18px" }}
              lineHeight="1.5"
              letterSpacing="-0.2px"
              color="#AEAEAE"
              mb={10}
            >
              We work with a select number of clients. It all starts with a
              strategy call to map out your timeline, project goals, and the
              right systems for your project&apos;s success.
            </Text>

            <Stack gap={7} mb={10}>
              {contactItems.map((item) => (
                <HStack key={item.label} gap={4} align="flex-start">
                  <Box
                    w="42px"
                    h="38px"
                    flexShrink={0}
                    border="2px solid #2345EF"
                    borderRadius="3px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    mt="2px"
                  >
                    <Box w="24px" h="24px" position="relative">
                      <Image
                        src={item.icon}
                        alt=""
                        fill
                        sizes="24px"
                        style={{ objectFit: "contain" }}
                      />
                    </Box>
                  </Box>
                  <Stack gap="2px">
                    <Text
                      fontFamily="var(--font-poppins), sans-serif"
                      fontWeight="500"
                      fontSize="14px"
                      lineHeight="24px"
                      letterSpacing="4px"
                      color="rgba(155,155,155,0.6)"
                    >
                      {item.label}
                    </Text>
                    <Text
                      fontFamily="var(--font-poppins), sans-serif"
                      fontWeight="400"
                      fontSize={{ base: "15px", xl: "18px" }}
                      lineHeight="20px"
                      letterSpacing="-0.15px"
                      color="#F0F0F0"
                    >
                      {item.label === "SOCIAL" ? (
                        <>
                          <Box as="span" display="block">{item.value}</Box>
                          <Box as="span" display="block" mt="2px">
                            {socialLinks.map((s, i) => (
                              <Box as="span" key={s.label}>
                                {i > 0 && <Box as="span" color="#6A6A6A"> · </Box>}
                                <Link
                                  href={s.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{ color: "#F0F0F0", textDecoration: "none" }}
                                  onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                                  onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                                >
                                  {s.label}
                                </Link>
                              </Box>
                            ))}
                          </Box>
                        </>
                      ) : item.label === "EMAIL" ? (
                        <Link
                          href={`mailto:${item.value}`}
                          style={{ color: "#F0F0F0", textDecoration: "none" }}
                          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                        >
                          {item.value}
                        </Link>
                      ) : (
                        item.value.split("\n").map((line, i) => (
                          <Box as="span" key={i} display="block" color={i === 0 ? "#F0F0F0" : "#6A6A6A"}>
                            {line}
                          </Box>
                        ))
                      )}
                    </Text>
                  </Stack>
                </HStack>
              ))}
            </Stack>

            <Box
              bg="#0F0F0F"
              border="1px solid #4A4A4A"
              borderRadius="25px"
              p={{ base: 6, xl: "28px 35px" }}
            >
              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="500"
                fontSize="18px"
                lineHeight="24px"
                letterSpacing="4px"
                color="rgba(155,155,155,0.6)"
                mb={3}
              >
                PROJECT RANGE
              </Text>
              <Text
                fontFamily="var(--font-poppins), sans-serif"
                fontWeight="400"
                fontSize={{ base: "15px", xl: "18px" }}
                lineHeight="1.5"
                color="#F0F0F0"
              >
                We support development projects at different stages and scales —
                from focused residential launches to larger mixed-use and
                master-planned developments. Every system is scoped around the
                project size, timeline, and sales complexity.
              </Text>
            </Box>
          </Stack>

          <Box
            w={{ base: "100%", xl: "615px" }}
            flexShrink={0}
            bg="#0F0F0F"
            border="2px solid #4A4A4A"
            boxShadow="0px 25px 25px rgba(0,0,0,0.25)"
            borderRadius="25px"
            p={{ base: 8, xl: "50px 45px 34px" }}
          >
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontWeight="500"
              fontSize="18px"
              lineHeight="24px"
              letterSpacing="4px"
              color="rgba(155,155,155,0.6)"
              mb={8}
            >
              STRATEGY CALL REQUEST
            </Text>

            {step === 1 ? (
              <Stack gap={7} as="form" onSubmit={handleStep1Submit}>
                <Stack gap={3}>
                  <Text
                    fontFamily="var(--font-poppins), sans-serif"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="20px"
                    color="#F0F0F0"
                  >
                    CONTACT DETAILS
                  </Text>
                  <FormInput required placeholder="Full Name" value={form.fullName} onChange={set("fullName")} iconSrc="/assets/book-call-page/form-icons/full-name.png" />
                  <FormInput required placeholder="Email Address" type="email" value={form.email} onChange={set("email")} iconSrc="/assets/book-call-page/form-icons/email.png" />
                  <FormInput required placeholder="Phone Number" type="tel" value={form.phone} onChange={set("phone")} iconSrc="/assets/book-call-page/form-icons/call.png" />
                </Stack>

                <Stack gap={3}>
                  <Text
                    fontFamily="var(--font-poppins), sans-serif"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="20px"
                    color="#F0F0F0"
                  >
                    PROJECT BASICS
                  </Text>
                  <FormInput required placeholder="Company/Organization" value={form.company} onChange={set("company")} iconSrc="/assets/book-call-page/form-icons/company.png" />
                  <FormSelect required placeholder="Project Type" value={form.projectType} onChange={set("projectType")} iconSrc="/assets/book-call-page/form-icons/project-type.png"
                    options={["Residential — Single Family", "Residential — Multifamily/Condo", "Commercial", "Mixed-Use Development", "Subdivision", "Interior Design", "Other"]}
                  />
                  <FormSelect required placeholder="Project Stage" value={form.projectStage} onChange={set("projectStage")} iconSrc="/assets/book-call-page/form-icons/project-stage.png"
                    options={["Pre-design/Concept", "Design Development", "Pre-Construction/Sales Launch", "Under Construction", "Existing Build/Renovation/Relaunch"]}
                  />
                </Stack>

                <Flex justify="flex-end">
                  <ProceedBtn label={submitting ? "SENDING..." : "PROCEED"} />
                </Flex>

                <Box borderTop="1px solid #4A4A4A" />
                <PrivacyNote text="We review every inquiry and respond within 24 hours. No spam. No sales calls you didn't ask for." />
              </Stack>
            ) : (
              <Stack gap={6}>
                <Stack gap={2}>
                  <Text
                    fontFamily="var(--font-poppins), sans-serif"
                    fontWeight="400"
                    fontSize="16px"
                    lineHeight="20px"
                    color="#F0F0F0"
                  >
                    PROJECT DETAILS
                  </Text>
                  <Text
                    fontFamily="var(--font-poppins), sans-serif"
                    fontWeight="500"
                    fontSize="14px"
                    lineHeight="24px"
                    letterSpacing="2px"
                    color="rgba(155,155,155,0.6)"
                  >
                    PROJECT EXECUTION BUDGET
                  </Text>
                  <Text
                    fontFamily="var(--font-poppins), sans-serif"
                    fontWeight="500"
                    fontSize="14px"
                    lineHeight="24px"
                    color="rgba(155,155,155,0.6)"
                  >
                    What budget range should we plan around?
                  </Text>
                </Stack>

                <Box display="grid" gridTemplateColumns="1fr 1fr" gap={3}>
                  {budgetOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => set("budget")(option)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        height: "53px",
                        padding: "0 20px",
                        background: "#242424",
                        border:
                          form.budget === option
                            ? "1px solid #2345EF"
                            : "1px solid #4A4A4A",
                        borderRadius: "10px",
                        cursor: "pointer",
                        transition: "border-color 0.2s",
                      }}
                    >
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          flexShrink: 0,
                          border: "1.5px solid #2345EF",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {form.budget === option && (
                          <div
                            style={{
                              width: "10px",
                              height: "10px",
                              borderRadius: "50%",
                              background: "#2345EF",
                            }}
                          />
                        )}
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-poppins), sans-serif",
                          fontWeight: 300,
                          fontSize: "16px",
                          color: "#FFFFFF",
                        }}
                      >
                        {option}
                      </span>
                    </button>
                  ))}
                </Box>

                <FormSelect
                  placeholder="Preferred Timeline"
                  value={form.timeline}
                  onChange={set("timeline")}
                  iconSrc="/assets/book-call-page/form-icons/inquiry.png"
                  options={["Within 30 Days", "1 – 3 months", "3 – 6 months", "6+ months"]}
                />

                <Box
                  bg="#242424"
                  border="1px solid #4A4A4A"
                  borderRadius="10px"
                  p="16px 20px"
                  _focusWithin={{ borderColor: "#2345EF" }}
                  transition="border-color 0.2s"
                >
                  <HStack gap="14px" align="center" mb={3}>
                    <Box w="16px" h="16px" flexShrink={0} position="relative">
                      <Image src="/assets/book-call-page/form-icons/message.png" alt="" fill sizes="16px" style={{ objectFit: "contain" }} />
                    </Box>
                    <Text
                      fontFamily="var(--font-poppins), sans-serif"
                      fontWeight="300"
                      fontSize="16px"
                      lineHeight="24px"
                      color="#8D8D8D"
                    >
                      Tell us about your project
                    </Text>
                  </HStack>
                  <textarea
                    value={form.description}
                    onChange={(e) => set("description")(e.target.value)}
                    placeholder="Brief description of the project and what you're trying to achieve"
                    rows={6}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      resize: "vertical",
                      color: "#FFFFFF",
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontWeight: 300,
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  />
                </Box>

                <ProceedBtn
                  label={submitting ? "Submitting..." : "Book a Strategy Call"}
                  onClick={handleFinalSubmit}
                  fullWidth
                />

                <Box borderTop="1px solid #4A4A4A" />
                <PrivacyNote text="By submitting, you agree that PGStudio may contact you about this inquiry by email, phone or text." icon="/assets/book-call-page/form-icons/claimer.png" />
              </Stack>
            )}
          </Box>
        </Flex>
      </Box>

      <Footer />
    </Box>
  );
}
