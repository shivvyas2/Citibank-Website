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

          {/* Right Side - Phone Mockups Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Header */}
            <div className="text-center lg:text-left">
              <h2 className="text-xl font-bold text-foreground mb-2">Who has in-app credit intelligence today?</h2>
              <p className="text-sm text-muted-foreground">Consumer & business credit visibility vs Citi</p>
            </div>

            {/* Two Phone Mockups Side by Side */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Competitor Phone Mockup (e.g., Chase) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-foreground">Chase</span>
                  <span className="px-2 py-0.5 rounded-full bg-success/10 border border-success/30 text-success text-xs font-medium">
                    Credit Journey
                  </span>
                </div>
                {/* Phone Frame */}
                <div className="relative mx-auto" style={{ width: '280px', maxWidth: '100%' }}>
                  {/* Phone Frame Outer */}
                  <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                    {/* Phone Screen Bezel */}
                    <div className="bg-black rounded-[2rem] p-1.5">
                      {/* Notch */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>
                      {/* Screen */}
                      <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-[9/19.5] relative">
                        <img 
                          src="/placeholder.svg" 
                          alt="Chase Credit Journey App" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            const placeholder = (e.target as HTMLImageElement).nextElementSibling;
                            if (placeholder) (placeholder as HTMLElement).style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-muted/30" style={{ display: 'none' }}>
                          <div className="text-center p-4">
                            <ImageIcon className="w-8 h-8 text-muted-foreground/50 mx-auto mb-2" />
                            <span className="text-xs text-muted-foreground/70">Add Chase mockup image</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Citi Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-foreground">Citi</span>
                  <span className="px-2 py-0.5 rounded-full bg-warning/20 border border-warning/50 text-warning text-xs font-bold flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    No credit journey
                  </span>
                </div>
                {/* Phone Frame */}
                <div className="relative mx-auto" style={{ width: '280px', maxWidth: '100%' }}>
                  {/* Phone Frame Outer */}
                  <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl ring-2 ring-warning/30">
                    {/* Phone Screen Bezel */}
                    <div className="bg-black rounded-[2rem] p-1.5">
                      {/* Notch */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10"></div>
                      {/* Screen */}
                      <div className="bg-white rounded-[1.5rem] overflow-hidden aspect-[9/19.5] relative">
                        <img 
                          src="/placeholder.svg" 
                          alt="Citi App - No Credit Journey" 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            const placeholder = (e.target as HTMLImageElement).nextElementSibling;
                            if (placeholder) (placeholder as HTMLElement).style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-warning/5" style={{ display: 'none' }}>
                          <div className="text-center p-4">
                            <ImageIcon className="w-8 h-8 text-warning/60 mx-auto mb-2" />
                            <span className="text-xs text-warning/80 font-medium">Add Citi mockup image</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Note */}
            <div className="text-center pt-4">
              <p className="text-xs text-muted-foreground">
                Data reflects publicly available product launches. LUMIQ AI Business Credit Journey™ closes this gap.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

