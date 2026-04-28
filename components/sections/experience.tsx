type Job = {
  id: number;
  company: string;
  role: string;
  period: string;
};

const JOBS: Job[] = [
  {
    id: 3,
    company: "Dayal Infosystems",
    role: "Senior Software Engineer",
    period: "2026 — Present",
  },
  {
    id: 2,
    company: "Dayal Infosystems",
    role: "Software Engineer",
    period: "2023 — 2025",
  },
  {
    id: 1,
    company: "Spark Digital Technologies",
    role: "Web Developer",
    period: "2020 — 2021",
  },
];

export function Experience() {
  return (
    <section id="experience" className="section">
      <span className="label reveal">Experience</span>
      <h2 className="exp-heading reveal reveal-delay-1">
        {"Where I've worked"}
      </h2>
      <div className="exp-strip reveal reveal-delay-2">
        {JOBS.map((job) => (
          <div key={job.id} className="exp-row">
            <div>
              <div className="exp-company">{job.company}</div>
              <div className="exp-role">{job.role}</div>
            </div>
            <div className="exp-period">{job.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
