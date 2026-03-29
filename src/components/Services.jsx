import { motion } from "framer-motion";
import DecorativeFlower from "./ui/DecorativeFlower";
import SectionHeader from "./ui/SectionHeader";
import { RevealSection } from "./ui/AnimatedSection";
import { createStaggerRevealProps, sectionRevealProps } from "../lib/animations";
const MotionDiv = motion.div;

export default function Services({ t }) {

  const services = [
    { key: "services_brand", titleKey: "services_brand_title", descKey: "services_brand_desc" },
    { key: "services_digital", titleKey: "services_digital_title", descKey: "services_digital_desc" },
    { key: "services_smm", titleKey: "services_smm_title", descKey: "services_smm_desc" },
    { key: "services_strategy", titleKey: "services_strategy_title", descKey: "services_strategy_desc" },
  ];

  return (
    <RevealSection id="services" revealProps={sectionRevealProps}>
      {/* Decorative Flowers */}
      <DecorativeFlower
        imageSrc="/flowers/flower3.PNG"
        sizeClass="flower-small"
        delayClass="flower-delay-2"
        style={{ top: "5%", right: "10%" }}
      />
      <DecorativeFlower
        imageSrc="/flowers/flower7.PNG"
        sizeClass="flower-medium"
        delayClass="flower-delay-4"
        style={{ bottom: "10%", left: "5%" }}
      />

      <SectionHeader
        title={t("section_services_title")}
        description={t("section_services_sub")}
      />

      <div className="grid grid-4">
        {services.map((service, index) => (
          <MotionDiv
            key={service.key}
            className="metal-card service-card"
            {...createStaggerRevealProps(index)}
          >
            <div className="metal-pill" />
            <h3>{t(service.titleKey)}</h3>
            <p>{t(service.descKey)}</p>
          </MotionDiv>
        ))}
      </div>
    </RevealSection>
  );
}
