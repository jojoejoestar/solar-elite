"use client";

import { MessageCircle, Clock, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSectionSymphony } from "@/hooks/useSectionSymphony";
import { scrollToAnchor } from "@/lib/lenis";
import { SectionHeader } from "./ui/SectionHeader";

const faqs = [
  {
    q: "E se chover ou o dia estiver nublado?",
    a: "Os módulos Tier 1 que utilizamos captam energia mesmo com radiação difusa. Em dias nublados, a geração diminui, mas não para. O sistema é dimensionado para compensar essas variações ao longo do ano.",
  },
  {
    q: "Preciso de baterias para armazenar energia?",
    a: "Na maioria dos projetos residenciais e comerciais, não. O sistema é conectado à rede (on-grid), e o excedente gera créditos que abatam sua conta nos meses seguintes. Baterias são opcionais para quem deseja autonomia total.",
  },
  {
    q: "Como funciona a manutenção?",
    a: "Praticamente zero. Uma limpeza semestral nos painéis e o monitoramento 24/7 pelo app garantem performance máxima. Nossa equipe realiza visitas preventivas programadas.",
  },
  {
    q: "Quanto tempo dura a instalação?",
    a: "Projetos residenciais são concluídos em 1 a 3 dias. Usinas comerciais variam de 5 a 15 dias, dependendo do porte. Todo o cronograma é apresentado antes do início da obra.",
  },
  {
    q: "O investimento realmente se paga?",
    a: "Sim. O payback médio é de 3 a 5 anos, e o sistema tem vida útil de mais de 25 anos. Ou seja, são mais de 20 anos de energia praticamente gratuita.",
  },
];

const FAQSection = () => {
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
                    <p className="faq-aside-stat-value">2h úteis</p>
                    <p className="faq-aside-stat-label">Tempo de resposta</p>
                  </div>
                </div>
                <div className="faq-aside-stat">
                  <div>
                    <p className="faq-aside-stat-value">500+</p>
                    <p className="faq-aside-stat-label">Projetos entregues</p>
                  </div>
                </div>
              </div>

              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToAnchor("#contato", -88);
                }}
                className="faq-aside-cta"
              >
                Falar com especialista
                <ArrowRight size={16} />
              </a>
            </div>
          </aside>

          <div className="faq-panel">
            <Accordion type="single" collapsible className="faq-accordion-list">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  data-symphony="item"
                  className="faq-item border-none"
                >
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
};

export default FAQSection;
