"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const scenarios = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    situation: "You receive an SMS claiming your electricity will be cut off tonight. It provides a link to pay the pending bill immediately.",
    isSafe: false,
    explanation: "Electricity boards never send SMS warnings with sudden cutoff threats and payment links. This is a common phishing scam to steal your card details."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=1200&q=80",
    situation: "A popular shopping app sends you a push notification about a 50% discount. Tapping it opens the official app.",
    isSafe: true,
    explanation: "Push notifications that directly open the verified, official application installed on your phone are generally safe, unlike SMS links from unknown numbers."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&q=80",
    situation: "You're selling furniture online. The buyer sends a QR code and asks you to scan it and enter your UPI PIN to 'receive the payment'.",
    isSafe: false,
    explanation: "You NEVER need to enter your UPI PIN to receive money. Scanning a QR and entering a PIN always deducts money from your account."
  }
];

export function LearnByScenario() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);

  const currentQ = scenarios[currentIndex];

  const handleAnswer = (answerIsSafe: boolean) => {
    if (answerIsSafe === currentQ.isSafe) {
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }
  };

  const handleNext = () => {
    setFeedback(null);
    setCurrentIndex((prev) => (prev + 1) % scenarios.length);
  };

  return (
    <div className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-4 h-14">
            Can You Spot the Fraud?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Test your instincts. Look at the situation below and decide if it&apos;s safe to proceed.
          </p>
        </div>

        {/* Removed max-w-4xl to allow it to span the full available width of the 90rem container */}
        <div className="w-full">
          <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl">
            <div className="grid lg:grid-cols-2">
              {/* Left Side: Image (Expanded width) */}
              <div className="relative h-[400px] lg:h-[600px] bg-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={currentQ.image} 
                  alt="Scenario" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-slate-800 shadow-sm">
                  Scenario {currentIndex + 1} / {scenarios.length}
                </div>
              </div>

              {/* Right Side: Interaction */}
              <div className="p-8 md:p-16 flex flex-col justify-center bg-white relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  {!feedback ? (
                    <motion.div
                      key="question"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex flex-col h-full justify-center relative z-10"
                    >
                      <div className="mb-12">
                        <AlertCircle className="w-10 h-10 text-primary mb-6" />
                        <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-900 leading-relaxed">
                          &quot;{currentQ.situation}&quot;
                        </h3>
                      </div>
                      
                      <p className="text-slate-500 font-bold mb-6 uppercase tracking-wider text-sm">Is this Safe?</p>
                      <div className="grid grid-cols-2 gap-6">
                        <button
                          onClick={() => handleAnswer(true)}
                          className="py-6 rounded-2xl font-bold text-xl text-success bg-success/10 hover:bg-success hover:text-white border border-success/20 transition-all shadow-sm hover:shadow-lg"
                        >
                          YES, Safe
                        </button>
                        <button
                          onClick={() => handleAnswer(false)}
                          className="py-6 rounded-2xl font-bold text-xl text-accent bg-accent/10 hover:bg-accent hover:text-white border border-accent/20 transition-all shadow-sm hover:shadow-lg"
                        >
                          NO, Scam
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="feedback"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col h-full justify-center relative z-10"
                    >
                      <div className="flex items-center gap-4 mb-8">
                        {feedback === "correct" ? (
                          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-10 h-10 text-success" />
                          </div>
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <XCircle className="w-10 h-10 text-accent" />
                          </div>
                        )}
                        <h3 className={cn("text-4xl font-black font-heading", feedback === "correct" ? "text-success" : "text-accent")}>
                          {feedback === "correct" ? "Correct!" : "Incorrect!"}
                        </h3>
                      </div>
                      
                      <div className="bg-slate-50 p-8 rounded-2xl mb-10 border border-slate-200">
                        <p className="text-slate-700 leading-relaxed text-xl">
                          {currentQ.explanation}
                        </p>
                      </div>
                      
                      <button
                        onClick={handleNext}
                        className="w-full py-5 bg-primary hover:bg-blue-700 text-white font-bold text-lg rounded-2xl transition-all shadow-lg shadow-primary/30"
                      >
                        Next Scenario &rarr;
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
