type ContactItem = {
  label: string;
  text: string;
  href: string;
  external?: boolean;
};

const CONTACT_ITEMS: ContactItem[] = [
  {
    label: "Email",
    text: "ankitraj5ar@gmail.com ↗",
    href: "mailto:ankitraj5ar@gmail.dev",
    external: true,
  },
  {
    label: "LinkedIn",
    text: "linkedin.com/in/ankitraj5ar ↗",
    href: "https://linkedin.com/in/ankitraj5ar",
    external: true,
  },
  {
    label: "GitHub",
    text: "github.com/ankitraj5ar ↗",
    href: "https://github.com/ankitraj5ar",
    external: true,
  },
  {
    label: "Resume",
    text: "Download PDF ↗",
    href: "/resume.pdf",
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section">
      <span className="label reveal">Contact</span>
      <div className="contact-grid">
        <div>
          <h2 className="contact-heading reveal">
            {"Let's work"}
            <br />
            <em>together.</em>
          </h2>
          <p className="contact-para reveal reveal-delay-1">
            {
              "I'm currently open to new opportunities. Whether you have a question, a project in mind, or just want to say hi — my inbox is always open."
            }
          </p>
        </div>
        <ul className="contact-list reveal reveal-delay-2">
          {CONTACT_ITEMS.map((item) => (
            <li key={item.label} className="contact-item">
              <span className="contact-item-label">{item.label}</span>
              <a
                href={item.href}
                className="contact-item-link "
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.text}
              </a>
            </li>
          ))}
          <li className="contact-border"></li>
        </ul>
      </div>
    </section>
  );
}
