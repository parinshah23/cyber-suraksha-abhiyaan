"use client";
import React, { useState } from "react";
import { DraggableCard } from "@/components/ui/draggable-card";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { Compare } from "@/components/ui/compare";
import { CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";

export function Activities() {
  const [dragged, setDragged] = useState(false);
  const [dragResult, setDragResult] = useState<"safe" | "unsafe" | null>(null);

  const handleDrop = (direction: "left" | "right") => {
    setDragged(true);
    setDragResult(direction === "left" ? "unsafe" : "safe");
    setTimeout(() => {
      setDragged(false);
      setDragResult(null);
    }, 2000);
  };

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
            Interactive Safety Labs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Test your knowledge with hands-on exercises. Decode phishing links and identify secure sites.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Activity 1: Password Encryption */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold font-heading">Decode the Link</h3>
            </div>
            <p className="text-gray-600 mb-8">
              Hover over the suspicious URL below to decode its true destination. Notice how scammers hide the real domain.
            </p>
            <div className="bg-slate-900 p-6 rounded-2xl text-center cursor-crosshair">
              <span className="text-white font-mono text-xl tracking-wider">
                <EncryptedText text="http://secure-login.bank-update.com/auth" interval={30} />
              </span>
            </div>
            <div className="mt-6 text-sm text-gray-500 bg-white p-4 rounded-xl border border-gray-100">
              <strong className="text-gray-900">Analysis:</strong> The actual domain is &quot;bank-update.com&quot;, not &quot;secure-login&quot;. This is a classic subdomain spoofing technique.
            </div>
          </div>

          {/* Activity 2: Compare Safe vs Unsafe */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold font-heading">Spot the Fake App</h3>
            </div>
            <p className="text-gray-600 mb-8">
              Slide to compare a legitimate banking app login screen with a fake phishing overlay.
            </p>
            <div className="h-64 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-inner relative">
              {/* Using colored divs as placeholder for images since we don't have local images */}
              <Compare
                firstImage="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                secondImage="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&q=80"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">Fake App</div>
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg">Real App</div>
            </div>
          </div>

          {/* Activity 3: Tinder for Scams (Drag) */}
          <div className="lg:col-span-2 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100 shadow-xl overflow-hidden flex flex-col items-center justify-center text-center py-16">
            <h3 className="text-3xl font-bold font-heading mb-4 text-gray-900">Safe or Unsafe?</h3>
            <p className="text-gray-600 mb-12 max-w-lg">
              Swipe Left for Unsafe (Scam). Swipe Right for Safe (Legitimate).
            </p>

            <div className="relative w-full max-w-sm h-64 flex items-center justify-center">
              {/* Background guides */}
              <div className="absolute left-0 h-full flex items-center opacity-30 pointer-events-none">
                <span className="text-4xl font-bold text-red-500 -rotate-90 block">← UNSAFE</span>
              </div>
              <div className="absolute right-0 h-full flex items-center opacity-30 pointer-events-none">
                <span className="text-4xl font-bold text-green-500 rotate-90 block">SAFE →</span>
              </div>

              {!dragged ? (
                <DraggableCard onDrop={handleDrop} className="w-full h-full bg-white rounded-3xl shadow-2xl border-2 border-gray-100 p-8 flex flex-col justify-center items-center relative z-10 hover:border-primary/50 transition-colors">
                  <div className="bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
                    Scenario
                  </div>
                  <p className="text-lg font-medium text-gray-900 leading-relaxed">
                    &quot;You won a ₹1,00,000 lottery! Click here and pay ₹2,000 as processing fee to claim.&quot;
                  </p>
                  <div className="absolute bottom-4 flex justify-between w-full px-8 text-gray-400 text-sm font-medium">
                    <span>← Swipe Left</span>
                    <span>Swipe Right →</span>
                  </div>
                </DraggableCard>
              ) : (
                <div className="w-full h-full bg-white rounded-3xl shadow-xl border-2 border-gray-100 p-8 flex flex-col justify-center items-center animate-in zoom-in duration-300">
                  {dragResult === "unsafe" ? (
                    <>
                      <CheckCircle2 className="w-16 h-16 text-success mb-4" />
                      <h4 className="text-2xl font-bold text-success mb-2">Correct!</h4>
                      <p className="text-gray-600">This is a classic advance-fee scam.</p>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-16 h-16 text-accent mb-4" />
                      <h4 className="text-2xl font-bold text-accent mb-2">Wrong Move!</h4>
                      <p className="text-gray-600">You should never pay upfront fees to claim a prize.</p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
