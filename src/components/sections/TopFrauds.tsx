"use client";
import React, { useState, useEffect } from "react";
import { X, AlertTriangle, ShieldX, Smartphone, MonitorX, Mic, TrendingDown, FileBadge } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card-effect";

const frauds = [
  {
    id: 1,
    title: "Fake APK Scam",
    icon: <Smartphone className="w-8 h-8 text-accent" />,
    summary: "Malicious apps masquerading as legitimate banking or delivery apps.",
    explanation: "Scammers send a link via SMS or WhatsApp asking you to download an APK file to track a package or complete KYC. Once installed, this app gains access to your SMS, allowing scammers to intercept banking OTPs.",
    example: "Rahul received an SMS from 'India Post' with a link to an APK. He installed it, and within hours, ₹45,000 was deducted from his account as the app forwarded his OTPs to the scammer.",
    prevention: [
      "Never download apps from unknown links or third-party websites.",
      "Always use official app stores (Google Play Store, Apple App Store).",
      "Check app permissions before installing."
    ],
    color: "bg-red-50 border-red-100",
    iconBg: "bg-red-100"
  },
  {
    id: 2,
    title: "Digital Arrest Scam",
    icon: <MonitorX className="w-8 h-8 text-warning" />,
    summary: "Scammers pose as law enforcement to extort money over video calls.",
    explanation: "Victims receive a call claiming their Aadhaar or phone number is linked to illegal activities. The scammers force the victim into a Skype video call, showing fake police setups and demanding money.",
    example: "Priya was kept on a video call for 6 hours by fake 'CBI officers'. Out of fear, she transferred ₹2,50,000 to their account to avoid 'arrest'.",
    prevention: [
      "Real police will never 'arrest' you over a video call.",
      "Do not transfer money to any 'safe account' provided by callers.",
      "Disconnect and report the number immediately to 1930."
    ],
    color: "bg-orange-50 border-orange-100",
    iconBg: "bg-orange-100"
  },
  {
    id: 3,
    title: "UPI QR Code Fraud",
    icon: <ShieldX className="w-8 h-8 text-secondary" />,
    summary: "Receiving money does not require scanning a QR code or entering a PIN.",
    explanation: "While selling items online, a buyer agrees to your price and sends a QR code, claiming that scanning it will deposit money into your account. Scanning and entering your PIN authorizes a payment TO the scammer.",
    example: "Amit was selling a bicycle online. The 'buyer' sent a QR code to send ₹5,000. Amit scanned it, entered his PIN, and ₹5,000 was debited from his own account.",
    prevention: [
      "You NEVER need to enter a UPI PIN to receive money.",
      "Only enter your PIN when you are SENDING money.",
      "Be wary of buyers who are in a rush and refuse to talk on the phone."
    ],
    color: "bg-purple-50 border-purple-100",
    iconBg: "bg-purple-100"
  },
  {
    id: 4,
    title: "AI Voice Cloning Scam",
    icon: <Mic className="w-8 h-8 text-primary" />,
    summary: "Scammers use AI to clone voices of loved ones claiming they are in an emergency.",
    explanation: "Using short audio clips from social media, scammers clone the voice of a family member. They call claiming they have been kidnapped or are in an accident and desperately need money transferred immediately.",
    example: "Suresh received a crying call from his 'daughter' saying she had lost her phone and needed ₹10,000 immediately. It was an AI clone.",
    prevention: [
      "Establish a 'safe word' with your family to verify identities in emergencies.",
      "Hang up and call the person back on their original number.",
      "Do not rush to transfer money no matter how urgent it sounds."
    ],
    color: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-100"
  },
  {
    id: 5,
    title: "Fake Investment Fraud",
    icon: <TrendingDown className="w-8 h-8 text-emerald-600" />,
    summary: "Promises of unrealistic, guaranteed returns on crypto or stock trading platforms.",
    explanation: "Scammers add victims to Telegram or WhatsApp groups showing fake screenshots of massive profits. They direct victims to a fake trading portal where initial small investments show fake returns, tricking them into investing large sums.",
    example: "Neha invested ₹1,00,000 in a 'Crypto Mining' app after seeing huge profits on a Telegram group. When she tried to withdraw, they asked for 30% tax, and she realized it was a scam.",
    prevention: [
      "If it sounds too good to be true, it is. There are no guaranteed high returns.",
      "Only use SEBI-registered brokers and official platforms.",
      "Never invest based on random WhatsApp or Telegram group advice."
    ],
    color: "bg-emerald-50 border-emerald-100",
    iconBg: "bg-emerald-100"
  },
  {
    id: 6,
    title: "KYC Update Scam",
    icon: <FileBadge className="w-8 h-8 text-cyan-600" />,
    summary: "Threats that your bank account or SIM will be blocked without an immediate KYC update.",
    explanation: "Victims receive a call or SMS claiming their KYC has expired. A link is provided leading to a fake banking portal that steals login credentials, or a screen-sharing app (like AnyDesk) is downloaded to steal OTPs.",
    example: "Vikram received a message that his SIM would be blocked in 24 hours. He clicked the link, entered his details, and scammers bypassed his banking security.",
    prevention: [
      "Banks and telecom operators never send links via SMS to update KYC.",
      "Never install screen-sharing apps like AnyDesk or QuickSupport if asked by customer care.",
      "Always visit your bank branch directly for KYC updates."
    ],
    color: "bg-cyan-50 border-cyan-100",
    iconBg: "bg-cyan-100"
  }
];

export const TopFrauds = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedId) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedId]);

  const selectedFraud = frauds.find(f => f.id === selectedId);

  return (
    <div className="py-24 relative overflow-hidden bg-white">
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-4">
            Top Cyber Frauds
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Scammers are getting smarter. Understand their tactics by exploring the most common cyber frauds affecting citizens today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frauds.map((fraud) => (
            <motion.div
              layoutId={`card-${fraud.id}`}
              key={fraud.id}
              onClick={() => setSelectedId(fraud.id)}
              className={cn(
                "rounded-3xl cursor-pointer group flex flex-col relative transition-all duration-300",
                "h-full w-full"
              )}
            >
              <CardContainer className="w-full h-full p-0 py-0" containerClassName="w-full h-full p-0 m-0">
                <CardBody className="w-full h-full p-8 rounded-3xl border hover:shadow-xl transition-all duration-300 flex flex-col bg-white overflow-hidden relative">
                  <div className={cn("absolute inset-0 pointer-events-none opacity-20", fraud.color)} />
                  
                  <CardItem translateZ="50" className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm relative z-10", fraud.iconBg)}>
                    <motion.div layoutId={`icon-${fraud.id}`}>
                      {fraud.icon}
                    </motion.div>
                  </CardItem>
                  
                  <CardItem translateZ="40" className="w-full relative z-10">
                    <motion.h3 layoutId={`title-${fraud.id}`} className="text-2xl font-bold font-heading text-slate-900 mb-3 group-hover:text-primary transition-colors">
                      {fraud.title}
                    </motion.h3>
                  </CardItem>
                  
                  <CardItem translateZ="30" className="w-full flex-1 relative z-10">
                    <motion.p layoutId={`summary-${fraud.id}`} className="text-slate-600 leading-relaxed mb-6">
                      {fraud.summary}
                    </motion.p>
                  </CardItem>
                  
                  <CardItem translateZ="20" className="mt-auto relative z-10">
                    <div className="flex items-center text-primary font-bold group-hover:underline">
                      View Details &rarr;
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedFraud && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div
              layoutId={`card-${selectedFraud.id}`}
              className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative z-10 flex flex-col shadow-2xl hide-scrollbar"
            >
              <div className={cn("absolute top-0 left-0 w-full h-48 pointer-events-none", selectedFraud.color)} />
              
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-6 right-6 p-2 bg-slate-900/10 hover:bg-slate-900/20 rounded-full text-slate-800 transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8 md:p-12 relative z-10">
                <motion.div layoutId={`icon-${selectedFraud.id}`} className={cn("w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-md", selectedFraud.iconBg)}>
                  {selectedFraud.icon}
                </motion.div>
                
                <motion.h3 layoutId={`title-${selectedFraud.id}`} className="text-3xl md:text-4xl font-black font-heading text-slate-900 mb-4">
                  {selectedFraud.title}
                </motion.h3>
                
                <motion.p layoutId={`summary-${selectedFraud.id}`} className="text-xl text-slate-600 font-medium mb-8">
                  {selectedFraud.summary}
                </motion.p>

                <div className="space-y-8">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h4 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-warning" />
                      How It Works
                    </h4>
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {selectedFraud.explanation}
                    </p>
                  </div>

                  <div className="bg-accent/5 p-6 rounded-2xl border border-accent/20">
                    <h4 className="text-lg font-bold text-accent mb-2">Real-life Example</h4>
                    <p className="text-slate-800 leading-relaxed italic text-lg">
                      &quot;{selectedFraud.example}&quot;
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <ShieldX className="w-6 h-6 text-success" />
                      Prevention Tips
                    </h4>
                    <ul className="space-y-4">
                      {selectedFraud.prevention.map((tip, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-slate-700 text-lg">
                          <span className="w-8 h-8 rounded-full bg-success/10 text-success flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">✓</span>
                          <span className="pt-1">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 flex justify-end">
                  <button
                    onClick={() => setSelectedId(null)}
                    className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-colors shadow-lg"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
