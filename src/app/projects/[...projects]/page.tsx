"use client";

import { useParams } from "next/navigation";
import { projects } from "../projects";
import Image from "next/image";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import StackPills from "@/app/_components/stack-pills";

export default function Project() {
  const params = useParams().projects?.[0];
  const currProj = projects.find((proj) => proj.slug === params);

  return (
    <div>
      {!currProj && (
        <div className="py-32">
          <div className="w-full max-w-5xl mx-auto px-4">
            <h1 className="text-2xl font-semibold text-foreground">
              Project not found
            </h1>
            <p className="mt-2 text-muted-foreground">
              Check the URL or browse all projects.
            </p>
            <Link href="/projects" className="mt-6 inline-block underline">
              Back to Projects
            </Link>
          </div>
        </div>
      )}
      {currProj && (
        <div className="bg-background py-32">
          <div className="w-full max-w-5xl mx-auto px-4 text-base leading-7 text-muted-foreground">
            <p className="text-maintext font-semibold leading-7">Introducing</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {currProj.title}
            </h1>
            <p className="mt-6 text-xl leading-8">{currProj.firstParagraph}</p>
            {currProj.appUrl && (
              <div className="flex mt-4 gap-x-2">
                <Link
                  href={currProj.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-maintext px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-maintext/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Check out the app!
                </Link>

                <Link
                  href={currProj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm hover:bg-secondary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  Repo link
                </Link>
              </div>
            )}
            <h2 className="mt-8 mb-4 text-2xl font-semibold leading-7 text-foreground">
              Stack
            </h2>
            <StackPills stack={currProj.stack} />
            <div className="mt-8">
              <p>{currProj.secondParagraph}</p>
              <figure className="mt-8">
                <Image
                  className="aspect-video rounded-xl object-contain"
                  src={currProj.imageUrl}
                  alt={currProj.imageAlt}
                  width={1310}
                  height={873}
                />
                <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-muted-foreground">
                  <InformationCircleIcon
                    className="mt-0.5 h-5 w-5 flex-none text-muted-foreground/70"
                    aria-hidden="true"
                  />
                  {currProj.imageAlt}
                </figcaption>
              </figure>
              <h3 className="mt-12 text-lg font-semibold leading-7 text-foreground">
                Some key features of {currProj.title} include:
              </h3>
              <ul role="list" className="mt-2 space-y-4 text-muted-foreground">
                {currProj.features?.map((feature) => {
                  return (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon
                        className="mt-1 h-5 w-5 flex-none text-primary"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>
              {/* Add this figure block later on! */}

              {/* <figure className="mt-10 border-l border-primary pl-9">
                <blockquote className="font-semibold text-foreground">
                  <p>
                    “Vel ultricies morbi odio facilisi ultrices accumsan donec
                    lacus purus. Lectus nibh ullamcorper ac dictum justo in
                    euismod. Risus aenean ut elit massa. In amet aliquet eget
                    cras. Sem volutpat enim tristique.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4">
                  <Image
                    className="h-6 w-6 flex-none rounded-full bg-muted"
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <div className="text-sm leading-6">
                    <strong className="font-semibold text-foreground">
                      Maria Hill
                    </strong>{" "}
                    – Marketing Manager
                  </div>
                </figcaption>
              </figure> */}
            </div>
            <div className="mt-16">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Final Thoughts
              </h2>
              <p className="mt-6">{currProj.thirdParagraph}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
