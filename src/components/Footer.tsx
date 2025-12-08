import { Link } from "react-router-dom";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Case Study", href: "/case-study" },
    { label: "Demo", href: "/demo" },
    { label: "Pilot", href: "/pilot" },
  ];

  return (
    <footer className="bg-primary/10 text-foreground/70">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="font-heading text-xl font-bold tracking-tight text-foreground">
                LUMIQ AI × Citi
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-foreground/60">
              Unlock 15–20% more approvals from declined applications — without elevating risk.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-4 text-xl sm:text-2xl font-heading text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm font-medium text-foreground/60 transition-colors duration-150 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="mb-4 text-xl sm:text-2xl font-heading text-foreground">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/revolution"
                  className="text-sm font-medium text-foreground/60 transition-colors duration-150 hover:text-primary"
                >
                  The Revolution
                </Link>
              </li>
              <li>
                <Link
                  to="/impact"
                  className="text-sm font-medium text-foreground/60 transition-colors duration-150 hover:text-primary"
                >
                  Impact
                </Link>
              </li>
              <li>
                <Link
                  to="/uss"
                  className="text-sm font-medium text-foreground/60 transition-colors duration-150 hover:text-primary"
                >
                  USS
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-4 text-xl sm:text-2xl font-heading text-foreground">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm font-medium text-foreground/60">
              <li className="flex items-start gap-2">
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0"
                />
                <a
                  href="mailto:contact@lumiqai.com"
                  className="hover:text-primary transition-colors duration-150"
                >
                  contact@lumiqai.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone
                  size={16}
                  className="shrink-0"
                />
                <span>Schedule a Demo</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-foreground/10 bg-primary/3">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-foreground/50 md:flex-row">
          <p>
            © {currentYear} LUMIQ AI. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="transition-colors duration-150 hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="transition-colors duration-150 hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

