const LANGUAGES_TOOLS = [
  "Go",
  "Python",
  "TypeScript",
  "PostgreSQL",
  "Redis",
  "Kafka",
];
const INFRASTRUCTURE = [
  "Docker",
  "Kubernetes",
  "AWS",
  "gRPC",
  "REST APIs",
  "System Design",
];

export function About() {
  return (
    <section id="about" className="section">
      <span className="label reveal">About</span>
      <div className="about-grid">
        <div>
          <h2 className="about-heading reveal">
            Building systems that
            <br />
            <em>just work.</em>
          </h2>
          <p className="about-para reveal reveal-delay-1">
            {
              "I'm a backend engineer with 5+ years of experience designing and building distributed systems, APIs, and data pipelines. I care deeply about correctness, observability, and developer experience."
            }
          </p>
          <p className="about-para reveal reveal-delay-2">
            Previously at Stripe and a fintech startup in Berlin. Now looking
            for my next challenge — ideally on a small team tackling hard
            infrastructure problems.
          </p>
          <p className="about-para reveal reveal-delay-3">
            Outside of work, I contribute to open-source projects, read
            distributed systems papers, and try to convince people that Go is
            underrated.
          </p>
        </div>
        <div className="reveal reveal-delay-1">
          <span className="skills-label">Languages &amp; Tools</span>
          <div className="skills-grid">
            {LANGUAGES_TOOLS.map((s) => (
              <span key={s} className="skill-tag">
                {s}
              </span>
            ))}
          </div>
          <hr className="skills-divider" />
          <span className="skills-label">Infrastructure &amp; Concepts</span>
          <div className="skills-grid">
            {INFRASTRUCTURE.map((s) => (
              <span key={s} className="skill-tag">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
