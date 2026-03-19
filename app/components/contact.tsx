import { Section } from "./section";
import { profile } from "../data/resume";

const contactItems = [
  {
    href: `mailto:${profile.email}`,
    label: profile.email,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    label: profile.phone,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    href: profile.linkedin,
    label: profile.linkedinLabel,
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
        {contactItems.map(({ href, label, icon, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="card-surface flex items-center gap-4 p-5 w-full sm:w-auto sm:min-w-[280px] hover:-translate-y-1 group"
          >
            <span
              className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0 transition-colors group-hover:bg-[var(--accent)]/15"
              style={{ color: "var(--accent)" }}
            >
              {icon}
            </span>
            <span
              className="font-medium"
              style={{ color: "var(--foreground)" }}
            >
              {label}
            </span>
          </a>
        ))}
      </div>
      <p
        className="mt-8 text-sm leading-relaxed max-w-xl"
        style={{ color: "var(--foreground-muted)" }}
      >
        Open to new opportunities and collaborations. Feel free to reach out.
      </p>
    </Section>
  );
}
