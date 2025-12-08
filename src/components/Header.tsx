import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <motion.div 
            initial={{ opacity: 0, scale: .8, rotate: -10 }} 
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
            transition={{ duration: .5, type: "spring", stiffness: 200 }} 
            className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <Rocket className="h-5 w-5 text-primary-foreground"/>
          </motion.div>
          <div className="font-display text-xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            LumiqAI × Citi
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group">
            How It Works
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/case-study" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group">
            Case Study
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/demo" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group">
            Demo
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <Link to="/pilot" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group">
            Pilot
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
          <a 
            href="/#cta" 
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:shadow-[0_0_20px_rgba(51,204,255,0.4)] transition-all duration-300"
          >
            Book Review
          </a>
        </nav>
      </div>
    </header>
  );
}
