type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding scroll-mt-20 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="container-narrow">
        <h2
          id={`${id}-heading`}
          className="section-title text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
