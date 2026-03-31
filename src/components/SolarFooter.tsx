import { Sun } from "lucide-react";

const SolarFooter = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Sun className="h-5 w-5 text-primary" />
        <span className="text-sm font-bold text-foreground tracking-tight">
          Solar<span className="text-primary">Elite</span>
        </span>
      </div>
      <p className="text-xs text-muted-foreground mb-6">
        Engenharia fotovoltaica de alta performance. Todos os direitos reservados.
      </p>
      <p className="text-xs text-muted-foreground">
        Design Original{" "}
        <a
          href="https://agentejoestar.online"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium"
        >
          Agente Joestar
        </a>
      </p>
    </div>
  </footer>
);

export default SolarFooter;
