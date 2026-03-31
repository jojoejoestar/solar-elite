import { useState, useEffect } from "react";
import { Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SolarNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Tecnologia", href: "#tecnologia" },
    { label: "Simulador", href: "#calculadora" },
    { label: "Projetos", href: "#projetos" },
    { label: "Garantias", href: "#garantias" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel !rounded-none border-x-0 border-t-0" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <Sun className="h-7 w-7 text-primary" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            Solar<span className="text-primary">Elite</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm glow-amber hover:brightness-110 transition-all"
          >
            Simular Meu Projeto
          </a>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel !rounded-none border-x-0 px-4 pb-6"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 text-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm"
            >
              Simular Meu Projeto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default SolarNav;
