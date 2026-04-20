export default function CapabilityCard({ title, description, icon, delay }) {
  return (
    <article className="capability-card reveal" style={{ transitionDelay: `${delay}ms` }}>
      <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-accent">
        {icon}
      </div>
      <h3 className="font-display text-2xl font-bold leading-tight text-ink">{title}</h3>
      <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
    </article>
  );
}
