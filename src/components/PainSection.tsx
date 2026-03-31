import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, DollarSign } from "lucide-react";
import { LightParticles } from "./LightEffects";

const stats = [
  { icon: TrendingUp, value: "+72%", label: "Aumento tarifário nos últimos 5 anos" },
  { icon: AlertTriangle, value: "R$ 0", label: "Retorno do que você paga à concessionária" },
  { icon: DollarSign, value: "25 anos", label: "De economia com energia solar" },
];

const PainSection = () => (
  <section className="py-24 gradient-mesh relative overflow-hidden">
    <LightParticles count={8} className="opacity-30" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
          Todo mês, você <span className="text-gradient-amber">aluga energia</span> e queima dinheiro.
        </h2>
        <p className="text-muted-foreground text-lg">
          Está na hora de parar de financiar a concessionária e ser dono da sua própria usina de energia.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            className="glass-panel p-8 text-center group cursor-default"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={28} />
            </div>
            <div className="text-3xl font-extrabold text-foreground mb-2">{s.value}</div>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 glow-divider" />
  </section>
);

export default PainSection;
