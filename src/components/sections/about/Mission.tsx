export function Mission() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 lg:py-32 bg-primary/5">
      <div className="container mx-auto px-6">
        <div className="space-y-20 md:space-y-24">
          {/* Mission Text */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-primary text-xs font-ui font-semibold uppercase tracking-wide">
              OUR MISSION
            </div>

            <h3 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading leading-tight tracking-tight text-foreground">
              Close the credit intelligence gap that's costing Citi $900M-$1.6B annually.
            </h3>

            <p className="mt-6 text-lg font-body text-foreground/70 leading-relaxed">
              We believe every qualified applicant deserves fair access to credit. By combining advanced AI with regulatory-compliant frameworks, we help banks like Citi expand approvals safely—turning declined applications into approved revenue without elevating risk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

