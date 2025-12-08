import React, { useState } from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  TrendingUp, 
  Shield, 
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Zap,
  Users,
  Building2,
  Target,
  Eye,
  CreditCard,
  RefreshCw,
  Globe,
  Lock,
  Database,
  FileCheck,
  BarChart3,
  Clock,
  Server,
  Key,
  Layers
} from "lucide-react";
import { z } from "zod";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const pilotFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  title: z.string().trim().min(1, "Title is required"),
  company: z.string().trim().min(1, "Company is required"),
  email: z.string().trim().email("Invalid email address"),
  consent: z.boolean().refine(val => val === true, "Required")
});

type PilotFormData = z.infer<typeof pilotFormSchema>;

export default function Pilot() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<PilotFormData>({
    name: "",
    title: "",
    company: "",
    email: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      pilotFormSchema.parse(formData);
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Application Submitted",
        description: "We'll contact you within 24 hours.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof PilotFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#003B70] via-[#002850] to-[#001830]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(51,204,255,0.15),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-[#33CCFF]/20 text-[#33CCFF] border-[#33CCFF]/30 px-4 py-2">
              CITI PILOT PROGRAM
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
              Install the Credit Intelligence Layer in{" "}
              <span className="text-[#33CCFF]">90 Days</span>
            </h1>
            
            <p className="text-base md:text-lg text-white/80 mb-4 max-w-3xl mx-auto">
              Close Citi's structural gap. Capture revenue currently leaking to Chase, Capital One, AmEx, and Apple.
            </p>
            
            <p className="text-sm text-white/60 mb-8 max-w-2xl mx-auto">
              Deploy a fully governed, risk-aligned, Citi-logic credit intelligence layer directly inside the Citi App. 
              This pilot is designed to produce <span className="text-[#33CCFF] font-medium">measurable revenue uplift within the first 60–90 days</span> of deployment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#33CCFF] hover:bg-[#29b8e8] text-[#003B70] font-semibold"
                onClick={() => document.getElementById('pilot-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Citi Pilot
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Request Technical Architecture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1 - Why This Pilot Matters Now */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <div className="text-xs font-bold text-[#E31837] tracking-wider mb-2">01 — WHY THIS PILOT MATTERS NOW</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Citi is the only top-4 U.S. bank without consumer or business credit intelligence inside its mobile app.
            </h2>
            <p className="text-gray-600 max-w-3xl">
              Competitors now capture Citi's customers at the moment of credit intent—before Citi even sees the demand signal. 
              This pilot delivers instant structural correction with minimal lift from Citi teams.
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="bg-white border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-lg font-bold text-[#003B70] mb-6">The Pilot Instantly Enables Citi Customers To:</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: Eye, text: "View real credit scores inside the app" },
                    { icon: Target, text: "Receive Citi-based prequalification" },
                    { icon: BarChart3, text: "Get product eligibility confidence bands" },
                    { icon: TrendingUp, text: "See predictive approval pathways" },
                    { icon: CreditCard, text: "Apply with 1-tap inside the app" },
                    { icon: RefreshCw, text: "Receive decline-recovery logic tied to Citi's rules" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-[#003B70]/5">
                      <item.icon className="h-5 w-5 text-[#003B70] flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-lg bg-[#E31837]/5 border border-[#E31837]/20">
                  <p className="text-sm text-[#E31837] font-medium">
                    This pilot prevents further revenue leakage and positions Citi to reclaim lost ground — fast.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Pilot Scope */}
      <section className="py-16 bg-gradient-to-b from-[#0B0F14] to-[#131920]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <div className="text-xs font-bold text-[#33CCFF] tracking-wider mb-2">02 — PILOT SCOPE</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Dual-Platform Credit Intelligence
            </h2>
            <p className="text-gray-400">Consumer + Business journeys deployed simultaneously.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Consumer Scope */}
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="h-full bg-[#111821] border-[#33CCFF]/30 overflow-hidden">
                <div className="p-4 bg-[#33CCFF]/10 border-b border-[#33CCFF]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#33CCFF] flex items-center justify-center">
                      <Users className="h-4 w-4 text-[#003B70]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Consumer Pilot Scope</h3>
                      <p className="text-xs text-[#33CCFF]">~75k–150k Citi Consumer customers</p>
                    </div>
                  </div>
                </div>
                
                {/* Mockup placeholder */}
                <div className="h-40 bg-gradient-to-br from-[#003B70]/20 to-transparent flex items-center justify-center border-b border-[#1E2833]">
                  <p className="text-gray-500 text-sm">[Consumer Journey Mockup]</p>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-sm text-gray-400 mb-4">Capabilities included:</p>
                  <ul className="space-y-2">
                    {[
                      "Real-time credit score surfacing",
                      "Citi-aligned prequalification: Custom Cash, Double Cash, Strata Premier, Rewards+",
                      "Eligibility Confidence Bands",
                      "Predictive card pathways",
                      "Instant Apply",
                      "Reason Codes + Recovery Guidance"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-[#33CCFF] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Scope */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="h-full bg-[#111821] border-[#F5A623]/30 overflow-hidden">
                <div className="p-4 bg-[#F5A623]/10 border-b border-[#F5A623]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F5A623] flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-[#003B70]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Business Pilot Scope</h3>
                      <p className="text-xs text-[#F5A623]">~25k–50k SMB customers</p>
                    </div>
                  </div>
                </div>
                
                {/* Mockup placeholder */}
                <div className="h-40 bg-gradient-to-br from-[#F5A623]/10 to-transparent flex items-center justify-center border-b border-[#1E2833]">
                  <p className="text-gray-500 text-sm">[Business Journey Mockup]</p>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-sm text-gray-400 mb-4">Capabilities included:</p>
                  <ul className="space-y-2">
                    {[
                      "Business Credit Score + Owner FICO blended view",
                      "Forecasted eligibility: CitiBusiness AAdvantage, Costco Business Card",
                      "SMB Revenue + Spend Pattern Modeling",
                      "Combined PG / Business attribute scoring",
                      "Apply Now (Business Flow)"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 className="h-4 w-4 text-[#F5A623] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="mt-8">
            <Card className="bg-[#003B70] border-0">
              <CardContent className="p-6 text-center">
                <p className="text-white text-lg">
                  <span className="font-bold">Citi becomes the only major bank</span>{" "}
                  <span className="text-white/80">with a dual-platform credit intelligence layer for both Consumer + SMB.</span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 3 - 90-Day Implementation Plan */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <div className="text-xs font-bold text-[#003B70] tracking-wider mb-2">03 — 90-DAY IMPLEMENTATION PLAN</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              From Kickoff to Live Pilot
            </h2>
          </motion.div>

          {/* Progress Bar */}
          <motion.div {...fadeInUp} className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex-1 h-3 rounded-full bg-[#003B70] relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-1/3 bg-[#33CCFF]" />
              </div>
              <div className="flex-1 h-3 rounded-full bg-[#003B70] relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-1/3 bg-[#33CCFF]" />
              </div>
              <div className="flex-1 h-3 rounded-full bg-[#003B70] relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-1/3 bg-[#33CCFF]" />
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Week 1</span>
              <span>Week 4</span>
              <span>Week 8</span>
              <span>Week 12</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="h-full border-t-4 border-t-[#33CCFF] bg-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#33CCFF] flex items-center justify-center text-[#003B70] font-bold">1</div>
                    <div>
                      <h3 className="font-bold text-gray-900">Phase 1</h3>
                      <p className="text-xs text-[#33CCFF]">Weeks 1–3</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">Alignment & Integration</h4>
                  <ul className="space-y-2">
                    {[
                      "Load Citi's product eligibility criteria",
                      "Map bureau + cash-flow data to Citi rules",
                      "SSO + API integration",
                      "Security review & architecture approval",
                      "Risk governance sign-off"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="h-3 w-3 text-[#003B70] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="h-full border-t-4 border-t-[#33CCFF] bg-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#33CCFF] flex items-center justify-center text-[#003B70] font-bold">2</div>
                    <div>
                      <h3 className="font-bold text-gray-900">Phase 2</h3>
                      <p className="text-xs text-[#33CCFF]">Weeks 4–7</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">Experience Layer & AI Eligibility</h4>
                  <ul className="space-y-2">
                    {[
                      "Build consumer & SMB journeys in-app",
                      "Enable eligibility engine using Citi's published criteria",
                      "Deploy confidence bands based on Citi thresholds",
                      "Build decline-recovery flows"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="h-3 w-3 text-[#003B70] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="h-full border-t-4 border-t-[#33CCFF] bg-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#33CCFF] flex items-center justify-center text-[#003B70] font-bold">3</div>
                    <div>
                      <h3 className="font-bold text-gray-900">Phase 3</h3>
                      <p className="text-xs text-[#33CCFF]">Weeks 8–12</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-3">Controlled Live Pilot</h4>
                  <ul className="space-y-2">
                    {[
                      "Go-live for limited consumer + SMB cohorts",
                      "Capture uplift data",
                      "Weekly performance dashboards",
                      "Pilot evaluation report for executive leadership"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="h-3 w-3 text-[#003B70] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="mt-8 grid sm:grid-cols-2 gap-4">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4 flex items-center gap-4">
                <Clock className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-sm font-bold text-green-700">18–24 months faster</p>
                  <p className="text-xs text-green-600">than building internally</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-4 flex items-center gap-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <div>
                  <p className="text-sm font-bold text-green-700">$40M–$70M saved</p>
                  <p className="text-xs text-green-600">in internal engineering cost</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 4 - Risk Controls */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <div className="text-xs font-bold text-[#003B70] tracking-wider mb-2">04 — RISK CONTROLS SHEET</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Enterprise Governance Framework
            </h2>
            <p className="text-gray-600">Designed for Risk, Compliance, AML, Fair Lending, and Legal teams.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Target,
                title: "Underwriting Alignment",
                items: ["No new approval rules introduced", "Uses Citi's existing product criteria", "All decisioning remains Citi-controlled", "Model explainability logs for every output"]
              },
              {
                icon: Shield,
                title: "Credit Risk Governance",
                items: ["Soft-pull only — no credit impact", "Real-time performance monitoring", "Decline-recovery follows Citi policy"]
              },
              {
                icon: Users,
                title: "Fair Lending Compliance",
                items: ["No demographic inputs", "No proxy inference", "Uniform evaluation across all users", "Full transparency logs for audit"]
              },
              {
                icon: FileCheck,
                title: "Model Risk Management",
                items: ["SR 11-7 aligned", "Model inventory indexing", "Periodic validation cycles", "Conceptual Soundness + Ongoing Monitoring"]
              },
              {
                icon: Server,
                title: "Operational Risk",
                items: ["On-prem / VPC deployment", "No PII leaves Citi's environment", "Audit-ready logs for all system calls"]
              }
            ].map((section, idx) => (
              <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                <Card className="h-full bg-white border-0 shadow-md">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-[#003B70] flex items-center justify-center">
                        <section.icon className="h-5 w-5 text-[#33CCFF]" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm">{section.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle2 className="h-3 w-3 text-[#003B70] flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-8">
            <Card className="bg-[#003B70] border-0">
              <CardContent className="p-6 text-center">
                <p className="text-white">
                  <span className="font-bold">Zero changes to Citi's risk appetite.</span>{" "}
                  <span className="text-white/80">Maximum control remains inside the bank.</span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 5 - Security Appendix */}
      <section className="py-16 bg-gradient-to-b from-[#0B0F14] to-[#131920]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <div className="text-xs font-bold text-[#33CCFF] tracking-wider mb-2">05 — SECURITY APPENDIX</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Enterprise-Grade Security Architecture
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "SOC2 Type II", icon: Shield },
              { label: "ISO 27001", icon: FileCheck },
              { label: "PCI DSS Level 1", icon: Lock },
              { label: "AES-256 + TLS 1.3", icon: Key }
            ].map((badge, idx) => (
              <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                <Card className="bg-[#111821] border-[#33CCFF]/20">
                  <CardContent className="p-4 flex items-center gap-3">
                    <badge.icon className="h-5 w-5 text-[#33CCFF]" />
                    <span className="text-sm font-medium text-white">{badge.label}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="h-full bg-[#111821] border-[#1E2833]">
                <CardContent className="p-5">
                  <h3 className="font-bold text-white mb-4 text-sm">Data Handling</h3>
                  <ul className="space-y-2">
                    {[
                      "No persistent storage of Citi customer data",
                      "Tokenized session design",
                      "Data isolation by environment",
                      "No cross-tenant commingling"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="h-3 w-3 text-[#33CCFF] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="h-full bg-[#111821] border-[#1E2833]">
                <CardContent className="p-5">
                  <h3 className="font-bold text-white mb-4 text-sm">Permissions & Access</h3>
                  <ul className="space-y-2">
                    {[
                      "Role-based access control",
                      "Just-In-Time credentials",
                      "Principle of Least Privilege",
                      "Immutable audit logs"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="h-3 w-3 text-[#33CCFF] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="h-full bg-[#111821] border-[#1E2833]">
                <CardContent className="p-5">
                  <h3 className="font-bold text-white mb-4 text-sm">Deployment Options</h3>
                  <ul className="space-y-2">
                    {[
                      "Citi-managed Kubernetes",
                      "VPC Peering",
                      "Citi Private Cloud",
                      "On-prem container clusters"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                        <CheckCircle2 className="h-3 w-3 text-[#33CCFF] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="mt-6">
            <p className="text-center text-sm text-gray-500">
              Security posture exceeds internal development standards and reduces attack surface by minimizing custom-coded components.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 6 - Success Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <div className="text-xs font-bold text-[#003B70] tracking-wider mb-2">06 — PILOT SUCCESS METRICS</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              What Executives Care About
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="h-full border-t-4 border-t-[#33CCFF]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#003B70]" />
                    Consumer KPIs
                  </h3>
                  <div className="space-y-3">
                    {[
                      { metric: "+12–24%", label: "Approval lift" },
                      { metric: "+2–3×", label: "App engagement increase" },
                      { metric: "5–10%", label: "Conversion uplift" },
                      { metric: "25–40%", label: "Manual review reduction" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-sm text-gray-600">{item.label}</span>
                        <span className="text-sm font-bold text-[#003B70]">{item.metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="h-full border-t-4 border-t-[#F5A623]">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-[#003B70]" />
                    Business KPIs
                  </h3>
                  <div className="space-y-3">
                    {[
                      { metric: "+18–30%", label: "SMB approval lift" },
                      { metric: "35–50%", label: "Fewer manual reviews" },
                      { metric: "5–12%", label: "SMB product conversion uplift" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                        <span className="text-sm text-gray-600">{item.label}</span>
                        <span className="text-sm font-bold text-[#003B70]">{item.metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
              <Card className="h-full border-t-4 border-t-green-500 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Financial Impact (Pilot Window)
                  </h3>
                  <div className="space-y-3">
                    {[
                      { metric: "$30M–$45M", label: "Incremental approvals" },
                      { metric: "~$10M", label: "Cost savings" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b border-green-200 last:border-0">
                        <span className="text-sm text-gray-600">{item.label}</span>
                        <span className="text-sm font-bold text-green-700">{item.metric}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 rounded-lg bg-green-100">
                    <p className="text-xs text-green-700 font-medium">
                      By Day 90, Citi will see quantifiable revenue impact.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 7 - Global Expansion */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="mb-10">
            <div className="text-xs font-bold text-[#003B70] tracking-wider mb-2">07 — GLOBAL EXPANSION PATH</div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              A Platform Move, Not a Single Feature
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div {...fadeInUp}>
              <p className="text-gray-600 mb-6">
                After U.S. deployment, LumiqAI becomes Citi's global eligibility engine, with market-specific logic:
              </p>
              <ul className="space-y-3">
                {[
                  "Support for TransUnion, Equifax, Experian, CIBIL, CRIF, etc.",
                  "Configurable to local regulatory environments",
                  "Multi-product eligibility across regions",
                  "Multi-language UX",
                  "Seamless API replication across markets"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-[#003B70] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <Card className="bg-[#003B70] border-0">
                <CardContent className="p-8 text-center">
                  <Globe className="h-16 w-16 text-[#33CCFF] mx-auto mb-4" />
                  <p className="text-white text-lg font-bold mb-2">160+ Markets</p>
                  <p className="text-white/70 text-sm">
                    Citi can scale this globally — a platform move, not a single feature.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8 - Final CTA */}
      <section id="pilot-form" className="py-16 bg-gradient-to-br from-[#003B70] via-[#002850] to-[#001830]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Install Citi's Missing Credit Intelligence Layer
              </h2>
              <p className="text-white/70">
                Launch a controlled pilot in 90 days. Begin capturing revenue Citi is losing today.
              </p>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input 
                        placeholder="Full name" 
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-11"
                      />
                      <Input 
                        placeholder="Title" 
                        value={formData.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-11"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input 
                        placeholder="Company" 
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-11"
                      />
                      <Input 
                        type="email" 
                        placeholder="Work email" 
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-11"
                      />
                    </div>
                    
                    <div className="flex items-start gap-2 py-2">
                      <Checkbox 
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange("consent", checked)}
                        className="border-white/30 data-[state=checked]:bg-[#33CCFF] data-[state=checked]:border-[#33CCFF]"
                      />
                      <label htmlFor="consent" className="text-xs text-white/60 leading-tight">
                        I agree to be contacted about the pilot program
                      </label>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        size="lg"
                        className="flex-1 bg-[#33CCFF] hover:bg-[#29b8e8] text-[#003B70] font-semibold"
                      >
                        {isSubmitting ? "Submitting..." : "Start Citi Pilot"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button 
                        type="button"
                        size="lg"
                        variant="outline"
                        className="flex-1 border-[#F5A623] text-[#F5A623] hover:bg-[#F5A623]/10"
                      >
                        Request Technical Architecture
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
