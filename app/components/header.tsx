"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-xl"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div className="container-narrow flex items-center justify-between h-16 sm:h-[4.5rem] px-4 sm:px-6">
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight transition-opacity hover:opacity-90"
          style={{ color: "var(--foreground)" }}
        >
          <span style={{ color: "var(--accent)" }}>A</span>S
        </a>

        <nav
          className={`fixed inset-0 top-16 sm:top-[4.5rem] sm:relative sm:inset-auto flex flex-col sm:flex-row sm:items-center sm:gap-1 bg-[var(--background)]/95 sm:bg-transparent backdrop-blur-lg sm:backdrop-blur-none transition-all duration-300 ${
            open ? "flex opacity-100" : "hidden opacity-0 sm:flex sm:opacity-100"
          }`}
          aria-label="Main navigation"
        >
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-1 p-6 sm:p-0">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 sm:py-2 text-base font-medium border-b-2 border-transparent transition-colors hover:bg-[var(--background-elevated)] hover:border-[var(--accent)] sm:hover:bg-transparent"
                style={{ color: "var(--foreground-muted)" }}
                data-accent
              >
                {label}
              </a>
            ))}
          </div>
        </nav>

        <button
          type="button"
          className="sm:hidden p-2.5 -mr-2.5 rounded-lg hover:bg-[var(--background-elevated)] transition-colors"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{ color: "var(--foreground)" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}
