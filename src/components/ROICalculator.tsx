import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Zap, TreePine, Leaf, TrendingUp } from "lucide-react";

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const spring = useSpring(0, { stiffness: 80, damping: 20 });
  const display = useTransform(spring, (v) =>
    `${prefix}${Math.round(v).toLocaleString("pt-BR")}${suffix}`
  );
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    const unsub = display.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
    return unsub;
  }, [display]);

  return <span ref={ref}>{`${prefix}0${suffix}`}</span>;
}

const ROICalculator = () => {
  const [bill, setBill] = useState(800);

  const monthlySavings = Math.round(bill * 0.95);
  const roi25Years = Math.round(monthlySavings * 12 * 25);
  const treesSaved = Math.round((bill / 100) * 3.2);
  const co2Avoided = Math.round((bill / 100) * 0.85 * 12);

  const results = [
    { icon: Zap, label: "Economia Mensal", value: monthlySavings, prefix: "R$ ", color: "text-primary" },
    { icon: TrendingUp, label: "Retorno em 25 Anos", value: roi25Years, prefix: "R$ ", color: "text-secondary" },
    { icon: TreePine, label: "Árvores Salvas/Ano", value: treesSaved, suffix: "", color: "text-secondary" },
    { icon: Leaf, label: "Toneladas CO₂ Evitadas/Ano", value: co2Avoided, suffix: " t", color: "text-secondary" },
  ];

  return (
    <section id="calculadora" className="py-24 gradient-mesh-strong">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Simulador de <span className="text-gradient-amber">Retorno Financeiro</span>
          </h2>
          <p className="text-muted-foreground">
            Descubra quanto você pode economizar com energia solar. Mova o controle e veja os números em tempo real.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 glow-amber"
        >
          {/* Slider */}
          <div className="mb-10">
            <label className="block text-sm font-semibold text-muted-foreground mb-3">
              Sua conta de luz atual
            </label>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground whitespace-nowrap">R$ 300</span>
              <input
                type="range"
                min={300}
                max={10000}
                step={50}
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="flex-1 h-2 rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                style={{
                  background: `linear-gradient(to right, hsl(38 92% 50%) 0%, hsl(38 92% 50%) ${((bill - 300) / 9700) * 100}%, hsl(220 30% 15%) ${((bill - 300) / 9700) * 100}%, hsl(220 30% 15%) 100%)`,
                }}
              />
              <span className="text-sm text-muted-foreground whitespace-nowrap">R$ 10.000</span>
            </div>
            <div className="mt-3 text-center">
              <span className="text-3xl font-extrabold text-foreground">
                R$ {bill.toLocaleString("pt-BR")}
              </span>
              <span className="text-muted-foreground text-sm ml-2">/mês</span>
            </div>
          </div>

          {/* Results grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {results.map((r, i) => (
              <div key={i} className="glass-panel p-6 text-center">
                <r.icon className={`mx-auto mb-3 ${r.color}`} size={28} />
                <div className={`text-2xl sm:text-3xl font-extrabold ${r.color} mb-1`}>
                  <AnimatedNumber value={r.value} prefix={r.prefix || ""} suffix={r.suffix || ""} />
                </div>
                <p className="text-xs text-muted-foreground font-medium">{r.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base glow-amber hover:brightness-110 transition-all"
            >
              Quero Esse Retorno
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;
