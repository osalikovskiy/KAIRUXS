import { useEffect, useState } from "react";

export default function Header({ t, LANGS, lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const go = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  // lock body scroll + close on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="brndz-header">
        <div className="brndz-logo">KAIRUXS</div>

        <nav className="brndz-nav">
          <button onClick={() => scrollToSection("services")}>{t("nav_services")}</button>
          <button onClick={() => scrollToSection("pricing")}>{t("nav_pricing")}</button>
          <button onClick={() => scrollToSection("results")}>{t("nav_results")}</button>
          <button onClick={() => scrollToSection("content-library")}>{t("nav_cases")}</button>
          <button onClick={() => scrollToSection("contact")}>{t("nav_contact")}</button>
        </nav>

        <div className="brndz-header-right">
          <div className="lang-switcher">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={"lang-btn" + (lang === l.code ? " lang-btn-active" : "")}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Burger (tablet + mobile) */}
          <button
            className="brndz-burger"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={"brndz-burger-lines" + (menuOpen ? " is-open" : "")} />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`brndz-menu-backdrop ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-over Menu */}
      <aside className={`brndz-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="brndz-menu-head">
          <div className="brndz-menu-title">Menu</div>
          <button className="brndz-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="brndz-menu-links">
          <button onClick={() => go("services")}>{t("nav_services")}</button>
          <button onClick={() => go("pricing")}>{t("nav_pricing")}</button>
          <button onClick={() => go("results")}>{t("nav_results")}</button>
          <button onClick={() => go("content-library")}>{t("nav_cases")}</button>
          <button onClick={() => go("contact")}>{t("nav_contact")}</button>
        </div>

        <div className="brndz-menu-divider" />

        <div className="brndz-menu-subtitle">Language</div>
        <div className="brndz-menu-lang">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={"brndz-menu-lang-btn" + (lang === l.code ? " is-active" : "")}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="brndz-menu-divider" />

        <div className="brndz-menu-subtitle">Additional services</div>
        <div className="brndz-menu-tags">
          <span>Video production</span>
          <span>Graphic design</span>
          <span>Flyers / Business cards</span>
          <span>Branding</span>
          <span>Advanced analytics</span>
          <span>Strategy</span>
        </div>

        <button className="brndz-menu-cta" onClick={() => go("contact")}>
          {t("nav_contact")} →
        </button>
      </aside>
    </>
  );
}