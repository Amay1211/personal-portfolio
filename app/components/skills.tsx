import { Section } from "./section";
import { skills } from "../data/resume";

const skillGroups = [
  { label: "Languages", items: skills.languages },
  { label: "Frameworks & Libraries", items: skills.frameworks },
  { label: "State Management", items: skills.stateManagement },
  { label: "Tools", items: skills.tools },
] as const;

export function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillGroups.map(({ label, items }) => (
          <div
            key={label}
            className="card-surface p-5 sm:p-6 hover:-translate-y-1"
          >
            <h3
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "var(--accent)" }}
            >
              {label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <li key={skill}>
                  <span
                    className="inline-block rounded-lg px-3 py-1.5 text-sm font-medium transition-colors hover:border-[var(--border-hover)]"
                    style={{
                      backgroundColor: "var(--background-elevated)",
                      color: "var(--foreground)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
