"use client";

import { useParams } from "next/navigation";
import { projects } from "../data";
import Image from "next/image";
import {
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const colorMap: Record<string, string> = {
  red: "text-white bg-red-500",
  light_blue: " text-white bg-blue-400",
  blue: "text-white bg-blue-600",
  green: "text-white bg-green-600",
  yellow: "text-white bg-yellow-500",
  orange: "text-white bg-orange-500",
  purple: "text-white bg-purple-500",
  pink: "text-white bg-pink-500",
  gray: "text-white bg-gray-500",
  black: "text-white bg-black",
  white: "bg-gray-100 text-black",
};

export default function Project() {
  const params = useParams().projects?.[0];
  const currProj = projects.find((proj) => proj.slug === params);

  return (
    <div>
      {currProj && (
        <div className="bg-white px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-5xl text-base leading-7 text-gray-700">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Introducing
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {currProj.title}
            </h1>
            <p className="mt-6 text-xl leading-8">{currProj.firstParagraph}</p>
            {currProj.appUrl && (
              <div className="flex mt-4 gap-x-2">
                <Link
                  href={currProj.appUrl}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Check out the app!
                </Link>

                <Link
                  href={currProj.githubUrl}
                  className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
                >
                  Repo link
                </Link>
              </div>
            )}
            <h2 className="mt-8 text-2xl font-semibold leading-7 text-gray-900">
              Stack
            </h2>
            {currProj.stack?.map((tech) => {
              return (
                <span
                  key={tech.name}
                  className={`inline-block px-3 py-1 mt-2 mr-2 text-xs leading-6 rounded-full ${
                    colorMap[tech.color]
                  }`}
                >
                  {tech.name}
                </span>
              );
            })}
            <div className="mt-10">
              <p>{currProj.secondParagraph}</p>
              <figure className="mt-8">
                <Image
                  className="aspect-video rounded-xl object-contain"
                  src={currProj.imageUrl}
                  alt=""
                  width={1310}
                  height={873}
                />
                <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                  <InformationCircleIcon
                    className="mt-0.5 h-5 w-5 flex-none text-gray-300"
                    aria-hidden="true"
                  />
                  {currProj.imageAlt}
                </figcaption>
              </figure>
              <h3 className="mt-12 text-lg font-semibold leading-7 text-gray-900">
                Some key features of {currProj.title} include:
              </h3>
              <ul role="list" className="mt-2 space-y-4 text-gray-600">
                {currProj.features?.map((feature) => {
                  return (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon
                        className="mt-1 h-5 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>
              {/* Add this figure block later on! */}

              {/* <figure className="mt-10 border-l border-indigo-600 pl-9">
                <blockquote className="font-semibold text-gray-900">
                  <p>
                    “Vel ultricies morbi odio facilisi ultrices accumsan donec
                    lacus purus. Lectus nibh ullamcorper ac dictum justo in
                    euismod. Risus aenean ut elit massa. In amet aliquet eget
                    cras. Sem volutpat enim tristique.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4">
                  <Image
                    className="h-6 w-6 flex-none rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <div className="text-sm leading-6">
                    <strong className="font-semibold text-gray-900">
                      Maria Hill
                    </strong>{" "}
                    – Marketing Manager
                  </div>
                </figcaption>
              </figure> */}
            </div>
            <div className="mt-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
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
