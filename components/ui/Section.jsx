export default function Section({
  children,
  id,
  className = "",
  containerClass = "",
}) {
  return (
    <section id={id} className={`w-full py-20 px-4 md:px-8 ${className}`}>
      <div className={`max-w-7xl mx-auto ${containerClass}`}>{children}</div>
    </section>
  );
}
