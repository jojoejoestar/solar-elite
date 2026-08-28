import { images } from "@/lib/images";

export const TECH_LAYOUT = [
  {
    span: "md:col-span-2",
    image: images.techPanel,
    imagePosition: "center 60%",
    accent: "primary" as const,
  },
  {
    span: "",
    image: null,
    imagePosition: undefined,
    accent: "secondary" as const,
  },
  {
    span: "",
    image: null,
    imagePosition: undefined,
    accent: "primary" as const,
  },
  {
    span: "md:col-span-2",
    image: images.techInstallation,
    imagePosition: "center 30%",
    accent: "secondary" as const,
  },
];

export const TESTIMONIAL_MEDIA = [
  { avatar: images.avatars.ricardo, project: images.projects.ricardo },
  { avatar: images.avatars.fernanda, project: images.projects.fernanda },
  { avatar: images.avatars.paulo, project: images.projects.paulo },
];
