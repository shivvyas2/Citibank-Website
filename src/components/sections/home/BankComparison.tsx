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
      className="flex flex-col items-center"
    >
      {/* Mockup Image - No frame since images already have frames */}
      <div className="relative w-full max-w-[200px]">
        {imagePath ? (
          <img
            src={imagePath}
            alt={`${bankName} Mockup`}
            className="w-full h-auto object-contain"
          />
        ) : (
          <div className="w-full aspect-[9/19.5] flex items-center justify-center bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/30">
            <div className="text-center p-4">
              <div className="text-3xl mb-2">📱</div>
              <span className="text-xs text-muted-foreground">Add mockup</span>
            </div>
          </div>
        )}
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
      title: "Chase",
      phones: [
        {
          bankName: "Chase Consumer",
          badge: { text: "Credit Journey", variant: "success" as const },
          imagePath: "/Hero-Mockups/Chase-Consumer.png",
        },
        {
          bankName: "Chase Email",
          badge: { text: "Credit Journey", variant: "success" as const },
          imagePath: "/Hero-Mockups/chase-email.png",
        },
      ],
    },
    {
      title: "Wells Fargo",
      phones: [
        {
          bankName: "Wells Fargo Email",
          badge: { text: "Credit Close-Up", variant: "success" as const },
          imagePath: "/Hero-Mockups/Wells-Fargo-Email.png",
        },
        {
          bankName: "Wells Fargo App",
          badge: { text: "Credit Close-Up", variant: "success" as const },
          imagePath: "/Hero-Mockups/wells-fargo-app.png",
        },
      ],
    },
    {
      title: "Capital One",
      phones: [
        {
          bankName: "Capital One",
          badge: { text: "CreditWise", variant: "success" as const },
          imagePath: "/Hero-Mockups/capital one.png",
        },
        {
          bankName: "Capital One Email",
          badge: { text: "CreditWise", variant: "success" as const },
          imagePath: "/Hero-Mockups/capital-one-email.png",
        },
      ],
    },
    {
      title: "Citi - The Gap",
      phones: [
        {
          bankName: "Citi Consumer",
          badge: { text: "No credit journey", variant: "warning" as const },
          imagePath: "/Hero-Mockups/citi-consumer.png",
        },
        {
          bankName: "Citi Business",
          badge: { text: "No credit journey", variant: "warning" as const },
          imagePath: "/Hero-Mockups/citi-business.png",
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

