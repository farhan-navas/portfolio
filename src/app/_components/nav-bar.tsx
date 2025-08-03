"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { ModeToggle } from "./mode-toggle";
import { useTheme } from "next-themes";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact Me", href: "/contact" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          {theme === "dark" && (
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">frhnnvs</span>
              <img alt="" src="frhnnvs-logo-dark.png" className="h-8 w-auto" />
            </a>
          )}
          {theme === "light" && (
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">frhnnvs</span>
              <img alt="" src="frhnnvs-logo-light.png" className="h-8 w-auto" />
            </a>
          )}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
          >
            <span className="sr-only">frhnnvs</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-foreground"
            >
              {item.name}
            </a>
          ))}
          <ModeToggle />
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
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">frhnnvs</span>
              <img alt="" src="frhnnvs-logo.png" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-muted-foreground"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
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
