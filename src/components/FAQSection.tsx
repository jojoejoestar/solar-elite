"use client";

import { MessageCircle, Clock, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { SectionHeader } from "./ui/SectionHeader";
import { AnchorLink } from "@/components/AnchorLink";
import { CONTACT, METRICS } from "@/data/site";
import { FAQS } from "@/data/content";

export default function FAQSection() {
  const scope = useSectionSymphony<HTMLElement>({ preset: "split-faq" });

  return (
    <section id="faq" ref={scope} className="section-tight gradient-mesh relative overflow-hidden section-defer" data-motion>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div data-symphony="heading">
          <SectionHeader
            eyebrow="FAQ"
            title={
              <>
                Perguntas <span className="text-gradient-amber">Frequentes</span>
              </>
            }
            description="Tire suas dúvidas antes de dar o próximo passo rumo à independência energética."
          />
        </div>

        <div className="faq-layout">
          <aside data-symphony="aside" className="faq-aside">
            <div className="faq-aside-card">
              <div className="faq-aside-icon">
                <MessageCircle size={22} className="text-primary" />
              </div>
              <h3 className="faq-aside-title">Ainda com dúvidas?</h3>
              <p className="faq-aside-desc">
                Nossa equipe de engenheiros responde com clareza técnica e sem compromisso.
              </p>

              <div className="faq-aside-stats">
                <div className="faq-aside-stat">
                  <Clock size={14} className="text-primary shrink-0" />
                  <div>
                    <p className="faq-aside-stat-value">{CONTACT.responseTime}</p>
                    <p className="faq-aside-stat-label">Tempo de resposta</p>
                  </div>
                </div>
                <div className="faq-aside-stat">
                  <div>
                    <p className="faq-aside-stat-value">{METRICS.projects.value}</p>
                    <p className="faq-aside-stat-label">{METRICS.projects.footer}</p>
                  </div>
                </div>
              </div>

              <AnchorLink href="#contato" className="faq-aside-cta">
                Falar com especialista
                <ArrowRight size={16} />
              </AnchorLink>
            </div>
          </aside>

          <div className="faq-panel">
            <Accordion type="single" collapsible className="faq-accordion-list">
              {FAQS.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`} data-symphony="item" className="faq-item border-none">
                  <AccordionTrigger className="faq-trigger-btn hover:no-underline">
                    <span className="faq-trigger">
                      <span className="faq-number">{String(i + 1).padStart(2, "0")}</span>
                      <span className="faq-question">{faq.q}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="faq-content-wrap">
                    <p className="faq-answer">{faq.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
