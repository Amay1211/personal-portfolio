import { Section } from "./section";
import { profile } from "../data/resume";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-3xl">
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--foreground-muted)" }}
        >
          {profile.summary}
        </p>
        <p
          className="mt-5 text-sm leading-relaxed"
          style={{ color: "var(--foreground-muted)" }}
        >
          Based in Pune, India. I focus on building fast, accessible, and
          maintainable interfaces with React, Next.js, and TypeScript.
        </p>
      </div>
    </Section>
  );
}
