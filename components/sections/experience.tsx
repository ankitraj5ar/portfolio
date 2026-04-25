type Job = {
  company: string;
  role: string;
  period: string;
};

const JOBS: Job[] = [
  {
    company: "Stripe",
    role: "Senior Backend Engineer · Infrastructure",
    period: "2022 — Present",
  },
  {
    company: "Lano (Berlin)",
    role: "Backend Engineer · Payments",
    period: "2020 — 2022",
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    period: "2018 — 2020",
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
          <div key={job.company} className="exp-row">
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
