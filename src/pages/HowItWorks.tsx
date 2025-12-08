import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Database, Shield, Rocket, Lock, Users, TrendingUp, BarChart3, CheckCircle2, 
  FileText, Target, DollarSign, Zap, ArrowRight, Smartphone, Building2, 
  CreditCard, AlertCircle, Globe, RefreshCw, Bell, LineChart, Clock,
  ChevronRight, Info
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function HowItWorks() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen relative">
        {/* Quick Facts Panel - Desktop Only */}
        <div className="hidden xl:block fixed right-8 top-32 w-64 z-30">
          <Card className="bg-[#003B70]/95 backdrop-blur-sm border-[#33CCFF]/30 shadow-lg">
            <CardContent className="p-5">
              <h3 className="text-sm font-bold mb-4 text-[#33CCFF]">Citi Impact Summary</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">+12–24%</div>
                  <p className="text-xs text-white/70">Consumer approval lift</p>
                </div>
                <div className="h-px bg-[#33CCFF]/20" />
                <div>
                  <div className="text-2xl font-bold text-white mb-1">+18–30%</div>
                  <p className="text-xs text-white/70">SMB approval lift</p>
                </div>
                <div className="h-px bg-[#33CCFF]/20" />
                <div>
                  <div className="text-2xl font-bold text-white mb-1">$900M–$1.6B</div>
                  <p className="text-xs text-white/70">Annual recaptured revenue</p>
                </div>
                <div className="h-px bg-[#33CCFF]/20" />
                <div>
                  <div className="text-2xl font-bold text-white mb-1">90 days</div>
                  <p className="text-xs text-white/70">Deployment timeline</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress Navigation */}
        <section className="sticky top-16 z-40 bg-[#003B70]/95 backdrop-blur supports-[backdrop-filter]:bg-[#003B70]/80 border-b border-[#33CCFF]/20">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 py-3 overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'user-experience', label: 'User Experience' },
                { id: 'what-users-see', label: 'What Users See' },
                { id: 'engine', label: 'Under the Hood' },
                { id: 'impact', label: 'Impact' },
                { id: 'security', label: 'Security' },
                { id: 'scalability', label: 'Global Scale' }
              ].map((item, idx, arr) => (
                <div key={item.id} className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-white/70 hover:text-[#33CCFF] transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </button>
                  {idx < arr.length - 1 && (
                    <span className="text-white/30">•</span>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </section>

        {/* SECTION 1 — OVERVIEW (Hero) */}
        <section id="overview" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#003B70] via-[#002850] to-[#001830]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiMzM0NDRkYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
          
          <div className="container mx-auto px-4 pt-24 pb-20 relative z-10">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-[#33CCFF]/20 text-[#33CCFF] border-[#33CCFF]/30 px-4 py-2">
                CITI — HOW IT WORKS
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                LumiqAI installs Citi's missing credit intelligence layer
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-6 leading-relaxed">
                For both <span className="text-[#33CCFF] font-semibold">Consumer</span> and <span className="text-[#33CCFF] font-semibold">Business</span> — directly inside the Citi App.
              </p>
              
              <p className="text-lg text-white/60 mb-8 max-w-3xl mx-auto">
                Convert creditworthy applicants Citi currently declines — using income evidence, spending patterns, and payment discipline. 
                <span className="text-white font-medium">SPCP-compliant. Your rules. Controlled risk.</span>
              </p>

              <Card className="bg-white/5 backdrop-blur-sm border-[#33CCFF]/20 max-w-2xl mx-auto mb-10">
                <CardContent className="p-6">
                  <p className="text-white/90 text-lg">
                    <span className="text-[#33CCFF] font-bold">Outcome:</span> A Citi customer sees the right product, at the right moment, 
                    with a Citi-aligned approval likelihood — and can apply instantly.
                  </p>
                </CardContent>
              </Card>

              <Button 
                size="lg" 
                className="bg-[#33CCFF] hover:bg-[#29b8e8] text-[#003B70] font-bold px-8 py-6 text-lg"
              >
                Start Citi Pilot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 — HOW CITI USERS EXPERIENCE THE SYSTEM */}
        <section id="user-experience" className="py-20 bg-gradient-to-b from-[#001830] to-background">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  How Citi Users Experience the System
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Seamless credit intelligence integrated directly into the Citi App experience
                </p>
              </div>

              {/* Mockup Placeholders */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <Card className="bg-card/70 backdrop-blur-sm border-[#33CCFF]/20 overflow-hidden">
                  <div className="p-4 border-b border-[#33CCFF]/10">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-[#33CCFF]" />
                      <span className="text-sm font-semibold text-[#33CCFF]">Consumer View</span>
                    </div>
                  </div>
                  <CardContent className="p-6 h-72 flex items-center justify-center bg-gradient-to-br from-[#003B70]/10 to-transparent">
                    <p className="text-muted-foreground text-center">
                      [Consumer Citi App Mockup]<br />
                      <span className="text-xs">Credit Score + Card Prequalification</span>
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-card/70 backdrop-blur-sm border-[#33CCFF]/20 overflow-hidden">
                  <div className="p-4 border-b border-[#33CCFF]/10">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-[#33CCFF]" />
                      <span className="text-sm font-semibold text-[#33CCFF]">Business View</span>
                    </div>
                  </div>
                  <CardContent className="p-6 h-72 flex items-center justify-center bg-gradient-to-br from-[#003B70]/10 to-transparent">
                    <p className="text-muted-foreground text-center">
                      [Business Citi App Mockup]<br />
                      <span className="text-xs">Business Score + SMB Product Eligibility</span>
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Step 1 & 2 */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="bg-card/70 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#003B70] flex items-center justify-center">
                        <span className="text-lg font-bold text-[#33CCFF]">1</span>
                      </div>
                      <h3 className="text-lg font-bold">Credit Data Syncs</h3>
                      <Badge variant="outline" className="text-xs border-green-500/50 text-green-400">Soft Pull</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      User securely syncs their profile. LumiqAI pulls bureau data, cash-flow intelligence, and credit attributes.
                    </p>
                    <p className="text-xs text-muted-foreground/80 italic">No impact to credit score</p>
                  </CardContent>
                </Card>

                <Card className="bg-card/70 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#003B70] flex items-center justify-center">
                        <span className="text-lg font-bold text-[#33CCFF]">2</span>
                      </div>
                      <h3 className="text-lg font-bold">Citi Eligibility Framework Loads</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      The system loads Citi's actual eligibility criteria for each product — including minimum score ranges, 
                      utilization expectations, payment history standards, income/DTI norms, inquiry recency, credit age, 
                      and Citi's product-specific rules.
                    </p>
                    <a href="https://www.citi.com/credit-cards/understanding-credit-cards/what-credit-card-do-i-qualify-for" 
                       target="_blank" rel="noopener noreferrer"
                       className="text-xs text-[#33CCFF] hover:underline flex items-center gap-1">
                      <Info className="w-3 h-3" /> View Citi qualification criteria
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Step 3 - Highlighted */}
              <Card className="bg-gradient-to-r from-[#003B70] to-[#002850] border-[#33CCFF]/40 shadow-lg shadow-[#33CCFF]/10">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#33CCFF] flex items-center justify-center">
                      <span className="text-xl font-bold text-[#003B70]">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">AI Eligibility Engine Runs</h3>
                      <p className="text-sm text-[#33CCFF]">Core decisioning layer</p>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#33CCFF]/30">
                    <p className="text-lg text-white font-medium leading-relaxed">
                      "System evaluates <span className="text-[#33CCFF] font-bold">Score</span>, <span className="text-[#33CCFF] font-bold">Cash Flow</span>, <span className="text-[#33CCFF] font-bold">Utilization</span>, <span className="text-[#33CCFF] font-bold">Spend Profile</span>, <span className="text-[#33CCFF] font-bold">Risk Tier</span>, and <span className="text-[#33CCFF] font-bold">Lifecycle Stage</span> using Citi's published eligibility and creditworthiness guidelines."
                    </p>
                  </div>
                  
                  <div className="mt-6 flex items-center gap-4 flex-wrap">
                    <Badge className="bg-[#33CCFF]/20 text-[#33CCFF] border-[#33CCFF]/30">
                      <Shield className="w-3 h-3 mr-1" /> Citi Stays in Control
                    </Badge>
                    <a href="https://www.citi.com/credit-cards/understanding-credit-cards/how-to-apply-for-a-credit-card" 
                       target="_blank" rel="noopener noreferrer"
                       className="text-sm text-white/70 hover:text-[#33CCFF] flex items-center gap-1">
                      <Info className="w-4 h-4" /> View Citi creditworthiness framework
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 — WHAT THE USER SEES */}
        <section id="what-users-see" className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What the User Sees
                </h2>
                <p className="text-muted-foreground">
                  Dual-view credit intelligence for Consumer and Business users
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Consumer Column */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#33CCFF]/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#33CCFF]" />
                    </div>
                    <h3 className="text-xl font-bold">For Consumers</h3>
                  </div>
                  
                  <Card className="bg-card/70 backdrop-blur-sm border-[#33CCFF]/20 mb-6 h-48 flex items-center justify-center">
                    <p className="text-muted-foreground text-center">
                      [Consumer Mockup]<br />
                      <span className="text-xs">Prequalified Cards View</span>
                    </p>
                  </Card>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-[#33CCFF] mb-3">LumiqAI Surfaces:</p>
                    {[
                      "Prequalified Citi Cards (Double Cash, Custom Cash, Strata Premier, Rewards+)",
                      "Approval Confidence Bands (Very Likely, Likely, Borderline)",
                      "Utilization, Payment History & Inquiry factors",
                      "1-Tap Apply inside the Citi App"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#33CCFF] shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Business Column */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#33CCFF]/20 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-[#33CCFF]" />
                    </div>
                    <h3 className="text-xl font-bold">For Business Owners</h3>
                  </div>
                  
                  <Card className="bg-card/70 backdrop-blur-sm border-[#33CCFF]/20 mb-6 h-48 flex items-center justify-center">
                    <p className="text-muted-foreground text-center">
                      [Business Mockup]<br />
                      <span className="text-xs">SMB Eligibility View</span>
                    </p>
                  </Card>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-[#33CCFF] mb-3">LumiqAI Surfaces:</p>
                    {[
                      "Prequalified Citi Business Cards (CitiBusiness AAdvantage, Costco Business)",
                      "Business Credit Strength + Owner FICO synced together",
                      "Eligibility Confidence Bands based on combined metrics",
                      "Business underwriting rules auto-mapped"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#33CCFF] shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 — WHAT THE ENGINE DOES UNDER THE HOOD */}
        <section id="engine" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  What the Engine Does Under the Hood
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Citi-aligned AI decisioning with full explainability
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* 1. Prequalification */}
                <Card className="bg-card/70 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#003B70] flex items-center justify-center">
                        <Target className="w-5 h-5 text-[#33CCFF]" />
                      </div>
                      <h3 className="text-lg font-bold">1. Prequalification</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Soft-pull evaluation mapped to Citi's own pre-qual criteria.
                    </p>
                    <a href="https://www.citi.com/credit-cards/understanding-credit-cards/what-credit-card-do-i-qualify-for" 
                       target="_blank" rel="noopener noreferrer"
                       className="text-xs text-[#33CCFF] hover:underline">
                      Reference: Citi qualification criteria →
                    </a>
                  </CardContent>
                </Card>

                {/* 2. Eligibility Confidence Bands */}
                <Card className="bg-card/70 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#003B70] flex items-center justify-center">
                        <BarChart3 className="w-5 h-5 text-[#33CCFF]" />
                      </div>
                      <h3 className="text-lg font-bold">2. Eligibility Confidence Bands</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      AI assigns a Citi-policy-aligned confidence score:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Very Likely</Badge>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">Likely</Badge>
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Borderline</Badge>
                      <Badge className="bg-red-500/20 text-red-400 border-red-500/30">High Decline Risk</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground/80 mt-3 italic">
                      No new rules introduced — mirrors what Citi underwriters already evaluate.
                    </p>
                  </CardContent>
                </Card>

                {/* 3. Multi-Product Mapping */}
                <Card className="bg-card/70 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#003B70] flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-[#33CCFF]" />
                      </div>
                      <h3 className="text-lg font-bold">3. Multi-Product Mapping</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Engine tests user attributes against every Citi card's rules:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                      <span>• Score thresholds</span>
                      <span>• Credit age</span>
                      <span>• Inquiry recency</span>
                      <span>• Payment history</span>
                      <span>• Utilization windows</span>
                      <span>• Income/DTI</span>
                      <span className="col-span-2">• 48-month bonus cycle considerations</span>
                    </div>
                  </CardContent>
                </Card>

                {/* 4. Decline-Recovery Logic */}
                <Card className="bg-card/70 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#003B70] flex items-center justify-center">
                        <RefreshCw className="w-5 h-5 text-[#33CCFF]" />
                      </div>
                      <h3 className="text-lg font-bold">4. Decline-Recovery Logic</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      If a user cannot be approved today, LumiqAI automatically generates:
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-[#33CCFF] shrink-0 mt-0.5" />
                        <span>Reason Codes based on Citi criteria</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-[#33CCFF] shrink-0 mt-0.5" />
                        <span>Steps to Achieve Approval</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-[#33CCFF] shrink-0 mt-0.5" />
                        <span>Smart Re-Apply when conditions improve</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Compliance Alignment Statement */}
              <div className="mt-10 p-6 rounded-xl bg-[#003B70]/20 border border-[#33CCFF]/20 text-center">
                <h4 className="text-sm font-bold tracking-widest text-[#33CCFF] uppercase mb-2">Compliance Alignment</h4>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Designed with ECOA (Reg B) SPCP guidance in mind — credit extension without disparate impact, supported by explainability artifacts.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 — IMPACT ON CITI'S ECOSYSTEM */}
        <section id="impact" className="py-20 bg-gradient-to-b from-[#003B70] to-[#001830]">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Impact on Citi's Ecosystem
                </h2>
                <p className="text-white/70">
                  ROI that hits like Chase + Apple keynote energy
                </p>
              </div>

              {/* What Citi Gains */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-[#33CCFF] mb-6 text-center">What Citi Gains</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: "+12–24%", label: "Approval Lift (Consumer)", icon: TrendingUp },
                    { value: "+18–30%", label: "Approval Lift (Business)", icon: Building2 },
                    { value: "–25–40%", label: "Manual Reviews Reduction", icon: FileText },
                    { value: "2–3×", label: "App Engagement Lift", icon: Smartphone },
                    { value: "+5–12%", label: "New Product Conversion", icon: Target },
                    { value: "$900M–$1.6B", label: "Annual Recaptured Revenue", icon: DollarSign },
                    { value: "Zero", label: "Customer Acquisition Cost", icon: Users },
                    { value: "Dual-Layer", label: "Consumer + SMB Intelligence", icon: Zap }
                  ].map((item, idx) => (
                    <Card key={idx} className="bg-white/5 backdrop-blur-sm border-[#33CCFF]/20 hover:border-[#33CCFF]/40 transition-colors">
                      <CardContent className="p-6 text-center">
                        <item.icon className="w-8 h-8 text-[#33CCFF] mx-auto mb-3" />
                        <div className="text-2xl md:text-3xl font-bold text-white mb-2">{item.value}</div>
                        <p className="text-xs text-white/60">{item.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* What Citi Saves */}
              <div>
                <h3 className="text-xl font-bold text-[#33CCFF] mb-6 text-center">What Citi Saves</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-white/5 backdrop-blur-sm border-green-500/30">
                    <CardContent className="p-8 text-center">
                      <div className="text-4xl font-bold text-green-400 mb-2">$40M–$70M</div>
                      <p className="text-white/70">Development cost avoided</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/5 backdrop-blur-sm border-green-500/30">
                    <CardContent className="p-8 text-center">
                      <div className="text-4xl font-bold text-green-400 mb-2">18–24 mo</div>
                      <p className="text-white/70">Build time saved</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/5 backdrop-blur-sm border-[#33CCFF]/30">
                    <CardContent className="p-8 text-center">
                      <div className="text-4xl font-bold text-[#33CCFF] mb-2">90 days</div>
                      <p className="text-white/70">LumiqAI deployment time</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 6 — SECURITY & GOVERNANCE */}
        <section id="security" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Security & Governance
                </h2>
                <p className="text-muted-foreground">
                  Citi-grade compliance and enterprise security
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Shield, title: "Citi's Own Logic", desc: "Uses Citi's existing underwriting rules — not external rules" },
                  { icon: Lock, title: "Zero Risk Interference", desc: "Zero interference with risk appetite" },
                  { icon: FileText, title: "Full Audit Trail", desc: "Complete audit trail + explainability logs" },
                  { icon: CheckCircle2, title: "SOC2 Compliant", desc: "SOC2 + ISO27001 compliant" },
                  { icon: CreditCard, title: "PCI DSS", desc: "PCI DSS compliant data handling" },
                  { icon: Database, title: "Flexible Deployment", desc: "On-prem or VPC deployment options" }
                ].map((item, idx) => (
                  <Card key={idx} className="bg-card/70 backdrop-blur-sm border-primary/20">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-[#003B70]/50 flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-[#33CCFF]" />
                      </div>
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Minimal Integration Box */}
              <div className="mt-10 p-6 rounded-xl bg-[#33CCFF]/10 border border-[#33CCFF]/30 text-center">
                <h4 className="text-sm font-bold tracking-widest text-[#33CCFF] uppercase mb-2">Minimal Integration Required</h4>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Pilot requires offline data extracts only — no core system modifications, no UI changes, no integration with underwriting engines.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 7 — GLOBAL SCALABILITY */}
        <section id="scalability" className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Global Scalability
                </h2>
                <p className="text-muted-foreground">
                  Built for Citi's worldwide footprint
                </p>
              </div>

              <Card className="bg-gradient-to-br from-[#003B70]/20 to-transparent border-[#33CCFF]/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { icon: Globe, label: "Scales to 160+ markets" },
                      { icon: Database, label: "Works with credit bureau heterogeneity" },
                      { icon: LineChart, label: "Merges global + local card eligibility logic" },
                      { icon: Users, label: "Supports multilingual UX" },
                      { icon: Zap, label: "Deploys as modular eligibility microservice" },
                      { icon: Shield, label: "Regional compliance adaptability" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#33CCFF]/20 flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-[#33CCFF]" />
                        </div>
                        <span className="text-sm text-foreground">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* SECTION 8 — CALL TO ACTION */}
        <section className="py-24 bg-gradient-to-br from-[#003B70] via-[#002850] to-[#001830] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiMzM0NDRkYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Install Citi's missing credit intelligence layer in 90 days.
              </h2>
              <p className="text-xl text-white/70 mb-10">
                Consumer + Business. Dual-layer. First-mover advantage.
              </p>
              <Button 
                size="lg" 
                className="bg-[#33CCFF] hover:bg-[#29b8e8] text-[#003B70] font-bold px-10 py-7 text-xl shadow-lg shadow-[#33CCFF]/30"
              >
                Start Citi Pilot
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#003B70]/95 backdrop-blur-sm border-t border-[#33CCFF]/20 md:hidden z-50">
          <Button 
            className="w-full bg-[#33CCFF] hover:bg-[#29b8e8] text-[#003B70] font-bold py-6"
          >
            Start Citi Pilot
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
