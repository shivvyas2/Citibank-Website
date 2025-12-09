import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    if (openDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [openDropdown]);

  const navigation = [
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Case Study", href: "/case-study" },
    // { label: "Demo", href: "/demo" }, // Commented out - keeping code as backup
    { label: "Pilot", href: "/pilot" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }} 
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg"
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
              <Building2 className="h-5 w-5 text-primary-foreground" />
          </motion.div>
            <div className="font-heading text-xl font-bold tracking-tight text-foreground">
              LUMIQ AI × Citi
          </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <li key={item.href} className="relative">
                <Link
                  to={item.href}
                  className="text-sm font-medium text-foreground/70 transition-colors duration-150 hover:text-foreground relative group"
                >
                  {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden md:inline-flex rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              <Link to="/#cta">Book Review</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-foreground/10 bg-background lg:hidden max-h-[calc(100vh-160px)] overflow-y-auto">
          <ul className="container mx-auto px-4 py-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-foreground hover:text-primary transition-colors duration-150"
                >
                  {item.label}
          </Link>
              </li>
            ))}
            <li className="pt-4">
              <Button asChild className="w-full rounded-full">
                <Link to="/#cta" onClick={() => setIsMobileMenuOpen(false)}>
                  Book Review
          </Link>
              </Button>
            </li>
          </ul>
      </div>
      )}
    </header>
  );
}
