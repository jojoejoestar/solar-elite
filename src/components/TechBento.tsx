import { motion } from "framer-motion";
import { Cpu, Smartphone, Wrench, Shield } from "lucide-react";

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
  <section id="tecnologia" className="py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass-panel p-8 group hover:border-primary/30 transition-colors ${item.span}`}
          >
            <item.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
            <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechBento;
