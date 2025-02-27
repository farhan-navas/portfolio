import Image from "next/image";
// import NavBar from "./_components/nav-bar";
import Link from "next/link";
import ProfileLinks from "./_components/profile-links";

export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-36 sm:py-40 lg:px-8 lg:py-64 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                {/* <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Contact me{" "}
                    <Link
                      href="/contact"
                      className="whitespace-nowrap font-semibold text-indigo-600"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      here! <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div> */}
                <h1 className="text-4xl py-6 font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Hello I&apos;m Farhan!
                </h1>
                <p className="text-lg leading-6 text-gray-600">
                  An aspiring Software Engineer, based in Singapore
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/contact"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get in touch
                  </Link>
                  <Link
                    href="/projects"
                    className="text-ssm font-semibold leading-6 text-gray-900 hover:text-indigo-600"
                  >
                    Check out my projects <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center h-screen">
          <div className="rounded-lg overflow-hidden p-4 flex flex-col items-center">
            <Image
              className="object-cover rounded-lg shadow-lg"
              src="/home/profile-pic.jpg"
              alt="Profile Picture"
              width={350}
              height={450}
            />
            <ProfileLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
