import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { 
  TrendingUp, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Target,
  CheckCircle2,
  ArrowRight,
  Brain,
  Smartphone,
  AlertTriangle,
  XCircle,
  Clock,
  DollarSign,
  Building2,
  CreditCard,
  LineChart,
  Gauge,
  FileCheck,
  Eye,
  Bell,
  ThumbsUp,
  RefreshCw,
  TrendingDown,
  ChevronRight
} from "lucide-react";

export default function CaseStudy() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <PageLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 md:pt-12 lg:pt-16 pb-20 md:pb-24 lg:pb-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
                CITI CASE STUDY · EXECUTIVE EDITION
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-foreground leading-tight">
                Modernizing Citi's Credit Funnel Through{" "}
                <span className="text-primary">Consumer + SMB</span>{" "}
                Credit Intelligence
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                A strategic assessment of Citi's credit visibility gap — and how LumiqAI restores approvals, retention, and competitive positioning across both Consumer and Business Banking.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Study Summary Strip */}
        <section className="py-12 px-6 bg-primary/5 border-y border-primary/20">
          <div className="container mx-auto px-6">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary">18%</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Incremental approvals identified</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary">Comparable</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Performance to existing approved population</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl md:text-3xl font-bold text-primary">Zero</div>
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wide">Underwriting changes — just better signals</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1 - Executive Diagnosis */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">01 — EXECUTIVE DIAGNOSIS</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Executive Diagnosis
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <motion.div {...fadeInUp} className="mb-12 text-center max-w-4xl mx-auto">
                <p className="text-xl text-foreground leading-relaxed mb-6">
                  Citi is now the <span className="font-bold text-primary">only top-4 U.S. bank</span> with neither a consumer nor a business credit-intelligence layer inside its mobile apps. This absence blocks Citi from capturing early credit intent — the most valuable inflection point in the funnel.
                </p>
                <p className="text-xl font-semibold text-destructive">
                  Competitors convert before Citi even appears.
                </p>
                <p className="text-lg text-muted-foreground mt-4">
                  This has become a structural vulnerability affecting consumer cards, SMB lending, digital engagement, and long-term retention.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                  <Card className="h-full border border-border shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="font-bold text-lg text-foreground">Consumer</h3>
                        <p className="text-muted-foreground text-sm">No score visibility, no prequalification, no credit alerts inside Citi App</p>
                      </div>
                      <img 
                        src="/Case Study/Exec Diagnosis/Consumer.png" 
                        alt="Consumer Credit Intelligence Gap"
                        className="w-full h-auto rounded-lg max-w-md mx-auto"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                  <Card className="h-full border border-border shadow-sm hover:shadow-md transition-all">
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="font-bold text-lg text-foreground">SMB</h3>
                        <p className="text-muted-foreground text-sm">No business score, no unified Business+PG model, no lending eligibility logic</p>
                      </div>
                      <img 
                        src="/Case Study/Exec Diagnosis/SMB.png" 
                        alt="SMB Credit Intelligence Gap"
                        className="w-full h-auto rounded-lg max-w-md mx-auto"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <Card className="border border-destructive/30 shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="font-bold text-lg text-foreground">Ecosystem-Level Risk</h3>
                      <p className="text-muted-foreground text-sm">Customers leave to check scores, get intercepted, never return to Citi</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <img 
                        src="/Case Study/Exec Diagnosis/Eco System Risk /Consumer.PNG" 
                        alt="Ecosystem Risk Consumer"
                        className="w-full h-auto rounded-lg max-w-sm mx-auto"
                      />
                      <img 
                        src="/Case Study/Exec Diagnosis/Eco System Risk /Business.PNG" 
                        alt="Ecosystem Risk Business"
                        className="w-full h-auto rounded-lg max-w-sm mx-auto"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 2 - Competitive Consequence */}
        <section className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">02 — COMPETITIVE CONSEQUENCE</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  How Citi Loses the Customer Before the Application Begins
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <motion.div {...fadeInUp} className="mb-12 text-center max-w-4xl mx-auto">
                <p className="text-xl text-foreground leading-relaxed mb-4">
                  Citi's customers must leave Citi's ecosystem to check their credit score. The moment they do, Chase, AmEx, Capital One, Apple Card, and fintech lenders intercept them with prequalification offers.
                </p>
                <p className="text-xl font-bold text-destructive">
                  This creates silent funnel amputation: Citi never sees the demand signal.
                </p>
              </motion.div>

              {/* Competitive Flow Images */}
              <div className="grid md:grid-cols-2 gap-10 mb-10">
                <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                  <Card className="border border-border shadow-sm">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold text-foreground mb-4 text-center">Consumer Journey</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <img 
                          src="/Case Study/How Citi Loses the Customer Before the Application Begins/Checks Score Elsewhere/COnsumer/Consumer.PNG" 
                          alt="Consumer Checks Score Elsewhere"
                          className="w-full h-auto rounded-lg max-w-[240px] mx-auto"
                        />
                        <img 
                          src="/Case Study/How Citi Loses the Customer Before the Application Begins/Comp Prequal/Consumer.PNG" 
                          alt="Competitor Prequal Consumer"
                          className="w-full h-auto rounded-lg max-w-[240px] mx-auto"
                        />
                        <img 
                          src="/Case Study/How Citi Loses the Customer Before the Application Begins/Comp Approval/Consumer.PNG" 
                          alt="Competitor Approval Consumer"
                          className="w-full h-auto rounded-lg max-w-[240px] mx-auto"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                  <Card className="border border-border shadow-sm">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold text-foreground mb-4 text-center">Business Journey</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <img 
                          src="/Case Study/How Citi Loses the Customer Before the Application Begins/Checks Score Elsewhere/Business/IMG_0202.PNG" 
                          alt="Business Checks Score Elsewhere"
                          className="w-full h-auto rounded-lg max-w-[240px] mx-auto"
                        />
                        <img 
                          src="/Case Study/How Citi Loses the Customer Before the Application Begins/Comp Prequal/Business.PNG" 
                          alt="Competitor Prequal Business"
                          className="w-full h-auto rounded-lg max-w-[240px] mx-auto"
                        />
                        <img 
                          src="/Case Study/How Citi Loses the Customer Before the Application Begins/Comp Approval/Business.PNG" 
                          alt="Competitor Approval Business"
                          className="w-full h-auto rounded-lg max-w-[240px] mx-auto"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Competitive Flow Diagram */}
              <motion.div {...fadeInUp}>
                <Card className="bg-card border border-border shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                      <div className="flex items-center gap-3 bg-primary/10 px-4 py-3 rounded-lg border border-primary/30">
                        <Users className="h-6 w-6 text-primary" />
                        <span className="text-foreground font-medium">Customer</span>
                      </div>
                      <ChevronRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
                      <div className="flex items-center gap-3 bg-muted/30 px-4 py-3 rounded-lg border border-border">
                        <Eye className="h-6 w-6 text-muted-foreground" />
                        <span className="text-muted-foreground">Checks Score Elsewhere</span>
                      </div>
                      <ChevronRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
                      <div className="flex items-center gap-3 bg-warning/10 px-4 py-3 rounded-lg border border-warning/30">
                        <CreditCard className="h-6 w-6 text-warning" />
                        <span className="text-warning-foreground">Competitor Prequal</span>
                      </div>
                      <ChevronRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
                      <div className="flex items-center gap-3 bg-success/10 px-4 py-3 rounded-lg border border-success/30">
                        <CheckCircle2 className="h-6 w-6 text-success" />
                        <span className="text-success-foreground">Competitor Approval</span>
                      </div>
                      <ChevronRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
                      <div className="flex items-center gap-3 bg-destructive/10 px-4 py-3 rounded-lg border border-destructive/30">
                        <XCircle className="h-6 w-6 text-destructive" />
                        <span className="text-destructive-foreground">Citi Never Sees Intent</span>
                      </div>
                    </div>
                    
                    <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 text-center">
                      <AlertTriangle className="h-6 w-6 text-destructive mx-auto mb-2" />
                      <span className="text-destructive font-bold">Point of Loss: No Citi Credit Layer</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 3 - Revenue Leakage */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">03 — REVENUE LEAKAGE & ECONOMIC IMPACT</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  $900M–$1.6B Lost Annually
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <motion.div {...fadeInUp} className="mb-8 text-center max-w-3xl mx-auto">
                <p className="text-lg text-muted-foreground">
                  Based on benchmarking against Chase Credit Journey, Capital One CreditWise, and Wells Fargo Close-Up — and applying Citi's TAM:
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                  <Card className="h-full bg-destructive/5 border-destructive/30 shadow-sm">
                    <CardContent className="p-8">
                      <div className="text-sm font-bold text-destructive tracking-wider mb-4 uppercase">LEAKAGE TODAY</div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-destructive/20">
                          <span className="text-foreground">Consumer</span>
                          <span className="text-2xl font-bold text-destructive">$600M–$900M/year</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-destructive/20">
                          <span className="text-foreground">SMB</span>
                          <span className="text-2xl font-bold text-destructive">$300M–$700M/year</span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                          <span className="font-semibold text-foreground">Total</span>
                          <span className="text-3xl font-bold text-destructive">$900M–$1.6B+/year</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                  <Card className="h-full bg-success/5 border-success/30 shadow-sm">
                    <CardContent className="p-8">
                      <div className="text-sm font-bold text-success tracking-wider mb-4 uppercase">RECOVERED WITH LUMIQAI</div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-success/20">
                          <span className="text-foreground">Consumer Recovery</span>
                          <span className="text-2xl font-bold text-success">$600M–$900M</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-success/20">
                          <span className="text-foreground">SMB Recovery</span>
                          <span className="text-2xl font-bold text-success">$300M–$700M</span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                          <span className="font-semibold text-foreground">Build Cost Avoided</span>
                          <span className="text-xl font-bold text-success">$40M–$70M saved</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div {...fadeInUp} className="text-center">
                <p className="text-sm text-muted-foreground italic">
                  Sources: JPMC filings, Capital One annual reports, Experian 2024 Credit Trends, Wells Fargo digital engagement data, Citi 10-K TAM.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 4 - Root Cause Analysis */}
        <section className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">04 — ROOT CAUSE ANALYSIS</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Citi Lacks the Credit Intelligence Infrastructure
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <motion.div {...fadeInUp} className="mb-8 text-center">
                <p className="text-lg text-muted-foreground mb-2">Citi has no in-app:</p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Gauge, title: "No Score Panel" },
                  { icon: Target, title: "No Prequal" },
                  { icon: Building2, title: "No SMB Logic" },
                  { icon: LineChart, title: "No Business+PG Model" },
                  { icon: TrendingUp, title: "No Predictive Pathways" },
                  { icon: RefreshCw, title: "No Decline Recovery" },
                  { icon: Bell, title: "No Credit Alerts" },
                  { icon: Users, title: "No Thin-File Enhancement" }
                ].map((item, index) => (
                  <motion.div key={index} {...fadeInUp} transition={{ delay: index * 0.05 }}>
                    <Card className="h-full bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-5 text-center">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 mx-auto">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Root Cause Images */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
                  <Card className="border border-border shadow-sm">
                    <CardContent className="p-0">
                      <img 
                        src="/Case Study/Citi Lacks the credit in/consumer.png" 
                        alt="Citi Lacks Consumer Credit Intelligence"
                        className="w-full h-auto rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div {...fadeInUp} transition={{ delay: 0.5 }}>
                  <Card className="border border-border shadow-sm">
                    <CardContent className="p-0">
                      <img 
                        src="/Case Study/Citi Lacks the credit in/biz.png" 
                        alt="Citi Lacks Business Credit Intelligence"
                        className="w-full h-auto rounded-lg"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div {...fadeInUp}>
                <Card className="bg-primary border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <p className="text-primary-foreground text-lg">
                      <span className="font-bold">This is not a feature gap.</span>{" "}
                      <span className="text-primary-foreground/80">This is an infrastructure gap.</span>
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 5 - Solution Overview */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">05 — THE SOLUTION</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  LumiqAI's Consumer + SMB Credit Intelligence Layer
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A dual-system engine that rewires Citi's funnel architecture across Consumer and Business Banking.
                </p>
                <div className="h-px w-24 bg-primary mx-auto mt-6" />
              </div>

              {/* Consumer Module */}
              <motion.div {...fadeInUp} className="mb-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">A</span>
                      Consumer Intelligence Module
                    </h3>
                    <p className="text-muted-foreground mb-6">Integrated directly into the Citi App:</p>
                    <ul className="space-y-3">
                      {[
                        "Real-time VantageScore",
                        "AI-driven prequal for Citi cards",
                        "Predictive approval pathways",
                        "Credit alerts + file monitoring",
                        "1-tap Apply",
                        "Decline-recovery guidance"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-foreground">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card rounded-2xl border border-border p-8 text-center shadow-sm">
                    <img 
                      src="/Case Study/lumiqai consumer + SMB/consumer/Citi Consumer LUMIQ.png" 
                      alt="Citi Consumer LUMIQ"
                      className="w-full h-auto rounded-lg max-w-md mx-auto"
                    />
                  </div>
                </div>
              </motion.div>

              {/* SMB Module */}
              <motion.div {...fadeInUp}>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="order-2 lg:order-1 bg-card rounded-2xl border border-border p-8 text-center shadow-sm">
                    <img 
                      src="/Case Study/lumiqai consumer + SMB/Business/Citi Business LUMIQ.png" 
                      alt="Citi Business LUMIQ"
                      className="w-full h-auto rounded-lg max-w-md mx-auto"
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">B</span>
                      SMB Intelligence Module
                    </h3>
                    <p className="text-muted-foreground mb-6">Delivered inside Citi Business Banking:</p>
                    <ul className="space-y-3">
                      {[
                        "Experian Business Score",
                        "Unified Business + PG model",
                        "Eligibility for TYB, CitiBusiness® AAdvantage & ThankYou®",
                        "Thin-file enhancement (SR 11-7 aligned)",
                        "Predictive loan pathways",
                        "1-tap Apply for qualified SMBs"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-foreground">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 6 - Economic Impact Model */}
        <section className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">06 — ECONOMIC IMPACT MODEL</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  What Citi Gains
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Consumer Impact */}
                <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                  <Card className="h-full border-2 border-primary shadow-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-primary mb-6">Consumer Impact</h3>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <div className="text-3xl font-bold text-foreground">+12–24%</div>
                          <div className="text-sm text-muted-foreground">Approval uplift</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-foreground">–25–40%</div>
                          <div className="text-sm text-muted-foreground">Manual reviews</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-foreground">2×–3×</div>
                          <div className="text-sm text-muted-foreground">Engagement</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-foreground">+5–10%</div>
                          <div className="text-sm text-muted-foreground">CAC-free card conversions</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* SMB Impact */}
                <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                  <Card className="h-full border-2 border-primary shadow-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-primary mb-6">SMB Impact</h3>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <div className="text-3xl font-bold text-foreground">+18–30%</div>
                          <div className="text-sm text-muted-foreground">Approval uplift</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-foreground">–35–50%</div>
                          <div className="text-sm text-muted-foreground">Manual review reduction</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-foreground">+5–12%</div>
                          <div className="text-sm text-muted-foreground">SMB conversion</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-primary">+$300M–$700M</div>
                          <div className="text-sm text-muted-foreground">Revenue</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 7 - Why Now */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">07 — WHY NOW</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Why Citi Must Act Now
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <motion.div {...fadeInUp} className="mb-12 max-w-3xl mx-auto">
                <ul className="space-y-4 text-lg text-foreground">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                    Open banking accelerates intent leakage.
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                    Competitors deepen their funnels.
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                    Citi's restructuring demands fast, high-ROI digital modernization.
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                    Waiting 12–24 months will make today's gap irreversible.
                  </li>
                </ul>
              </motion.div>

              {/* What This Means for Citi in 2026 */}
              <motion.div {...fadeInUp} className="mb-12 max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-primary mb-6">What this means for Citi in 2026</h3>
                <ul className="space-y-3 text-lg text-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    A safe lever for deposit & card growth
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    A differentiated SPCP-compliant credit expansion strategy
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    Regulatory-forward posture (prevents surprises)
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    A measurable boost in card conversion without IT lift
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    Portfolio growth in protected demographic clusters
                  </li>
                </ul>
              </motion.div>

              {/* Timeline */}
              <motion.div {...fadeInUp}>
                <Card className="bg-card border border-border shadow-lg overflow-hidden max-w-3xl mx-auto">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-bold text-muted-foreground">Dec 2025</span>
                      <span className="text-sm font-bold text-muted-foreground">Jan 2026</span>
                      <span className="text-sm font-bold text-muted-foreground">Mar 2026</span>
                    </div>
                    <div className="relative h-4 bg-muted rounded-full overflow-hidden">
                      <div className="absolute left-0 right-0 h-full bg-gradient-to-r from-primary to-primary-dark rounded-full" />
                    </div>
                    <div className="text-center mt-4">
                      <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                        Window of Opportunity: December 2025 – March 2026
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 8 - Pilot Framework */}
        <section className="py-20 md:py-24 lg:py-32 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">08 — PILOT FRAMEWORK</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  90-Day Controlled Pilot
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Track 1 */}
                <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                  <Card className="h-full border border-border shadow-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-primary mb-6">Track 1: Consumer</h3>
                      <ul className="space-y-3">
                        {["Score panel", "Prequal API", "Card pathways", "1-tap apply"].map((item, index) => (
                          <li key={index} className="flex items-center gap-3 text-foreground">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Track 2 */}
                <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                  <Card className="h-full border border-border shadow-sm">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-primary mb-6">Track 2: SMB</h3>
                      <ul className="space-y-3">
                        {["Experian Business Score", "Business+PG model", "Lending eligibility", "Thin-file augmentation"].map((item, index) => (
                          <li key={index} className="flex items-center gap-3 text-foreground">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Governance */}
              <motion.div {...fadeInUp}>
                <Card className="bg-primary/10 border border-primary/30 shadow-sm">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <Shield className="h-6 w-6 text-primary" />
                      Governance (Critical for Citi)
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="flex items-start gap-3">
                        <FileCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">SR 11-7 compliant documentation</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">Weekly oversight with Risk, Cards, and Digital</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <BarChart3 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">Real-time dashboarding</span>
                      </div>
                    </div>
                    <div className="mt-6 p-4 rounded-lg bg-primary/20 border border-primary/30">
                      <p className="text-sm text-primary font-medium">
                        Designed to align with ECOA/Reg B SPCP guidelines — written plan, eligibility parameters, explainability documentation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Pilot Timeline */}
              <motion.div {...fadeInUp} className="mt-8">
                <Card className="bg-card border border-border shadow-sm">
                  <CardContent className="p-8">
                    <h4 className="text-lg font-bold text-foreground mb-6 text-center">Pilot Timeline</h4>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="text-center flex-1">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                          <span className="text-primary font-bold">1-2</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Weeks</p>
                        <p className="text-xs text-muted-foreground/80">Connect APIs, validate outputs</p>
                      </div>
                      <div className="hidden md:block h-px w-16 bg-primary/30" />
                      <div className="text-center flex-1">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                          <span className="text-primary font-bold">3-4</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Weeks</p>
                        <p className="text-xs text-muted-foreground/80">Policy alignment</p>
                      </div>
                      <div className="hidden md:block h-px w-16 bg-primary/30" />
                      <div className="text-center flex-1">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                          <span className="text-primary font-bold">5-8</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Weeks</p>
                        <p className="text-xs text-muted-foreground/80">A/B test in-app</p>
                      </div>
                      <div className="hidden md:block h-px w-16 bg-primary/30" />
                      <div className="text-center flex-1">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                          <span className="text-primary font-bold">9-12</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Weeks</p>
                        <p className="text-xs text-muted-foreground/80">Review & scale decision</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 9 - Strategic Positioning */}
        <section className="py-20 md:py-24 lg:py-32 bg-background-secondary">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <div className="text-center mb-12 lg:mb-16">
                <div className="text-primary text-xs font-semibold uppercase tracking-wide mb-4">09 — STRATEGIC POSITIONING</div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
                  Why Citi Wins: The First Dual-Layer Credit Intelligence Bank
                </h2>
                <div className="h-px w-24 bg-primary mx-auto" />
              </div>

              <motion.div {...fadeInUp} className="mb-12 text-center max-w-3xl mx-auto">
                <p className="text-lg text-foreground mb-6">
                  Chase built consumer. Capital One built consumer. Wells Fargo built consumer. AmEx built consumer. Apple built consumer.
                </p>
                <p className="text-xl font-bold text-destructive mb-4">
                  No one has built SMB.
                </p>
                <p className="text-xl font-bold text-primary">
                  Citi has first-mover advantage to own the only dual consumer + SMB credit intelligence ecosystem in America.
                </p>
              </motion.div>

              {/* Competitor Logos */}
              <motion.div {...fadeInUp} className="mb-12">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
                  {[
                    { name: "Chase", logo: "/Case Study/WHy citi wins/chase.svg" },
                    { name: "Capital One", logo: "/Case Study/WHy citi wins/Capital_One_logo.svg" },
                    { name: "Wells Fargo", logo: "/Case Study/WHy citi wins/wells-fargo-1.svg" },
                    { name: "AmEx", logo: "/Case Study/WHy citi wins/amex-3.svg" },
                    { name: "Apple", logo: "/Case Study/WHy citi wins/Apple_Card.svg" },
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-20 h-12 rounded-xl bg-card border border-border flex items-center justify-center p-2 mb-2">
                        <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-xs text-muted-foreground">{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Competitor Comparison */}
              <motion.div {...fadeInUp}>
                <Card className="border-2 border-primary overflow-hidden shadow-sm">
                  <CardContent className="p-0">
                    <table className="w-full">
                      <thead className="bg-primary">
                        <tr>
                          <th className="text-left p-4 text-primary-foreground font-semibold">Bank</th>
                          <th className="text-center p-4 text-primary-foreground font-semibold">Consumer</th>
                          <th className="text-center p-4 text-primary-foreground font-semibold">SMB</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { bank: "Chase", consumer: true, smb: false },
                          { bank: "Capital One", consumer: true, smb: false },
                          { bank: "Wells Fargo", consumer: true, smb: false },
                          { bank: "AmEx", consumer: true, smb: false },
                          { bank: "Apple", consumer: true, smb: false },
                        ].map((row, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-background-secondary" : "bg-background"}>
                            <td className="p-4 font-medium text-foreground">{row.bank}</td>
                            <td className="p-4 text-center">
                              {row.consumer ? (
                                <CheckCircle2 className="h-6 w-6 text-success mx-auto" />
                              ) : (
                                <XCircle className="h-6 w-6 text-muted-foreground mx-auto" />
                              )}
                            </td>
                            <td className="p-4 text-center">
                              {row.smb ? (
                                <CheckCircle2 className="h-6 w-6 text-success mx-auto" />
                              ) : (
                                <XCircle className="h-6 w-6 text-muted-foreground mx-auto" />
                              )}
                            </td>
                          </tr>
                        ))}
                        <tr className="bg-primary/10 border-t-2 border-primary">
                          <td className="p-4 font-bold text-primary">Citi + LumiqAI</td>
                          <td className="p-4 text-center">
                            <CheckCircle2 className="h-6 w-6 text-primary mx-auto" />
                          </td>
                          <td className="p-4 text-center">
                            <CheckCircle2 className="h-6 w-6 text-primary mx-auto" />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footnotes & Citations */}
        <section className="py-16 md:py-20 px-6 bg-background">
          <div className="container mx-auto px-6">
            <motion.div {...fadeInUp} className="max-w-[1400px] mx-auto">
              <motion.div {...fadeInUp} className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4">Sources & References</h3>
                <div className="h-px w-16 bg-primary" />
              </motion.div>

              <motion.div {...fadeInUp}>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                  <li>JPMorgan Digital & Credit Journey filings (2017–2023)</li>
                  <li>Capital One CreditWise adoption reports</li>
                  <li>Wells Fargo Business Credit Close-Up product launch & engagement metrics</li>
                  <li>Citi 10-K (consumer and SMB TAM)</li>
                  <li>Experian State of Credit 2023–2024</li>
                  <li>CFPB Open Banking analysis 2023–2024</li>
                  <li>Goldman Sachs filings on Apple Card instant decisioning</li>
                  <li>AmEx risk-triggered credit expansion analysis</li>
                  <li>BlueVine, OnDeck, Shopify Capital origination volumes</li>
                  <li>McKinsey/Bain/Oliver Wyman fintech CAC benchmarks</li>
                </ol>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-32 px-6 bg-gradient-to-br from-primary via-primary to-secondary">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div {...fadeInUp}>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                  Ready to Close Citi's Credit Funnel Gap?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Schedule a pilot review to see how LumiqAI deploys consumer + SMB credit intelligence in 90 days.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-bold px-8 py-6 text-lg"
                >
                  Book Pilot Review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </PageLayout>
  );
}
