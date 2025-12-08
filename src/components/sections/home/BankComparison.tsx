import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2 } from "lucide-react";

interface PhoneMockupProps {
  bankName: string;
  badge?: {
    text: string;
    variant: "success" | "warning";
  };
  imagePath?: string;
  index: number;
}

function PhoneMockup({ bankName, badge, imagePath, index }: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col items-center gap-3"
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-sm font-semibold text-foreground">{bankName}</span>
        {badge && (
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-medium ${
              badge.variant === "success"
                ? "bg-success/10 border border-success/30 text-success"
                : "bg-warning/20 border border-warning/50 text-warning"
            }`}
          >
            {badge.text}
          </span>
        )}
      </div>
      {/* Phone Frame */}
      <div className="relative" style={{ width: "140px", maxWidth: "100%" }}>
        {/* Phone Frame Outer */}
        <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[1.5rem] p-1.5 shadow-lg">
          {/* Phone Screen Bezel */}
          <div className="bg-black rounded-[1.2rem] p-1">
            {/* Notch */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-10"></div>
            {/* Screen */}
            <div className="bg-white rounded-[0.9rem] overflow-hidden aspect-[9/19.5] relative">
              {imagePath ? (
                <img
                  src={imagePath}
                  alt={`${bankName} App Screenshot`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
                  <div className="text-center p-2">
                    <div className="text-2xl mb-1">📱</div>
                    <span className="text-[10px] text-muted-foreground/70">Add {bankName} mockup</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface BentoBoxProps {
  title?: string;
  phones: Array<{
    bankName: string;
    badge?: {
      text: string;
      variant: "success" | "warning";
    };
    imagePath?: string;
  }>;
  index: number;
}

function BentoBox({ title, phones, index }: BentoBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="bg-card border border-border rounded-3xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {title && (
        <h3 className="text-lg font-bold text-foreground mb-6 text-center">{title}</h3>
      )}
      <div className="grid grid-cols-2 gap-6">
        {phones.map((phone, phoneIndex) => (
          <PhoneMockup
            key={phone.bankName}
            bankName={phone.bankName}
            badge={phone.badge}
            imagePath={phone.imagePath}
            index={index * 2 + phoneIndex}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function BankComparison() {
  const bentoBoxes = [
    {
      title: "Consumer Credit Intelligence",
      phones: [
        {
          bankName: "Chase",
          badge: { text: "Credit Journey", variant: "success" as const },
          imagePath: "/placeholder.svg", // Replace with actual image path
        },
        {
          bankName: "Capital One",
          badge: { text: "CreditWise", variant: "success" as const },
          imagePath: "/placeholder.svg", // Replace with actual image path
        },
      ],
    },
    {
      title: "Business Credit Intelligence",
      phones: [
        {
          bankName: "Wells Fargo",
          badge: { text: "Credit Close-Up", variant: "success" as const },
          imagePath: "/placeholder.svg", // Replace with actual image path
        },
        {
          bankName: "Bank of America",
          badge: { text: "Business Advantage", variant: "success" as const },
          imagePath: "/placeholder.svg", // Replace with actual image path
        },
      ],
    },
    {
      title: "Competitive Solutions",
      phones: [
        {
          bankName: "American Express",
          badge: { text: "Credit Score", variant: "success" as const },
          imagePath: "/placeholder.svg", // Replace with actual image path
        },
        {
          bankName: "Discover",
          badge: { text: "Credit Scorecard", variant: "success" as const },
          imagePath: "/placeholder.svg", // Replace with actual image path
        },
      ],
    },
    {
      title: "Citi - The Gap",
      phones: [
        {
          bankName: "Citi Consumer",
          badge: { text: "No credit journey", variant: "warning" as const },
          imagePath: "/placeholder.svg", // Replace with actual image path
        },
        {
          bankName: "Citi Business",
          badge: { text: "No credit journey", variant: "warning" as const },
          imagePath: "/placeholder.svg", // Replace with actual image path
        },
      ],
    },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading leading-tight tracking-tight text-foreground mb-4">
            Who has in-app credit intelligence today?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Consumer & business credit visibility vs Citi
          </p>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {bentoBoxes.map((box, index) => (
            <BentoBox
              key={index}
              title={box.title}
              phones={box.phones}
              index={index}
            />
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Data reflects publicly available product launches. LUMIQ AI Business Credit Journey™ closes this gap.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

