type ProjectLink = { label: string; href: string };

type Project = {
  index: string;
  title: string;
  year: string;
  type: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  revealDelay: 1 | 2 | 3 | 4;
};

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Artemis",
    year: "2024",
    type: "Open Source",
    description:
      "A distributed task queue built on top of Redis Streams. Supports priorities, delayed jobs, retries with exponential backoff, and a dead-letter queue. Written in Go with a clean HTTP API.",
    stack: ["Go", "Redis", "Docker"],
    links: [{ label: "GitHub ↗", href: "https://github.com" }],
    revealDelay: 1,
  },
  {
    index: "02",
    title: "Cascade",
    year: "2023",
    type: "Production",
    description:
      "Real-time event pipeline that ingests, transforms, and routes webhook events from multiple providers. Handles ~50k events/day with sub-100ms p99 latency.",
    stack: ["Python", "Kafka", "PostgreSQL", "Kubernetes"],
    links: [{ label: "GitHub ↗", href: "https://github.com" }],
    revealDelay: 2,
  },
  {
    index: "03",
    title: "Hatchet API",
    year: "2023",
    type: "SaaS",
    description:
      "GraphQL and REST API layer for a B2B SaaS platform. Features multi-tenancy, row-level security, rate limiting, and a webhook delivery system with retry logic.",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "GraphQL"],
    links: [
      { label: "Live ↗", href: "https://github.com" },
      { label: "GitHub ↗", href: "https://github.com" },
    ],
    revealDelay: 3,
  },
  {
    index: "04",
    title: "Vault CLI",
    year: "2022",
    type: "Open Source",
    description:
      "A command-line tool for managing secrets across environments. Encrypts values at rest using AES-256, supports team sharing via GPG key exchange, and integrates with CI/CD pipelines.",
    stack: ["Go", "AES-256", "GPG"],
    links: [{ label: "GitHub ↗", href: "https://github.com" }],
    revealDelay: 4,
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={`project-card reveal reveal-delay-${project.revealDelay}`}>
      <span className="project-index">{project.index}</span>
      <div>
        <h3 className="project-title">{project.title}</h3>
        <div className="project-meta">
          <span className="project-year">{project.year}</span>
          <span className="project-meta-dot"></span>
          <span className="project-type">{project.type}</span>
        </div>
        <p className="project-desc">{project.description}</p>
        <div className="stack-tags">
          {project.stack.map((s) => (
            <span key={s} className="stack-tag">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="project-links">
        {project.links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section">
      <span className="label reveal">Projects</span>
      <div className="projects-header reveal reveal-delay-1">
        <h2 className="projects-heading">Selected work</h2>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="all-link"
        >
          All projects ↗
        </a>
      </div>

      <div className="projects-list">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.index} project={p} />
        ))}
        <div className="border-bottom"></div>
      </div>
    </section>
  );
}
