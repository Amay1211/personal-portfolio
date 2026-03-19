import { Section } from "./section";
import { education } from "../data/resume";

export function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="grid gap-5 sm:grid-cols-1">
        {education.map((edu) => (
          <li
            key={edu.school}
            className="card-surface p-6 sm:p-7 hover:-translate-y-1"
          >
            <h3
              className="text-lg font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              {edu.degree} · {edu.field}
            </h3>
            <p
              className="text-sm font-medium mt-2"
              style={{ color: "var(--accent)" }}
            >
              {edu.school}
            </p>
            <p
              className="text-sm mt-1"
              style={{ color: "var(--foreground-muted)" }}
            >
              {edu.location} · {edu.period}
            </p>
            <p
              className="text-sm mt-2 font-medium"
              style={{ color: "var(--foreground-muted)" }}
            >
              CGPA: {edu.cgpa}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
