import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "E se chover ou o dia estiver nublado?", a: "Os módulos Tier 1 que utilizamos captam energia mesmo com radiação difusa. Em dias nublados, a geração diminui, mas não para. O sistema é dimensionado para compensar essas variações ao longo do ano." },
  { q: "Preciso de baterias para armazenar energia?", a: "Na maioria dos projetos residenciais e comerciais, não. O sistema é conectado à rede (on-grid), e o excedente gera créditos que abatam sua conta nos meses seguintes. Baterias são opcionais para quem deseja autonomia total." },
  { q: "Como funciona a manutenção?", a: "Praticamente zero. Uma limpeza semestral nos painéis e o monitoramento 24/7 pelo app garantem performance máxima. Nossa equipe realiza visitas preventivas programadas." },
  { q: "Quanto tempo dura a instalação?", a: "Projetos residenciais são concluídos em 1 a 3 dias. Usinas comerciais variam de 5 a 15 dias, dependendo do porte. Todo o cronograma é apresentado antes do início da obra." },
  { q: "O investimento realmente se paga?", a: "Sim. O payback médio é de 3 a 5 anos, e o sistema tem vida útil de mais de 25 anos. Ou seja, são mais de 20 anos de energia praticamente gratuita." },
];

const FAQSection = () => (
  <section className="py-24 gradient-mesh">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
          Perguntas <span className="text-gradient-amber">Frequentes</span>
        </h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="glass-panel px-6 border-none">
            <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
