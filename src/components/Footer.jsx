
import DecorativeFlower from "./ui/DecorativeFlower";

export default function Footer({ t }) {
  return (
    <footer className="brndz-footer footer-shell">
      <DecorativeFlower
        imageSrc="/flowers/flower5.PNG"
        sizeClass="flower-medium"
        delayClass="flower-delay-3"
        style={{ top: "-40px", right: "10%", opacity: "0.25" }}
      />

      <span>© {new Date().getFullYear()} KAIRUXS - SMM Specialist.</span>
      <span>{t("footer_right")}</span>
    </footer>
  );
}
