import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "fitfind",
    title: "FitFind",
    summary: "Paste a TikTok or Instagram link and get shoppable results matching the outfit and aesthetic.",
    image: "projects/FitFind.png",
    description:"A fashion discovery app that turns a pasted TikTok/Instagram URL or uploaded screenshot into shoppable product results. yt-dlp and OpenCV extract key frames from the video server-side, then a single Gemini Vision call detects individual clothing items and classifies the overall aesthetic (e.g. 'gorpcore', 'quiet luxury'). Results are split into two sections — Exact Items, matched to the specific detected pieces, and Related Items, matched to the broader aesthetic — with sort and price filtering handled client-side after a single Serper API call per query to avoid redundant re-fetching. Built with a FastAPI backend and Next.js frontend, with retry logic for Gemini rate limits and gender-aware prompting for more accurate item classification.",
    tags: ["Next.js", "FastAPI", "Gemini Vision", "Python", "TypeScript"],
    liveUrl: "https://fitfind-joshuanguyen.vercel.app",
    repoUrl: "https://github.com/JoshNguyen13/FitFind",
    featured: true,
  },
  {
    slug: "voice-tutor",
    title: "Voice Tutor",
    summary: "A real-time speech coaching app that scores pace, accuracy, and delivery entirely in the browser.",
    image: "projects/VoiceTutor.png",
    description: "A fully client-side public speaking coach that transcribes live speech via the Web Speech API and aligns it against target scripts with a Levenshtein edit-distance algorithm to score pace, accuracy, filler words, and hesitation pauses in real time. Includes a teleprompter mode with adjustable auto-scroll speed, live pitch/monotone detection via the Web Audio API, and instant audio playback -- all running serverless with zero paid APIs or backend.",
    tags: ["React", "Web Speech API", "Web Audio API", "Vite"],
    liveUrl: "https://voicetutor-joshuanguyen.vercel.app",
    repoUrl: "https://github.com/JoshNguyen13/Voice-Tutor",
    featured: true,
  },
];
