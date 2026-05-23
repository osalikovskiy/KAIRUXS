import { useEffect, useState } from "react";
import { additionalServiceTags, primaryNavItems } from "../data/site";
import { scrollToSection } from "../lib/navigation";
import { lenis } from "../lib/lenis";

export default function Header({ t, LANGS, lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    setMenuOpen(false);
    lenis.start();
    scrollToSection(id);
  };

  // lock body scroll + close on Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    if (menuOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      lenis.start();
    };
  }, [menuOpen]);

  return (
    <>
      <header className="kairuxs-header">
        <button className="kairuxs-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>KAIRUXS</button>

        <nav className="kairuxs-nav">
          {primaryNavItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)}>
              {t(item.labelKey)}
            </button>
          ))}
        </nav>

        <div className="kairuxs-header-right">
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
            className="kairuxs-burger"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={"kairuxs-burger-lines" + (menuOpen ? " is-open" : "")} />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        className={`kairuxs-menu-backdrop ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-over Menu */}
      <aside className={`kairuxs-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="kairuxs-menu-head">
          <div className="kairuxs-menu-title">Menu</div>
          <button
            className="kairuxs-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="kairuxs-menu-links">
          {primaryNavItems.map((item) => (
            <button key={item.id} onClick={() => go(item.id)}>
              {t(item.labelKey)}
            </button>
          ))}
        </div>

        <div className="kairuxs-menu-divider" />

        <div className="kairuxs-menu-subtitle">Language</div>
        <div className="kairuxs-menu-lang">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={"kairuxs-menu-lang-btn" + (lang === l.code ? " is-active" : "")}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="kairuxs-menu-divider" />

        <div className="kairuxs-menu-subtitle">Additional services</div>
        <div className="kairuxs-menu-tags">
          {additionalServiceTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <button className="kairuxs-menu-cta" onClick={() => go("contact")}>
          {t("nav_contact")} →
        </button>
      </aside>
    </>
  );
}
