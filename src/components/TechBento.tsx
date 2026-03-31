import { motion } from "framer-motion";
import { Cpu, Smartphone, Wrench, Shield } from "lucide-react";
import { LightParticles } from "./LightEffects";

const items = [
  {
    icon: Cpu,
    title: "Módulos Tier 1",
    desc: "Painéis de máxima eficiência com certificação internacional. Rendimento superior mesmo em dias nublados.",
    span: "md:col-span-2",
  },
  {
    icon: Shield,
    title: "Microinversores de Ponta",
    desc: "Cada painel opera de forma independente. Mais segurança, mais geração, menos perdas.",
    span: "",
  },
  {
    icon: Smartphone,
    title: "Monitoramento 24/7",
    desc: "Acompanhe a geração em tempo real pelo app. Dados de produção, economia e performance na palma da mão.",
    span: "",
  },
  {
    icon: Wrench,
    title: "Instalação Cirúrgica",
    desc: "Equipe própria especializada. Sem terceirizados, sem dor de cabeça. Do projeto ao comissionamento em tempo recorde.",
    span: "md:col-span-2",
  },
];

const TechBento = () => (
  <section id="tecnologia" className="py-24 relative overflow-hidden">
    <LightParticles count={10} className="opacity-20" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
          Tecnologia que <span className="text-gradient-emerald">gera resultados</span>
        </h2>
        <p className="text-muted-foreground">
          Cada componente é selecionado para maximizar seu retorno financeiro e a longevidade do sistema.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className={`glass-panel p-8 group hover:border-primary/30 transition-all relative overflow-hidden ${item.span}`}
          >
            {/* Hover light shimmer */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <item.icon className="text-primary group-hover:scale-110 transition-transform" size={24} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 glow-divider" />
  </section>
);

export default TechBento;
