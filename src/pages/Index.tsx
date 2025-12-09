import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Shield, Zap, TrendingUp, Database, Lock, GitBranch, CloudCog, FileCheck, Users, ArrowRight, BarChart3, Info, Download, Briefcase, UserCheck, Target, LineChart as LineChartIcon, AlertTriangle, Upload, ImageIcon, DollarSign, Clock } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Footer } from "@/components/Footer";
import { Hero, BankComparison, StrategicBridge } from "@/components/sections/home";
import { ImpactChatWidget } from "@/components/ImpactChatWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Animated counter hook
function useCountUp(target: number, isInView: boolean, suffix = "") {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, isInView]);
  return count + suffix;
}

function MetricCard({ value, label, suffix = "", delay = 0 }: { value: number; label: string; suffix?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const animatedValue = useCountUp(value, isInView, suffix);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center p-6 rounded-xl bg-card border border-border shadow-sm hover:border-primary/50 transition-all duration-300"
    >
      <div className="text-4xl font-bold text-primary mb-2">{animatedValue}</div>
      <div className="text-sm text-muted-foreground text-center">{label}</div>
    </motion.div>
  );
}

function Index() {
  return (
    <PageLayout>
      <Hero />
      <BankComparison />
      <StrategicBridge />

      {/* Citi Dual-Engine Hero Section */}
      <section className="py-24 relative bg-background">
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-7xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight mb-4">
              Chase, Capital One, and Wells Fargo each built only one side of this stack.
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-tight mb-4">
              Citi has neither side — which is why intent escapes.
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                LUMIQ AI built both sides, fully functional today — ready for Citi.
              </span>
            </h2>
          </motion.div>

          {/* Two Cards Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            
            {/* Left Card - Consumer */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="h-full bg-card border border-border rounded-2xl overflow-hidden shadow-lg">
                {/* Card Header */}
                <div className="bg-secondary/10 px-6 py-5 border-b border-secondary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-secondary">Powered by LumiqAI</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Citi Consumer Credit Journey</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Real-time visibility + instant prequal + 1-tap apply for Citi's entire consumer card portfolio.
                  </p>
                </div>

                {/* Mockup Images - 3 Phones */}
                <div className="mx-6 mt-6 flex items-center justify-center">
                  <img
                    src="/3 phone Consumer.png"
                    alt="Citi Consumer Credit Journey - 3 Phone Mockups"
                    className="w-full max-w-full h-auto object-contain rounded-xl"
                  />
                </div>

                {/* Features */}
                <div className="p-6 space-y-3">
                  <ul className="space-y-2.5 text-sm">
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Display daily VantageScore 3.0</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>AI-driven prequalification for Citi consumer cards</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>1-tap Apply for eligible users</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Decline recovery flow</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Predictive pathways & credit simulations</span>
                    </li>
                  </ul>
                </div>

                {/* Impact Footer */}
                <div className="bg-secondary/5 px-6 py-4 border-t border-secondary/20">
                  <p className="text-xs font-bold uppercase tracking-wider text-secondary mb-3">Impact for Citi</p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="text-muted-foreground"><span className="text-secondary font-semibold">+18–25%</span> consumer approvals</div>
                    <div className="text-muted-foreground"><span className="text-secondary font-semibold">30–50%</span> more organic apps</div>
                    <div className="text-muted-foreground"><span className="text-secondary font-semibold">$300M–$500M</span> recovered revenue</div>
                    <div className="text-muted-foreground"><span className="text-secondary font-semibold">Zero CAC</span> in-app activation</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Card - Business */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="h-full bg-card border border-primary/30 rounded-2xl overflow-hidden shadow-lg">
                {/* Card Header */}
                <div className="bg-primary/10 px-6 py-5 border-b border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Powered by LumiqAI</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Citi Business Credit Journey</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Unified Owner FICO + Business Score + AI eligibility for Citi's SMB credit products.
                  </p>
                </div>

                {/* Mockup Images - 3 Phones */}
                <div className="mx-6 mt-6 flex items-center justify-center">
                  <img
                    src="/3 phones Business.png"
                    alt="Citi Business Credit Journey - 3 Phone Mockups"
                    className="w-full max-w-full h-auto object-contain rounded-xl"
                  />
                </div>

                {/* Features */}
                <div className="p-6 space-y-3">
                  <ul className="space-y-2.5 text-sm">
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Experian Business Score + Owner Score displayed together</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>AI-powered prequal for Citi small-business cards</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Predictive loan pathways</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>1-tap Apply inside the Citi Business App</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Thin-file enhancement (cashflow + risk layering)</span>
                    </li>
                  </ul>
                </div>

                {/* Impact Footer */}
                <div className="bg-primary/5 px-6 py-4 border-t border-primary/20">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Impact for Citi</p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="text-muted-foreground"><span className="text-primary font-semibold">+20–30%</span> SMB approvals</div>
                    <div className="text-muted-foreground"><span className="text-primary font-semibold">25–40%</span> fewer manual reviews</div>
                    <div className="text-muted-foreground"><span className="text-primary font-semibold">$300M–$700M</span> incremental revenue</div>
                    <div className="text-muted-foreground"><span className="text-primary font-semibold">First bank</span> with unified intelligence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* What It Does Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 mb-16"
          >
            <h3 className="text-center text-2xl md:text-3xl font-heading font-bold text-foreground mb-12">What It Does</h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">Find creditworthy applicants Citi currently declines</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Unlock hidden revenue from qualified customers slipping through the cracks.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">Approve more, without increasing default risk</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Expand approvals confidently with risk-calibrated decisioning.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">Expand credit access compliantly and fairly</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Built for Reg B, ECOA, and SPCP alignment from day one.</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Section 4: THE COMPETITIVE COST */}
      <section className="py-24 relative bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              The Competitive Cost
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Citi is losing approvals, spend, and loyalty at the exact moment customers form credit intent. Competitors intercept Citi customers before they reach Citi's funnels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Left Column - Competitor Diversion */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-secondary/30">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6">
                    <AlertTriangle className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-6">Each month Citi's customers are diverted to:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-20 h-12 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0 p-2">
                        <img src="/The Compet Cost/chase.svg" alt="Chase" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <span className="text-foreground font-semibold">Chase:</span>
                        <span className="text-muted-foreground ml-2">In-app prequals + 1-tap approvals</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-20 h-12 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0 p-2">
                        <img src="/The Compet Cost/Capital_One_logo.svg" alt="Capital One" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <span className="text-foreground font-semibold">Capital One:</span>
                        <span className="text-muted-foreground ml-2">CreditWise → funnel dominance</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-20 h-12 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0 p-2">
                        <img src="/The Compet Cost/wells-fargo.svg" alt="Wells Fargo" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <span className="text-foreground font-semibold">Wells Fargo:</span>
                        <span className="text-muted-foreground ml-2">Close-Up → SMB activation</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-20 h-12 rounded-xl bg-card border border-border flex items-center justify-center flex-shrink-0 p-2">
                        <img src="/The Compet Cost/Apple_Card.svg" alt="Apple Card" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <span className="text-foreground font-semibold">Apple Card:</span>
                        <span className="text-muted-foreground ml-2">frictionless instant approvals</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Revenue Leakage Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-primary/30">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-6">
                    Estimated Annual Revenue Leakage
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-baseline border-b border-border pb-4">
                      <span className="text-muted-foreground font-medium">Consumer:</span>
                      <span className="text-2xl font-bold text-primary">$600M–$900M</span>
                    </div>
                    <div className="flex justify-between items-baseline border-b border-border pb-4">
                      <span className="text-muted-foreground font-medium">Business:</span>
                      <span className="text-2xl font-bold text-primary">$300M–$700M</span>
                    </div>
                    <div className="flex justify-between items-baseline pt-2">
                      <span className="text-foreground font-bold text-lg">Total:</span>
                      <span className="text-3xl font-bold text-primary">$900M–$1.6B lost annually</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Footnote */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-muted-foreground mt-8 text-center"
          >
            Benchmarking: Credit Journey, CreditWise, Close-Up, applied to Citi TAM.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-10"
          >
            <Button variant="outline" className="group border-primary/50 hover:border-primary hover:bg-primary/10">
              View Full Competitive Analysis
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 5: THE IMPACT - WHAT CITI GAINS */}
      <section className="py-24 relative bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              The Impact: What Citi Gains
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Modeled on Chase Credit Journey, Capital One CreditWise, Wells Fargo Close-Up, and calibrated to Citi's TAM.
            </p>
          </motion.div>

          {/* 2x2 Impact Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {/* Metric 1 - Consumer Lift */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-success/10 border border-success/20 flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-6">Consumer Lift</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+12–24%</span> approval lift</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+25–40%</span> fewer manual reviews</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">2–3×</span> engagement</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+5–10%</span> card conversions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Metric 2 - Business Lift */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-success/10 border border-success/20 flex items-center justify-center mb-6">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-6">Business Lift</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+18–30%</span> approval lift</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+35–50%</span> fewer manual reviews</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+5–12%</span> SMB conversions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-success"></div>
                      <span className="text-foreground"><span className="font-semibold text-success">+$300M–$700M</span> uplift</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Metric 3 - Total Financial Impact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-primary/30">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-6">Total Financial Impact</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-foreground"><span className="font-semibold text-primary">+$900M–$1.6B</span> annual uplift</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-foreground"><span className="font-semibold text-primary">Zero CAC</span></span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-foreground">First-mover advantage in credit intelligence</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Metric 4 - Development Savings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-secondary/30">
                <CardContent className="p-6 md:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-6">Development Savings</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-foreground">Save <span className="font-semibold text-secondary">$40M–$70M</span> in build cost</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-foreground">Save <span className="font-semibold text-secondary">18–24 months</span> of internal development</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-foreground">LumiqAI deploys in <span className="font-semibold text-primary">90 days</span></span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* CTA Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mt-12"
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group">
              Review Citi Pilot Plan
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Closing Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-xl md:text-2xl font-bold mt-12 text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary"
          >
            Citi becomes the only bank in America with a dual consumer + business credit intelligence engine.
          </motion.p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="pt-24 md:pt-32 lg:pt-40 pb-24 md:pb-32 lg:pb-40 relative scroll-mt-20 bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-24"
          >
            <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-6">
              HOW IT WORKS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
              Three steps to convert qualified customers
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform declined applicants into approved customers through intelligent analysis and compliant expansion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {[
              {
                step: 1,
                title: "Analyze declined applicants",
                description: "Review your existing decline population to identify patterns and underwriting gaps.",
                icon: Database
              },
              {
                step: 2,
                title: "Identify hidden creditworthy segments",
                description: "Surface qualified applicants that current models miss using alternative data signals.",
                icon: Target
              },
              {
                step: 3,
                title: "Approve safely through SPCP programs",
                description: "Expand credit access compliantly through Special Purpose Credit Programs.",
                icon: CheckCircle2
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="group h-full bg-background rounded-2xl p-10 lg:p-12 transition-all duration-300 shadow-sm hover:shadow-lg border border-border">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Step Number */}
                  <div className="text-primary text-sm font-semibold uppercase tracking-wide mb-4">
                    Step {item.step}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-heading text-foreground mb-6">{item.title}</h3>

                  {/* Description */}
                  <p className="text-base md:text-lg font-body text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 relative bg-card/10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">For Product & Risk Leaders</h2>
            <p className="text-muted-foreground">Built for decision-makers who drive portfolio growth and manage risk</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { icon: Briefcase, title: "SMB Card Portfolio Owners", description: "Drive card adoption and spend" },
              { icon: LineChartIcon, title: "Digital Banking / Platform Heads", description: "Embed credit intelligence into channels" },
              { icon: UserCheck, title: "Credit Policy / Underwriting Ops", description: "Maintain model-risk controls" },
              { icon: Target, title: "Lending Product Leads", description: "Expand to LOC, term loans (Stage 2)" }
            ].map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border border-border shadow-sm hover:border-primary/30 transition-all duration-300 text-center">
                  <CardContent className="pt-8 pb-8">
                    <role.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="text-base font-bold mb-2">{role.title}</h3>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value & Outcomes */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Value & Outcomes</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Revenue",
                description: "More right-fit customers; higher spend and utilization.",
                color: "text-success"
              },
              {
                icon: Shield,
                title: "Risk",
                description: "Consistent underwriting inputs; explainable decisions; portfolio governance.",
                color: "text-primary"
              },
              {
                icon: Zap,
                title: "Ops",
                description: "Fewer manual reviews; faster decisions; lower cost per booked account.",
                color: "text-secondary"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border border-border shadow-sm hover:border-primary/30 transition-all duration-300">
                  <CardContent className="pt-8 pb-8 text-center">
                    <item.icon className={`w-12 h-12 ${item.color} mx-auto mb-4`} />
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-24 relative bg-background-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Security & Compliance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Bank-grade security and regulatory compliance built in
            </p>
            <p className="text-base text-primary/80 max-w-3xl mx-auto mt-4 font-medium">
              SPCP and Fair Lending alignment built into design — compliant credit expansion, not relaxed underwriting.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Lock,
                title: "Security Controls",
                items: ["SOC 2–aligned controls", "Encryption in transit & at rest", "RBAC & SSO"]
              },
              {
                icon: FileCheck,
                title: "Data Governance",
                items: ["Data-lineage tracking", "Decision snapshots", "Retention policy"]
              },
              {
                icon: Shield,
                title: "Regulatory Design",
                items: ["ECOA / FCRA / GLBA / UDAP / CRA", "Model-risk governance ready", "Adverse-action tracking"]
              },
              {
                icon: CheckCircle2,
                title: "Audit Trail",
                items: ["100% coverage", "Inputs, transformations, outputs", "Real-time monitoring"]
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border border-border shadow-sm">
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <ul className="space-y-2">
                          {item.items.map((listItem) => (
                            <li key={listItem} className="flex items-start gap-2 text-muted-foreground text-sm">
                              <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                              <span>{listItem}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Integration</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible deployment options that work with your existing infrastructure
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                icon: GitBranch,
                title: "APIs & SDKs",
                description: "APIs & SDKs with sandbox; batch or real-time options"
              },
              {
                icon: Zap,
                title: "Non-Disruptive",
                description: "Non-disruptive pilot; integrates alongside your existing stack"
              },
              {
                icon: CloudCog,
                title: "Deployment",
                description: "Deployable in bank cloud/VPC or vendor-hosted with private connectivity"
              },
              {
                icon: Shield,
                title: "SLAs",
                description: "SLAs: uptime, RTO/RPO, incident response"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border border-border shadow-sm hover:border-primary/30 transition-all duration-300">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <item.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-32 relative scroll-mt-20 bg-primary/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Start a 6-Week Pilot with Pre-Agreed Success Criteria
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Non-disruptive integration. Measurable results. Built on proven principles.
            </p>
            <Button size="lg" className="gap-2">
              Book a 20-minute pilot review — see conversion lift & model audit in action
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <ImpactChatWidget />
      <Footer />
    </PageLayout>
  );
}

export default Index;

