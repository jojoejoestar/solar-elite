import heroSolar from "@/assets/hero-solar.jpg";
import techPanel from "@/assets/tech-panel-detail.jpg";
import techInstallation from "@/assets/tech-installation.jpg";
import avatarRicardo from "@/assets/avatar-ricardo.jpg";
import avatarFernanda from "@/assets/avatar-fernanda.jpg";
import avatarPaulo from "@/assets/avatar-paulo.jpg";
import projectRicardo from "@/assets/project-ricardo.jpg";
import projectFernanda from "@/assets/project-fernanda.jpg";
import projectPaulo from "@/assets/project-paulo.jpg";

/** Official mark — WebP served from /public/images */
export const brandLogo = {
  src: "/images/logosolarelite.webp",
  width: 234,
  height: 249,
} as const;

/** Bundled assets from src/assets — same files as github.com/jojoejoestar/solar-elite main */
export const images = {
  hero: heroSolar,
  techPanel,
  techInstallation,
  avatars: {
    ricardo: avatarRicardo,
    fernanda: avatarFernanda,
    paulo: avatarPaulo,
  },
  projects: {
    ricardo: projectRicardo,
    fernanda: projectFernanda,
    paulo: projectPaulo,
  },
} as const;
