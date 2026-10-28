import { Project } from "@/types";

/** Project image, falling back to the YouTube thumbnail of its demo video. */
export function getThumbnail(project: Project): string | undefined {
  if (project.image) return project.image;

  const youtubeId = project.videoEmbedUrl?.match(/youtube\.com\/embed\/([\w-]+)/)?.[1];
  return youtubeId ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg` : undefined;
}
