function joinClassNames(values) {
  return values.filter(Boolean).join(" ");
}

export default function DecorativeFlower({
  imageSrc,
  sizeClass,
  delayClass,
  className,
  style,
  alt = "",
}) {
  return (
    <div
      className={joinClassNames([
        "decorative-flower",
        sizeClass,
        delayClass,
        className,
      ])}
      style={style}
    >
      <img src={imageSrc} alt={alt} />
    </div>
  );
}
