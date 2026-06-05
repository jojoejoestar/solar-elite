"use client";

import { useState, useMemo } from "react";
import { Zap, TreePine, Leaf, TrendingUp, ArrowRight, Gauge, Clock, Sun } from "lucide-react";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { scrollToAnchor } from "@/lib/lenis";
import { AnimatedNumber } from "./AnimatedNumber";
import { SectionHeader } from "./ui/SectionHeader";

const PRESETS = [500, 800, 1500, 2500, 5000] as const;

const ROICalculator = () => {
  const scope = useSectionSymphony<HTMLElement>({ preset: "panel" });
  const [bill, setBill] = useState(800);

  const metrics = useMemo(() => {
    const monthlySavings = Math.round(bill * 0.95);
    const annualSavings = monthlySavings * 12;
    const roi25Years = Math.round(annualSavings * 25);
    const treesSaved = Math.round((bill / 100) * 3.2);
    const co2Avoided = Math.round((bill / 100) * 0.85 * 12);
    const systemKwp = Math.round((bill / 110) * 10) / 10;
    const estimatedInvestment = Math.round(bill * 58);
    const paybackYears =
      annualSavings > 0 ? Math.round((estimatedInvestment / annualSavings) * 10) / 10 : 0;

    return {
      monthlySavings,
      annualSavings,
      roi25Years,
      treesSaved,
      co2Avoided,
      systemKwp,
      estimatedInvestment,
      paybackYears,
    };
  }, [bill]);

  const results = [
    { icon: Zap, label: "Economia Mensal", value: metrics.monthlySavings, prefix: "R$ ", color: "text-primary", accent: "roi-accent-amber" },
    { icon: TrendingUp, label: "Retorno em 25 Anos", value: metrics.roi25Years, prefix: "R$ ", color: "text-secondary", accent: "roi-accent-emerald" },
    { icon: TreePine, label: "Árvores Salvas/Ano", value: metrics.treesSaved, prefix: "", color: "text-secondary", accent: "roi-accent-emerald" },
    { icon: Leaf, label: "CO₂ Evitadas/Ano", value: metrics.co2Avoided, prefix: "", suffix: " t", color: "text-secondary", accent: "roi-accent-emerald" },
  ];

  const fillPercent = ((bill - 300) / 9700) * 100;

  return (
    <section id="calculadora" ref={scope} className="section-tight relative overflow-hidden section-defer" data-motion>
      <div className="absolute inset-0 gradient-mesh-strong pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div data-symphony="heading">
          <SectionHeader
            eyebrow="Simulador"
            title={
              <>
                Simulador de <span className="text-gradient-amber">Retorno Financeiro</span>
              </>
            }
            description="Ajuste sua conta de luz e veja economia, payback e impacto ambiental em tempo real."
          />
        </div>

        <div data-symphony="panel" className="roi-calculator-shell">
          <div className="roi-calculator-grid">
            {/* Controls */}
            <div className="roi-calculator-controls">
              <div className="roi-display-panel">
                <p className="roi-display-label">Sua conta de luz atual</p>
                <div className="roi-display-value">
                  <span className="roi-currency">R$</span>
                  <span className="roi-amount tabular-nums">{bill.toLocaleString("pt-BR")}</span>
                  <span className="roi-period">/mês</span>
                </div>
              </div>

              <div className="roi-slider-block">
                <div className="roi-slider-track-wrap">
                  <div className="roi-slider-fill" style={{ width: `${fillPercent}%` }} />
                  <input
                    id="bill-slider"
                    type="range"
                    min={300}
                    max={10000}
                    step={50}
                    value={bill}
                    onChange={(e) => setBill(Number(e.target.value))}
                    className="roi-slider-input"
                    aria-valuemin={300}
                    aria-valuemax={10000}
                    aria-valuenow={bill}
                    aria-label="Valor da conta de luz em reais"
                  />
                </div>
                <div className="roi-slider-labels">
                  <span>R$ 300</span>
                  <span>R$ 10.000</span>
                </div>
              </div>

              <div className="roi-presets">
                <span className="roi-presets-label">Atalhos rápidos</span>
                <div className="roi-presets-row">
                  {PRESETS.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setBill(preset)}
                      className={`roi-preset-btn ${bill === preset ? "roi-preset-btn-active" : ""}`}
                      aria-pressed={bill === preset}
                    >
                      R$ {preset.toLocaleString("pt-BR")}
                    </button>
                  ))}
                </div>
              </div>

              <div className="roi-meta-row">
                <div className="roi-meta-chip">
                  <Gauge size={16} className="text-primary" />
                  <div>
                    <p className="roi-meta-label">Sistema estimado</p>
                    <p className="roi-meta-value tabular-nums">
                      <AnimatedNumber value={metrics.systemKwp} suffix=" kWp" duration={0.4} decimals={1} />
                    </p>
                  </div>
                </div>
                <div className="roi-meta-chip">
                  <Clock size={16} className="text-secondary" />
                  <div>
                    <p className="roi-meta-label">Payback estimado</p>
                    <p className="roi-meta-value tabular-nums">
                      <AnimatedNumber value={metrics.paybackYears} suffix=" anos" duration={0.4} decimals={1} />
                    </p>
                  </div>
                </div>
                <div className="roi-meta-chip">
                  <Sun size={16} className="text-primary" />
                  <div>
                    <p className="roi-meta-label">Investimento estimado</p>
                    <p className="roi-meta-value tabular-nums">
                      <AnimatedNumber value={metrics.estimatedInvestment} prefix="R$ " duration={0.4} />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="roi-results-grid">
              {results.map((r, i) => (
                <div key={i} data-symphony="result" className={`roi-result-card ${r.accent}`}>
                  <div className="roi-result-icon">
                    <r.icon className={r.color} size={20} strokeWidth={1.75} />
                  </div>
                  <div className={`roi-result-value ${r.color}`}>
                    <AnimatedNumber value={r.value} prefix={r.prefix || ""} suffix={r.suffix || ""} />
                  </div>
                  <p className="roi-result-label">{r.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="roi-cta-row">
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                scrollToAnchor("#contato", -88);
              }}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl btn-primary-premium font-bold text-base text-primary-foreground"
            >
              Quero Esse Retorno
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
