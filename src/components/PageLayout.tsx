import { ReactNode } from "react";
import { Header } from "./Header";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="bg-background min-h-screen text-foreground font-body relative antialiased">
      <Header />
      
      <main className="relative z-10 pt-20">
        {children}
      </main>
    </div>
  );
}
