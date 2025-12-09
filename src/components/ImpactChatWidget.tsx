import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, DollarSign, Zap, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ImpactChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show widget after user scrolls a bit
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          {!isOpen ? (
            // Collapsed state - Chat bubble
            <motion.button
              onClick={() => setIsOpen(true)}
              className="bg-primary text-primary-foreground rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sm">Citi Impact Summary</div>
                <div className="text-xs opacity-90">Click to view full impact</div>
              </div>
            </motion.button>
          ) : (
            // Expanded state - Full impact summary
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-card border border-border rounded-2xl shadow-2xl w-[90vw] max-w-md max-h-[80vh] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Citi Impact Summary</h3>
                    <p className="text-xs opacity-90">What Citi Gains</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto p-6 space-y-4">
                {/* Consumer Lift */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-success" />
                      </div>
                      <h4 className="font-bold text-foreground">Consumer Lift</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                        <span><span className="font-semibold text-success">+12–24%</span> approval lift</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                        <span><span className="font-semibold text-success">+25–40%</span> fewer manual reviews</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                        <span><span className="font-semibold text-success">2–3×</span> engagement</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                        <span><span className="font-semibold text-success">+5–10%</span> card conversions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Business Lift */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-success" />
                      </div>
                      <h4 className="font-bold text-foreground">Business Lift</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                        <span><span className="font-semibold text-success">+18–30%</span> approval lift</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                        <span><span className="font-semibold text-success">+35–50%</span> fewer manual reviews</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                        <span><span className="font-semibold text-success">+5–12%</span> SMB conversions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                        <span><span className="font-semibold text-success">+$300M–$700M</span> uplift</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Total Financial Impact */}
                <Card className="border-primary/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="font-bold text-foreground">Total Financial Impact</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span><span className="font-semibold text-primary">+$900M–$1.6B</span> annual uplift</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span><span className="font-semibold text-primary">Zero CAC</span></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>First-mover advantage in credit intelligence</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Development Savings */}
                <Card className="border-secondary/30">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-secondary" />
                      </div>
                      <h4 className="font-bold text-foreground">Development Savings</h4>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        <span>Save <span className="font-semibold text-secondary">$40M–$70M</span> in build cost</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        <span>Save <span className="font-semibold text-secondary">18–24 months</span> of internal development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>LumiqAI deploys in <span className="font-semibold text-primary">90 days</span></span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

