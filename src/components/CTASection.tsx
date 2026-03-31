import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { toast } from "sonner";

const CTASection = () => {
  const [form, setForm] = useState({ nome: "", whatsapp: "", conta: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Simulação enviada! Nossa equipe entrará em contato em breve.");
    setForm({ nome: "", whatsapp: "", conta: "" });
  };

  return (
    <section id="contato" className="py-24 gradient-mesh-strong relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mb-4">
            Sua conta de luz <span className="text-gradient-amber">nunca mais</span> será a mesma.
          </h2>
          <p className="text-lg text-muted-foreground">
            O Sol já está brilhando. Você só precisa capturá-lo.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto glass-panel p-8 sm:p-10 glow-amber space-y-5"
        >
          <div>
            <label className="block text-xs font-semibold text-muted-foreground mb-2">Seu Nome</label>
            <input
              type="text"
              required
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Como podemos te chamar?"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground mb-2">WhatsApp</label>
            <input
              type="tel"
              required
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground mb-2">Valor da Conta de Luz</label>
            <input
              type="text"
              required
              value={form.conta}
              onChange={(e) => setForm({ ...form, conta: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="R$ 800,00"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base glow-amber hover:brightness-110 transition-all"
          >
            <Send size={18} />
            Solicitar Simulação Gratuita
          </button>
          <p className="text-xs text-center text-muted-foreground">
            Sem compromisso. Retornamos em até 2 horas úteis.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default CTASection;
