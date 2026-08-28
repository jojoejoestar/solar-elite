"use client";

import { useState, type FormEvent } from "react";
import { Send, Shield, Clock, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { InteractiveTitle } from "@/components/motion/InteractiveTitle";
import { CTA_TRUST } from "@/data/content";

const trustIcons = { shield: Shield, clock: Clock } as const;

const emptyForm = { nome: "", whatsapp: "", conta: "" };

export default function CTASection() {
  const scope = useSectionSymphony<HTMLElement>({ preset: "split-cta" });
  const [form, setForm] = useState(emptyForm);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Simulação enviada! Nossa equipe entrará em contato em breve.");
    setForm(emptyForm);
  };

  return (
    <section id="contato" ref={scope} className="section-tight gradient-mesh-strong relative overflow-hidden section-defer" data-motion>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div data-symphony="shell" className="cta-shell">
          <div className="cta-grid">
            <div data-symphony="copy" className="cta-copy">
              <div className="flex items-center gap-3 mb-5">
                <span className="section-eyebrow-line" aria-hidden />
                <p className="section-eyebrow">Próximo passo</p>
              </div>

              <InteractiveTitle className="text-section-title text-foreground mb-5 text-balance text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
                Sua conta de luz <span className="text-gradient-amber">nunca mais</span> será a mesma.
              </InteractiveTitle>

              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8">
                O Sol já está brilhando. Você só precisa capturá-lo. Receba uma simulação personalizada com payback e
                dimensionamento.
              </p>

              <div className="flex flex-col gap-3">
                {CTA_TRUST.map((chip) => {
                  const Icon = trustIcons[chip.icon];
                  return (
                    <div key={chip.title} className="cta-trust-chip">
                      <div className="surface-icon shrink-0 mb-0 w-9 h-9">
                        <Icon size={15} className="text-primary m-auto" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{chip.title}</p>
                        <p className="text-xs text-muted-foreground">{chip.subtitle}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <form data-symphony="form" onSubmit={handleSubmit} className="cta-form-panel">
              <div className="cta-form-header">
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles size={16} className="text-primary" />
                  <p className="cta-form-title">Solicitar Simulação</p>
                </div>
                <p className="cta-form-sub">Preencha em menos de 1 minuto</p>
              </div>

              <div>
                <label htmlFor="nome" className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-2">
                  Seu Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="input-premium rounded-lg"
                  placeholder="Como podemos te chamar?"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-2">
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="input-premium rounded-lg"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="conta" className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-2">
                  Valor da Conta de Luz
                </label>
                <input
                  id="conta"
                  type="text"
                  required
                  value={form.conta}
                  onChange={(e) => setForm({ ...form, conta: e.target.value })}
                  className="input-premium rounded-lg"
                  placeholder="R$ 800,00"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg btn-primary-premium font-bold text-base text-primary-foreground"
              >
                <Send size={18} />
                Solicitar Simulação Gratuita
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
