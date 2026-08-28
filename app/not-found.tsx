import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      <div className="page-static-backdrop" aria-hidden />
      <div className="relative z-10 flex max-w-md flex-col items-center text-center">
        <BrandLogo variant="nav" />
        <p className="mt-10 font-display text-6xl font-bold text-primary">404</p>
        <h1 className="mt-3 font-display text-2xl font-bold text-foreground">Página não encontrada</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          O endereço não existe ou foi movido. Volte para a página inicial e continue de onde parou.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl btn-primary-premium px-5 py-3 text-sm font-semibold text-primary-foreground"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
