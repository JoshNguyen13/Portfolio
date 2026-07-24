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
  {
    slug: "macrobook",
    title: "MacroBook",
    summary: "Paste a TikTok or Instagram recipe link and get it parsed into ingredients, macros, and a logged calorie entry automatically.",
    image: "projects/macrobook-portfolio-preview.png", 
    description: "A calorie tracker and recipe manager built with Expo (React Native) for iOS, Android, and web from one codebase, backed by Supabase (Postgres, auth, RLS, Edge Functions). Beyond standard calorie tracking (USDA FoodData Central search, serving-based logging, barcode scanning via Open Food Facts, weekly trend charts) the core feature is recipe import from TikTok, Instagram, and YouTube links: an Edge Function fetches each platform's caption/description (TikTok oEmbed, YouTube Data API, or Instagram page metadata with automatic retry for its inconsistent responses), then parses it into structured ingredients and steps through a three-tier cascade — free regex heuristics first, a schema.org/Recipe scraper against any linked recipe blog second, and Gemini as an LLM fallback last — to minimize paid API calls while still handling messy, unstructured captions. Macros are extracted directly when a creator states them, or estimated from the parsed ingredient list via per-ingredient USDA lookups otherwise. Recipe search (Spoonacular) and calorie data are proxied through server-side Edge Functions so third-party API keys never reach the client.",
    tags: ["React Native", "Expo", "Supabase", "PostgreSQL", "Gemini", "TypeScript"],
    liveUrl: "https://macrobook-joshuanguyen.vercel.app/", 
    repoUrl: "https://github.com/JoshNguyen13/MacroBook",
    featured: true,
  },
];
