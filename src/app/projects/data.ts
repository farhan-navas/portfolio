export interface Project {
  id: number;
  title: string;
  href: string;
  date: string;
  type: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  appUrl?: string;
  firstParagraph?: string;
  secondParagraph?: string;
  thirdParagraph?: string;
  features?: string[];
  stack?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Wally 1.0",
    href: "/projects/wally",
    date: "2024/2025",
    type: "Full-stack",
    description:
      "Wally is a relationship wellness app that helps people communicate better with their partners, family and colleagues offline. Currently in beta and is only available on the web.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    githubUrl: "https://github.com/farhan-navas/wally",
    appUrl: "https://wally-sandy.vercel.app/",
    firstParagraph:
      "Wally is a relationship wellness app that helps people communicate better with their partners, family and colleagues offline. This app was somewhat inspired by those RizzApp tiktoks that all of us find on our for-you page on TikTok but with actual functionality. Wally can help you communicate better offline by giving you suggestions on what to say. Wally is also able to take in additional contextual data to give more accurate suggestions.",
    secondParagraph:
      "This is the first time I have worked on a comprehensive full-stack project like this. Before starting on the project, I had to spend a lot of time learning what was the best way to structure a full-stack like this and how to make it scalable at the same time. I had to reasearch online and find out the best conventions and practices to follow, and I am glad that I have done so as I definitely feel like I have learned a lot :)",
    thirdParagraph:
      "I plan to continue working on Wally and keep adding more features to it. I hope to make Wally available on mobile devices once we have successfully tested it on the web and distribute it on the Android Play Store/Apple App Store.",
    features: [
      "Chat interface to communicate with Wally",
      "Sign up and login",
      "Create profiles for chats with different people",
      "Get suggestions on what to say",
      "Uses RAG and OpenAI API to generate suggestions",
      "All data stored by Wally is secured and encrypted",
      "Stripe payment process integration",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript/JavaScript",
      "TailwindCSS",
      "tRPC",
      "Tanstack Query",
      "Prisma ORM",
      "PostgreSQL",
      "Vercel",
      "Pinecone",
      "OpenAI API",
      "Clerk/NextAuth",
      "Stripe",
      "React Native",
    ],
  },
  {
    id: 2,
    title: "Eva Task Manager",
    href: "/projects/eva-task-manager",
    date: "2024/2025",
    type: "Full-Stack, CLI",
    description:
      "Eva Task Manager is a simple task manager that I made for the NUS CS2103T module. The task manager is a CLI application that allows users to manage their tasks.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    githubUrl: "https://github.com/farhan-navas/ip",
  },
  {
    id: 3,
    title: "Connect 4 Agent",
    href: "/projects/connect-4",
    date: "2024",
    type: "AI Agent",
    description:
      "The Connect 4 Agent is a simple AI Agent that can play the game Connect 4 that I made for the NUS CS2109S module. The agent uses the minimax algorithm with alpha-beta pruning to make decisions.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    githubUrl: "https://github.com/farhan-navas/connect-4",
    firstParagraph:
      "The Connect 4 Agent is a simple AI Agent that can play the game Connect 4. This was a project that I was quite excited to work on and was part of the CS2109S module in NUS. For my project, I found similar projects online which detailed how I could build a Connect 4 Solver. I then used these projects as a base and built upon them to create my own Connect 4 Agent.",
    secondParagraph:
      "The Connect 4 Agent used the minimax algorithm with alpha-beta pruning to make the best decision at every particular move. While working on this project, one major constraint that we had to work with was that the agent had to be initialized and make a move within 1 second, and the app size could not exceed 1MB. This proved to be a tough challenge indeed as there were a lot of optimization steps that I needed to take to ensure that the agent could operate within these constraints.",
    features: [
      "Bitboard representation of the Connect 4 board",
      "Minimax algorithm with alpha-beta pruning",
      "Evaluation function to evaluate the board state",
      "Efficient move ordering to increase efficiency of pruning",
      "Anticipate opponent's direct winning moves and block them",
      "Transposition table to store previously computed positions",
      "12-move lookup table to store the best move for the first 12 moves",
    ],
    stack: ["Python", "C++"],
  },
  {
    id: 4,
    title: "RHOC Supper Bidding System",
    href: "/projects/rhoc-supper-bidding",
    date: "2024",
    type: "Full-Stack",
    description:
      "The RHOC Supper Bidding System is a web application that I made for my hall's supper bidding system. The system allows residents to bid for supper from various food vendors.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    githubUrl: "https://github.com/farhan-navas/rhoc-supper-bidding",
    firstParagraph: "",
    secondParagraph: "",
    features: [],
    stack: [
      "Next.js",
      "React",
      "TypeScript/JavaScript",
      "TailwindCSS",
      "Tanstack Query",
      "Firebase Firestore",
      "Firebase Authentication",
    ],
  },

  {
    id: 5,
    title: "ARIMA-LSTM Sentiment Analysis",
    href: "/projects/arima-lstm-sentiment-analysis",
    date: "2023/2024",
    type: "Machine Learning/Backend",
    description:
      "This is a simple model that predicts the price of ETH and Impermanent Loss. Made this together with my friends for the NUS Fintech Summit 2024. ",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    githubUrl: "https://github.com/farhan-navas/Fintech-Hacka",
  },
];
