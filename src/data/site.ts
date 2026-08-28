export const SITE = {
  name: "Solar Elite",
  legalName: "SolarElite Energia",
  url: "https://solarelite.com.br",
} as const;

export const CONTACT = {
  address: "Av. Paulista, 1000 — São Paulo, SP",
  phone: "(11) 99999-0000",
  phoneHref: "tel:+5511999990000",
  email: "contato@solarelite.com.br",
  hours: "Seg–Sex: 08h às 18h",
  responseTime: "2h úteis",
  responseTimeEn: "2 business hours",
} as const;

export const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com/solarelite" },
  { label: "Facebook", href: "https://facebook.com/solarelite" },
  { label: "LinkedIn", href: "https://linkedin.com/company/solarelite" },
] as const;

export const METRICS = {
  projects: { value: "500+" },
  capacity: { value: "12 MW" },
  satisfaction: { value: "98%" },
  warranty: { value: "25 anos" },
} as const;
