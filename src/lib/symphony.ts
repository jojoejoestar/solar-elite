import type { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, MOTION_EASE, SCROLL_START, ScrollTrigger as ST } from "./gsap";
import { scopeQuery, setMotionVisible, STAGGER } from "./motion";

export const SYMPHONY = {
  start: {
    section: SCROLL_START.default,
    early: SCROLL_START.early,
    late: SCROLL_START.late,
    scrub: { start: "top 76%", end: "top 36%" },
    item: "top 88%",
  },
  duration: {
    heading: 0.9,
    item: 0.78,
    panel: 0.95,
    shell: 0.85,
  },
  stagger: {
    tight: STAGGER.tight,
    normal: STAGGER.normal,
    wide: STAGGER.wide,
    grid: 0.42,
  },
  ease: {
    entrance: MOTION_EASE.entrance,
    item: "back.out(1.12)",
    panel: "back.out(1.15)",
    scrub: "none",
  },
  from: {
    heading: { autoAlpha: 0, y: 40 },
    item: { autoAlpha: 0, y: 44, scale: 0.96 },
    itemSoft: { autoAlpha: 0, y: 32 },
    panel: { autoAlpha: 0, y: 36, scale: 0.97 },
    shell: { autoAlpha: 0, y: 40, scale: 0.97 },
    aside: { autoAlpha: 0, x: -28 },
    form: { autoAlpha: 0, x: 32 },
    prestige: { autoAlpha: 0, y: 24 },
  },
} as const;

export type SymphonyPreset =
  | "entrance"
  | "grid"
  | "scrub"
  | "alternating"
  | "split-faq"
  | "split-cta"
  | "panel"
  | "footer";

export type SymphonySelectors = {
  heading: string;
  items: string;
  panel: string;
  results: string;
  aside: string;
  shell: string;
  copy: string;
  form: string;
  prestige: string;
  columns: string;
  bottom: string;
};

const DEFAULT_SELECTORS: SymphonySelectors = {
  heading: '[data-symphony="heading"]',
  items: '[data-symphony="item"]',
  panel: '[data-symphony="panel"]',
  results: '[data-symphony="result"]',
  aside: '[data-symphony="aside"]',
  shell: '[data-symphony="shell"]',
  copy: '[data-symphony="copy"]',
  form: '[data-symphony="form"]',
  prestige: '[data-symphony="prestige"]',
  columns: '[data-symphony="col"]',
  bottom: '[data-symphony="bottom"]',
};

type ScrollOpts = {
  start?: string;
  end?: string;
  once?: boolean;
  scrub?: number | false;
};

function scrollTriggerVars(
  trigger: Element | string,
  opts: ScrollOpts = {},
): ScrollTrigger.Vars {
  const { start = SYMPHONY.start.section, end, once = true, scrub = false } = opts;
  return scrub
    ? {
        trigger,
        start: start ?? SYMPHONY.start.scrub.start,
        end: end ?? SYMPHONY.start.scrub.end,
        scrub,
        invalidateOnRefresh: true,
      }
    : { trigger, start, once, invalidateOnRefresh: true };
}

function revealPair(
  targets: gsap.TweenTarget,
  from: gsap.TweenVars,
  to: gsap.TweenVars,
  position?: gsap.Position,
  timeline?: gsap.core.Timeline,
) {
  const tween = { from, to: { immediateRender: false, ...to } };
  if (timeline) return timeline.fromTo(targets, tween.from, tween.to, position);
  return gsap.fromTo(targets, tween.from, tween.to);
}

export function runSectionSymphony(
  root: HTMLElement,
  preset: SymphonyPreset,
  selectors: Partial<SymphonySelectors> = {},
  extra?: (q: ReturnType<typeof scopeQuery>, tl: gsap.core.Timeline) => void,
) {
  const q = scopeQuery(root);
  const sel = { ...DEFAULT_SELECTORS, ...selectors };

  switch (preset) {
    case "entrance": {
      const target = q(sel.heading)[0] ?? root;
      revealPair(
        target,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: SYMPHONY.ease.entrance,
          scrollTrigger: scrollTriggerVars(root, { start: SYMPHONY.start.early }),
        },
      );
      break;
    }

    case "grid": {
      const tl = gsap.timeline({
        scrollTrigger: scrollTriggerVars(root),
        defaults: { immediateRender: false },
      });
      const heading = q(sel.heading)[0];
      const items = q(sel.items);
      if (heading) {
        revealPair(heading, SYMPHONY.from.heading, { autoAlpha: 1, y: 0, duration: SYMPHONY.duration.heading, ease: SYMPHONY.ease.entrance }, undefined, tl);
      }
      if (items.length) {
        revealPair(
          items,
          SYMPHONY.from.item,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: SYMPHONY.duration.item,
            stagger: { amount: SYMPHONY.stagger.grid, from: "start" },
            ease: SYMPHONY.ease.item,
          },
          heading ? 0.14 : 0,
          tl,
        );
      }
      extra?.(q, tl);
      break;
    }

    case "scrub": {
      const tl = gsap.timeline({
        scrollTrigger: scrollTriggerVars(root, { scrub: 0.85 }),
        defaults: { ease: SYMPHONY.ease.scrub, immediateRender: false },
      });
      const heading = q(sel.heading)[0];
      const items = q(sel.items);
      if (heading) {
        revealPair(heading, { ...SYMPHONY.from.heading, y: 48 }, { autoAlpha: 1, y: 0, duration: 1 }, undefined, tl);
      }
      if (items.length) {
        revealPair(
          items,
          { ...SYMPHONY.from.item, y: 52 },
          { autoAlpha: 1, y: 0, scale: 1, duration: 1, stagger: SYMPHONY.stagger.wide },
          0.14,
          tl,
        );
      }
      extra?.(q, tl);
      break;
    }

    case "alternating": {
      const heading = q(sel.heading)[0];
      if (heading) {
        revealPair(
          heading,
          SYMPHONY.from.heading,
          {
            autoAlpha: 1,
            y: 0,
            duration: SYMPHONY.duration.heading,
            ease: SYMPHONY.ease.entrance,
            scrollTrigger: scrollTriggerVars(root),
          },
        );
      }
      q(sel.items).forEach((card, i) => {
        const fromX = i % 2 === 0 ? -44 : 44;
        revealPair(
          card,
          { autoAlpha: 0, x: fromX, y: 32 },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            duration: 0.92,
            ease: SYMPHONY.ease.entrance,
            scrollTrigger: scrollTriggerVars(card, { start: SYMPHONY.start.item }),
          },
        );
      });
      extra?.(q, gsap.timeline());
      break;
    }

    case "split-faq": {
      const tl = gsap.timeline({
        scrollTrigger: scrollTriggerVars(root, { start: "top 82%" }),
        defaults: { immediateRender: false },
      });
      const heading = q(sel.heading)[0];
      const aside = q(sel.aside)[0];
      const items = q(sel.items);
      if (heading) {
        revealPair(heading, SYMPHONY.from.heading, { autoAlpha: 1, y: 0, duration: 0.82, ease: SYMPHONY.ease.entrance }, undefined, tl);
      }
      if (aside) {
        revealPair(aside, SYMPHONY.from.aside, { autoAlpha: 1, x: 0, duration: 0.78, ease: SYMPHONY.ease.entrance }, 0.1, tl);
      }
      if (items.length) {
        revealPair(
          items,
          SYMPHONY.from.itemSoft,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.62,
            stagger: SYMPHONY.stagger.tight,
            ease: SYMPHONY.ease.entrance,
          },
          0.18,
          tl,
        );
      }
      extra?.(q, tl);
      break;
    }

    case "split-cta": {
      const tl = gsap.timeline({
        scrollTrigger: scrollTriggerVars(root, { start: "top 82%" }),
        defaults: { immediateRender: false },
      });
      const shell = q(sel.shell)[0];
      const copy = q(sel.copy)[0];
      const form = q(sel.form)[0];
      if (shell) {
        revealPair(shell, SYMPHONY.from.shell, { autoAlpha: 1, y: 0, scale: 1, duration: SYMPHONY.duration.shell, ease: SYMPHONY.ease.panel }, undefined, tl);
      }
      if (copy) {
        revealPair(copy, SYMPHONY.from.aside, { autoAlpha: 1, x: 0, duration: 0.85, ease: SYMPHONY.ease.entrance }, 0.14, tl);
      }
      if (form) {
        revealPair(form, SYMPHONY.from.form, { autoAlpha: 1, x: 0, duration: 0.85, ease: SYMPHONY.ease.entrance }, 0.22, tl);
      }
      extra?.(q, tl);
      break;
    }

    case "panel": {
      const panel = q(sel.panel)[0] ?? root;
      const tl = gsap.timeline({
        scrollTrigger: scrollTriggerVars(panel, { start: "top 82%" }),
        defaults: { ease: SYMPHONY.ease.entrance, immediateRender: false },
      });
      const heading = q(sel.heading)[0];
      if (heading) {
        revealPair(heading, SYMPHONY.from.heading, { autoAlpha: 1, y: 0, duration: 0.82 }, undefined, tl);
      }
      if (panel) {
        revealPair(panel, SYMPHONY.from.panel, { autoAlpha: 1, y: 0, scale: 1, duration: SYMPHONY.duration.panel, ease: SYMPHONY.ease.panel }, 0.12, tl);
      }
      const results = q(sel.results);
      if (results.length) {
        revealPair(
          results,
          SYMPHONY.from.itemSoft,
          { autoAlpha: 1, y: 0, duration: 0.65, stagger: SYMPHONY.stagger.normal },
          0.32,
          tl,
        );
      }
      extra?.(q, tl);
      break;
    }

    case "footer": {
      const tl = gsap.timeline({
        scrollTrigger: scrollTriggerVars(root, { start: "top 92%" }),
        defaults: { immediateRender: false },
      });
      const prestige = q(sel.prestige)[0];
      const cols = q(sel.columns);
      const bottom = q(sel.bottom)[0];
      if (prestige) {
        revealPair(prestige, SYMPHONY.from.prestige, { autoAlpha: 1, y: 0, duration: 0.72, ease: SYMPHONY.ease.entrance }, undefined, tl);
      }
      if (cols.length) {
        revealPair(
          cols,
          SYMPHONY.from.itemSoft,
          { autoAlpha: 1, y: 0, duration: 0.74, stagger: SYMPHONY.stagger.normal, ease: SYMPHONY.ease.entrance },
          0.1,
          tl,
        );
      }
      if (bottom) {
        revealPair(bottom, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.55 }, 0.28, tl);
      }
      extra?.(q, tl);
      break;
    }
  }
}

export function resetSymphonyVisible(root: HTMLElement) {
  setMotionVisible(root, "[data-symphony]");
}

export function animateSectionDividers() {
  gsap.utils.toArray<HTMLElement>(".section-divider").forEach((divider) => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: divider, start: "top 94%", once: true },
      defaults: { ease: SYMPHONY.ease.entrance, immediateRender: false },
    });

    tl.fromTo(
      divider.querySelectorAll(".section-divider-beam"),
      { autoAlpha: 0, scaleX: 0 },
      { autoAlpha: 1, scaleX: 1, duration: 0.85, stagger: 0.06 },
    )
      .fromTo(
        divider.querySelector(".section-divider-core"),
        { autoAlpha: 0, scale: 0 },
        { autoAlpha: 1, scale: 1, duration: 0.55, ease: "back.out(2)" },
        0.08,
      )
      .fromTo(
        divider.querySelectorAll(".section-divider-tick"),
        { autoAlpha: 0, scaleY: 0 },
        { autoAlpha: 1, scaleY: 1, duration: 0.45, stagger: 0.03 },
        0.12,
      );
  });
}

export function scheduleScrollRefresh() {
  const refresh = () => ST.refresh();
  if (document.readyState === "complete") {
    requestAnimationFrame(refresh);
  } else {
    window.addEventListener("load", refresh, { once: true });
  }
  document.fonts?.ready?.then(() => requestAnimationFrame(refresh));
}
