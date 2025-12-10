import { ReactNode } from "react";

interface HeroBackgroundProps {
  children: ReactNode;
}

export default function HeroBackground({ children }: HeroBackgroundProps) {
  return (
    <section className="relative overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center bg-gradient-to-br from-primary via-primary to-secondary pt-32 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>
    </section>
  );
}


