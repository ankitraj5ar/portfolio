export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-inner">
        <span className="footer-text">
          © {year} Ankit Raj. All rights reserved.
        </span>
        <span className="footer-text">
          <a href="#home">Back to top ↑</a>
        </span>
      </div>
    </footer>
  );
}
