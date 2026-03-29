import { motion } from "framer-motion";
import {
  Heart,
  Flame,
  MessageCircle,
  Bookmark,
  Users,
  Camera,
} from "lucide-react";
import {
  createHeroBubbleMotion,
  heroPhotoFrameMotion,
  heroSectionVariants,
} from "../lib/animations";
import { scrollToSection } from "../lib/navigation";

const socialElements = [
  { type: "like", delay: 0.3, Icon: Heart, text: "+2.4K" },
  { type: "comment", delay: 0.5, Icon: MessageCircle, text: "156" },
  { type: "story", delay: 0.7, Icon: Camera, text: "Story" },
  { type: "follower", delay: 0.9, Icon: Users, text: "+12K" },
  { type: "fire", delay: 1.1, Icon: Flame, text: "Hot" },
  { type: "save", delay: 1.3, Icon: Bookmark, text: "89" },
];

export default function Hero({ t }) {
  const MotionSection = motion.section;
  const MotionDiv = motion.div;

  return (
    <MotionSection
      className="brndz-hero"
      id="hero"
      variants={heroSectionVariants}
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
          <MotionDiv className="hero-photo-frame" {...heroPhotoFrameMotion}>
            <div className="hero-photo-inner">
              <div className="hero-photo-gradient"></div>
              <div className="hero-photo-placeholder">
                <img src="/flowers/flower1.PNG" alt="" />
              </div>
            </div>

            <div className="hero-photo-ring"></div>
          </MotionDiv>

          {/* Floating Social Elements */}
          {socialElements.map((el, i) => {
            const Icon = el.Icon;
            return (
              <MotionDiv
                key={i}
                className={`hero-social-bubble ${el.type}`}
                aria-hidden="true"
                {...createHeroBubbleMotion(el.delay)}
              >
                <span className="bubble-icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <span className="bubble-text">{el.text}</span>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
