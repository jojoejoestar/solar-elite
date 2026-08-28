export const SITE = {
  name: "Solar Elite",
  legalName: "SolarElite Energia",
  url: "https://solarelite.com.br",
  locale: "pt_BR",
  tagline: "Energia solar como investimento",
  description:
    "Engenharia fotovoltaica de alta performance. Independência energética, proteção contra inflação tarifária e valorização do imóvel.",
} as const;

export const CONTACT = {
  address: "Av. Paulista, 1000 — São Paulo, SP",
  phone: "(11) 99999-0000",
  phoneHref: "tel:+5511999990000",
  email: "contato@solarelite.com.br",
  hours: "Seg–Sex: 08h às 18h",
  responseTime: "2h úteis",
} as const;

export const SOCIAL = [
  { label: "Instagram", href: "https://instagram.com/solarelite" },
  { label: "Facebook", href: "https://facebook.com/solarelite" },
  { label: "LinkedIn", href: "https://linkedin.com/company/solarelite" },
] as const;

export const NAV_LINKS = [
  { label: "Tecnologia", href: "#tecnologia" },
  { label: "Simulador", href: "#calculadora" },
  { label: "Projetos", href: "#projetos" },
  { label: "Garantias", href: "#garantias" },
] as const;

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
] as const;

export const METRICS = {
  projects: {
    value: "500+",
    label: "Projetos",
    detail: "Residenciais e comerciais",
    footer: "Projetos entregues",
  },
  capacity: {
    value: "12 MW",
    label: "Instalados",
    detail: "Capacidade em operação",
    footer: "Capacidade instalada",
  },
  satisfaction: {
    value: "98%",
    label: "Satisfação",
    detail: "NPS médio dos clientes",
    footer: "Satisfação dos clientes",
  },
  warranty: {
    value: "25 anos",
    footer: "Garantia de performance",
  },
} as const;

export const CERTIFICATIONS = ["Tier 1", "ANEEL", "ART Inclusa", "Suporte Vitalício"] as const;

export const PRESTIGE_STATS = [
  { value: METRICS.projects.value, label: METRICS.projects.footer },
  { value: METRICS.capacity.value, label: METRICS.capacity.footer },
  { value: METRICS.warranty.value, label: METRICS.warranty.footer },
  { value: METRICS.satisfaction.value, label: METRICS.satisfaction.footer },
] as const;
