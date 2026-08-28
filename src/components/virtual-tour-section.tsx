"use client";

import { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import { Box, Text, HStack } from "@chakra-ui/react";
import type { RoomLink } from "@/components/pano-viewer-inner";

type Room = {
  id: string;
  label: string;
  panoramaUrl: string;
  thumbUrl: string;
  links: RoomLink[];
};

type Building = {
  id: string;
  name: string;
  rooms: Room[];
};

// ── Viewer skeleton ───────────────────────────────────────────────────────────

function ViewerSkeleton() {
  return (
    <Box
      w="100%"
      h="100%"
      bg="#06091a"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap={3}
    >
      <Box
        w="40px"
        h="40px"
        borderRadius="full"
        border="2px solid rgba(255,255,255,0.06)"
        borderTop="2px solid #2345EF"
        style={{ animation: "vt-spin 0.9s linear infinite" }}
      />
      <Text
        color="rgba(255,255,255,0.18)"
        fontSize="10px"
        fontFamily="var(--font-poppins), sans-serif"
        letterSpacing="0.14em"
        textTransform="uppercase"
      >
        Loading
      </Text>
    </Box>
  );
}

// ── Dynamic PSV viewer (window access — must be client-only) ──────────────────

const PanoViewer = dynamic(() => import("@/components/pano-viewer-inner"), {
  ssr: false,
  loading: () => <ViewerSkeleton />,
});

// ── Thumbnail ─────────────────────────────────────────────────────────────────

function MiniThumb({
  room,
  active,
  onClick,
}: {
  room: Room;
  active: boolean;
  onClick: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Box
      as="button"
      onClick={onClick}
      flexShrink={0}
      cursor="pointer"
      bg="transparent"
      border="none"
      p={0}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="6px"
      transition="opacity 0.2s"
      opacity={active ? 1 : 0.55}
      _hover={{ opacity: 1 }}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <Box
        w={{ base: "68px", md: "100px" }}
        h={{ base: "46px", md: "68px" }}
        borderRadius="5px"
        overflow="hidden"
        position="relative"
        bg="rgba(255,255,255,0.06)"
        transition="box-shadow 0.2s"
        boxShadow={active ? "0 0 0 2px #2345EF" : "0 0 0 1px rgba(255,255,255,0.12)"}
      >
        <img
          src={room.thumbUrl}
          alt=""
          draggable={false}
          onLoad={() => setLoaded(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      </Box>
      <Text
        fontFamily="var(--font-poppins), sans-serif"
        fontSize={{ base: "10px", md: "11px" }}
        fontWeight={active ? "600" : "400"}
        color={active ? "#FFFFFF" : "rgba(255,255,255,0.7)"}
        letterSpacing="0.02em"
        whiteSpace="nowrap"
        transition="color 0.2s"
      >
        {room.label}
      </Text>
    </Box>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function VirtualTourSection() {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [activeBuildingId, setActiveBuildingId] = useState<string>("");
  const [activeRoomId, setActiveRoomId] = useState<string>("");
  const [fetchError, setFetchError] = useState(false);
  const [roomError, setRoomError] = useState(false);

  useEffect(() => {
    fetch("/api/works?filter=virtual-tours")
      .then((r) => {
        if (!r.ok) throw new Error("non-2xx");
        return r.json();
      })
      .then((data) => {
        const bs: Building[] = data.buildings ?? [];
        setBuildings(bs);
        setActiveBuildingId(bs[0]?.id ?? "");
        setActiveRoomId(bs[0]?.rooms[0]?.id ?? "");
      })
      .catch(() => setFetchError(true));
  }, []);

  const activeBuilding = buildings.find((b) => b.id === activeBuildingId);
  const activeRoom = activeBuilding?.rooms.find((r) => r.id === activeRoomId);

  const selectBuilding = useCallback(
    (building: Building) => {
      if (building.id === activeBuildingId) return;
      setRoomError(false);
      setActiveBuildingId(building.id);
      setActiveRoomId(building.rooms[0].id);
    },
    [activeBuildingId]
  );

  const selectRoom = useCallback(
    (room: Room) => {
      if (room.id === activeRoomId) return;
      setRoomError(false);
      setActiveRoomId(room.id);
    },
    [activeRoomId]
  );

  return (
    <Box w="93%" mx="auto">
      <style>{`
        @keyframes vt-spin { to { transform: rotate(360deg); } }
        @keyframes vt-hint-fade { 0%, 70% { opacity: 1; } 100% { opacity: 0; } }
        .psv-container { background: #06091a !important; }
        .psv-loader { background: rgba(6, 9, 26, 0.9) !important; }
        .psv-overlay { display: none !important; pointer-events: none !important; }
        .psv-notification { display: none !important; pointer-events: none !important; }
        .psv--capture-event { pointer-events: none !important; }
        .tour-hotspot { position: relative; width: 40px; height: 40px; cursor: pointer; }
        .tour-hotspot-pulse { position: absolute; inset: -6px; border-radius: 50%; background: rgba(35,69,239,0.28); animation: tour-pulse 2.2s ease-out infinite; }
        .tour-hotspot-core { width: 40px; height: 40px; background: rgba(35,69,239,0.82); border: 1.5px solid rgba(255,255,255,0.55); border-radius: 50%; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(6px); }
        @keyframes tour-pulse { 0% { transform: scale(0.9); opacity: 1; } 65% { transform: scale(2.2); opacity: 0; } 100% { transform: scale(0.9); opacity: 0; } }
        .tour-thumb-strip { scrollbar-width: none; }
        .tour-thumb-strip::-webkit-scrollbar { display: none; }
      `}</style>

      {/* ── Building tabs ────────────────────────────────────────────────── */}
      <HStack
        gap={7}
        alignItems="flex-end"
        mb={5}
        borderBottom="1px solid rgba(255,255,255,0.08)"
      >
        {buildings.map((b) => {
          const active = activeBuildingId === b.id;
          return (
            <Box
              key={b.id}
              as="button"
              onClick={() => selectBuilding(b)}
              pb="10px"
              bg="transparent"
              border="none"
              outline="none"
              cursor="pointer"
              position="relative"
              fontFamily="var(--font-poppins), sans-serif"
              fontSize={{ base: "13px", md: "14px" }}
              fontWeight={active ? "600" : "400"}
              color={active ? "#FFFFFF" : "rgba(255,255,255,0.32)"}
              transition="color 0.2s"
              _hover={{ color: active ? "#FFFFFF" : "rgba(255,255,255,0.6)" }}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {b.name}
              <Box
                position="absolute"
                bottom="-1px"
                left={0}
                right={0}
                h="2px"
                bg="#2345EF"
                borderRadius="full"
                transition="opacity 0.2s"
                opacity={active ? 1 : 0}
              />
            </Box>
          );
        })}
      </HStack>

      {/* ── Viewer ───────────────────────────────────────────────────────── */}
      <Box
        position="relative"
        w="100%"
        borderRadius="12px"
        overflow="hidden"
        bg="#06091a"
        style={{ height: "clamp(500px, 82vh, 1000px)" }}
      >
        {fetchError ? (
          <Box
            w="100%"
            h="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={3}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
              <path d="M16 10V17" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="16" cy="21.5" r="1.2" fill="rgba(255,255,255,0.35)" />
            </svg>
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontSize="13px"
              fontWeight="500"
              color="rgba(255,255,255,0.35)"
              textAlign="center"
            >
              Unable to load tour
            </Text>
            <Text
              fontFamily="var(--font-poppins), sans-serif"
              fontSize="11px"
              color="rgba(255,255,255,0.18)"
              textAlign="center"
              maxW="240px"
              lineHeight="1.6"
            >
              Check your connection and refresh the page.
            </Text>
          </Box>
        ) : activeRoom ? (
          <>
            <PanoViewer
              key={`${activeBuildingId}-${activeRoomId}`}
              src={activeRoom.panoramaUrl}
              links={activeRoom.links}
              onRoomSelect={(roomId) => {
                setRoomError(false);
                setActiveRoomId(roomId);
              }}
              onError={() => setRoomError(true)}
            />
            {roomError && (
              <Box
                position="absolute"
                top="40%"
                left="50%"
                style={{ transform: "translateX(-50%)" }}
                zIndex={11}
                pointerEvents="none"
                textAlign="center"
              >
                <Text
                  fontFamily="var(--font-poppins), sans-serif"
                  fontSize="13px"
                  color="rgba(255,255,255,0.28)"
                  letterSpacing="0.02em"
                >
                  This room isn&apos;t available yet
                </Text>
              </Box>
            )}
          </>
        ) : (
          <ViewerSkeleton />
        )}

        {/* Bottom-center thumbnail strip */}
        {activeBuilding && (
          <Box
            position="absolute"
            bottom={{ base: "12px", md: "16px" }}
            left="50%"
            zIndex={10}
            style={{ transform: "translateX(-50%)" }}
            display="flex"
            gap={{ base: "5px", md: "6px" }}
            alignItems="center"
            bg="rgba(0,0,0,0.52)"
            backdropFilter="blur(12px)"
            border="1px solid rgba(255,255,255,0.08)"
            borderRadius="10px"
            p={{ base: "8px", md: "10px" }}
            maxW={{ base: "calc(100vw - 32px)", md: "none" }}
            overflowX={{ base: "auto", md: "visible" }}
            className="tour-thumb-strip"
          >
            {activeBuilding.rooms.map((room) => (
              <MiniThumb
                key={room.id}
                room={room}
                active={activeRoomId === room.id}
                onClick={() => selectRoom(room)}
              />
            ))}
          </Box>
        )}

        {/* Top-right: 360° badge */}
        <Box
          position="absolute"
          top={{ base: 3, md: 4 }}
          right={{ base: 3, md: 4 }}
          zIndex={10}
          display="flex"
          alignItems="center"
          gap="5px"
          bg="rgba(0,0,0,0.48)"
          px={{ base: "9px", md: "11px" }}
          py={{ base: "4px", md: "6px" }}
          borderRadius="full"
          border="1px solid rgba(255,255,255,0.1)"
          backdropFilter="blur(8px)"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <ellipse cx="6" cy="6" rx="5" ry="2.6" stroke="white" strokeOpacity="0.6" strokeWidth="1" />
            <circle cx="6" cy="6" r="1.2" fill="white" fillOpacity="0.6" />
            <path d="M2.2 6C2.2 4.6 3.9 3.4 6 3.4" stroke="white" strokeOpacity="0.45" strokeWidth="1" strokeLinecap="round" />
          </svg>
          <Text
            fontFamily="var(--font-poppins), sans-serif"
            fontSize={{ base: "10px", md: "11px" }}
            fontWeight="600"
            letterSpacing="0.08em"
            color="rgba(255,255,255,0.75)"
          >
            360°
          </Text>
        </Box>

        {/* Top-left: drag hint — fades after 5s */}
        <Box
          position="absolute"
          top={{ base: 3, md: 4 }}
          left={{ base: 3, md: 4 }}
          zIndex={10}
          display="flex"
          alignItems="center"
          gap="5px"
          bg="rgba(0,0,0,0.42)"
          px={{ base: "9px", md: "11px" }}
          py={{ base: "4px", md: "6px" }}
          borderRadius="full"
          border="1px solid rgba(255,255,255,0.07)"
          backdropFilter="blur(8px)"
          pointerEvents="none"
          style={{ animation: "vt-hint-fade 5s ease 1.5s forwards" }}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M9.5 5.5A4 4 0 1 1 5.5 1.5" stroke="white" strokeOpacity="0.6" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M5.5 0L7.5 2L5.5 4" stroke="white" strokeOpacity="0.6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <Text
            fontFamily="var(--font-poppins), sans-serif"
            fontSize={{ base: "9px", md: "10px" }}
            fontWeight="500"
            letterSpacing="0.1em"
            color="rgba(255,255,255,0.6)"
            textTransform="uppercase"
          >
            Drag to explore
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
