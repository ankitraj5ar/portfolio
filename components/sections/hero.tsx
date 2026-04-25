export function Hero() {
  return (
    <section id="hero" className="section">
      <div className="hero-availability load-hidden load-animate">
        <div className="availability-dot"></div>
        <span className="availability-text">Available for work</span>
      </div>
      <h1 className="hero-name load-hidden load-animate">
        Alex
        <br />
        Morgan
      </h1>
      <p className="hero-tagline load-hidden load-animate">
        Backend engineer. I build reliable, scalable systems — and occasionally
        obsess over clean APIs.
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
        <span className="hero-scroll-text">Scroll to explore</span>
      </div>
    </section>
  );
}
