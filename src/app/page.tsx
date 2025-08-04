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
import { MapPin, PlusCircle, Code, Calendar } from "lucide-react";

import { useState } from "react";
import { projects } from "./projects/projects";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-6 py-16 lg:py-32">
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
            <p className="text-base">
              As a dedicated developer based in the heart of Singapore, I bring
              precision and creative innovation to every project. I specialize
              in creating robust, scalable web applications that combine
              cutting-edge technology with intuitive user experiences.
            </p>

            <div className="flex space-x-4">
              <Button className="bg-maintext hover:bg-white hover:text-maintext">
                Get in Touch
              </Button>
              <Button className="bg-white text-maintext hover:bg-maintext hover:text-white">
                View Projects
              </Button>
            </div>
          </div>
        </section>

        <div className="mt-16">
          <h2 className="text-lg font-semibold leading-tight">Projects</h2>
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
                  <Link href={p.href} className="group block">
                    <div className="relative h-80 w-full overflow-hidden rounded-2xl shadow-lg transition-transform">
                      <div className="relative w-full h-full">
                        <Image
                          src={p.homeImageUrl ?? p.imageUrl}
                          alt={p.imageAlt}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
                      </div>
                      <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity group-hover:opacity-50" />
                      <div className="absolute top-4 left-4">
                        <h3 className="text-xl font-semibold text-white">
                          {p.title}
                        </h3>
                        <p className="mt-1 text-sm text-white">{p.subtitle}</p>
                      </div>
                    </div>
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
      </main>
    </div>
  );
}
