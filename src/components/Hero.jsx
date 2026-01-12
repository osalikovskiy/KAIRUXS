import { motion } from "framer-motion";
import {
  Heart,
  Flame,
  MessageCircle,
  Bookmark,
  Users,
  Camera,
} from "lucide-react";

export default function Hero({ t }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  // Lucide icons instead of emoji
  const socialElements = [
    { type: "like", delay: 0.3, Icon: Heart, text: "+2.4K" },
    { type: "comment", delay: 0.5, Icon: MessageCircle, text: "156" },
    { type: "story", delay: 0.7, Icon: Camera, text: "Story" },
    { type: "follower", delay: 0.9, Icon: Users, text: "+12K" },
    { type: "fire", delay: 1.1, Icon: Flame, text: "Hot" },
    { type: "save", delay: 1.3, Icon: Bookmark, text: "89" },
  ];

  return (
    <motion.section
      className="brndz-hero"
      id="hero"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-overlay" />
      <div className="hero-inner">
        <div className="hero-text">
          <span className="hero-kicker">{t("hero_kicker")}</span>
          <h1>
            {t("hero_title_line1")}
            <br />
            {t("hero_title_line2")}
            <br />
            {t("hero_title_line3")}
          </h1>
          <p className="hero-sub">{t("hero_sub")}</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollToSection("services")}>
              {t("hero_btn_primary")}
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection("services")}>
              {t("hero_btn_secondary")}
            </button>
          </div>
        </div>

        {/* Premium Visual with Social Elements */}
        <div className="hero-visual">
          {/* Main Photo Frame */}
          <motion.div
            className="hero-photo-frame"
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="hero-photo-inner">
              <div className="hero-photo-gradient"></div>
              <div className="hero-photo-placeholder">
                <img src="/flowers/flower1.PNG" alt="Flower" />
              </div>
            </div>

            <div className="hero-photo-ring"></div>
          </motion.div>

          {/* Floating Social Elements */}
          {socialElements.map((el, i) => {
            const Icon = el.Icon;
            return (
              <motion.div
                key={i}
                className={`hero-social-bubble ${el.type}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: el.delay,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                <span className="bubble-icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <span className="bubble-text">{el.text}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}