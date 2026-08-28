"use client";

import { useMemo, useState } from "react";
import { Zap, TreePine, Leaf, TrendingUp, ArrowRight, Gauge, Clock, Sun } from "lucide-react";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { AnimatedNumber } from "./AnimatedNumber";
import { SectionHeader } from "./ui/SectionHeader";
import { AnchorLink } from "@/components/AnchorLink";
import { billFillPercent, calculateRoi, ROI } from "@/lib/roi";
import { useCopy } from "@/i18n/LocaleProvider";

export default function ROICalculator() {
  const scope = useSectionSymphony<HTMLElement>({ preset: "panel" });
  const { copy } = useCopy();
  const [bill, setBill] = useState<number>(ROI.defaultBill);
  const metrics = useMemo(() => calculateRoi(bill), [bill]);
  const locale = copy.intlLocale;
  const money = (n: number) => n.toLocaleString(locale);

  const results = [
    { icon: Zap, label: copy.roi.monthlySavings, value: metrics.monthlySavings, prefix: `${copy.roi.currency} `, color: "text-primary", accent: "roi-accent-amber" },
    { icon: TrendingUp, label: copy.roi.return25, value: metrics.roi25Years, prefix: `${copy.roi.currency} `, color: "text-secondary", accent: "roi-accent-emerald" },
    { icon: TreePine, label: copy.roi.treesSaved, value: metrics.treesSaved, prefix: "", color: "text-secondary", accent: "roi-accent-emerald" },
    { icon: Leaf, label: copy.roi.co2Avoided, value: metrics.co2Avoided, prefix: "", suffix: " t", color: "text-secondary", accent: "roi-accent-emerald" },
  ];

  return (
    <section id="calculadora" ref={scope} className="section-tight relative overflow-hidden section-defer" data-motion>
      <div className="absolute inset-0 gradient-mesh-strong pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div data-symphony="heading">
          <SectionHeader
            eyebrow={copy.roi.eyebrow}
            title={
              <>
                {copy.roi.titleBefore}
                <span className="text-gradient-amber">{copy.roi.titleHighlight}</span>
                {copy.roi.titleAfter}
              </>
            }
            description={copy.roi.description}
          />
        </div>

        <div data-symphony="panel" className="roi-calculator-shell">
          <div className="roi-calculator-grid">
            <div className="roi-calculator-controls">
              <div className="roi-display-panel">
                <p className="roi-display-label">{copy.roi.currentBill}</p>
                <div className="roi-display-value">
                  <span className="roi-currency">{copy.roi.currency}</span>
                  <span className="roi-amount tabular-nums">{money(bill)}</span>
                  <span className="roi-period">{copy.roi.perMonth}</span>
                </div>
              </div>

              <div className="roi-slider-block">
                <div className="roi-slider-track-wrap">
                  <div className="roi-slider-fill" style={{ width: `${billFillPercent(bill)}%` }} />
                  <input
                    id="bill-slider"
                    type="range"
                    min={ROI.minBill}
                    max={ROI.maxBill}
                    step={ROI.step}
                    value={bill}
                    onChange={(e) => setBill(Number(e.target.value))}
                    className="roi-slider-input"
                    aria-valuemin={ROI.minBill}
                    aria-valuemax={ROI.maxBill}
                    aria-valuenow={bill}
                    aria-label={copy.roi.billAria}
                  />
                </div>
                <div className="roi-slider-labels">
                  <span>
                    {copy.roi.currency} {money(ROI.minBill)}
                  </span>
                  <span>
                    {copy.roi.currency} {money(ROI.maxBill)}
                  </span>
                </div>
              </div>

              <div className="roi-presets">
                <span className="roi-presets-label">{copy.roi.shortcuts}</span>
                <div className="roi-presets-row">
                  {ROI.presets.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setBill(preset)}
                      className={`roi-preset-btn ${bill === preset ? "roi-preset-btn-active" : ""}`}
                      aria-pressed={bill === preset}
                    >
                      {copy.roi.currency} {money(preset)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="roi-meta-row">
                <div className="roi-meta-chip">
                  <Gauge size={16} className="text-primary" />
                  <div>
                    <p className="roi-meta-label">{copy.roi.estimatedSystem}</p>
                    <p className="roi-meta-value tabular-nums">
                      <AnimatedNumber value={metrics.systemKwp} suffix=" kWp" duration={0.4} decimals={1} />
                    </p>
                  </div>
                </div>
                <div className="roi-meta-chip">
                  <Clock size={16} className="text-secondary" />
                  <div>
                    <p className="roi-meta-label">{copy.roi.estimatedPayback}</p>
                    <p className="roi-meta-value tabular-nums">
                      <AnimatedNumber value={metrics.paybackYears} suffix={copy.roi.yearsSuffix} duration={0.4} decimals={1} />
                    </p>
                  </div>
                </div>
                <div className="roi-meta-chip">
                  <Sun size={16} className="text-primary" />
                  <div>
                    <p className="roi-meta-label">{copy.roi.estimatedInvestment}</p>
                    <p className="roi-meta-value tabular-nums">
                      <AnimatedNumber value={metrics.estimatedInvestment} prefix={`${copy.roi.currency} `} duration={0.4} />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="roi-results-grid">
              {results.map((result) => (
                <div key={result.label} data-symphony="result" className={`roi-result-card ${result.accent}`}>
                  <div className="roi-result-icon">
                    <result.icon className={result.color} size={20} strokeWidth={1.75} />
                  </div>
                  <div className={`roi-result-value ${result.color}`}>
                    <AnimatedNumber value={result.value} prefix={result.prefix || ""} suffix={result.suffix || ""} />
                  </div>
                  <p className="roi-result-label">{result.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="roi-cta-row">
            <AnchorLink
              href="#contato"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-xl btn-primary-premium font-bold text-base text-primary-foreground"
            >
              {copy.roi.cta}
              <ArrowRight size={18} />
            </AnchorLink>
          </div>
        </div>
      </div>
    </section>
  );
}
