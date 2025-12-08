import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
        {/* Hero Section - Citi Branded */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003B70] via-[#002850] to-[#001830]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="max-w-5xl mx-auto relative z-10 text-center">
            <motion.div {...fadeInUp}>
              <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-semibold mb-8 backdrop-blur-sm">
                CITI CASE STUDY · EXECUTIVE EDITION
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                Modernizing Citi's Credit Funnel Through{" "}
                <span className="text-[#E31837]">Consumer + SMB</span>{" "}
                Credit Intelligence
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                A strategic assessment of Citi's credit visibility gap — and how LumiqAI restores approvals, retention, and competitive positioning across both Consumer and Business Banking.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Study Summary Strip */}
        <section className="py-8 px-6 bg-[#001830] border-y border-[#33CCFF]/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-[#33CCFF]">18%</div>
                <div className="text-sm text-white/80 font-medium uppercase tracking-wide">Incremental approvals identified</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-[#33CCFF]">Comparable</div>
                <div className="text-sm text-white/80 font-medium uppercase tracking-wide">Performance to existing approved population</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-[#33CCFF]">Zero</div>
                <div className="text-sm text-white/80 font-medium uppercase tracking-wide">Underwriting changes — just better signals</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1 - Executive Diagnosis */}
        <section className="py-20 px-6 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <div className="text-sm font-bold text-[#003B70] tracking-wider mb-3">01 — EXECUTIVE DIAGNOSIS</div>
              <div className="h-px w-24 bg-[#003B70]" />
            </motion.div>

            <motion.div {...fadeInUp} className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Citi is now the <span className="font-bold text-[#003B70]">only top-4 U.S. bank</span> with neither a consumer nor a business credit-intelligence layer inside its mobile apps. This absence blocks Citi from capturing early credit intent — the most valuable inflection point in the funnel.
              </p>
              <p className="text-xl font-semibold text-[#E31837]">
                Competitors convert before Citi even appears.
              </p>
              <p className="text-lg text-gray-600 mt-4">
                This has become a structural vulnerability affecting consumer cards, SMB lending, digital engagement, and long-term retention.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Card className="h-full border-t-4 border-t-[#003B70] bg-white shadow-lg">
                  <CardContent className="p-6">
                    <Users className="h-10 w-10 text-[#003B70] mb-4" />
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Consumer</h3>
                    <p className="text-gray-600 text-sm">No score visibility, no prequalification, no credit alerts inside Citi App</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className="h-full border-t-4 border-t-[#003B70] bg-white shadow-lg">
                  <CardContent className="p-6">
                    <Building2 className="h-10 w-10 text-[#003B70] mb-4" />
                    <h3 className="font-bold text-lg mb-2 text-gray-900">SMB</h3>
                    <p className="text-gray-600 text-sm">No business score, no unified Business+PG model, no lending eligibility logic</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <Card className="h-full border-t-4 border-t-[#E31837] bg-white shadow-lg">
                  <CardContent className="p-6">
                    <AlertTriangle className="h-10 w-10 text-[#E31837] mb-4" />
                    <h3 className="font-bold text-lg mb-2 text-gray-900">Ecosystem-Level Risk</h3>
                    <p className="text-gray-600 text-sm">Customers leave to check scores, get intercepted, never return to Citi</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2 - Competitive Consequence */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#0B0F14] to-[#131920]">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <div className="text-sm font-bold text-[#33CCFF] tracking-wider mb-3">02 — COMPETITIVE CONSEQUENCE</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                How Citi Loses the Customer Before the Application Begins
              </h2>
              <div className="h-px w-24 bg-[#33CCFF]" />
            </motion.div>

            <motion.div {...fadeInUp} className="mb-12">
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                Citi's customers must leave Citi's ecosystem to check their credit score. The moment they do, Chase, AmEx, Capital One, Apple Card, and fintech lenders intercept them with prequalification offers.
              </p>
              <p className="text-xl font-bold text-[#E31837]">
                This creates silent funnel amputation: Citi never sees the demand signal.
              </p>
            </motion.div>

            {/* Competitive Flow Diagram */}
            <motion.div {...fadeInUp}>
              <Card className="bg-[#111821] border border-[#1E2833] overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-3 bg-[#003B70]/20 px-4 py-3 rounded-lg border border-[#003B70]/30">
                      <Users className="h-6 w-6 text-[#33CCFF]" />
                      <span className="text-white font-medium">Customer</span>
                    </div>
                    <ChevronRight className="h-6 w-6 text-gray-500 rotate-90 md:rotate-0" />
                    <div className="flex items-center gap-3 bg-gray-700/30 px-4 py-3 rounded-lg border border-gray-600/30">
                      <Eye className="h-6 w-6 text-gray-400" />
                      <span className="text-gray-300">Checks Score Elsewhere</span>
                    </div>
                    <ChevronRight className="h-6 w-6 text-gray-500 rotate-90 md:rotate-0" />
                    <div className="flex items-center gap-3 bg-amber-500/10 px-4 py-3 rounded-lg border border-amber-500/30">
                      <CreditCard className="h-6 w-6 text-amber-400" />
                      <span className="text-amber-300">Competitor Prequal</span>
                    </div>
                    <ChevronRight className="h-6 w-6 text-gray-500 rotate-90 md:rotate-0" />
                    <div className="flex items-center gap-3 bg-green-500/10 px-4 py-3 rounded-lg border border-green-500/30">
                      <CheckCircle2 className="h-6 w-6 text-green-400" />
                      <span className="text-green-300">Competitor Approval</span>
                    </div>
                    <ChevronRight className="h-6 w-6 text-gray-500 rotate-90 md:rotate-0" />
                    <div className="flex items-center gap-3 bg-red-500/10 px-4 py-3 rounded-lg border border-red-500/30">
                      <XCircle className="h-6 w-6 text-red-400" />
                      <span className="text-red-300">Citi Never Sees Intent</span>
                    </div>
                  </div>
                  
                  <div className="bg-[#E31837]/10 border border-[#E31837]/30 rounded-lg p-4 text-center">
                    <AlertTriangle className="h-6 w-6 text-[#E31837] mx-auto mb-2" />
                    <span className="text-[#E31837] font-bold">Point of Loss: No Citi Credit Layer</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Section 3 - Revenue Leakage */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <div className="text-sm font-bold text-[#003B70] tracking-wider mb-3">03 — REVENUE LEAKAGE & ECONOMIC IMPACT</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                $900M–$1.6B Lost Annually
              </h2>
              <div className="h-px w-24 bg-[#003B70]" />
            </motion.div>

            <motion.div {...fadeInUp} className="mb-8">
              <p className="text-lg text-gray-600">
                Based on benchmarking against Chase Credit Journey, Capital One CreditWise, and Wells Fargo Close-Up — and applying Citi's TAM:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Card className="h-full bg-red-50 border-red-200">
                  <CardContent className="p-8">
                    <div className="text-sm font-bold text-red-600 tracking-wider mb-4">LEAKAGE TODAY</div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-red-200">
                        <span className="text-gray-700">Consumer</span>
                        <span className="text-2xl font-bold text-red-600">$600M–$900M/year</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-red-200">
                        <span className="text-gray-700">SMB</span>
                        <span className="text-2xl font-bold text-red-600">$300M–$700M/year</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="font-semibold text-gray-900">Total</span>
                        <span className="text-3xl font-bold text-red-700">$900M–$1.6B+/year</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className="h-full bg-green-50 border-green-200">
                  <CardContent className="p-8">
                    <div className="text-sm font-bold text-green-600 tracking-wider mb-4">RECOVERED WITH LUMIQAI</div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-green-200">
                        <span className="text-gray-700">Consumer Recovery</span>
                        <span className="text-2xl font-bold text-green-600">$600M–$900M</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-green-200">
                        <span className="text-gray-700">SMB Recovery</span>
                        <span className="text-2xl font-bold text-green-600">$300M–$700M</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="font-semibold text-gray-900">Build Cost Avoided</span>
                        <span className="text-xl font-bold text-green-700">$40M–$70M saved</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div {...fadeInUp}>
              <p className="text-sm text-gray-500 italic">
                Sources: JPMC filings, Capital One annual reports, Experian 2024 Credit Trends, Wells Fargo digital engagement data, Citi 10-K TAM.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 4 - Root Cause Analysis */}
        <section className="py-20 px-6 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <div className="text-sm font-bold text-[#003B70] tracking-wider mb-3">04 — ROOT CAUSE ANALYSIS</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Citi Lacks the Credit Intelligence Infrastructure
              </h2>
              <div className="h-px w-24 bg-[#003B70]" />
            </motion.div>

            <motion.div {...fadeInUp} className="mb-8">
              <p className="text-lg text-gray-600 mb-2">Citi has no in-app:</p>
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
                  <Card className="h-full bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-5">
                      <div className="h-10 w-10 rounded-lg bg-[#003B70] flex items-center justify-center mb-3">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeInUp}>
              <Card className="bg-[#003B70] border-0">
                <CardContent className="p-6">
                  <p className="text-white text-lg">
                    <span className="font-bold">This is not a feature gap.</span>{" "}
                    <span className="text-white/80">This is an infrastructure gap.</span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Section 5 - Solution Overview */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#0B0F14] to-[#131920]">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <div className="text-sm font-bold text-[#33CCFF] tracking-wider mb-3">05 — THE SOLUTION</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                LumiqAI's Consumer + SMB Credit Intelligence Layer
              </h2>
              <p className="text-xl text-gray-400">
                A dual-system engine that rewires Citi's funnel architecture across Consumer and Business Banking.
              </p>
              <div className="h-px w-24 bg-[#33CCFF] mt-6" />
            </motion.div>

            {/* Consumer Module */}
            <motion.div {...fadeInUp} className="mb-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="h-8 w-8 rounded-full bg-[#33CCFF] flex items-center justify-center text-sm font-bold text-[#0B0F14]">A</span>
                    Consumer Intelligence Module
                  </h3>
                  <p className="text-gray-400 mb-6">Integrated directly into the Citi App:</p>
                  <ul className="space-y-3">
                    {[
                      "Real-time VantageScore",
                      "AI-driven prequal for Citi cards",
                      "Predictive approval pathways",
                      "Credit alerts + file monitoring",
                      "1-tap Apply",
                      "Decline-recovery guidance"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle2 className="h-5 w-5 text-[#33CCFF] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#1E2833] rounded-2xl border border-[#2A3441] p-8 text-center">
                  <Smartphone className="h-24 w-24 text-[#33CCFF]/30 mx-auto mb-4" />
                  <p className="text-gray-500 text-sm">Insert Citi Consumer Mockup Screenshot Here</p>
                </div>
              </div>
            </motion.div>

            {/* SMB Module */}
            <motion.div {...fadeInUp}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 bg-[#1E2833] rounded-2xl border border-[#2A3441] p-8 text-center">
                  <Building2 className="h-24 w-24 text-[#33CCFF]/30 mx-auto mb-4" />
                  <p className="text-gray-500 text-sm">Insert Citi Business Mockup Screenshot Here</p>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="h-8 w-8 rounded-full bg-[#33CCFF] flex items-center justify-center text-sm font-bold text-[#0B0F14]">B</span>
                    SMB Intelligence Module
                  </h3>
                  <p className="text-gray-400 mb-6">Delivered inside Citi Business Banking:</p>
                  <ul className="space-y-3">
                    {[
                      "Experian Business Score",
                      "Unified Business + PG model",
                      "Eligibility for TYB, CitiBusiness® AAdvantage & ThankYou®",
                      "Thin-file enhancement (SR 11-7 aligned)",
                      "Predictive loan pathways",
                      "1-tap Apply for qualified SMBs"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle2 className="h-5 w-5 text-[#33CCFF] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 6 - Economic Impact Model */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <div className="text-sm font-bold text-[#003B70] tracking-wider mb-3">06 — ECONOMIC IMPACT MODEL</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Citi Gains
              </h2>
              <div className="h-px w-24 bg-[#003B70]" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Consumer Impact */}
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Card className="h-full border-2 border-[#003B70]">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-[#003B70] mb-6">Consumer Impact</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-bold text-gray-900">+12–24%</div>
                        <div className="text-sm text-gray-600">Approval uplift</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-900">–25–40%</div>
                        <div className="text-sm text-gray-600">Manual reviews</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-900">2×–3×</div>
                        <div className="text-sm text-gray-600">Engagement</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-900">+5–10%</div>
                        <div className="text-sm text-gray-600">CAC-free card conversions</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* SMB Impact */}
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className="h-full border-2 border-[#003B70]">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-[#003B70] mb-6">SMB Impact</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-bold text-gray-900">+18–30%</div>
                        <div className="text-sm text-gray-600">Approval uplift</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-900">–35–50%</div>
                        <div className="text-sm text-gray-600">Manual review reduction</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gray-900">+5–12%</div>
                        <div className="text-sm text-gray-600">SMB conversion</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#003B70]">+$300M–$700M</div>
                        <div className="text-sm text-gray-600">Revenue</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 7 - Why Now */}
        <section className="py-20 px-6 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <div className="text-sm font-bold text-[#003B70] tracking-wider mb-3">07 — WHY NOW</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Citi Must Act Now
              </h2>
              <div className="h-px w-24 bg-[#003B70]" />
            </motion.div>

            <motion.div {...fadeInUp} className="mb-12">
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-[#E31837] flex-shrink-0 mt-0.5" />
                  Open banking accelerates intent leakage.
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-6 w-6 text-[#E31837] flex-shrink-0 mt-0.5" />
                  Competitors deepen their funnels.
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-[#E31837] flex-shrink-0 mt-0.5" />
                  Citi's restructuring demands fast, high-ROI digital modernization.
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-[#E31837] flex-shrink-0 mt-0.5" />
                  Waiting 12–24 months will make today's gap irreversible.
                </li>
              </ul>
            </motion.div>

            {/* What This Means for Citi in 2026 */}
            <motion.div {...fadeInUp} className="mb-12">
              <h3 className="text-xl font-bold text-[#003B70] mb-6">What this means for Citi in 2026</h3>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#003B70] flex-shrink-0 mt-1" />
                  A safe lever for deposit & card growth
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#003B70] flex-shrink-0 mt-1" />
                  A differentiated SPCP-compliant credit expansion strategy
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#003B70] flex-shrink-0 mt-1" />
                  Regulatory-forward posture (prevents surprises)
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#003B70] flex-shrink-0 mt-1" />
                  A measurable boost in card conversion without IT lift
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#003B70] flex-shrink-0 mt-1" />
                  Portfolio growth in protected demographic clusters
                </li>
              </ul>
            </motion.div>

            {/* Timeline */}
            <motion.div {...fadeInUp}>
              <Card className="bg-white border-0 shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-bold text-gray-500">Dec 2025</span>
                    <span className="text-sm font-bold text-gray-500">Jan 2026</span>
                    <span className="text-sm font-bold text-gray-500">Mar 2026</span>
                  </div>
                  <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div className="absolute left-0 right-0 h-full bg-gradient-to-r from-[#33CCFF] to-[#003B70] rounded-full" />
                  </div>
                  <div className="text-center mt-4">
                    <span className="inline-block px-4 py-2 bg-[#003B70] text-white text-sm font-bold rounded-full">
                      Window of Opportunity: December 2025 – March 2026
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Section 8 - Pilot Framework */}
        <section className="py-20 px-6 bg-gradient-to-b from-[#0B0F14] to-[#131920]">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <div className="text-sm font-bold text-[#33CCFF] tracking-wider mb-3">08 — PILOT FRAMEWORK</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                90-Day Controlled Pilot
              </h2>
              <div className="h-px w-24 bg-[#33CCFF]" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Track 1 */}
              <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                <Card className="h-full bg-[#111821] border border-[#1E2833]">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-[#33CCFF] mb-6">Track 1: Consumer</h3>
                    <ul className="space-y-3">
                      {["Score panel", "Prequal API", "Card pathways", "1-tap apply"].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle2 className="h-5 w-5 text-[#33CCFF] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Track 2 */}
              <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                <Card className="h-full bg-[#111821] border border-[#1E2833]">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-[#33CCFF] mb-6">Track 2: SMB</h3>
                    <ul className="space-y-3">
                      {["Experian Business Score", "Business+PG model", "Lending eligibility", "Thin-file augmentation"].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-300">
                          <CheckCircle2 className="h-5 w-5 text-[#33CCFF] flex-shrink-0" />
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
              <Card className="bg-[#003B70]/20 border border-[#003B70]/40">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Shield className="h-6 w-6 text-[#33CCFF]" />
                    Governance (Critical for Citi)
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-start gap-3">
                      <FileCheck className="h-5 w-5 text-[#33CCFF] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">SR 11-7 compliant documentation</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-[#33CCFF] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Weekly oversight with Risk, Cards, and Digital</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <BarChart3 className="h-5 w-5 text-[#33CCFF] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Real-time dashboarding</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 rounded-lg bg-[#33CCFF]/10 border border-[#33CCFF]/20">
                    <p className="text-sm text-[#33CCFF] font-medium">
                      Designed to align with ECOA/Reg B SPCP guidelines — written plan, eligibility parameters, explainability documentation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pilot Timeline */}
            <motion.div {...fadeInUp} className="mt-8">
              <Card className="bg-[#111821] border border-[#1E2833]">
                <CardContent className="p-8">
                  <h4 className="text-lg font-bold text-white mb-6 text-center">Pilot Timeline</h4>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="text-center flex-1">
                      <div className="h-12 w-12 rounded-full bg-[#33CCFF]/20 flex items-center justify-center mx-auto mb-2">
                        <span className="text-[#33CCFF] font-bold">1-2</span>
                      </div>
                      <p className="text-sm text-gray-400">Weeks</p>
                      <p className="text-xs text-gray-500">Connect APIs, validate outputs</p>
                    </div>
                    <div className="hidden md:block h-px w-16 bg-[#33CCFF]/30" />
                    <div className="text-center flex-1">
                      <div className="h-12 w-12 rounded-full bg-[#33CCFF]/20 flex items-center justify-center mx-auto mb-2">
                        <span className="text-[#33CCFF] font-bold">3-4</span>
                      </div>
                      <p className="text-sm text-gray-400">Weeks</p>
                      <p className="text-xs text-gray-500">Policy alignment</p>
                    </div>
                    <div className="hidden md:block h-px w-16 bg-[#33CCFF]/30" />
                    <div className="text-center flex-1">
                      <div className="h-12 w-12 rounded-full bg-[#33CCFF]/20 flex items-center justify-center mx-auto mb-2">
                        <span className="text-[#33CCFF] font-bold">5-8</span>
                      </div>
                      <p className="text-sm text-gray-400">Weeks</p>
                      <p className="text-xs text-gray-500">A/B test in-app</p>
                    </div>
                    <div className="hidden md:block h-px w-16 bg-[#33CCFF]/30" />
                    <div className="text-center flex-1">
                      <div className="h-12 w-12 rounded-full bg-[#33CCFF]/20 flex items-center justify-center mx-auto mb-2">
                        <span className="text-[#33CCFF] font-bold">9-12</span>
                      </div>
                      <p className="text-sm text-gray-400">Weeks</p>
                      <p className="text-xs text-gray-500">Review & scale decision</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Section 9 - Strategic Positioning */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <div className="text-sm font-bold text-[#003B70] tracking-wider mb-3">09 — STRATEGIC POSITIONING</div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Citi Wins: The First Dual-Layer Credit Intelligence Bank
              </h2>
              <div className="h-px w-24 bg-[#003B70]" />
            </motion.div>

            <motion.div {...fadeInUp} className="mb-12">
              <p className="text-lg text-gray-700 mb-6">
                Chase built consumer. Capital One built consumer. Wells Fargo built consumer. AmEx built consumer. Apple built consumer.
              </p>
              <p className="text-xl font-bold text-[#E31837] mb-4">
                No one has built SMB.
              </p>
              <p className="text-xl font-bold text-[#003B70]">
                Citi has first-mover advantage to own the only dual consumer + SMB credit intelligence ecosystem in America.
              </p>
            </motion.div>

            {/* Competitor Comparison */}
            <motion.div {...fadeInUp}>
              <Card className="border-2 border-[#003B70] overflow-hidden">
                <CardContent className="p-0">
                  <table className="w-full">
                    <thead className="bg-[#003B70]">
                      <tr>
                        <th className="text-left p-4 text-white font-semibold">Bank</th>
                        <th className="text-center p-4 text-white font-semibold">Consumer</th>
                        <th className="text-center p-4 text-white font-semibold">SMB</th>
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
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                          <td className="p-4 font-medium text-gray-900">{row.bank}</td>
                          <td className="p-4 text-center">
                            {row.consumer ? (
                              <CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" />
                            ) : (
                              <XCircle className="h-6 w-6 text-gray-300 mx-auto" />
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {row.smb ? (
                              <CheckCircle2 className="h-6 w-6 text-green-500 mx-auto" />
                            ) : (
                              <XCircle className="h-6 w-6 text-gray-300 mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-[#003B70]/10 border-t-2 border-[#003B70]">
                        <td className="p-4 font-bold text-[#003B70]">Citi + LumiqAI</td>
                        <td className="p-4 text-center">
                          <CheckCircle2 className="h-6 w-6 text-[#33CCFF] mx-auto" />
                        </td>
                        <td className="p-4 text-center">
                          <CheckCircle2 className="h-6 w-6 text-[#33CCFF] mx-auto" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Footnotes & Citations */}
        <section className="py-16 px-6 bg-[#F5F7FA]">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="mb-8">
              <h3 className="text-lg font-bold text-gray-700 mb-4">Sources & References</h3>
              <div className="h-px w-16 bg-gray-400" />
            </motion.div>

            <motion.div {...fadeInUp}>
              <ol className="text-sm text-gray-500 space-y-2 list-decimal list-inside">
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
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 bg-gradient-to-br from-[#003B70] via-[#002850] to-[#001830]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Close Citi's Credit Funnel Gap?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Schedule a pilot review to see how LumiqAI deploys consumer + SMB credit intelligence in 90 days.
              </p>
              <Button 
                size="lg" 
                className="bg-[#33CCFF] hover:bg-[#29b8e8] text-[#003B70] font-bold px-8 py-6 text-lg"
              >
                Book Pilot Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
