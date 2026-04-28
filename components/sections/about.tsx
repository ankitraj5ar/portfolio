const LANGUAGES_TOOLS = [
  "PHP",
  "Yii2",
  "Go",
  "JavaScript",
  "TypeScript",
  "bunJS",
  "NodeJS",
  "ReactJS",
  "NextJS",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "RabbitMQ",
  "Kafka",
];
const INFRASTRUCTURE = [
  "Docker",
  "Kubernetes",
  "AWS",
  "GraphQL",
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
              "I'm a software engineer with 3+ years of experience designing and building backend systems, APIs, and ERP platforms. I focus on scalable APIs, event-driven architecture, and distributed workflows. I care deeply about correctness, observability, and developer experience."
            }
          </p>
          <p className="about-para reveal reveal-delay-2">
            Currently working on an ERP platform focused on retail, MSMEs, and
            agritech, designing systems that handle complex workflows across
            these domains. I&apos;m especially interested in how complex
            business workflows translate into reliable systems, and how to keep
            them consistent, predictable, and maintainable as they evolve over
            time.
          </p>
          <p className="about-para reveal reveal-delay-3">
            Outside of work, I explore system design concepts, study distributed
            systems, and build small projects to better understand real-world
            engineering trade-offs.
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
