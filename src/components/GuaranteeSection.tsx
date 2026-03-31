import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Headphones } from "lucide-react";
import { LightBeams } from "./LightEffects";

const items = [
  { icon: ShieldCheck, title: "Garantia de Performance de 25 Anos", desc: "Se o sistema não performar conforme projetado, nós assumimos a responsabilidade." },
  { icon: FileCheck, title: "100% da Burocracia Resolvida", desc: "Projeto, ART, homologação com a concessionária e toda documentação por nossa conta." },
  { icon: Headphones, title: "Suporte Técnico Vitalício", desc: "Equipe dedicada para manutenção preventiva e suporte pós-instalação." },
];

const GuaranteeSection = () => (
  <section id="garantias" className="py-24 relative overflow-hidden">
    <LightBeams className="opacity-30" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
          Risco <span className="text-gradient-emerald">zero</span> para você
        </h2>
        <p className="text-muted-foreground">
          Nós cuidamos de absolutamente tudo. Você só precisa aproveitar a economia.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="glass-panel p-8 text-center group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/20 transition-colors">
              <item.icon className="text-secondary group-hover:scale-110 transition-transform" size={28} />
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

export default GuaranteeSection;
