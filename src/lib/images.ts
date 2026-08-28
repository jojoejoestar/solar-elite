export const brandLogo = {
  src: "/images/logosolarelite.webp",
  width: 234,
  height: 249,
} as const;

const img = (path: string, width: number, height: number) =>
  ({ src: path, width, height }) as const;

export const images = {
  hero: img("/images/hero-solar.jpg", 1920, 1080),
  techPanel: img("/images/tech-panel-detail.jpg", 1200, 800),
  techInstallation: img("/images/tech-installation.jpg", 1200, 800),
  avatars: {
    ricardo: img("/images/avatar-ricardo.jpg", 96, 96),
    fernanda: img("/images/avatar-fernanda.jpg", 96, 96),
    paulo: img("/images/avatar-paulo.jpg", 96, 96),
  },
  projects: {
    ricardo: img("/images/project-ricardo.jpg", 1200, 800),
    fernanda: img("/images/project-fernanda.jpg", 1200, 800),
    paulo: img("/images/project-paulo.jpg", 1200, 800),
  },
} as const;
