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
    label: "Axios",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
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
  {
    label: "Vite",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg",
  },
  {
    label: "FastAPI",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  {
    label: "Flutter",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
  {
    label: "Dart",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  },
  {
    label: "Swift",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg",
  },
  {
    label: "Azure",
    value:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
  },
];

export default function About() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
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
        <div className="mx-auto text-center pt-24 sm:pt-32">
          <h2 className="text-5xl font-bold tracking-tight text-maintext">
            About
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            An aspiring Software Engineer, that aims to innovate and inspire
          </p>
        </div>

        {/* Content section */}
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 text-base leading-7 text-muted-foreground lg:grid-cols-2">
            {/* Left Section */}
            <div>
              <p>
                Hi there, I&apos;m Farhan! An aspiring Full-Stack Engineer based
                in Singapore. Currently a penultimate Computer Science student
                at NUS. I&apos;m passionate about building full-stack web
                applications, and am always looking for opportunities to learn
                and grow!
              </p>
              <br />
              <h3 className="font-semibold text-lg text-maintext">
                Things I have been a part of in NUS:
              </h3>
              <ul className="list-disc list-inside mt-2">
                <li>
                  <strong>Vice Head</strong>, Raffles Hall Developers
                </li>
                <li>
                  <strong>Captain</strong>, Raffles Hall Ultimate Frisbee
                </li>
                <li>
                  <strong>Software Engineer</strong>, NUS Fintech Society
                </li>
              </ul>
            </div>

            {/* Right Section */}
            <div>
              <p>
                I have had relevant work experience in the tech industry, and
                worked on a variety of personal projects that interest me. My
                most recent project is Wally, a relationship wellness assistant
                to help users communicate better offline!{" "}
                <Link href="/projects" className="text-maintext">
                  Check out my projects! <span aria-hidden="true">&rarr;</span>
                </Link>
              </p>
              <br />
              <h3 className="font-semibold text-lg text-maintext">
                Relevant work experience I have had:
              </h3>
              <ul className="list-disc list-inside mt-2">
                <li>
                  <strong>Full Stack Developer</strong>, Accenture
                </li>
                <li>
                  <strong>Java Backend Developer</strong>, Optimum Solutions
                </li>
                <li>
                  <strong>Research Consultant</strong>, WorldQuant
                </li>
              </ul>
            </div>
          </div>

          {/* Technologies section */}
          <div>
            <div className="mx-auto pt-12 text-center sm:pt-16">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                Technology i know.
              </h2>
            </div>
            <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-x-8 gap-y-10 sm:mt-20 lg:mt-14 place-items-center">
              {languages.map((stat, statIdx) => (
                <div
                  key={statIdx}
                  className="flex w-24 sm:w-28 flex-col-reverse items-center gap-y-2"
                >
                  <dt className="text-xs sm:text-sm text-center font-medium leading-5 text-foreground">
                    {stat.label}
                  </dt>
                  <Image
                    className="relative h-8 w-8 text-center"
                    alt={stat.label}
                    src={stat.value}
                    width={60}
                    height={20}
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
          <div className="mx-auto gap-x-14 lg:mx-0 lg:flex lg:items-center">
            <div className="max-w-full lg:shrink-0 xl:max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                Things I like to do.
              </h2>
              <p className="relative mt-6 text-lg leading-8 text-muted-foreground sm:max-w-sm lg:max-w-lg">
                When I am <strong>not</strong> sitting in front of a monitor, I
                enjoy spending time on a wide variety of hobbies! Personally, I
                would say I am a relationship-oriented person and love spending
                time with close friends and family. My other hobbies are kind of
                all over the place, but here are a few things I enjoy most:
              </p>
              <ul className="list-disc list-inside mt-4 leading-7 text-muted-foreground">
                <li>Playing ultimate frisbee with my team, RHU</li>
                <li>
                  Climbing fake rocks and hoping I don&apos;t break something
                  again.. (MCL tear oops)
                </li>
                <li>Hitting the gym for a workout</li>
                <li>
                  Playing chess, I&apos;m not that good though LOL I just like
                  doing puzzles
                </li>
                <li>
                  Pushing my Brawl Stars rank and questioning my life choices
                  when I lose 😵‍💫
                </li>
              </ul>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <Image
                    src="/about/ulti.jpg"
                    alt="Ultimate Frisbee"
                    className="aspect-[2/3] w-full rounded-xl bg-muted/50 object-cover shadow-lg"
                    width={396}
                    height={528}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-border" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <Image
                    src="/about/climbing.png"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-muted/50 object-cover shadow-lg"
                    width={396}
                    height={528}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-border" />
                </div>
                <div className="relative">
                  <Image
                    src="/about/brawl_stars.png"
                    alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-muted/50 object-cover shadow-lg"
                    width={396}
                    height={528}
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-border" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="relative isolate -z-10 mt-12 sm:mt-16">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-muted/50 px-6 py-16 ring-1 ring-border sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src="/about/contact.jpg"
              alt=""
              width={600}
              height={384}
            />
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Get to know me!
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I am always looking for new opportunities to work on new apps or
                a software engineering internship. If you think I could be a
                good fit for your team, feel free to contact me here!
              </p>
              <div className="mt-10 flex">
                <Link
                  href="/projects"
                  className="text-lg font-semibold leading-6 text-primary"
                >
                  Contact me here!<span aria-hidden="true">&rarr;</span>
                </Link>
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
