import { motion } from "framer-motion";

export default function Services({ t, sectionVariants, cardVariants }) {
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
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
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
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
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