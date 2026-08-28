import { images } from "@/lib/images";
import { CONTACT, METRICS } from "./site";

export const HERO_METRICS = [
  { id: "projects" as const, ...METRICS.projects },
  { id: "capacity" as const, ...METRICS.capacity },
  { id: "satisfaction" as const, ...METRICS.satisfaction },
];

export const PAIN_STATS = [
  {
    step: "01",
    value: "+72%",
    label: "Aumento tarifário nos últimos 5 anos",
    detail: "A conta só sobe — e você não tem controle sobre isso.",
    accent: "primary" as const,
  },
  {
    step: "02",
    value: "R$ 0",
    label: "Retorno do que você paga à concessionária",
    detail: "Cada real pago é custo, nunca investimento.",
    accent: "primary" as const,
  },
  {
    step: "03",
    value: METRICS.warranty.value,
    label: "De economia com energia solar",
    detail: "Depois do payback, são décadas de energia quase gratuita.",
    accent: "emerald" as const,
  },
];

export const TECH_ITEMS = [
  {
    tag: "Hardware",
    title: "Módulos Tier 1",
    desc: "Máxima eficiência e certificação internacional. Rendimento superior mesmo em dias nublados.",
    spec: "Eficiência > 21%",
    span: "md:col-span-2",
    image: images.techPanel,
    imagePosition: "center 60%",
    accent: "primary" as const,
  },
  {
    tag: "Inversão",
    title: "Microinversores de Ponta",
    desc: "Cada painel opera de forma independente. Mais segurança, mais geração, menos perdas.",
    spec: "Monitoramento individual",
    span: "",
    image: null,
    imagePosition: undefined,
    accent: "secondary" as const,
  },
  {
    tag: "Software",
    title: "Monitoramento 24/7",
    desc: "Geração, economia e performance em tempo real pelo app.",
    spec: "App iOS & Android",
    span: "",
    image: null,
    imagePosition: undefined,
    accent: "primary" as const,
  },
  {
    tag: "Execução",
    title: "Instalação Cirúrgica",
    desc: "Equipe própria especializada. Do projeto ao comissionamento em tempo recorde.",
    spec: "Obra em até 5 dias",
    span: "md:col-span-2",
    image: images.techInstallation,
    imagePosition: "center 30%",
    accent: "secondary" as const,
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Diagnóstico Energético",
    desc: "Análise da conta, perfil de consumo e viabilidade com engenheiro dedicado.",
    detail: "Laudo técnico + simulação de payback em 48h.",
    watermark: "amber" as const,
  },
  {
    step: "02",
    title: "Projeto & Homologação",
    desc: "Dimensionamento, ART, documentação e aprovação na concessionária.",
    detail: "Projeto executivo e homologação sem burocracia para você.",
    watermark: "amber" as const,
  },
  {
    step: "03",
    title: "Instalação Premium",
    desc: "Equipe própria, obra rápida e comissionamento com testes de performance.",
    detail: "Instalação em até 5 dias com checklist de qualidade.",
    watermark: "emerald" as const,
  },
  {
    step: "04",
    title: "Retorno & Monitoramento",
    desc: "App 24/7, suporte vitalício e acompanhamento do payback.",
    detail: "Monitoramento em tempo real e suporte vitalício.",
    watermark: "dual" as const,
  },
];

export const TESTIMONIALS = [
  {
    name: "Ricardo M.",
    role: "Empresário — Usina Comercial 120kWp",
    text: "O retorno veio antes do previsto. Em 3 anos já paguei o sistema e agora é lucro puro. A equipe da SolarElite cuidou de tudo.",
    avatar: images.avatars.ricardo,
    project: images.projects.ricardo,
    stats: [
      { label: "economia", value: "R$ 18.400/mês" },
      { label: "payback", value: "3 anos" },
      { label: "potência", value: "120 kWp" },
    ],
  },
  {
    name: "Fernanda S.",
    role: "Residencial High-End — 15kWp",
    text: "Minha conta caiu de R$ 1.800 para R$ 90. E o monitoramento pelo app é incrível. Recomendo de olhos fechados.",
    avatar: images.avatars.fernanda,
    project: images.projects.fernanda,
    stats: [
      { label: "economia", value: "R$ 1.710/mês" },
      { label: "payback", value: "4 anos" },
      { label: "potência", value: "15 kWp" },
    ],
  },
  {
    name: "Dr. Paulo H.",
    role: "Clínica Médica — 45kWp",
    text: "Profissionalismo impecável. Desde o projeto até a homologação com a concessionária, zero problemas.",
    avatar: images.avatars.paulo,
    project: images.projects.paulo,
    stats: [
      { label: "economia", value: "R$ 6.800/mês" },
      { label: "payback", value: "3,5 anos" },
      { label: "potência", value: "45 kWp" },
    ],
  },
];

export const GUARANTEES = [
  {
    step: "01",
    title: "Garantia de Performance de 25 Anos",
    desc: "Se o sistema não performar conforme projetado, nós assumimos a responsabilidade.",
    detail: "Cobertura completa de geração e equipamentos.",
  },
  {
    step: "02",
    title: "100% da Burocracia Resolvida",
    desc: "Projeto, ART, homologação com a concessionária e toda documentação por nossa conta.",
    detail: "Você não precisa lidar com papelada ou concessionária.",
  },
  {
    step: "03",
    title: "Suporte Técnico Vitalício",
    desc: "Equipe dedicada para manutenção preventiva e suporte pós-instalação.",
    detail: "Monitoramento proativo e visitas preventivas programadas.",
  },
];

export const FAQS = [
  {
    q: "E se chover ou o dia estiver nublado?",
    a: "Os módulos Tier 1 que utilizamos captam energia mesmo com radiação difusa. Em dias nublados, a geração diminui, mas não para. O sistema é dimensionado para compensar essas variações ao longo do ano.",
  },
  {
    q: "Preciso de baterias para armazenar energia?",
    a: "Na maioria dos projetos residenciais e comerciais, não. O sistema é conectado à rede (on-grid), e o excedente gera créditos que abatam sua conta nos meses seguintes. Baterias são opcionais para quem deseja autonomia total.",
  },
  {
    q: "Como funciona a manutenção?",
    a: "Praticamente zero. Uma limpeza semestral nos painéis e o monitoramento 24/7 pelo app garantem performance máxima. Nossa equipe realiza visitas preventivas programadas.",
  },
  {
    q: "Quanto tempo dura a instalação?",
    a: "Projetos residenciais são concluídos em 1 a 3 dias. Usinas comerciais variam de 5 a 15 dias, dependendo do porte. Todo o cronograma é apresentado antes do início da obra.",
  },
  {
    q: "O investimento realmente se paga?",
    a: "Sim. O payback médio é de 3 a 5 anos, e o sistema tem vida útil de mais de 25 anos. Ou seja, são mais de 20 anos de energia praticamente gratuita.",
  },
];

export const TRUST_BADGES = [
  { id: "tier1" as const, label: "Tier 1 Certified" },
  { id: "warranty" as const, label: "Garantia 25 Anos" },
  { id: "projects" as const, label: "+500 Projetos" },
  { id: "carbon" as const, label: "Zero Carbono" },
  { id: "segments" as const, label: "Residencial & Comercial" },
  { id: "aneel" as const, label: "Homologação ANEEL" },
];

export const CTA_TRUST = [
  {
    title: "Sem compromisso",
    subtitle: "Simulação 100% gratuita",
    icon: "shield" as const,
  },
  {
    title: `Retorno em até ${CONTACT.responseTime}`,
    subtitle: "Engenheiro dedicado ao seu projeto",
    icon: "clock" as const,
  },
] as const;
