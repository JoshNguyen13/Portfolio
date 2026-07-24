"use client";

import Link from "next/link";
import { useState } from "react";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-background">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-heading text-xs text-accent sm:text-sm"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </Link>

        <nav className="hidden gap-2 text-sm sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm px-2 py-1 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="pixel-border flex h-9 w-9 items-center justify-center rounded-sm sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-1">
            <span className="h-px w-4 bg-foreground" />
            <span className="h-px w-4 bg-foreground" />
            <span className="h-px w-4 bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t-[3px] border-ink px-6 py-4 text-sm sm:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm px-2 py-2 transition-colors hover:bg-accent hover:text-accent-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
