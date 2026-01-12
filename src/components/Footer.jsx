

export default function Footer({t}) {
    return (
        <footer className="brndz-footer" style={{ position: 'relative' }}>
            {/* Decorative Flower */}
            <div className="decorative-flower flower-medium flower-delay-3" style={{ top: '-40px', right: '10%', opacity: '0.25' }}>
                <img src="/flowers/flower5.PNG" alt="" />
            </div>

            <span>
                © {new Date().getFullYear()} KAIRUXS - SMM Specialist.
            </span>
            <span>{t("footer_right")}</span>
        </footer>
    )
}