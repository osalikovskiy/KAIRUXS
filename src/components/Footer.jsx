import { scrollToSection } from "../lib/navigation";

export default function Footer({ t }) {
  return (
    <footer className="kairuxs-footer footer-shell">
      <div className="footer-cta">
        <p className="footer-cta-kicker">{t("footer_cta_kicker")}</p>
        <h2 className="footer-cta-heading">
          <span>{t("footer_cta_line1")}</span>
          <span className="footer-cta-heading-alt">{t("footer_cta_line2")}</span>
        </h2>
        <button
          className="btn-primary footer-cta-btn"
          onClick={() => scrollToSection("contact")}
        >
          {t("footer_cta_btn")}
        </button>
      </div>

      <div className="footer-bar">
        <span>© {new Date().getFullYear()} KAIRUXS — SMM Specialist</span>
        <a
          href="https://t.me/slkvsky"
          target="_blank"
          rel="noreferrer"
          className="footer-dev"
        >
          dev by slkvsky
        </a>
      </div>
    </footer>
  );
}
