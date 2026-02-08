export default function SectionTitle({
  label,
  title,
  subtitle,
  className = "",
}) {
  return (
    <div
      className={`flex flex-col items-center text-center mb-16 ${className}`}
    >
      {/* Accent Label */}
      <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4 border border-primary/20">
        {label}
      </span>

      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
        {title}
      </h2>

      {/* Optional Description */}
      {subtitle && (
        <p className="text-muted text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Decorative Divider */}
      <div className="w-12 h-1 bg-primary rounded-full mt-8 opacity-50"></div>
    </div>
  );
}
