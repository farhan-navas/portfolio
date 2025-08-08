"use client";

import Image from "next/image";
import Link from "next/link";
import ProfileLinks from "./_components/profile-links";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { MapPin, PlusCircle, Code, Calendar, School } from "lucide-react";

import { useState } from "react";
import { projects } from "./projects/projects";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Snowfall from "./_components/snowfall";

export default function HomePage() {
  const [api, setApi] = useState<CarouselApi>();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-6 py-8 lg:py-16">
        {/* hero */}
        <section className="flex flex-col md:flex-row justify-between items-stretch w-full max-w-5xl mx-auto px-4 py-12">
          {/* left column */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold leading-tight">
              Hi I’m <span className="text-maintext">Farhan!</span>{" "}
              <span className="inline-block origin-bottom-right hover:animate-wave cursor-pointer">
                👋
              </span>
              <br />I like to code.
            </h1>

            <ul className="space-y-3 text-base text-muted-foreground">
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-maintext" />
                <span>Based in Singapore</span>
              </li>
              <li className="flex items-center space-x-2">
                <PlusCircle className="w-5 h-5 text-maintext" />
                <span>23 Years Old</span>
              </li>
              <li className="flex items-center space-x-2">
                <School className="w-5 h-5 text-maintext" />
                <span>Penultimate Year, NUS Computer Science</span>
              </li>
              <li className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-maintext" />
                <span>Full Stack Engineer at Accenture</span>
              </li>
              <li className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-maintext" />
                <span>3+ Years of Work Experience</span>
              </li>
            </ul>
          </div>

          {/* right column */}
          <div className="flex flex-col items-center justify-center md:w-1/2 mt-12 md:mt-0 space-y-8">
            <p className="text-muted-foreground lg:pt-8 xl:pt-12">
              I love developing performant web and mobile applications! I fix
              legacy messes and incorporate AI wherever it provides real value.
              From design to deployment, I care about the details, giving you
              features that arrive polished and reliable.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-maintext hover:bg-white hover:text-maintext">
                <a
                  href={`mailto:frhnnvs@gmail.com?subject=${encodeURIComponent(
                    "Hey Farhan!"
                  )}&body=${encodeURIComponent(
                    "Hi Farhan,\n\nI found you via your portfolio site and wanted to reach out about..."
                  )}`}
                >
                  Get in Touch
                </a>
              </Button>
              <Button
                onClick={() => router.push("/projects")}
                className="bg-white text-maintext hover:bg-maintext hover:text-white"
              >
                View Projects
              </Button>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 lg:mt-1 xl:mt-16">
          <h2 className="text-2xl font-bold leading-tight">Projects</h2>
          <Carousel
            opts={{ align: "start" }}
            className="w-full mt-4"
            setApi={setApi}
          >
            <CarouselContent className="-ml-4 md:-ml-8 lg:-ml-12">
              {projects.map((p) => (
                <CarouselItem
                  key={p.title}
                  className="pl-4 md:pl-8 lg:pl-12 md:basis-1/2 lg:basis-1/3"
                >
                  <Link href={p.href} className="block group">
                    {/* Card */}
                    <article className="rounded-2xl border border-border bg-card shadow-sm transition duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md overflow-hidden">
                      {/* Image (top) */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <Image
                          src={p.homeImageUrl ?? p.imageUrl}
                          alt={p.imageAlt}
                          fill
                          className="object-cover"
                          sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                          priority={false}
                        />
                      </div>

                      {/* Content (bottom) */}
                      <div className="p-6 border-t border-border">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-semibold text-foreground">
                            {p.title}
                          </h3>
                        </div>

                        <p className="mt-3 text-lg leading-7 text-muted-foreground">
                          {p.subtitle}
                        </p>
                      </div>
                    </article>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* more projects link + left and right arrow buttons */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => api?.scrollPrev()}
                disabled={!api}
                className="p-2 text-muted-foreground hover:text-primary disabled:opacity-50"
              >
                &lt;
              </button>
              <button
                onClick={() => api?.scrollNext()}
                disabled={!api}
                className="p-2 text-muted-foreground hover:text-primary hover:scale-125 disabled:opacity-50"
              >
                &gt;
              </button>
            </div>

            <Link
              href="/projects"
              className="inline-block text-sm font-semibold text-primary hover:underline"
            >
              More Projects &rarr;
            </Link>
          </div>
        </div>

        <div>
          <ProfileLinks />
        </div>
        <Snowfall />
      </main>
    </div>
  );
}
