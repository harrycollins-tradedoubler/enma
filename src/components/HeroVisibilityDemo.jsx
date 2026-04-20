import { useEffect, useRef, useState } from 'react';

const QUERY_SEQUENCE = [
  'How often does our brand appear in UK AI answers for high-intent category prompts?',
  'Which publishers and citations are driving our share of voice across ChatGPT, Gemini, and Perplexity?',
  'Where are competitors outranking us by prompt cluster, persona, and market?',
  'What actions should we prioritise this week to improve AI visibility in Germany and France?'
];

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return reducedMotion;
}

export default function HeroVisibilityDemo() {
  const [typedText, setTypedText] = useState(QUERY_SEQUENCE[0].slice(0, 1));
  const timersRef = useRef([]);
  const textViewportRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!textViewportRef.current) return;
    textViewportRef.current.scrollLeft = textViewportRef.current.scrollWidth;
  }, [typedText]);

  useEffect(() => {
    const clearTimers = () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
      timersRef.current = [];
    };

    const schedule = (delay, callback) => {
      const timer = window.setTimeout(callback, delay);
      timersRef.current.push(timer);
    };

    if (reducedMotion) {
      setTypedText(QUERY_SEQUENCE[0]);
      return clearTimers;
    }

    const runCycle = (index) => {
      const prompt = QUERY_SEQUENCE[index];
      setTypedText(prompt.slice(0, 1));

      let elapsed = 140;
      [...prompt].slice(1).forEach((char, charIndex) => {
        const delay = /[,.?]/.test(char) ? 100 : /\s/.test(char) ? 36 : 28;
        elapsed += delay;
        schedule(elapsed, () => {
          setTypedText(prompt.slice(0, charIndex + 2));
        });
      });

      const nextIndex = (index + 1) % QUERY_SEQUENCE.length;
      schedule(elapsed + 1550, () => runCycle(nextIndex));
    };

    runCycle(0);
    return clearTimers;
  }, [reducedMotion]);

  return (
    <section className="query-demo" aria-label="Animated AI visibility query demo">
      <div className="query-command" role="search" aria-label="Visibility query command bar">
        <span className="query-command-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
            <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>

        <div className="query-command-text" aria-live="polite" ref={textViewportRef}>
          <span className="query-command-stream">
            <span>{typedText}</span>
            <span className="query-demo-caret" aria-hidden="true" />
          </span>
        </div>

        <button
          className="query-command-action"
          type="button"
          aria-label="Ask query"
        >
          Ask
        </button>
      </div>
      <span className="sr-only">
        Animated sequence of AI visibility queries for ChatGPT, Gemini, and Perplexity.
      </span>
    </section>
  );
}
