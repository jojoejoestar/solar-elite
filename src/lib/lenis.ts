import type Lenis from "lenis";

export const NAV_OFFSET = -88;

let lenisInstance: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

export function getLenis() {
  return lenisInstance;
}

export function scrollToAnchor(href: string, offset = NAV_OFFSET) {
  const id = href.replace(/^#/, "");
  if (!id) {
    lenisInstance?.scrollTo(0);
    return;
  }

  const target = document.getElementById(id);
  if (!target) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
