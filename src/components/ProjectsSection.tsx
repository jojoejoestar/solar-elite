import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo M.",
    role: "Empresário — Usina Comercial 120kWp",
    text: "O retorno veio antes do previsto. Em 3 anos já paguei o sistema e agora é lucro puro. A equipe da SolarElite cuidou de tudo.",
  },
  {
    name: "Fernanda S.",
    role: "Residencial High-End — 15kWp",
    text: "Minha conta caiu de R$ 1.800 para R$ 90. E o monitoramento pelo app é incrível. Recomendo de olhos fechados.",
  },
  {
    name: "Dr. Paulo H.",
    role: "Clínica Médica — 45kWp",
    text: "Profissionalismo impecável. Desde o projeto até a homologação com a concessionária, zero problemas.",
  },
];

const ProjectsSection = () => (
  <section id="projetos" className="py-24 gradient-mesh">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass-panel p-8 flex flex-col"
          >
            <Quote className="text-primary/40 mb-4" size={28} />
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">"{t.text}"</p>
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-sm font-bold text-foreground">{t.name}</p>
            <p className="text-xs text-muted-foreground">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
