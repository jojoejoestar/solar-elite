"use client";



import { useRef, useState, type MouseEvent } from "react";

import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

import { gsap, useGSAP, ScrollTrigger, MOTION_MEDIA } from "@/lib/gsap";

import { scrollToAnchor } from "@/lib/lenis";



const links = [

  { label: "Tecnologia", href: "#tecnologia" },

  { label: "Simulador", href: "#calculadora" },

  { label: "Projetos", href: "#projetos" },

  { label: "Garantias", href: "#garantias" },

];



function NavLink({

  href,

  className,

  children,

  onNavigate,

}: {

  href: string;

  className: string;

  children: React.ReactNode;

  onNavigate?: () => void;

}) {

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {

    if (href.startsWith("#")) {

      e.preventDefault();

      scrollToAnchor(href, -88);

      onNavigate?.();

    }

  };



  return (

    <a href={href} onClick={handleClick} className={className}>

      {children}

    </a>

  );

}



function MobileMenu({ onClose }: { onClose: () => void }) {

  const menuRef = useRef<HTMLDivElement>(null);



  useGSAP(

    () => {

      if (!menuRef.current) return;

      gsap.fromTo(

        menuRef.current,

        { autoAlpha: 0, height: 0 },

        { autoAlpha: 1, height: "auto", duration: 0.35, ease: "power3.out", immediateRender: false },

      );

    },

    { scope: menuRef },

  );



  return (

    <div ref={menuRef} className="md:hidden border-t border-border/40 px-4 pb-6 pt-2 overflow-hidden">

      {links.map((l) => (

        <NavLink

          key={l.href}

          href={l.href}

          onNavigate={onClose}

          className="block py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"

        >

          {l.label}

        </NavLink>

      ))}

      <NavLink

        href="#contato"

        onNavigate={onClose}

        className="block mt-3 text-center px-5 py-3 rounded-xl btn-primary-premium font-semibold text-sm text-primary-foreground"

      >

        Simular Meu Projeto

      </NavLink>

    </div>

  );

}



const SolarNav = () => {

  const headerRef = useRef<HTMLElement>(null);

  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);



  useGSAP(

    () => {

      const mm = gsap.matchMedia();



      mm.add({ reduceMotion: MOTION_MEDIA.reduceMotion }, (context) => {

        if (!headerRef.current) return;



        if (!context.conditions?.reduceMotion) {

          gsap.fromTo(

            headerRef.current,

            { y: -80, autoAlpha: 0 },

            { y: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out", immediateRender: false },

          );

        } else {

          gsap.set(headerRef.current, { y: 0, autoAlpha: 1 });

        }



        ScrollTrigger.create({

          start: 0,

          end: "max",

          onUpdate: (self) => setScrolled(self.scroll() > 48),

        });

      }, headerRef);



      return () => mm.revert();

    },

    { scope: headerRef },

  );



  return (

    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4 pointer-events-none">

      <div

        className={`pointer-events-auto mx-auto max-w-7xl transition-all duration-500 rounded-xl ${

          scrolled

            ? "glass-panel-premium shadow-[0_16px_48px_-16px_hsl(222_47%_3%/0.9)] border border-border/50"

            : "bg-transparent border border-transparent"

        }`}

      >

        <div className="flex items-center justify-between py-3.5 px-4 lg:px-6">

          <NavLink href="#" className="brand-nav-link group">

            <BrandLogo variant="nav" priority />

          </NavLink>



          <nav className="hidden md:flex items-center gap-8">

            {links.map((l) => (

              <NavLink key={l.href} href={l.href} className="nav-link-premium">

                {l.label}

              </NavLink>

            ))}

            <NavLink

              href="#contato"

              className="px-5 py-2.5 rounded-xl btn-primary-premium font-semibold text-sm text-primary-foreground"

            >

              Simular Meu Projeto

            </NavLink>

          </nav>



          <button

            className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"

            onClick={() => setMobileOpen(!mobileOpen)}

            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}

          >

            {mobileOpen ? <X size={22} /> : <Menu size={22} />}

          </button>

        </div>



        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}

      </div>

    </header>

  );

};



export default SolarNav;

