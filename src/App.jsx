import { useEffect } from 'react';
import NavBar from './components/NavBar';
import SectionHeading from './components/SectionHeading';
import LogoRail from './components/LogoRail';
import HeroVisibilityDemo from './components/HeroVisibilityDemo';
import shiftUiPreview from '../assets/emna.png';

const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

const advertiserLogos = [
  { src: withBase('logos/publishers/publisher-8.png'), alt: 'Reach', width: 135, height: 37, visualWeight: 1.04 },
  { src: withBase('logos/publishers/publisher-9.png'), alt: 'Daily Express', width: 135, height: 56, visualWeight: 1.02 },
  { src: withBase('logos/publishers/publisher-10.png'), alt: 'The Times', width: 234, height: 131, visualWeight: 1.18 },
  { src: withBase('logos/publishers/publisher-11.png'), alt: 'The Guardian', width: 233, height: 132, visualWeight: 1.18 },
  { src: withBase('logos/publishers/publisher-12.png'), alt: 'talkSPORT', width: 238, height: 68, visualWeight: 0.92 },
  { src: withBase('logos/publishers/publisher-2.png'), alt: 'Grazia', width: 144, height: 45, visualWeight: 1.06 },
  { src: withBase('logos/publishers/publisher-4.png'), alt: 'Closer', width: 114, height: 33, visualWeight: 1.08 },
  { src: withBase('logos/publishers/publisher-3.png'), alt: 'Future', width: 659, height: 314, visualWeight: 1.3 }
];

const llmLogos = [
  { name: 'ChatGPT', src: withBase('logos/llm/chatgpt.png'), opticalScale: 1.02, baselineShift: 0 },
  { name: 'Gemini', src: withBase('logos/llm/gemini.png'), opticalScale: 1, baselineShift: 1 },
  { name: 'Perplexity', src: withBase('logos/llm/perplexity.png'), opticalScale: 1.2, baselineShift: 0 }
];

export default function App() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll('.reveal');

    if (reduceMotion) {
      targets.forEach((node) => node.classList.add('in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach((target, index) => {
      target.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="top" className="min-h-screen text-ink">
      <div className="noise-overlay" aria-hidden="true" />
      <NavBar />

      <main>
        <section className="relative min-h-[56dvh] overflow-hidden pb-3 pt-4 md:min-h-[60dvh] md:pt-5 lg:min-h-[62dvh] lg:pt-6">
          <div className="section-blob section-blob-hero" aria-hidden="true" />
          <div className="mx-auto flex w-full max-w-7xl items-start justify-center px-4 sm:px-6 lg:px-8">
            <div className="hero-centered reveal text-center">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted/90">AI visibility platform</p>
              <h1 className="mt-4 mx-auto max-w-[10.5ch] font-display text-5xl font-extrabold leading-[0.96] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Own your visibility in AI-generated answers
              </h1>
              <p className="mt-6 mx-auto max-w-[66ch] text-lg leading-relaxed text-muted">
                Emna.ai helps brands track, understand, and actively grow their share of voice in AI-generated answers - by identifying what drives visibility and executing through content and publisher activation.
              </p>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.14em] text-muted/90">
                For platforms like ChatGPT, Gemini, and Perplexity.
              </p>
              <div className="hero-llm-logos" aria-label="Supported AI platforms">
                {llmLogos.map((logo) => (
                  <figure
                    key={logo.name}
                    className="hero-llm-logo"
                    style={{ '--logo-scale': logo.opticalScale, '--logo-shift': `${logo.baselineShift}px` }}
                  >
                    <img src={logo.src} alt={logo.name} loading="lazy" />
                  </figure>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap justify-center gap-4">
                <a href="#final-cta" className="btn-primary">
                  Join the waitlist to our beta product
                </a>
              </div>

              <div className="mt-6 md:mt-7">
                <HeroVisibilityDemo />
              </div>
            </div>
          </div>
        </section>

        <section id="shift" className="shift-section reveal relative overflow-hidden py-12 sm:py-14">
          <div className="shift-layout grid w-full items-center lg:grid-cols-[minmax(340px,560px),1fr]">
            <div className="shift-copy px-4 sm:px-6 lg:pl-12 lg:pr-6">
              <SectionHeading eyebrow="The Shift" title="Your SEO advantage is collapsing" />
              <div className="reveal mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  For decades, brands have competed for visibility across hundreds of positions in search results.
                </p>
                <p>
                  Today, that visibility is being compressed into a handful of AI-generated answers - where only a small number of brands are included.
                </p>
                <p className="font-semibold text-ink">If you're not in the answer, you're not part of the decision.</p>
              </div>
            </div>

            <div className="reveal shift-visual" aria-hidden="true">
              <div className="shift-ui-stage">
                <img src={shiftUiPreview} alt="" className="shift-ui-image" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <div className="reveal">
          <LogoRail
            logos={advertiserLogos}
            mode="static"
            eyebrow="Trusted by 30K+ brands and 1M+ partners worldwide"
          />
        </div>

        <section id="final-cta" className="reveal py-20 sm:py-24">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
            <div className="final-cta">
              <p className="final-cta-eyebrow">Early Access</p>
              <h2 className="final-cta-title">Get early access</h2>
              <p className="final-cta-body">We are onboarding a limited number of brands.</p>

              <form className="final-cta-form" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="waitlist-email" className="sr-only">
                  Work email
                </label>
                <div className="final-cta-input-group">
                  <input
                    id="waitlist-email"
                    type="email"
                    required
                    placeholder="Work email"
                    className="final-cta-input"
                  />
                  <button type="submit" className="final-cta-button">
                    Join waitlist
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="reveal border-t border-line bg-white/70">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="font-display text-2xl font-extrabold tracking-tight">Emna.ai</p>
          <p className="text-sm text-muted">&copy; {new Date().getFullYear()} Emna.ai</p>
          <nav className="flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted" aria-label="Footer navigation">
            <a href="#shift" className="transition-colors hover:text-ink">
              Shift
            </a>
            <a href="#final-cta" className="transition-colors hover:text-ink">
              Access
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

