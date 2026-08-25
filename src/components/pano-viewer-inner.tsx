"use client";

import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { MarkersPlugin } from "@photo-sphere-viewer/markers-plugin";
import "@photo-sphere-viewer/markers-plugin/index.css";

export type RoomLink = { toRoom: string; yaw: string; pitch: string; label: string };

type Props = {
  src: string;
  links: RoomLink[];
  onRoomSelect: (roomId: string) => void;
  onError: () => void;
};

function hotspotHtml(): string {
  return `<div class="tour-hotspot">
    <div class="tour-hotspot-pulse"></div>
    <div class="tour-hotspot-core">
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path d="M5 2.5L9 6.5L5 10.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>`;
}

export default function PanoViewerInner({ src, links, onRoomSelect, onError }: Props) {
  const markers = links.map((link) => ({
    id: `nav-${link.toRoom}`,
    position: { yaw: link.yaw, pitch: link.pitch },
    tooltip: { content: `Go to ${link.label}`, position: "top" as const },
    html: hotspotHtml(),
    anchor: "center center",
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleReady(viewer: any) {
    viewer.addEventListener("error", onError);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const markersPlugin = viewer.getPlugin(MarkersPlugin) as any;
    markersPlugin?.addEventListener("select-marker", (e: { marker: { id: string } }) => {
      const roomId = e.marker.id.replace("nav-", "");
      onRoomSelect(roomId);
    });
  }

  return (
    <ReactPhotoSphereViewer
      src={src}
      width="100%"
      height="100%"
      navbar={false}
      loadingTxt=""
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      plugins={[[MarkersPlugin as any, { markers }]]}
      onReady={handleReady}
    />
  );
}
