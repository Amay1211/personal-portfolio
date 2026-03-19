import { Section } from "./section";
import { projects } from "../data/resume";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li
            key={project.name}
            className="card-surface p-6 sm:p-7 flex flex-col hover:-translate-y-1"
          >
            <h3
              className="text-xl font-semibold mb-1"
              style={{ color: "var(--foreground)" }}
            >
              {project.name}
            </h3>
            <p
              className="text-sm font-medium mb-3"
              style={{ color: "var(--accent)" }}
            >
              {project.tagline}
            </p>
            <p
              className="text-sm flex-1 mb-4 leading-relaxed"
              style={{ color: "var(--foreground-muted)" }}
            >
              {project.description}
            </p>
            <ul
              className="list-disc list-inside text-xs space-y-1.5 mb-5"
              style={{ color: "var(--foreground-muted)" }}
            >
              {project.highlights.slice(0, 2).map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium rounded-md px-2.5 py-1"
                  style={{
                    backgroundColor: "var(--background-elevated)",
                    color: "var(--foreground-muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
