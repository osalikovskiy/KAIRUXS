import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Services({ t, sectionVariants, cardVariants }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const services = [
    { key: "services_brand", titleKey: "services_brand_title", descKey: "services_brand_desc" },
    { key: "services_digital", titleKey: "services_digital_title", descKey: "services_digital_desc" },
    { key: "services_smm", titleKey: "services_smm_title", descKey: "services_smm_desc" },
    { key: "services_strategy", titleKey: "services_strategy_title", descKey: "services_strategy_desc" },
  ];

  return (
    <motion.section
      className="brndz-section"
      id="services"
      initial={{ opacity: 0, visibility: "hidden" }}
      animate={isMounted ? { opacity: 1, visibility: "visible" } : { opacity: 0, visibility: "hidden" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      style={{ position: 'relative' }}
    >
      {/* Decorative Flowers */}
      <div className="decorative-flower flower-small flower-delay-2" style={{ top: '5%', right: '10%' }}>
        <img src="/flowers/flower3.PNG" alt="" />
      </div>
      <div className="decorative-flower flower-medium flower-delay-4" style={{ bottom: '10%', left: '5%' }}>
        <img src="/flowers/flower7.PNG" alt="" />
      </div>

      <div className="section-header">
        <h2>{t("section_services_title")}</h2>
        <p>{t("section_services_sub")}</p>
      </div>

      <div className="grid grid-4">
        {services.map((service, index) => (
          <motion.div
            key={service.key}
            className="metal-card service-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.3 + (index * 0.08)
            }}
          >
            <div className="metal-pill" />
            <h3>{t(service.titleKey)}</h3>
            <p>{t(service.descKey)}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}