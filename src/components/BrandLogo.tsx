import Image from "next/image";
import { brandLogo } from "@/lib/images";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "nav" | "footer";
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ variant = "nav", className, priority }: BrandLogoProps) {
  if (variant === "nav") {
    return (
      <span className={cn("brand-logo brand-logo--nav", className)}>
        <span className="brand-logo-mark" aria-hidden>
          <Image
            src={brandLogo.src}
            alt=""
            width={brandLogo.width}
            height={brandLogo.height}
            priority={priority}
            className="brand-logo-mark-img"
          />
        </span>
        <span className="brand-logo-wordmark">
          Solar<span className="text-primary">Elite</span>
        </span>
      </span>
    );
  }

  return (
    <span className={cn("brand-logo brand-logo--footer", className)}>
      <Image
        src={brandLogo.src}
        alt="SolarElite"
        width={brandLogo.width}
        height={brandLogo.height}
        className="brand-logo-img"
      />
    </span>
  );
}
