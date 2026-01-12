import { motion } from "framer-motion";

export default function Portfolio({ t, sectionVariants, cardVariants }) {

    const portfolioItems = [
  {
    key: "portfolio_item1",
    titleKey: "portfolio_item1_title",
    tagKey: "portfolio_item1_tag",
  },
  {
    key: "portfolio_item2",
    titleKey: "portfolio_item2_title",
    tagKey: "portfolio_item2_tag",
  },
  {
    key: "portfolio_item3",
    titleKey: "portfolio_item3_title",
    tagKey: "portfolio_item3_tag",
  },
  {
    key: "portfolio_item4",
    titleKey: "portfolio_item4_title",
    tagKey: "portfolio_item4_tag",
  },
];

    return (
        <motion.section
            className="brndz-section"
            id="portfolio"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="section-header">
              <h2>{t("section_portfolio_title")}</h2>
              <p>{t("section_portfolio_sub")}</p>
            </div>
            <div className="grid grid-4">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={item.key}
                  className="metal-card portfolio-card"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={index}
                >
                  <div className="portfolio-frame">
                    {/* 
                    Заміни фон на реальні 3D-рендери / liquid chrome / манекени:
                    <img src="..." alt="..." />
                  */}
                    <div className="portfolio-gloss" />
                    <div className="portfolio-metal-reflection" />
                  </div>
                  <div className="portfolio-info">
                    <span>{t(item.tagKey)}</span>
                    <h3>{t(item.titleKey)}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
    );
}