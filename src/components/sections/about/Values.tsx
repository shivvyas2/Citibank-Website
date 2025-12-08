import { Shield, Zap, Target, TrendingUp, Lock, CheckCircle2 } from "lucide-react";

const values = [
  {
    id: "security",
    title: "Security First",
    description: "Bank-grade security controls, SOC 2-aligned, with encryption in transit and at rest. Your data and decisions are protected.",
    icon: Shield,
  },
  {
    id: "speed",
    title: "Rapid Deployment",
    description: "90-day integration timeline. Non-disruptive pilot with pre-agreed success criteria. Get to market faster than building internally.",
    icon: Zap,
  },
  {
    id: "precision",
    title: "Precision Targeting",
    description: "Find creditworthy applicants that current models miss. Expand approvals by 15-20% without increasing default risk.",
    icon: Target,
  },
  {
    id: "growth",
    title: "Revenue Recovery",
    description: "Unlock $900M-$1.6B in annual revenue potential. Zero CAC in-app activation. Measurable conversion lift from day one.",
    icon: TrendingUp,
  },
  {
    id: "compliance",
    title: "Regulatory Alignment",
    description: "Built for Reg B (ECOA), FCRA, GLBA, UDAP, and CRA compliance. SPCP and Fair Lending alignment from day one.",
    icon: Lock,
  },
  {
    id: "proven",
    title: "Proven Results",
    description: "Modeled on Chase Credit Journey, Capital One CreditWise, and Wells Fargo Close-Up. Calibrated to Citi's TAM.",
    icon: CheckCircle2,
  },
];

export function Values() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 lg:py-32 bg-background-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16 lg:mb-20">
          <div className="text-primary text-xs font-ui font-semibold uppercase tracking-wide">
            OUR VALUES
          </div>
          <h2 className="mx-auto max-w-2xl text-4xl md:text-5xl lg:text-6xl font-heading leading-tight tracking-tight text-foreground">
            Building Trust Through Every Decision
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.id}
              className="group bg-background rounded-2xl p-8 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <value.icon size={28} className="text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-heading text-foreground mb-3">{value.title}</h3>

              {/* Description */}
              <p className="text-base font-body text-foreground/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

