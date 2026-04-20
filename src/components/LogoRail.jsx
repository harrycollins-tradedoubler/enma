const DEFAULT_ROW_TEXT = 'Trusted by 30K+ brands and 1M+ partners worldwide';

export default function LogoRail({
  logos = [],
  eyebrow = DEFAULT_ROW_TEXT,
  mode = 'marquee'
}) {
  const marquee = mode === 'marquee';
  const staticMode = !marquee;

  const renderLogoItem = (logo, index, keyPrefix = 'logo') => {
    const height = staticMode ? 34 : 32;
    const scale = logo.visualWeight ?? 1;

    return (
      <li key={`${keyPrefix}-${logo.alt || logo.name || 'logo'}-${index}`} className="logo-rail-item">
        {logo.src ? (
          <img
            src={logo.src}
            alt={logo.alt || logo.name || 'Partner logo'}
            loading="lazy"
            className="logo-rail-image"
            style={{ height: `${height}px`, width: 'auto', transform: `scale(${scale})` }}
          />
        ) : (
          <span className="logo-rail-fallback">{logo.name || 'Logo'}</span>
        )}
      </li>
    );
  };

  return (
    <section className={`logo-rail-section ${marquee ? 'is-marquee' : 'is-static'}`} aria-label="Trusted by logos">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="logo-rail-eyebrow">{eyebrow}</p>
      </div>

      <div className={`logo-rail-viewport ${marquee ? 'is-marquee' : 'is-static'}`}>
        <div className={`logo-rail-track ${marquee ? 'is-marquee' : 'is-static'}`}>
          <ul className="logo-rail-set" role="list">
            {logos.map((logo, index) => renderLogoItem(logo, index, 'set-a'))}
          </ul>
          {marquee ? (
            <ul className="logo-rail-set" role="list" aria-hidden="true">
              {logos.map((logo, index) => renderLogoItem(logo, index, 'set-b'))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
