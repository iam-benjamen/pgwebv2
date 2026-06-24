"use client";

const CLOUD_NAME = "djskbsz2k";

export function CloudinaryVideo({
  publicId,
  objectPosition = "center",
}: {
  publicId: string;
  objectPosition?: string;
}) {
  const src = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_auto,q_auto/${publicId}`;

  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition,
      }}
    />
  );
}
