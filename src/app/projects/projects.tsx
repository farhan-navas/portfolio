import type { IconType } from "react-icons";
import { DiJava } from "react-icons/di";
import {
  SiAxios,
  SiClerk,
  SiCplusplus,
  SiDart,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGithubpages,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiReactquery,
  SiShadcnui,
  SiStripe,
  SiSwift,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiVercel,
  SiVite,
  SiZod,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export interface Tech {
  shortForm: string;
  name: string;
  icon?: IconType;
  color?: string;
}

interface Project {
  id: number;
  title: string;
  subtitle: string;
  href: string;
  slug: string;
  date: string;
  type: string;
  description: string;
  homeImageUrl?: string;
  imageUrl: string;
  imageAlt: string;
  githubUrl: string;
  appUrl?: string;
  firstParagraph?: string;
  secondParagraph?: string;
  thirdParagraph?: string;
  features?: string[];
  stack?: Tech[];
}

const allTech: Tech[] = [
  { shortForm: "nextjs", name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { shortForm: "react", name: "React", icon: SiReact, color: "#61DAFB" },
  { shortForm: "ts", name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { shortForm: "java", name: "Java", icon: DiJava, color: "#007396" },
  { shortForm: "javafx", name: "JavaFX" /* color: "#5382A1" */ },
  { shortForm: "mkbind", name: "Markbind" },
  {
    shortForm: "tailwind",
    name: "TailwindCSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  { shortForm: "trpc", name: "tRPC", icon: SiTrpc, color: "#398CCB" },
  {
    shortForm: "ts-query",
    name: "Tanstack Query",
    icon: SiReactquery,
    color: "#FF4154",
  },
  { shortForm: "vite", name: "Vite", icon: SiVite, color: "#646CFF" },
  { shortForm: "vercel", name: "Vercel", icon: SiVercel, color: "#000000" },
  {
    shortForm: "gh-pages",
    name: "Github Pages",
    icon: SiGithubpages,
    color: "#181717",
  },
  {
    shortForm: "clerk",
    name: "Clerk",
    icon: SiClerk,
    color: "#6C47FF",
  },
  { shortForm: "prisma", name: "Prisma ORM", icon: SiPrisma, color: "#0C344B" },
  {
    shortForm: "psql",
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
  },
  { shortForm: "pinecone", name: "Pinecone" },
  { shortForm: "openai", name: "OpenAI API", icon: SiOpenai, color: "#10A37F" },
  { shortForm: "stripe", name: "Stripe", icon: SiStripe, color: "#635BFF" },
  { shortForm: "python", name: "Python", icon: SiPython, color: "#3776AB" },
  { shortForm: "fastapi", name: "FastAPI", icon: SiFastapi, color: "#05998B" },
  { shortForm: "c++", name: "C++", icon: SiCplusplus, color: "#00599C" },
  {
    shortForm: "firebase",
    name: "Firebase",
    icon: SiFirebase,
    color: "#FFCA28",
  },
  { shortForm: "flutter", name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { shortForm: "dart", name: "Dart", icon: SiDart, color: "#0175C2" },
  { shortForm: "swift", name: "Swift", icon: SiSwift, color: "#F05138" },
  { shortForm: "shadcn", name: "Shadcn", icon: SiShadcnui, color: "#0EA5E9" },
  { shortForm: "zod", name: "Zod", icon: SiZod, color: "#3E67B1" },
  { shortForm: "axios", name: "Axios", icon: SiAxios, color: "#5A29E4" },
  {
    shortForm: "azure",
    name: "Azure AI SDK",
    icon: VscAzure,
    color: "#0078D4",
  },
  { shortForm: "sm-kernel", name: "Semantic Kernel" },
  { shortForm: "flask", name: "Flask", icon: SiFlask, color: "#000000" },
];

const getTechStack = (shrortForms: string[]): Tech[] => {
  return allTech.filter((tech) => shrortForms.includes(tech.shortForm));
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Monday",
    subtitle: "My personal iOS butler, built with Flutter",
    href: "/projects/monday",
    slug: "monday",
    date: "2025",
    type: "Mobile (Flutter, iOS-first)",
    description: `An opinionated personal assistant app focused on day planning and digital well-being.
    Monday starts as a UI-first prototype (Flutter) with iOS-leaning features like App Intents,
    and will gradually add integrations for Calendar, Screen Time, and Health.`,
    // homeImageUrl: "/projects/monday/monday-home.png",
    imageUrl: "/projects/monday/monday-home.png",
    imageAlt: "Monday app — dashboard and task views",
    githubUrl: "https://github.com/farhan-navas/monday",
    // no appUrl yet => button won't render
    firstParagraph: `Monday is my take on a personal iOS butler. I’m using Flutter to move fast on UI and iterate on
    a clean UX before wiring real integrations. The goal is a daily companion that helps me plan,
    block distractions, and surface the right info at the right time.`,
    secondParagraph: `I’m building the core screens first — Weather, Tasks, Screen Time lists, Health and Sleep dashboards,
    plus Settings/Pricing — then layering in iOS-native features via Swift App Intents. Calendar,
    Screen Time, and HealthKit integrations are on the roadmap, with local data via SharedPreferences.`,
    thirdParagraph: `Once the UX feels right, I’ll add the brains: Calendar automation, Siri shortcuts/intents,
    and selective AI assistance (kept local where sensible). If needed, I may add a small .NET backend later.`,
    features: [
      "Flutter UI for Weather, Tasks, Health, Sleep, and Settings",
      "Task list UX: add, multi-delete, and swipe gestures",
      "Screen-blocking list UI (time-limit / time-of-day profiles)",
      "Image-first card design with rounded corners and subtle shadowing",
      "Dark mode friendly design",
      "iOS App Intent: OpenStatusReport (Swift)",
      "Planned: Calendar + Screen Time + HealthKit integrations",
      "Planned: Local ‘Memories’ store and SharedPreferences persistence",
    ],
    stack: getTechStack(["flutter", "dart", "swift"]),
  },
  {
    id: 2,
    title: "Wally 1.0",
    subtitle: "An AI-driven relationship wellness companion",
    href: "/projects/wally",
    slug: "wally",
    date: "2025",
    type: "Full-stack",
    description: `Wally is a relationship wellness app that helps people communicate better with their partners, 
      family and colleagues offline. Currently in beta and is only available on the web.`,
    homeImageUrl: "/projects/wally/wally-home.png",
    imageUrl: "/projects/wally/wally-chat.png",
    imageAlt: "Wally Home Page",
    githubUrl: "https://github.com/farhan-navas/wally",
    appUrl: "https://wally-sandy.vercel.app/",
    firstParagraph: `Wally is a relationship wellness app that helps people communicate better with their partners, 
      family and colleagues offline. This app was somewhat inspired by those RizzApp tiktoks that all of us 
      find on our for-you page on TikTok but with actual functionality. Wally can help you communicate better 
      offline by giving you suggestions on what to say. Wally is also able to take in additional contextual data to 
      give more accurate suggestions.`,
    secondParagraph: `This is the first time I have worked on a comprehensive full-stack project like this. Before starting on the project, 
      I had to spend a lot of time learning what was the best way to structure a full-stack like this and how to make it 
      scalable at the same time. I had to reasearch online and find out the best conventions and practices to follow, 
      and I have definitely feel like I have learned a lot through the process :)`,
    thirdParagraph: `I plan to continue working on Wally and keep adding more features to it. I hope to make Wally available on mobile 
      devices once we have successfully tested it on the web and distribute it on the Android Play Store/Apple App Store.`,
    features: [
      "Chat interface to communicate with Wally",
      "Sign up and login",
      "Create profiles for chats with different people",
      "Get suggestions on what to say",
      "Uses RAG and OpenAI API to generate suggestions",
      "All data stored by Wally is secured and encrypted",
      "Stripe payment process integration",
    ],
    stack: getTechStack([
      "nextjs",
      "react",
      "ts",
      "tailwind",
      "trpc",
      "ts-query",
      "vercel",
      "clerk",
      "prisma",
      "psql",
      "pinecone",
      "openai",
      "stripe",
    ]),
  },
  {
    id: 3,
    title: "Market Inspection Agent",
    subtitle: "AI-powered real estate intelligence for CapitaLand",
    href: "/projects/market-inspection-agent",
    slug: "market-inspection-agent",
    date: "2025",
    type: "Full-stack • AI Agents",
    description: `An agentic system that discovers industry trends, enriches companies with reliable signals,
    and surfaces ranked real-estate opportunities. I led the team build end-to-end—from the FastAPI
    orchestration to the React dashboard—and this project directly led to internship offers.`,
    // homeImageUrl: "/projects/market-inspection-agent/home.png",
    imageUrl: "/projects/market-inspection-agent/home.png",
    imageAlt: "Market Inspection Agent — ranked opportunities dashboard",
    githubUrl: "https://github.com/farhan-navas/market-inspection-agent",
    firstParagraph: `Built for the CapitaLand AI Hackathon, Market Inspection Agent is an agentic pipeline
    that continuously scans the market, enriches entities, and highlights where demand may convert into
    tenancy. I designed the workflows and led implementation across backend, orchestration, and UI.`,
    secondParagraph: `The backend is a Python FastAPI service that coordinates Azure AI Foundry agents via
    Semantic Kernel and the OpenAI API. The frontend is a lightweight React + TypeScript app (Vite/SWC,
    Tailwind, shadcn) for querying, reviewing leads, and generating status reports on demand.`,
    thirdParagraph: `Outcomes: faster opportunity discovery, fewer manual lookups, and a repeatable pattern
    the team can extend (new industries/regions) without re-architecting. Higher management feedback was
    strong enough that our team received internship offers off the back of this build.`,
    features: [
      "Form-driven scanning by industry, region, and service needs",
      "Multi-agent orchestration with Azure AI Foundry",
      "Company enrichment (news, leadership, basic firmographics)",
      "Smart ranking score for opportunities",
      "Interactive dashboard with filters and details",
      "On-demand status report generation per company",
      "Retrieval chat over ingested market data",
      "Simple deployment split: /backend (FastAPI) and /frontend (React)",
    ],
    stack: getTechStack([
      "react",
      "ts",
      "vite",
      "tailwind",
      "shadcn",
      "zod",
      "axios",
      "python",
      "fastapi",
      "azure",
      "sm-kernel",
      "openai",
    ]),
  },
  {
    id: 4,
    title: "Eva Task Manager",
    subtitle: "Hybrid CLI + GUI productivity powerhouse",
    href: "/projects/eva-task-manager",
    slug: "eva-task-manager",
    date: "2024/2025",
    type: "Full-Stack, CLI",
    description: `Eva Task Manager is a simple task manager that I made for the NUS CS2103T module. The task manager is a CLI 
      application that allows users to manage their tasks.`,
    imageUrl: "/projects/eva/eva-chat.png",
    imageAlt: "Eva Task Manager GUI",
    githubUrl: "https://github.com/farhan-navas/ip",
    appUrl: "https://github.com/farhan-navas/ip/releases/tag/A-Release",
    firstParagraph: `Eva is a desktop app that I made for the CS2103T module. The app is a CLI optimized application that manages tasks 
    for users while still having the benefits of a GUI. Eva is able to manage 3 different types of tasks: todos, deadlines and events. The app is built mainly using 
    Java and JavaFX.`,
    secondParagraph: `The Eva.jar file can be downloaded from the GitHub releases page and is linked above under the app URL. 
    The app is able to run on any computer that is able to run Java 17 and above. Eva is very simple and user-friendly, all you have to 
    do is type the command in the command box and hit enter to execute it.`,
    thirdParagraph: `I find Java to be a very interesting and structured language to work with. This was also my first time working with JavaFX.
    At the end of the day, Eva is a beginner project and I aim to use these skills learnt to create better apps in Java in the future.`,
    features: [
      "Add todos, deadlines and events",
      "Mark tasks as done and unmark them",
      "Delete tasks",
      "Able to find tasks using keywords",
      "Saving tasks to disk, (tasks are loaded when the app is started)",
      "Bye command to easily exit the app",
    ],
    stack: getTechStack(["java", "javafx", "gh-pages"]),
  },
  {
    id: 5,
    title: "Connect 4 Agent",
    subtitle: "Lightning-fast, alpha-beta-pruned Connect 4 champion",
    href: "/projects/connect-4",
    slug: "connect-4",
    date: "2024",
    type: "AI Agent",
    description: `The Connect 4 Agent is a simple AI Agent that can play the game Connect 4 that I made for the NUS CS2109S module. 
      The agent uses the minimax algorithm with alpha-beta pruning to make decisions.`,
    imageUrl: "/projects/connect-4/home.png",
    imageAlt: "Connect 4 Agent in play",
    githubUrl: "https://github.com/farhan-navas/connect-4",
    firstParagraph: `The Connect 4 Agent is a simple AI Agent that can play the game Connect 4. This was a project that I was 
      excited to work on and was part of the CS2109S module in NUS. For my project, I found similar projects online 
      which detailed how I could build a Connect 4 Solver. I then used these projects as a base and built upon them to 
      create my own Connect 4 Agent.`,
    secondParagraph: `The Connect 4 Agent used the minimax algorithm with alpha-beta pruning to make the best decision at every particular move. 
      While working on this project, one major constraint that we had to work with was that the agent had to be initialized and 
      make a move within 1 second, and the app size could not exceed 1MB. This proved to be a tough challenge indeed as there 
      were a lot of optimization steps that I needed to take to ensure that the agent could operate within these constraints.`,
    thirdParagraph: `Overall, I am happy with the way the connect 4 agent turned out, and this was something that I genuinely
    interested in. After this module, I plan to continue working on more AI-ML and game theory related projects and hope to learn more about this
    field.`,
    features: [
      "Bitboard representation of the Connect 4 board",
      "Minimax algorithm with alpha-beta pruning",
      "Evaluation function to evaluate the board state",
      "Efficient move ordering to increase efficiency of pruning",
      "Anticipate opponent's direct winning moves and block them",
      "Transposition table to store previously computed positions",
      "12-move lookup table to store the best move for the first 12 moves",
    ],
    stack: getTechStack(["python", "c++"]),
  },
  {
    id: 6,
    title: "RHOC Bidding System",
    subtitle: "Real-time auction system at your fingertips",
    href: "/projects/rhoc-supper-bidding",
    slug: "rhoc-supper-bidding",
    date: "2024",
    type: "Full-Stack",
    description: `The RHOC Supper Bidding System is a web application that I made for my hall's supper bidding system. 
      The system allows residents to bid for supper from various food vendors.`,
    homeImageUrl: "/projects/rhoc/rhoc-auctions.png",
    imageUrl: "/projects/rhoc/rhoc-home.png",
    imageAlt: "RHOC Supper Bidding System Preview UI",
    githubUrl: "https://github.com/farhan-navas/rhoc-supper-bidding",
    appUrl: "https://rhoc-supper-bidding.vercel.app/",
    firstParagraph: `The Supper Bidding App was built for the Raffles Hall Orientation Camp. It was a project under RHDevs and was done 
    in collaboration with the RHOC committee. The app was built to allow incoming freshmen to have a supper bidding competition during the 
    Orientation Camp. The app was primarily built using React, with Vite and Firebase`,
    secondParagraph: `This app was my first time working with Firebase and I found it to be a interesting and powerful tool. During the 
    build process, I had to learn how to use Firebase to store and manage user data as well as authenticate users based on their roles. 
    `,
    thirdParagraph: `Overall, this was a very minimalistic app, however I am happy with the way it turned out! This project will be passed
    on to the next RHDevs EXCO for maintenance and hopefully it becomes a staple for every RH orientation camp in the future.`,
    features: [
      "Audience is able to view a public dashboard of their current bids",
      "Admin able to start a bidding session",
      "Manage points for each RHOC group",
      "Add custome food items for bidding",
      "Swap items between 2 groups",
      "View the bidding history of each group",
    ],
    stack: getTechStack([
      "nextjs",
      "react",
      "ts",
      "tailwind",
      "ts-query",
      "vercel",
      "firebase",
    ]),
  },

  {
    id: 7,
    title: "ETH Sentiment Analysis",
    subtitle: "ETH price forecasts powered by ARIMA & LSTM",
    href: "/projects/arima-lstm-sentiment-analysis",
    slug: "arima-lstm-sentiment-analysis",
    date: "2023/2024",
    type: "Machine Learning • Backend",
    description: `This is a simple model that predicts the price of ETH and Impermanent Loss. Made this together with my friends 
      for the NUS Fintech Summit 2024.`,
    imageUrl: "/projects/sentiment-analysis/home.png",
    imageAlt: "ARIMA-LSTM Sentiment Analysis Backend in Action",
    githubUrl: "https://github.com/farhan-navas/Fintech-Hacka",
    firstParagraph: `This project is a simple ML model that was trained on a Crypto News Dataset. The model makes an API call to a crypto news
    website and scrapes the latest news articles. The model then uses this data to predict the price of ETH and Impermanent Loss.
    There are 2 models in this project, one that uses ARIMA and another that uses LSTM.`,
    secondParagraph: `For my contributions to this project, I worked on the backend of the project. I built the backend using Python and 
    Flask. The backend was responsible for making the API calls to the crypto news website and then sending the data to the ML model to make
    predictions. The backend was also responsible for sending the predictions back to the frontend.`,
    thirdParagraph: `This project was a great learning experience for me and it helped me first delve into the world of machine leaarning. 
    Even though I was mainly responsible for the backend, I am also thankful to my team who helped me understand the ML models that were built during this competition.`,
    features: [
      "API call to crypto news website",
      "Scrape latest news articles",
      "Train ARIMA and LSTM models on the news data",
      "Predict the price of ETH and Impermanent Loss",
      "Display predictions on frontend",
    ],
    stack: getTechStack(["python", "flask"]),
  },
];
