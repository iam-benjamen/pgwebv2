import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const FOLDER_PATHS: Record<string, string> = {
  commercial: "GALLERY/Commercial",
  interior: "GALLERY/Interior Designs",
  residential: "GALLERY/Residential",
  "avl-events": "GALLERY/AVL+Events",
};

function optimizeUrl(url: string): string {
  return url.replace("/upload/", "/upload/f_auto,q_auto,w_800/");
}

function randomSample<T>(arr: T[], n: number): T[] {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

type WorkImage = { url: string; ratio: string };

async function getImagesForFolder(folderPath: string): Promise<WorkImage[]> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = await cloudinary.search
    .expression(`folder:"${folderPath}" AND resource_type:image`)
    .sort_by("public_id", "asc")
    .max_results(100)
    .execute();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return result.resources.map((r: any) => ({
    url: optimizeUrl(r.secure_url as string),
    ratio: `${r.width}/${r.height}`,
  }));
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const filter = searchParams.get("filter") ?? "all";

  const folderPaths =
    filter === "all"
      ? Object.values(FOLDER_PATHS)
      : FOLDER_PATHS[filter]
      ? [FOLDER_PATHS[filter]]
      : [];

  if (folderPaths.length === 0) {
    return NextResponse.json({ images: [] });
  }

  try {
    const results = await Promise.all(folderPaths.map(getImagesForFolder));
    const all = results.flat();
    const images: WorkImage[] = filter === "all" ? randomSample(all, 15) : all;

    return NextResponse.json(
      { images },
      { headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate" } }
    );
  } catch (err) {
    console.error("[works API]", err);
    return NextResponse.json(
      { images: [], error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}
