import { ReactNode } from "react";
import { motion, useScroll } from "framer-motion";
import { Header } from "./Header";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="bg-background min-h-screen text-foreground font-sans relative antialiased">
      {/* Premium mesh gradient background */}
      <div className="fixed inset-0 pointer-events-none opacity-40" style={{ background: 'var(--gradient-mesh)' }} />
      
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed left-0 top-0 right-0 h-0.5 z-50 origin-left"
        style={{
          scaleX: scrollYProgress,
          background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)))',
        }}
      />

      {/* Animated noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }} />
      </div>

      <Header />
      
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
}
