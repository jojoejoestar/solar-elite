import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { LightBeams } from "./LightEffects";
import avatarRicardo from "@/assets/avatar-ricardo.jpg";
import avatarFernanda from "@/assets/avatar-fernanda.jpg";
import avatarPaulo from "@/assets/avatar-paulo.jpg";

const testimonials = [
  {
    name: "Ricardo M.",
    role: "Empresário — Usina Comercial 120kWp",
    text: "O retorno veio antes do previsto. Em 3 anos já paguei o sistema e agora é lucro puro. A equipe da SolarElite cuidou de tudo.",
    avatar: avatarRicardo,
  },
  {
    name: "Fernanda S.",
    role: "Residencial High-End — 15kWp",
    text: "Minha conta caiu de R$ 1.800 para R$ 90. E o monitoramento pelo app é incrível. Recomendo de olhos fechados.",
    avatar: avatarFernanda,
  },
  {
    name: "Dr. Paulo H.",
    role: "Clínica Médica — 45kWp",
    text: "Profissionalismo impecável. Desde o projeto até a homologação com a concessionária, zero problemas.",
    avatar: avatarPaulo,
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="glass-panel p-8 flex flex-col relative group"
          >
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: "inset 0 1px 0 0 hsl(38 92% 50% / 0.15), 0 0 30px -10px hsl(38 92% 50% / 0.15)" }}
            />

            <Quote className="text-primary/30 mb-4" size={28} />
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">"{t.text}"</p>
            
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
          </motion.div>
        ))}
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 glow-divider" />
  </section>
);

export default ProjectsSection;
