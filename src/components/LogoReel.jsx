export default function LogoReel({ logos = [] }) {
  const duplicated = [...logos, ...logos];

  return (
    <section className="border-y border-line bg-white/80 py-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-muted/80">
          Trusted brands (placeholder slots)
        </p>
      </div>

      <div className="logo-marquee mt-5" aria-label="Trusted brands marquee">
        <div className="logo-track">
          {duplicated.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="logo-pill">
              {logo.src ? (
                <img src={logo.src} alt={logo.name} className="h-8 w-auto max-w-[120px] object-contain" />
              ) : (
                <span>{logo.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
