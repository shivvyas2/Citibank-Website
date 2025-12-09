import { motion } from "framer-motion";
import { CheckCircle2, Users, Briefcase, ArrowRight } from "lucide-react";

export function StrategicBridge() {
  return (
    <section className="py-20 md:py-24 lg:py-32 relative bg-background-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading leading-tight tracking-tight text-foreground">
              What Citi Is Missing — And What We Built To{" "}
              <span className="text-primary">Close It Overnight.</span>
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
              className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Consumer customers need an in-app place to:</h3>
              </div>
              
              {/* Consumer Mockup Image */}
              <div className="mb-6 flex items-center justify-center">
                <img
                  src="/What Citi Is Missing — And What We Built To Close It Overnight./consumers customers need an in.png"
                  alt="Consumer customers need an in-app place"
                  className="w-full h-auto rounded-xl"
                />
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
              className="bg-card border border-primary/30 rounded-2xl p-6 lg:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Business customers need an in-app place to:</h3>
              </div>
              
              {/* Business Mockup Image */}
              <div className="mb-6 flex items-center justify-center">
                <img
                  src="/What Citi Is Missing — And What We Built To Close It Overnight./business customers need an in.png"
                  alt="Business customers need an in-app place"
                  className="w-full h-auto rounded-xl"
                />
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
        </motion.div>
      </div>
    </section>
  );
}

