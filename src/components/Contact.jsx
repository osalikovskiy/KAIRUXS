import { useState } from "react";
import DecorativeFlower from "./ui/DecorativeFlower";
import SectionHeader from "./ui/SectionHeader";
import { VariantSection } from "./ui/AnimatedSection";

export default function Contact({ t }) {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const FORM_ENDPOINT = "https://formspree.io/f/mlggerzp";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "loading" || status === "success") return;
    setStatus("loading");

    const formData = new FormData(e.target);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Form request failed with status ${response.status}`);
      }

      e.target.reset();

      // чуть подержим лоадер, чтобы выглядело приятно
      setTimeout(() => {
        setStatus("success");
      }, 1500);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const contactLinks = [
    {
      label: "Telegram",
      href: "https://t.me/kairuxsmm",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/380932530473",
    },
    {
      label: "Email",
      href: "mailto:kairuxs.smm@gmail.com",
    },
    {
      label: "Instagram",
      href: "https://instagram.com/smm.kairuxs",
    },
  ];
  return (
    <VariantSection className="brndz-section-last" id="contact">
      {/* Decorative Flowers */}
      <DecorativeFlower
        imageSrc="/flowers/flower8.PNG"
        sizeClass="flower-small"
        delayClass="flower-delay-1"
        style={{ top: "10%", left: "8%" }}
      />
      <DecorativeFlower
        imageSrc="/flowers/flower2.PNG"
        sizeClass="flower-large"
        delayClass="flower-delay-2"
        style={{ bottom: "12%", right: "5%" }}
      />

      <SectionHeader
        title={t("section_contact_title")}
        description={t("section_contact_sub")}
      />

      <div className="contact-grid">
        <div className="metal-card contact-cta">
          <h3>{t("contact_start_title")}</h3>
          <p>{t("contact_start_text")}</p>
          <form
            action="https://formspree.io/f/mlggerzp"
            method="POST"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="field-row">
              <input
                type="text"
                name="name"
                placeholder={t("contact_form_name_placeholder")}
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t("contact_form_email_placeholder")}
                required
              />
            </div>
            <textarea
              rows="4"
              name="description"
              placeholder={t("contact_form_message_placeholder")}
              required
            />
            <button
              type="submit"
              className={`contact-submit contact-submit--${status}`}
              disabled={status === "loading" || status === "success"}
            >
              {status === "idle" && (
                <span className="contact-submit-inner">
                  <span className="contact-submit-text">{t("contact_form_submit")}</span>
                </span>
              )}

              {status === "loading" && (
                <span className="contact-submit-inner">
                  <span className="contact-spinner" />
                  <span className="contact-submit-text">{t("contact_form_submit_loading")}</span>
                </span>
              )}

              {status === "success" && (
                <span className="contact-submit-inner">
                  <span className="contact-check">✓</span>
                  <span className="contact-submit-text">
                    {t("contact_form_submit_success")}
                  </span>
                </span>
              )}
            </button>
            {status === "error" && (
              <p className="contact-form-error" role="alert">
                {t("contact_form_submit_error")}
              </p>
            )}
          </form>
        </div>

        <div className="metal-card contact-links">
          <h3>{t("contact_quick_title")}</h3>
          <div className="contact-icons">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="contact-icon"
              >
                <span className="contact-icon-orb" />
                <span className="contact-icon-label">{link.label}</span>
              </a>
            ))}
          </div>
          <div className="contact-note">
            <span>{t("contact_note_label")}</span>
            <strong> {t("contact_note_value")}</strong>
          </div>
        </div>
      </div>
    </VariantSection>
  );
}
