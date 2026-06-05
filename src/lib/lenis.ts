import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

export function getLenis() {
  return lenisInstance;
}

export function scrollToAnchor(href: string, offset = -80) {
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
