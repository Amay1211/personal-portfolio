import { profile } from "../data/resume";

export function Hero() {
  return (
    <section
      id="hero"
      className="section-padding min-h-[75vh] sm:min-h-[85vh] flex flex-col justify-center relative overflow-hidden"
      aria-label="Introduction"
    >
      <div className="container-narrow">
        <p
          className="text-sm font-semibold uppercase tracking-[0.2em] mb-4 hero-stagger-1"
          style={{ color: "var(--accent)" }}
        >
          {profile.title}
        </p>
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-5 hero-stagger-2"
          style={{
            color: "var(--foreground)",
            textShadow: "0 0 40px var(--accent-glow)",
          }}
        >
          {profile.name}
        </h1>
        <p
          className="text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed hero-stagger-3"
          style={{ color: "var(--foreground-muted)" }}
        >
          {profile.summary}
        </p>
        <div className="flex flex-wrap gap-4 hero-stagger-4">
          <a href="#contact" className="btn-primary">
            Get in touch
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
