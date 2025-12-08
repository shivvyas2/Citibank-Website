import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Shield, Zap, TrendingUp, Database, Lock, GitBranch, CloudCog, FileCheck, Users, ArrowRight, BarChart3, Info, Download, Briefcase, UserCheck, Target, LineChart as LineChartIcon, AlertTriangle, Upload, ImageIcon, DollarSign, Clock } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
      className="flex flex-col items-center p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-all duration-300"
    >
      <div className="text-4xl font-bold text-primary mb-2">{animatedValue}</div>
      <div className="text-sm text-muted-foreground text-center">{label}</div>
    </motion.div>
  );
}

function Index() {
  return (
    <PageLayout>
      {/* Citi Strategic Gap Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-warning/5 via-transparent to-primary/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-start">
            {/* Left Text Block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Eyebrow Label */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-warning/10 border border-warning/30"
              >
                <AlertTriangle className="w-4 h-4 text-warning" />
                <span className="text-xs font-bold tracking-widest text-warning uppercase">The Strategic Gap</span>
              </motion.div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Citi is the only top-4 bank{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-warning to-destructive">
                  without
                </span>{" "}
                a built-in credit intelligence layer.
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                Unlock 15–20% more approvals from declined applications — without elevating risk.
              </p>
              
              {/* Compliance Blurb */}
              <p className="text-sm text-muted-foreground/70 leading-relaxed">
                Built to align with Reg B (ECOA) and SPCP frameworks — trusted, fair, compliant expansion of approvals.
              </p>

              {/* Strategic Gap Body Text */}
              <div className="space-y-4 text-muted-foreground leading-relaxed border-l-2 border-warning/30 pl-5">
                <p className="font-medium text-foreground">
                  Citi customers cannot:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    <span>View their real credit score</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    <span>Prequalify instantly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    <span>See predictive card or loan pathways</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    <span>Activate offers inside the Citi App</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    <span>Build or strengthen thin credit files</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warning mt-1">•</span>
                    <span>Recover from declines with guided steps</span>
                  </li>
                </ul>
                <p className="text-warning font-semibold pt-3">
                  This single missing capability breaks Citi's funnel.
                </p>
                <p className="text-sm">
                  Competitors intercept intent before Citi even sees the demand signal — using Citi's own customers' open-banking data.
                </p>
                <p className="text-foreground font-medium pt-2">
                  LUMIQ AI can close this gap with a turnkey Credit Journey™ that integrates within 90 days.
                </p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link to="/how-it-works">
                  <Button size="lg" className="text-base px-6 py-6 rounded-xl shadow-[0_0_30px_rgba(51,204,255,0.3)] hover:shadow-[0_0_40px_rgba(51,204,255,0.5)] transition-all duration-300">
                    See how it works in 90 seconds
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/pilot">
                  <Button variant="outline" size="lg" className="text-base px-6 py-6 rounded-xl border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                    Explore pilot for Q1 2026
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - Comparison Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-card/80 backdrop-blur-xl border border-border/60 rounded-2xl overflow-hidden shadow-2xl">
                {/* Panel Header */}
                <div className="bg-muted/50 px-6 py-5 border-b border-border/50">
                  <h2 className="text-lg font-bold text-foreground">Who has in-app credit intelligence today?</h2>
                  <p className="text-sm text-muted-foreground mt-1">Consumer & business credit visibility vs Citi</p>
                </div>

                {/* Comparison Rows */}
                <div className="divide-y divide-border/40">
                  {/* Chase Row */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="p-5 hover:bg-muted/20 transition-colors duration-200 group"
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
                      <div className="w-full lg:w-48 aspect-video bg-muted/30 border border-dashed border-border/60 rounded-lg flex flex-col items-center justify-center gap-2 group-hover:border-primary/40 transition-colors">
                        <ImageIcon className="w-6 h-6 text-muted-foreground/50" />
                        <span className="text-xs text-muted-foreground/70 text-center px-2">Add Credit Journey screenshot here</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Capital One Row */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="p-5 hover:bg-muted/20 transition-colors duration-200 group"
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
                      <div className="w-full lg:w-48 aspect-video bg-muted/30 border border-dashed border-border/60 rounded-lg flex flex-col items-center justify-center gap-2 group-hover:border-primary/40 transition-colors">
                        <ImageIcon className="w-6 h-6 text-muted-foreground/50" />
                        <span className="text-xs text-muted-foreground/70 text-center px-2">Add CreditWise screenshot here</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Wells Fargo Row */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="p-5 hover:bg-muted/20 transition-colors duration-200 group"
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
                      <div className="w-full lg:w-48 aspect-video bg-muted/30 border border-dashed border-border/60 rounded-lg flex flex-col items-center justify-center gap-2 group-hover:border-primary/40 transition-colors">
                        <ImageIcon className="w-6 h-6 text-muted-foreground/50" />
                        <span className="text-xs text-muted-foreground/70 text-center px-2">Add Wells business credit screenshot here</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Citi Row - Highlighted */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: [1, 1.01, 1] }}
                    transition={{ delay: 0.7, scale: { delay: 1.2, duration: 0.4 } }}
                    className="p-5 bg-warning/5 border-l-4 border-warning relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-warning/10 to-transparent opacity-50" />
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
                <div className="bg-muted/30 px-6 py-4 border-t border-border/50">
                  <p className="text-xs text-muted-foreground text-center">
                    Data reflects publicly available product launches. LUMIQ AI Business Credit Journey™ closes this gap.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Bridge Section */}
      <section className="py-20 relative bg-gradient-to-b from-background via-card/20 to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto"
          >
            {/* Title with Citi red accent */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                What Citi Is Missing — And What We Built To{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-warning to-destructive">
                  Close It Overnight.
                </span>
              </h2>
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-14 max-w-4xl mx-auto space-y-4"
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Citi is the only top-4 bank with neither a consumer credit journey nor a business credit journey inside its app.
                <br />
                <span className="text-foreground font-medium">So competitors own Citi's intent moments across both segments.</span>
              </p>
            </motion.div>

            {/* Two-Column Layout */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-14">
              {/* Consumer Use Cases */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card/40 backdrop-blur border border-border/50 rounded-2xl p-6 lg:p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Consumer customers need an in-app place to:</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>View their real credit score</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Understand eligibility</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Receive dynamic pre-qualified card/loan offers</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Strengthen their credit file</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Take action inside the Citi App</span>
                  </li>
                </ul>
              </motion.div>

              {/* Business Use Cases */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-card/40 backdrop-blur border border-primary/30 rounded-2xl p-6 lg:p-8 shadow-[0_0_30px_rgba(51,204,255,0.1)]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Business customers need an in-app place to:</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>See Owner FICO/VantageScore + Business Score in one dashboard</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Understand funding readiness</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>View instant prequalifications for Citi Business cards</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Build creditworthiness with guided steps</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Convert into higher-quality lending funnels</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Concluding Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                Chase, Capital One, and Wells Fargo each built only one side of this stack.
                <br />
                <span className="text-warning font-semibold">Citi has neither side — which is why intent escapes.</span>
              </p>
              <p className="text-lg text-foreground font-semibold">
                LUMIQ AI built both sides, fully functional today — ready for Citi.
              </p>
              <p className="text-base text-muted-foreground mt-4">
                Below is the dual-system approach: <span className="text-secondary">Consumer Credit Journey</span> + <span className="text-primary">Business Credit Journey</span>
              </p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-2 text-muted-foreground"
              >
                <span className="text-xs uppercase tracking-widest">See the solution</span>
                <ArrowRight className="w-5 h-5 rotate-90" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Citi Dual-Engine Hero Section */}
      <section className="py-24 relative bg-[#0a1628]">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0a1628] to-background" />
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Two Cards Side by Side */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Left Card - Consumer */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="h-full bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl border border-secondary/30 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(92,191,239,0.15)]">
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

                {/* Screenshot Placeholder */}
                <div className="mx-6 mt-6 aspect-video bg-gradient-to-br from-secondary/10 to-primary/5 border-2 border-dashed border-secondary/30 rounded-xl flex flex-col items-center justify-center gap-3">
                  <ImageIcon className="w-10 h-10 text-secondary/50" />
                  <span className="text-sm text-secondary/70 text-center px-4">Insert Citi Consumer App Mockup Here</span>
                  <div className="text-xs text-muted-foreground/60 text-center px-6 mt-2">
                    Score wheel → Pre-approved offers → 1-tap Apply
                  </div>
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
              <div className="h-full bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl border border-primary/40 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(51,204,255,0.2)]">
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

                {/* Screenshot Placeholder */}
                <div className="mx-6 mt-6 aspect-video bg-gradient-to-br from-primary/10 to-secondary/5 border-2 border-dashed border-primary/30 rounded-xl flex flex-col items-center justify-center gap-3">
                  <ImageIcon className="w-10 h-10 text-primary/50" />
                  <span className="text-sm text-primary/70 text-center px-4">Insert Citi Business App Mockup Here</span>
                  <div className="text-xs text-muted-foreground/60 text-center px-6 mt-2">
                    Owner Score + Business Score → Pre-approved → 1-tap Apply
                  </div>
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
            className="mt-16 mb-12"
          >
            <h3 className="text-center text-sm font-bold tracking-widest text-primary uppercase mb-8">What It Does</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Find creditworthy applicants Citi currently declines</h4>
                <p className="text-sm text-muted-foreground">Unlock hidden revenue from qualified customers slipping through the cracks.</p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Approve more, without increasing default risk</h4>
                <p className="text-sm text-muted-foreground">Expand approvals confidently with risk-calibrated decisioning.</p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/50 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Expand credit access compliantly and fairly</h4>
                <p className="text-sm text-muted-foreground">Built for Reg B, ECOA, and SPCP alignment from day one.</p>
              </div>
            </div>
          </motion.div>

          {/* Differentiator Line */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16 max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px top-1/2" />
              <p className="text-lg md:text-xl font-bold text-foreground bg-[#0a1628] px-8 inline-block relative">
                Chase built one credit engine (consumer). Capital One built one (consumer). Wells built one (business).
              </p>
            </div>
            <p className="text-2xl md:text-3xl font-bold mt-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-secondary">
                Citi becomes the first to deploy both.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: THE COMPETITIVE COST */}
      <section className="py-24 relative" style={{ background: 'linear-gradient(180deg, #0B0F14 0%, #131920 100%)' }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              THE COMPETITIVE COST
            </h3>
            <p className="text-lg text-[#ADB7C4] max-w-3xl">
              Citi is losing approvals, spend, and loyalty at the exact moment customers form credit intent. Competitors intercept Citi customers before they reach Citi's funnels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl">
            {/* Left Column - Competitor Diversion */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-foreground font-semibold mb-4">Each month Citi's customers are diverted to:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground"><span className="font-bold">Chase:</span> In-app prequals + 1-tap approvals</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground"><span className="font-bold">Capital One:</span> CreditWise → funnel dominance</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground"><span className="font-bold">Wells Fargo:</span> Close-Up → SMB activation</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground"><span className="font-bold">Apple Card / AmEx:</span> frictionless instant approvals</span>
                </li>
              </ul>
            </motion.div>

            {/* Right Column - Revenue Leakage Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#111821] border border-[#1E2833] rounded-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(239,68,68,0.1)]">
                <h4 className="text-xl font-bold text-foreground mb-6">
                  Estimated Annual Revenue Leakage
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline border-b border-border/30 pb-3">
                    <span className="text-muted-foreground">Consumer:</span>
                    <span className="text-2xl font-bold text-amber-400">$600M–$900M</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-border/30 pb-3">
                    <span className="text-muted-foreground">Business:</span>
                    <span className="text-2xl font-bold text-orange-500">$300M–$700M</span>
                  </div>
                  <div className="flex justify-between items-baseline pt-2">
                    <span className="text-foreground font-semibold">Total:</span>
                    <span className="text-3xl font-bold text-red-500">$900M–$1.6B lost annually</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footnote */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-[#8993A1] mt-8"
          >
            Benchmarking: Credit Journey, CreditWise, Close-Up, applied to Citi TAM.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-end mt-8"
          >
            <Button variant="outline" className="group border-primary/50 hover:border-primary hover:bg-primary/10">
              View Full Competitive Analysis
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 5: THE IMPACT - WHAT CITI GAINS */}
      <section className="py-24 relative" style={{ background: 'linear-gradient(180deg, #0E141B 0%, #16212B 100%)' }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              THE IMPACT: WHAT CITI GAINS
            </h3>
            <p className="text-lg text-[#ADB7C4] max-w-3xl">
              Modeled on Chase Credit Journey, Capital One CreditWise, Wells Fargo Close-Up, and calibrated to Citi's TAM.
            </p>
          </motion.div>

          {/* 2x2 Impact Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl">
            {/* Metric 1 - Consumer Lift */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 shadow-[0_-10px_40px_rgba(51,204,255,0.05)]"
            >
              <h4 className="text-xl font-bold text-primary mb-4">Consumer Lift</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-foreground">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span><span className="font-semibold text-success">+12–24%</span> approval lift</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span><span className="font-semibold text-success">+25–40%</span> fewer manual reviews</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span><span className="font-semibold text-success">2–3×</span> engagement</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span><span className="font-semibold text-success">+5–10%</span> card conversions</span>
                </li>
              </ul>
            </motion.div>

            {/* Metric 2 - Business Lift */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 shadow-[0_-10px_40px_rgba(51,204,255,0.05)]"
            >
              <h4 className="text-xl font-bold text-primary mb-4">Business Lift</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-foreground">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span><span className="font-semibold text-success">+18–30%</span> approval lift</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span><span className="font-semibold text-success">+35–50%</span> fewer manual reviews</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span><span className="font-semibold text-success">+5–12%</span> SMB conversions</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span><span className="font-semibold text-success">+$300M–$700M</span> uplift</span>
                </li>
              </ul>
            </motion.div>

            {/* Metric 3 - Total Financial Impact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 shadow-[0_-10px_40px_rgba(51,204,255,0.05)]"
            >
              <h4 className="text-xl font-bold text-primary mb-4">Total Financial Impact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-foreground">
                  <DollarSign className="w-4 h-4 text-success" />
                  <span><span className="font-semibold text-success">+$900M–$1.6B</span> annual uplift</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <DollarSign className="w-4 h-4 text-success" />
                  <span><span className="font-semibold text-success">Zero CAC</span></span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <DollarSign className="w-4 h-4 text-success" />
                  <span>First-mover advantage in credit intelligence</span>
                </li>
              </ul>
            </motion.div>

            {/* Metric 4 - Development Savings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 shadow-[0_-10px_40px_rgba(51,204,255,0.05)]"
            >
              <h4 className="text-xl font-bold text-primary mb-4">Development Savings</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-foreground">
                  <Clock className="w-4 h-4 text-success" />
                  <span>Save <span className="font-semibold text-success">$40M–$70M</span> in build cost</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <Clock className="w-4 h-4 text-success" />
                  <span>Save <span className="font-semibold text-success">18–24 months</span> of internal development</span>
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>LumiqAI deploys in <span className="font-semibold text-primary">90 days</span></span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* CTA Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-end mt-12"
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
      <section id="how-it-works" className="py-24 relative scroll-mt-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three steps to convert qualified customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 group text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-primary">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                  </CardContent>
                </Card>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300 text-center">
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
                <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300">
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
      <section className="py-24 relative bg-card/20">
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

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
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
                <Card className="h-full bg-card/50 backdrop-blur border-border/50">
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

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
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
                <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-primary/30 transition-all duration-300">
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
      <section id="cta" className="py-32 relative scroll-mt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Start a 6-Week Pilot with Pre-Agreed Success Criteria
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Non-disruptive integration. Measurable results. Built on proven principles.
            </p>
            <Button size="lg" className="text-lg px-10 py-7 rounded-xl shadow-[0_0_40px_rgba(51,204,255,0.4)] hover:shadow-[0_0_60px_rgba(51,204,255,0.6)] transition-all duration-300">
              Book a 20-minute pilot review — see conversion lift & model audit in action
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Index;
