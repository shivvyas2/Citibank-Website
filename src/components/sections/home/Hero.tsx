import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, CheckCircle2, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-44 md:pt-44 lg:pt-52 bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto">
        <div className="space-y-8 text-center">
          <div className="space-y-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 pl-1 pr-4 py-1 bg-background text-primary rounded-full text-xs font-ui font-semibold uppercase tracking-wide">
              <div className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full">
                <AlertTriangle className="w-4 h-4 text-primary" />
              </div>
              THE STRATEGIC GAP
            </div>

            {/* Heading */}
            <h1 className="mx-auto max-w-4xl text-5xl md:text-7xl lg:text-8xl font-heading leading-tight tracking-tight text-foreground">
              Citi is the only top-4 bank{" "}
              <span className="text-primary">without</span> a built-in credit intelligence layer.
            </h1>

            {/* Description */}
            <p className="mx-auto max-w-2xl text-lg font-body text-foreground/70">
              Unlock 15–20% more approvals from declined applications — without elevating risk.
              Built to align with Reg B (ECOA) and SPCP frameworks.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/how-it-works">
              <Button size="lg" variant="default" className="gap-2">
                See how it works in 90 seconds
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/pilot">
              <Button size="lg" variant="outline" className="gap-2">
                Explore pilot for Q1 2026
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Strategic Gap Content */}
      <div className="container mx-auto px-6 mt-16 md:mt-24">
        <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Strategic Gap Body Text */}
            <div className="space-y-4 text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-5">
              <p className="font-medium text-foreground">
                Citi customers cannot:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>View their real credit score</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Prequalify instantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>See predictive card or loan pathways</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Activate offers inside the Citi App</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Build or strengthen thin credit files</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Recover from declines with guided steps</span>
                </li>
              </ul>
              <p className="text-primary font-semibold pt-3">
                This single missing capability breaks Citi's funnel.
              </p>
              <p className="text-sm">
                Competitors intercept intent before Citi even sees the demand signal — using Citi's own customers' open-banking data.
              </p>
              <p className="text-foreground font-medium pt-2">
                LUMIQ AI can close this gap with a turnkey Credit Journey™ that integrates within 90 days.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Comparison Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
              {/* Panel Header */}
              <div className="bg-primary/5 px-6 py-5 border-b border-border">
                <h2 className="text-lg font-bold text-foreground">Who has in-app credit intelligence today?</h2>
                <p className="text-sm text-muted-foreground mt-1">Consumer & business credit visibility vs Citi</p>
              </div>

              {/* Comparison Rows */}
              <div className="divide-y divide-border">
                {/* Chase Row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="p-5 hover:bg-muted/50 transition-colors duration-200 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg font-bold text-foreground">Chase</span>
                        <span className="px-2 py-0.5 rounded-full bg-success/10 border border-success/30 text-success text-xs font-medium">
                          Credit Journey — 2016 →
                        </span>
                      </div>
                    </div>
                    <div className="w-full lg:w-48 aspect-video bg-muted border border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-2 group-hover:border-primary transition-colors">
                      <ImageIcon className="w-6 h-6 text-muted-foreground/50" />
                      <span className="text-xs text-muted-foreground/70 text-center px-2">Add Credit Journey screenshot here</span>
                    </div>
                  </div>
                </motion.div>

                {/* Capital One Row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="p-5 hover:bg-muted/50 transition-colors duration-200 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg font-bold text-foreground">Capital One</span>
                        <span className="px-2 py-0.5 rounded-full bg-success/10 border border-success/30 text-success text-xs font-medium">
                          CreditWise — 2014 →
                        </span>
                      </div>
                    </div>
                    <div className="w-full lg:w-48 aspect-video bg-muted border border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-2 group-hover:border-primary transition-colors">
                      <ImageIcon className="w-6 h-6 text-muted-foreground/50" />
                      <span className="text-xs text-muted-foreground/70 text-center px-2">Add CreditWise screenshot here</span>
                    </div>
                  </div>
                </motion.div>

                {/* Wells Fargo Row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="p-5 hover:bg-muted/50 transition-colors duration-200 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg font-bold text-foreground">Wells Fargo</span>
                        <span className="px-2 py-0.5 rounded-full bg-success/10 border border-success/30 text-success text-xs font-medium">
                          Credit Close-Up — 2023 →
                        </span>
                      </div>
                    </div>
                    <div className="w-full lg:w-48 aspect-video bg-muted border border-dashed border-border rounded-lg flex flex-col items-center justify-center gap-2 group-hover:border-primary transition-colors">
                      <ImageIcon className="w-6 h-6 text-muted-foreground/50" />
                      <span className="text-xs text-muted-foreground/70 text-center px-2">Add Wells business credit screenshot here</span>
                    </div>
                  </div>
                </motion.div>

                {/* Citi Row - Highlighted */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="p-5 bg-warning/5 border-l-4 border-warning relative overflow-hidden group"
                >
                  <div className="relative flex flex-col lg:flex-row lg:items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-lg font-bold text-foreground">Citi</span>
                        <span className="px-2 py-0.5 rounded-full bg-warning/20 border border-warning/50 text-warning text-xs font-bold flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />
                          No consumer or business credit journey
                        </span>
                      </div>
                    </div>
                    <div className="w-full lg:w-48 aspect-video bg-warning/10 border-2 border-dashed border-warning/40 rounded-lg flex flex-col items-center justify-center gap-2">
                      <ImageIcon className="w-6 h-6 text-warning/60" />
                      <span className="text-xs text-warning/80 text-center px-2 font-medium">Add Citi app home screenshot (no credit widget)</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Panel Footer */}
              <div className="bg-primary/5 px-6 py-4 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  Data reflects publicly available product launches. LUMIQ AI Business Credit Journey™ closes this gap.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

