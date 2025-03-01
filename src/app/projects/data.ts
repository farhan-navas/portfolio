interface Tech {
  name: string;
  color: string;
}

interface Project {
  id: number;
  title: string;
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
  { name: "Next.js", color: "black" },
  { name: "React", color: "blue" },
  { name: "TypeScript/JavaScript", color: "yellow" },
  { name: "Java", color: "yellow" },
  { name: "JavaFX", color: "green" },
  { name: "Markbind", color: "blue" },
  { name: "TailwindCSS", color: "blue" },
  { name: "tRPC", color: "light_blue" },
  { name: "Tanstack Query", color: "red" },
  { name: "Vite", color: "purple" },
  { name: "Vercel", color: "gray" },
  { name: "Github Pages", color: "black" },
  { name: "Clerk/NextAuth", color: "purple" },
  { name: "Prisma ORM", color: "green" },
  { name: "PostgreSQL", color: "pink" },
  { name: "Pinecone", color: "white" },
  { name: "OpenAI API", color: "green" },
  { name: "Stripe", color: "purple" },
  { name: "React Native", color: "blue" },
  { name: "Python", color: "green" },
  { name: "C++", color: "blue" },
  { name: "Firebase Firestore", color: "orange" },
  { name: "Firebase Authentication", color: "green" },
];

const getTechStack = (names: string[]): Tech[] => {
  return allTech.filter((tech) => names.includes(tech.name));
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Wally 1.0",
    href: "/projects/wally",
    slug: "wally",
    date: "2024/2025",
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
      and I am glad that I have done so as I definitely feel like I have learned a lot :)`,
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
      "Next.js",
      "React",
      "TypeScript/JavaScript",
      "TailwindCSS",
      "tRPC",
      "Tanstack Query",
      "Vercel",
      "Clerk/NextAuth",
      "Prisma ORM",
      "PostgreSQL",
      "Pinecone",
      "OpenAI API",
      "Stripe",
      "React Native",
    ]),
  },
  {
    id: 2,
    title: "Eva Task Manager",
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
    stack: getTechStack(["Java", "JavaFX", "Github Pages"]),
  },
  {
    id: 3,
    title: "Connect 4 Agent",
    href: "/projects/connect-4",
    slug: "connect-4",
    date: "2024",
    type: "AI Agent",
    description: `The Connect 4 Agent is a simple AI Agent that can play the game Connect 4 that I made for the NUS CS2109S module. 
      The agent uses the minimax algorithm with alpha-beta pruning to make decisions.`,
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
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
    stack: getTechStack(["Python", "C++"]),
  },
  {
    id: 4,
    title: "RHOC Supper Bidding System",
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
      "Next.js",
      "React",
      "TypeScript/JavaScript",
      "TailwindCSS",
      "Tanstack Query",
      "Vercel",
      "Firebase Firestore",
      "Firebase Authentication",
    ]),
  },

  {
    id: 5,
    title: "ARIMA-LSTM Sentiment Analysis",
    href: "/projects/arima-lstm-sentiment-analysis",
    slug: "arima-lstm-sentiment-analysis",
    date: "2023/2024",
    type: "Machine Learning/Backend",
    description: `This is a simple model that predicts the price of ETH and Impermanent Loss. Made this together with my friends 
      for the NUS Fintech Summit 2024.`,
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
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
    stack: getTechStack(["Python", "Flask"]),
  },
];
