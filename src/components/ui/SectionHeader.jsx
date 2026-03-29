function joinClassNames(values) {
  return values.filter(Boolean).join(" ");
}

export default function SectionHeader({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
}) {
  return (
    <div className={joinClassNames(["section-header", className])}>
      <h2 className={titleClassName}>{title}</h2>
      <p className={descriptionClassName}>{description}</p>
    </div>
  );
}
