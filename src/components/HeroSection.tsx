import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import heroImg from "@/assets/hero-solar.jpg";
import { SunRays, LightParticles, LightBeams, MouseGlow } from "./LightEffects";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroImg}
        alt="Casa moderna com painéis solares"
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>

    {/* Light effects layer */}
    <SunRays className="top-10 right-[15%] opacity-40 hidden lg:block" />
    <LightParticles count={15} className="z-[1]" />
    <LightBeams className="z-[1]" />
    <MouseGlow className="z-[1] hidden md:block" />

    <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block px-4 py-1.5 rounded-full glass-panel text-xs font-semibold text-primary tracking-widest uppercase mb-6"
        >
          Engenharia Fotovoltaica de Elite
        </motion.span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground mb-6">
          Transforme o Sol em um{" "}
          <span className="text-gradient-amber">Ativo Financeiro</span> de Alta
          Rentabilidade.
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
        >
          Conquiste sua independência energética, blinde-se contra a inflação
          tarifária e valorize seu imóvel imediatamente com tecnologia de ponta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#calculadora"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base glow-amber hover:brightness-110 transition-all group"
          >
            Simular Economia
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass-panel font-semibold text-base text-foreground hover:bg-[hsl(220_40%_100%/0.1)] transition-all"
          >
            <PhoneCall size={18} />
            Falar com Engenheiro
          </a>
        </motion.div>
      </motion.div>
    </div>

    {/* Bottom glow divider */}
    <div className="absolute bottom-0 left-0 right-0 glow-divider" />
  </section>
);

export default HeroSection;
