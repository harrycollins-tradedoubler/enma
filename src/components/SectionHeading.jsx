export default function SectionHeading({ eyebrow, title, body, className = '' }) {
  return (
    <div className={`reveal max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted/90">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.03] tracking-tight text-ink sm:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-lg leading-relaxed text-muted">{body}</p> : null}
    </div>
  );
}
