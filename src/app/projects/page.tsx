import Image from "next/image";
import { projects } from "./data";

export default function Projects() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Check out some of the cool stuff I have been working on :)
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
                  src={proj.homeImageUrl || proj.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-muted object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  width={900}
                  height={450}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time className="text-muted-foreground">{proj.date}</time>
                  <a
                    href={proj.href}
                    className="relative z-10 rounded-full bg-muted px-3 py-1.5 font-medium text-muted-foreground hover:bg-muted/80"
                  >
                    {proj.type}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground group-hover:text-muted-foreground">
                    <a href={proj.href}>
                      <span className="absolute inset-0" />
                      {proj.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
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
