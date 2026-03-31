import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, DollarSign } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "+72%", label: "Aumento tarifário nos últimos 5 anos" },
  { icon: AlertTriangle, value: "R$ 0", label: "Retorno do que você paga à concessionária" },
  { icon: DollarSign, value: "25 anos", label: "De economia com energia solar" },
];

const PainSection = () => (
  <section className="py-24 gradient-mesh">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass-panel p-8 text-center"
          >
            <s.icon className="mx-auto mb-4 text-primary" size={32} />
            <div className="text-3xl font-extrabold text-foreground mb-2">{s.value}</div>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PainSection;
