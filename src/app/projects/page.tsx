import Image from "next/image";

interface Project {
  id: number;
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  ghUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Wally 1.0",
    href: "/projects/wally",
    description:
      "Wally is a relationship wellness app that helps people communicate better with their partners, family and colleagues offline. Currently in beta and is only available on the web.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    ghUrl: "https://github.com/farhan-navas/wally",
  },
  {
    id: 2,
    title: "Connect 4 Agent",
    href: "/projects/connect-4",
    description:
      "The Connect 4 Agent is a simple AI Agent that can play the game Connect 4 that I made for the NUS CS2109S module. The agent uses the minimax algorithm with alpha-beta pruning to make decisions.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    ghUrl: "https://github.com/farhan-navas/connect-4",
  },
  {
    id: 3,
    title: "RHOC Supper Bidding System",
    href: "/projects/rhoc-supper-bidding",
    description:
      "The RHOC Supper Bidding System is a web application that I made for my hall's supper bidding system. The system allows residents to bid for supper from various food vendors.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    ghUrl: "https://github.com/farhan-navas/rhoc-supper-bidding",
  },
  {
    id: 4,
    title: "ARIMA-LSTM Sentiment Analysis",
    href: "/projects/arima-lstm-sentiment-analysis",
    description:
      "This is a simple model that predicts the price of ETH and Impermanent Loss. Made this together with my friends for the NUS Fintech Summit 2024. ",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    ghUrl: "https://github.com/farhan-navas/Fintech-Hacka",
  },
  {
    id: 5,
    title: "Eva Task Manager",
    href: "/projects/eva-task-manager",
    description:
      "Eva Task Manager is a simple task manager that I made for the NUS CS2103T module. The task manager is a CLI application that allows users to manage their tasks.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    ghUrl: "https://github.com/farhan-navas/ip",
  },
];

export default function Projects() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Check out some of the stuff I have worked on in the past!
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((proj) => (
            <article
              key={proj.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <Image
                  src={proj.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  width={3603}
                  height={2027}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 gap-x-4">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-500">
                    <a href={proj.href}>
                      <span className="absolute inset-0" />
                      {proj.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {proj.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
