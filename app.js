const header = document.querySelector('.site-header');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const revealTargets = document.querySelectorAll('[data-reveal]');
const faqButtons = document.querySelectorAll('[data-accordion-button]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const syncHeaderState = () => {
  if (!header) {
    return;
  }

  header.classList.toggle('is-scrolled', window.scrollY > 12);
};

const closeMobileMenu = () => {
  if (!mobileMenu || !menuToggle) {
    return;
  }

  mobileMenu.classList.remove('is-open');
  mobileMenu.classList.add('hidden');
  menuToggle.setAttribute('aria-expanded', 'false');
};

const openMobileMenu = () => {
  if (!mobileMenu || !menuToggle) {
    return;
  }

  mobileMenu.classList.remove('hidden');
  requestAnimationFrame(() => {
    mobileMenu.classList.add('is-open');
  });
  menuToggle.setAttribute('aria-expanded', 'true');
};

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';

    if (expanded) {
      closeMobileMenu();
      return;
    }

    openMobileMenu();
  });

  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      closeMobileMenu();
    }
  });
}

window.addEventListener('scroll', syncHeaderState, { passive: true });
syncHeaderState();

if (!reduceMotion && revealTargets.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  revealTargets.forEach((target, index) => {
    target.style.transitionDelay = `${index * 45}ms`;
    revealObserver.observe(target);
  });
} else {
  revealTargets.forEach((target) => target.classList.add('in'));
}

const closeAccordionItem = (button) => {
  const panel = button.nextElementSibling;
  button.setAttribute('aria-expanded', 'false');
  panel.style.maxHeight = '0px';
  panel.classList.remove('is-open');
  button.parentElement?.classList.remove('is-open');
};

const openAccordionItem = (button) => {
  const panel = button.nextElementSibling;
  button.setAttribute('aria-expanded', 'true');
  panel.style.maxHeight = `${panel.scrollHeight}px`;
  panel.classList.add('is-open');
  button.parentElement?.classList.add('is-open');
};

if (faqButtons.length) {
  faqButtons.forEach((button, index) => {
    if (index === 0) {
      openAccordionItem(button);
    } else {
      closeAccordionItem(button);
    }

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      faqButtons.forEach((otherButton) => {
        if (otherButton !== button) {
          closeAccordionItem(otherButton);
        }
      });

      if (isExpanded) {
        closeAccordionItem(button);
      } else {
        openAccordionItem(button);
      }
    });
  });
}
