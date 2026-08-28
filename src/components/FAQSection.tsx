"use client";

import { MessageCircle, Clock, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { SectionHeader } from "./ui/SectionHeader";
import { AnchorLink } from "@/components/AnchorLink";
import { METRICS } from "@/data/site";
import { useCopy } from "@/i18n/LocaleProvider";

export default function FAQSection() {
  const scope = useSectionSymphony<HTMLElement>({ preset: "split-faq" });
  const { copy } = useCopy();

  return (
    <section id="faq" ref={scope} className="section-tight gradient-mesh relative overflow-hidden section-defer" data-motion>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div data-symphony="heading">
          <SectionHeader
            eyebrow={copy.faq.eyebrow}
            title={
              <>
                {copy.faq.titleBefore}
                <span className="text-gradient-amber">{copy.faq.titleHighlight}</span>
              </>
            }
            description={copy.faq.description}
          />
        </div>

        <div className="faq-layout">
          <aside data-symphony="aside" className="faq-aside">
            <div className="faq-aside-card">
              <div className="faq-aside-icon">
                <MessageCircle size={22} className="text-primary" />
              </div>
              <h3 className="faq-aside-title">{copy.faq.asideTitle}</h3>
              <p className="faq-aside-desc">{copy.faq.asideDesc}</p>

              <div className="faq-aside-stats">
                <div className="faq-aside-stat">
                  <Clock size={14} className="text-primary shrink-0" />
                  <div>
                    <p className="faq-aside-stat-value">{copy.faq.responseTime}</p>
                    <p className="faq-aside-stat-label">{copy.faq.responseLabel}</p>
                  </div>
                </div>
                <div className="faq-aside-stat">
                  <div>
                    <p className="faq-aside-stat-value">{METRICS.projects.value}</p>
                    <p className="faq-aside-stat-label">{copy.faq.projectsLabel}</p>
                  </div>
                </div>
              </div>

              <AnchorLink href="#contato" className="faq-aside-cta">
                {copy.faq.cta}
                <ArrowRight size={16} />
              </AnchorLink>
            </div>
          </aside>

          <div className="faq-panel">
            <Accordion type="single" collapsible className="faq-accordion-list">
              {copy.faq.items.map((faq, i) => (
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
