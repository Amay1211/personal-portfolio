import { Section } from "./section";
import { certifications } from "../data/resume";

export function Certifications() {
  return (
    <Section id="certifications" title="Licenses & Certifications">
      <ul className="grid gap-5 sm:grid-cols-1">
        {certifications.map((cert) => (
          <li
            key={`${cert.name}-${cert.issuer}`}
            className="card-surface p-6 sm:p-7 hover:-translate-y-1"
          >
            <h3
              className="text-lg font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              {cert.name}
            </h3>
            <p
              className="text-sm font-medium mt-2"
              style={{ color: "var(--accent)" }}
            >
              {cert.issuer}
            </p>
            <p
              className="text-sm mt-1"
              style={{ color: "var(--foreground-muted)" }}
            >
              Issued {cert.issued}
            </p>
            {cert.url && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium transition-opacity hover:opacity-80"
                style={{ color: "var(--accent)" }}
                data-accent
              >
                View certificate
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
