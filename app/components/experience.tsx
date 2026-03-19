import { Section } from "./section";
import { experience } from "../data/resume";

export function Experience() {
  return (
    <Section id="experience" title="Work Experience">
      <ul className="space-y-0">
        {experience.map((job) => (
          <li
            key={`${job.company}-${job.role}`}
            className="relative pl-8 pb-10 last:pb-0 border-l-2"
            style={{ borderColor: "var(--border)" }}
          >
            <div
              className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full ring-4 ring-[var(--background)] transition-shadow duration-300 hover:shadow-[0_0_12px_var(--accent-glow)]"
              style={{ backgroundColor: "var(--accent)" }}
              aria-hidden
            />
            <div className="card-surface p-5 sm:p-6 ml-2 hover:border-[var(--border-hover)]">
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                {job.role} · {job.company}
              </h3>
              <p
                className="text-sm mt-1"
                style={{ color: "var(--foreground-muted)" }}
              >
                {job.location} · {job.period}
              </p>
              <ul
                className="mt-4 list-disc list-inside space-y-2 text-sm leading-relaxed"
                style={{ color: "var(--foreground-muted)" }}
              >
                {job.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
