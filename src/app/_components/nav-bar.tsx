"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="absolute inset-x-0 top-0 z-50 h-16">
      <nav
        aria-label="Global"
        className="flex h-full items-center justify-between px-6 lg:px-8"
      >
        <div className="flex h-full items-center justify-between w-full max-w-5xl mx-auto px-4">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 block">
              <img
                alt="frhnnvs logo light"
                src="/frhnnvs-logo-dark.png"
                className="hidden h-8 w-auto dark:block"
              />
              <img
                alt="frhnnvs logo dark"
                src="/frhnnvs-logo-light.png"
                className="h-8 w-auto dark:hidden"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
            >
              <span className="sr-only">frhnnvs</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={clsx(
                  // base
                  "relative rounded-2xl px-4 py-2 text-sm font-semibold transition",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60",

                  // hover style
                  "hover:bg-card hover:shadow-sm hover:-translate-y-[1px]",

                  // inactive text
                  !isActive(item.href) &&
                    "text-muted-foreground hover:text-foreground",

                  // active pill (permanent)
                  isActive(item.href) &&
                    "bg-card ring-1 ring-border shadow-sm text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <ModeToggle />
          </div>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background p-6 sm:max-w-sm sm:ring-1 sm:ring-border">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 block">
              <img
                alt="frhnnvs logo light"
                src="/frhnnvs-logo-dark.png"
                className="hidden h-8 w-auto dark:block"
              />
              <img
                alt="frhnnvs logo dark"
                src="/frhnnvs-logo-light.png"
                className="h-8 w-auto dark:hidden"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-muted-foreground"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                <ModeToggle />
              </div>
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-muted"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
