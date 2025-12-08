import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const benefits = [
  "Bank-grade security & compliance",
  "90-day integration timeline",
  "Dual consumer + business credit journeys",
  "Reg B (ECOA) and SPCP aligned",
  "Zero CAC in-app activation",
  "Proven approval lift of 15-20%",
];

const stats = [
  { number: "90", label: "Days to Deploy" },
  { number: "15-20%", label: "Approval Lift" },
  { number: "$900M+", label: "Revenue Potential" },
];

export function AboutSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div>
          <div className="text-primary text-xs font-ui font-semibold uppercase tracking-wide">
            ABOUT US
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading leading-tight tracking-tight text-foreground">
            Closing the Credit Intelligence Gap
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 lg:mt-20">
          {/* Left Column - Text & Button */}
          <div className="lg:col-span-3 space-y-16">
            <div className="space-y-6">
              <p className="text-base font-body text-foreground/70 leading-relaxed">
                LUMIQ AI is a credit intelligence platform built specifically to help banks like Citi unlock hidden revenue from qualified applicants who slip through traditional underwriting funnels.
              </p>
              <p className="text-base font-body text-foreground/70 leading-relaxed">
                We combine advanced AI, alternative data signals, and regulatory-compliant frameworks to expand credit access fairly—without elevating risk. Our dual consumer and business credit journeys integrate within 90 days, delivering measurable approval lifts and revenue recovery.
              </p>
            </div>

            {/* Benefits List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-primary shrink-0"
                  />
                  <span className="text-base font-body font-medium text-foreground">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <Link to="/how-it-works">
              <Button size="lg" variant="default" className="gap-2">
                Learn How It Works
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            {/* Divider */}
            <div className="h-px bg-foreground/10" />

            {/* Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-5xl md:text-6xl font-heading text-foreground">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-base font-body text-foreground/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-2xl h-full min-h-[400px] lg:min-h-0 bg-gradient-to-br from-primary/10 to-secondary/5 border border-border flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-4xl mb-4">📊</div>
              <p className="text-sm text-muted-foreground">Add company image or illustration here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

