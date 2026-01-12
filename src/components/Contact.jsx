import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact({ t, sectionVariants }) {
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const FORM_ENDPOINT = "https://formspree.io/f/mlggerzp";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status !== "idle") return;
    setStatus("loading");

    const formData = new FormData(e.target);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      // чуть подержим лоадер, чтобы выглядело приятно
      setTimeout(() => {
        setStatus("success");
      }, 1500);
    } catch (err) {
      console.error(err);
      setStatus("idle");
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
    <motion.section
      className="brndz-section brndz-section-last"
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      style={{ position: 'relative' }}
    >
      {/* Decorative Flowers */}
      <div className="decorative-flower flower-small flower-delay-1" style={{ top: '10%', left: '8%' }}>
        <img src="/flowers/flower8.PNG" alt="" />
      </div>
      <div className="decorative-flower flower-large flower-delay-2" style={{ bottom: '12%', right: '5%' }}>
        <img src="/flowers/flower2.PNG" alt="" />
      </div>

      <div className="section-header">
        <h2>{t("section_contact_title")}</h2>
        <p>{t("section_contact_sub")}</p>
      </div>

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
              name="decsriprion"
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
    </motion.section>
  );
}
