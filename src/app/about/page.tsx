import Image from "next/image";
import Link from "next/link";

const languages = [
  {
    label: "Typescript",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    label: "Javascript",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    label: "Python",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    label: "Java",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    label: "C",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  },
  {
    label: "C++",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
  {
    label: "TailwindCSS",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    label: "React",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    label: "Next.js",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    label: "tRPC",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trpc/trpc-original.svg",
  },
  {
    label: "Prisma",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  },
  {
    label: "Spring",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  {
    label: "Node.js",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    label: "Vercel",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
  },
  {
    label: "Firebase",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  {
    label: "Cloudflare",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
  },
  {
    label: "PostgreSQL",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    label: "MongoDB",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    label: "Flask",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  },
  {
    label: "Git",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    label: "Github",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
];

export default function About() {
  return (
    <div>
      <main className="relative isolate">
        {/* Background */}
        <div
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>

        {/* Header section */}
        <div className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              An aspiring Software Engineer, that aims to innovate and inspire
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  Hi there, I&apos;m Farhan! An aspiring Full-Stack Engineer
                  based in Singapore. Currently a sophomore at the National
                  University of Singapore, majoring in Computer Science.
                  I&apos;m passionate about building full-stack web
                  applications, and am always looking for opportunities to learn
                  and grow as a developer.
                </p>
                <br />
                <h3 className="font-semibold text-lg">
                  Things I have been a part of in NUS:
                </h3>
                <ul className="list-disc list-inside mt-4">
                  <li>Vice Head, Raffles Hall Developers</li>
                  <li>Captain, Raffles Hall Ultimate Frisbee</li>
                  <li>Software Engineer, NUS Fintech Society</li>
                </ul>
              </div>
              <div>
                <p>
                  I have also had relevant work experience in the tech industry,
                  and have worked on a variety of personal projects that
                  interest me. My most recent project is called Wally AI which
                  is a relationship wellness app that helps you communicate
                  better offline!{" "}
                  <Link
                    href="/projects"
                    className="font-semibold text-indigo-600"
                  >
                    Click here to check out my projects!
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </p>
                <br />
                <h3 className="font-semibold text-lg">
                  Relevant work experience I have had:
                </h3>
                <ul className="list-disc list-inside mt-4">
                  <li>Java Backend Developer, Optimum Solutions</li>
                  <li>Research Consultant, WorldQuant</li>
                  <li>
                    Field Technician & Digital Marketing Intern, Fredrik Marine
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technologies section */}
          <div>
            <div className="px-6">
              <div className="mx-auto max-w-2xl pt-12 text-center sm:pt-16">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Technology i know.
                </h2>
              </div>
            </div>
            <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:mt-20 sm:grid-cols-6 sm:gap-y-12 lg:mt-14 lg:grid-cols-12">
              {languages.map((stat, statIdx) => (
                <div
                  key={statIdx}
                  className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6"
                >
                  <dt className="text-base text-center font-semibold leading-7 text-gray-900">
                    {stat.label}
                  </dt>
                  <Image
                    className="text-3xl font-semibold tracking-tight text-gray-700"
                    alt={stat.label}
                    src={stat.value}
                    width={79}
                    height={24}
                  />
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Hobbies section */}
        <div className="relative isolate -z-10">
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-12 sm:pt-14 lg:px-8 lg:pt-16">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Things I like to do.
                  </h2>
                  <p className="relative mt-6 text-lg leading-6 text-gray-600 sm:max-w-md lg:max-w-none">
                    When I am not in front of a monitor, I enjoy spending time
                    on a wide variety hobbies! These include
                  </p>
                  <ul className="list-disc list-inside mt-4">
                    <li>Playing Ultimate Frisbee</li>
                    <li>Climbing indoor rocks (bouldering)</li>
                    <li>Hitting the gym for a workout</li>
                    <li>Playing chess, I&apos;m not that good though LOL</li>
                    <li>Pushing my Brawl Stars rank</li>
                  </ul>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        src="/about/ulti.jpg"
                        alt="Ultimate Frisbee"
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        width={396}
                        height={528}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        src="/about/climbing.png"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        width={396}
                        height={528}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src="/about/brawl_stars.png"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        width={396}
                        height={528}
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="relative isolate -z-10 mt-12 sm:mt-16">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <Image
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt=""
                width={600}
                height={384}
              />
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Get to know me!
                </h2>
                <p className="mt-6 text-lg leading-6 text-gray-700">
                  I am always looking for new opportunities to work on new apps
                  or a software engineering internship. If you think I could be
                  a good fit for your team, feel free to contact me here!
                </p>
                <div className="mt-10 flex">
                  <Link
                    href="/projects"
                    className="text-md font-semibold leading-6 text-indigo-400"
                  >
                    Contact me here!<span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
              style={{
                clipPath:
                  "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
