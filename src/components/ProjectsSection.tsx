import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import { LightBeams } from "./LightEffects";
import avatarRicardo from "@/assets/avatar-ricardo.jpg";
import avatarFernanda from "@/assets/avatar-fernanda.jpg";
import avatarPaulo from "@/assets/avatar-paulo.jpg";
import projectRicardo from "@/assets/project-ricardo.jpg";
import projectFernanda from "@/assets/project-fernanda.jpg";
import projectPaulo from "@/assets/project-paulo.jpg";

const testimonials = [
  {
    name: "Ricardo M.",
    role: "Empresário — Usina Comercial 120kWp",
    text: "O retorno veio antes do previsto. Em 3 anos já paguei o sistema e agora é lucro puro. A equipe da SolarElite cuidou de tudo.",
    avatar: avatarRicardo,
    project: projectRicardo,
    stats: { economia: "R$ 18.400/mês", payback: "3 anos", potencia: "120 kWp" },
  },
  {
    name: "Fernanda S.",
    role: "Residencial High-End — 15kWp",
    text: "Minha conta caiu de R$ 1.800 para R$ 90. E o monitoramento pelo app é incrível. Recomendo de olhos fechados.",
    avatar: avatarFernanda,
    project: projectFernanda,
    stats: { economia: "R$ 1.710/mês", payback: "4 anos", potencia: "15 kWp" },
  },
  {
    name: "Dr. Paulo H.",
    role: "Clínica Médica — 45kWp",
    text: "Profissionalismo impecável. Desde o projeto até a homologação com a concessionária, zero problemas.",
    avatar: avatarPaulo,
    project: projectPaulo,
    stats: { economia: "R$ 6.800/mês", payback: "3.5 anos", potencia: "45 kWp" },
  },
];

const ProjectsSection = () => (
  <section id="projetos" className="py-24 gradient-mesh relative overflow-hidden">
    <LightBeams className="opacity-50" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
          Quem investiu, <span className="text-gradient-amber">já colhe os resultados</span>
        </h2>
        <p className="text-muted-foreground">
          Projetos residenciais e comerciais que geram retorno real todos os meses.
        </p>
      </motion.div>

      <div className="flex flex-col gap-10 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`glass-panel overflow-hidden grid grid-cols-1 md:grid-cols-2 group ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
          >
            {/* Project Image */}
            <div className={`relative overflow-hidden h-64 md:h-auto ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <img
                src={t.project}
                alt={`Projeto ${t.name}`}
                loading="lazy"
                width={1024}
                height={640}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,47%,7%)] via-transparent to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                {Object.entries(t.stats).map(([key, val]) => (
                  <div key={key} className="glass-panel px-3 py-2 text-center flex-1">
                    <p className="text-xs text-primary font-bold">{val}</p>
                    <p className="text-[10px] text-muted-foreground capitalize">{key}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Content */}
            <div className={`p-8 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <Quote className="text-primary/30 mb-4" size={28} />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 glow-divider" />
  </section>
);

export default ProjectsSection;
