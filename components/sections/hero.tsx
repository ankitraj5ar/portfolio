export function Hero() {
  return (
    <section id="home" className="section">
      <div className="hero-availability load-hidden load-animate">
        <div className="availability-dot"></div>
        <span className="availability-text">Available for work</span>
      </div>
      <h1 className="hero-name load-hidden load-animate">Ankit Raj</h1>
      <p className="hero-tagline load-hidden load-animate">
        Software engineer who builds web apps, APIs, and internal tools. Curious
        about good DX, and building things that actually solve problems. — and
        occasionally obsess over clean{" "}
        <code>
          <strong>&lt;code/&gt;</strong>
        </code>
        .
      </p>
      <div className="hero-cta load-hidden load-animate">
        <a href="#projects" className="cta-primary">
          View work
        </a>
        <a href="#contact" className="cta-ghost">
          Get in touch ↗
        </a>
      </div>
      <div className="hero-scroll load-hidden load-animate">
        <div className="hero-scroll-line"></div>
        <span className="label">Scroll to explore</span>
      </div>
    </section>
  );
}
