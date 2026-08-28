"use client";

import { useState, type FormEvent } from "react";
import { Send, Shield, Clock, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { InteractiveTitle } from "@/components/motion/InteractiveTitle";
import { useCopy } from "@/i18n/LocaleProvider";

const trustIcons = { shield: Shield, clock: Clock } as const;

const emptyForm = { nome: "", whatsapp: "", conta: "" };

export default function CTASection() {
  const scope = useSectionSymphony<HTMLElement>({ preset: "split-cta" });
  const { copy } = useCopy();
  const [form, setForm] = useState(emptyForm);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success(copy.cta.toast);
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
                <p className="section-eyebrow">{copy.cta.eyebrow}</p>
              </div>

              <InteractiveTitle className="text-section-title text-foreground mb-5 text-balance text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
                {copy.cta.titleBefore}
                <span className="text-gradient-amber">{copy.cta.titleHighlight}</span>
                {copy.cta.titleAfter}
              </InteractiveTitle>

              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8">
                {copy.cta.description}
              </p>

              <div className="flex flex-col gap-3">
                {copy.cta.trust.map((chip) => {
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
                  <p className="cta-form-title">{copy.cta.formTitle}</p>
                </div>
                <p className="cta-form-sub">{copy.cta.formSub}</p>
              </div>

              <div>
                <label htmlFor="nome" className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-2">
                  {copy.cta.nameLabel}
                </label>
                <input
                  id="nome"
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="input-premium rounded-lg"
                  placeholder={copy.cta.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-2">
                  {copy.cta.whatsappLabel}
                </label>
                <input
                  id="whatsapp"
                  type="tel"
                  required
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="input-premium rounded-lg"
                  placeholder={copy.cta.whatsappPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="conta" className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground mb-2">
                  {copy.cta.billLabel}
                </label>
                <input
                  id="conta"
                  type="text"
                  required
                  value={form.conta}
                  onChange={(e) => setForm({ ...form, conta: e.target.value })}
                  className="input-premium rounded-lg"
                  placeholder={copy.cta.billPlaceholder}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg btn-primary-premium font-bold text-base text-primary-foreground"
              >
                <Send size={18} />
                {copy.cta.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
