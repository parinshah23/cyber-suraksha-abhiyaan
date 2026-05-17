"use client";
import React, { useState } from "react";
import { ShieldCheck, Key, Smartphone, Globe, MessageSquareWarning, CreditCard, Camera, ScanFace, Lock, Wifi, Download, Bell, Share2, AlertCircle, Fingerprint, RefreshCcw, MonitorX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Organized by domains
const domainsData = [
  {
    id: "mobile",
    name: "Mobile Security",
    icon: <Smartphone className="w-5 h-5" />,
    dos: [
      { id: "m1", title: "Verify App Sources", icon: <Download />, desc: "Only download applications from official stores (Google Play, Apple App Store). Never install APKs sent via SMS.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" },
      { id: "m2", title: "Update OS Regularly", icon: <RefreshCcw />, desc: "Keep your phone's operating system updated to patch the latest security vulnerabilities.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" },
      { id: "m3", title: "Review App Permissions", icon: <ShieldCheck />, desc: "Don't blindly grant Camera, Microphone, or SMS access to apps that don't need them.", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80" },
      { id: "m4", title: "Use Screen Locks", icon: <Lock />, desc: "Always secure your phone with a strong PIN, pattern, or biometric lock (Face ID / Fingerprint).", image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=800&q=80" },
    ]
  },
  {
    id: "browsing",
    name: "Safe Browsing",
    icon: <Globe className="w-5 h-5" />,
    dos: [
      { id: "b1", title: "Check for HTTPS", icon: <Lock />, desc: "Ensure the website URL starts with 'https://' and has a padlock icon before entering data.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" },
      { id: "b2", title: "Avoid Public Wi-Fi for Banking", icon: <Wifi />, desc: "Never perform financial transactions over open, public Wi-Fi networks at cafes or airports.", image: "https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&q=80" },
      { id: "b3", title: "Beware of Pop-ups", icon: <AlertCircle />, desc: "Do not click on suspicious pop-up ads claiming your device is infected or you've won a prize.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80" },
      { id: "b4", title: "Use Ad Blockers", icon: <ShieldCheck />, desc: "Install reputable ad blockers to prevent malicious advertisements from executing scripts.", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80" },
    ]
  },
  {
    id: "passwords",
    name: "Passwords & OTPs",
    icon: <Key className="w-5 h-5" />,
    dos: [
      { id: "p1", title: "Don't Share OTPs", icon: <MessageSquareWarning />, desc: "Your bank or police will never ask for your OTP. Treat it like your ATM PIN.", image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&q=80" },
      { id: "p2", title: "Use Strong Passwords", icon: <Key />, desc: "Combine letters, numbers, and symbols. Use a unique password for primary accounts.", image: "https://images.unsplash.com/photo-1633265486064-086b219458ce?w=800&q=80" },
      { id: "p3", title: "Enable 2FA", icon: <Fingerprint />, desc: "Two-Factor Authentication adds a second layer of security, making it harder to hack accounts.", image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=800&q=80" },
      { id: "p4", title: "Use Password Managers", icon: <Lock />, desc: "Stop writing passwords on notes. Use a secure password manager to store encrypted vaults.", image: "https://images.unsplash.com/photo-1555949963-aa79dcee57d5?w=800&q=80" },
    ]
  },
  {
    id: "social",
    name: "Social Media",
    icon: <Share2 className="w-5 h-5" />,
    dos: [
      { id: "s1", title: "Private Profiles", icon: <Lock />, desc: "Set your social media accounts to private. Only allow people you know to view your personal photos.", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" },
      { id: "s2", title: "Verify 'Friends in Need'", icon: <MessageSquareWarning />, desc: "If a friend urgently messages asking for money, call them directly to verify it's not a hacked account.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" },
      { id: "s3", title: "Limit Oversharing", icon: <Camera />, desc: "Avoid posting your real-time location or pictures of boarding passes and ID cards.", image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=800&q=80" },
      { id: "s4", title: "Review Tagging", icon: <Bell />, desc: "Enable profile review so you have to approve posts or photos you are tagged in before they appear.", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80" },
    ]
  },
  {
    id: "banking",
    name: "Banking & Payments",
    icon: <CreditCard className="w-5 h-5" />,
    dos: [
      { id: "bk1", title: "PIN is only for Sending", icon: <ShieldCheck />, desc: "Remember: You NEVER need to enter your UPI PIN to receive money.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" },
      { id: "bk2", title: "Check SMS Alerts", icon: <MessageSquareWarning />, desc: "Enable instant SMS and email alerts for all banking transactions to spot unauthorized deductions immediately.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80" },
      { id: "bk3", title: "Use Official Apps", icon: <Smartphone />, desc: "Always use the official banking app downloaded from verified app stores, never from third-party links.", image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&q=80" },
      { id: "bk4", title: "Don't use Screen Sharing", icon: <MonitorX />, desc: "Never install apps like AnyDesk or QuickSupport if 'customer care' asks you to do so.", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" },
    ]
  },
  {
    id: "ai",
    name: "AI & Deepfakes",
    icon: <ScanFace className="w-5 h-5" />,
    dos: [
      { id: "a1", title: "Verify with Safe Words", icon: <Key />, desc: "Establish a family 'safe word'. If someone calls sounding like a loved one in distress, ask for the safe word.", image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&q=80" },
      { id: "a2", title: "Look for Glitches", icon: <ScanFace />, desc: "In video calls, look for unnatural blinking, mismatched lip-sync, or weird lighting which indicate a deepfake.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80" },
      { id: "a3", title: "Hang Up and Call Back", icon: <PhoneCall />, desc: "If you get a suspicious distress call, hang up and call the person back on their known, saved number.", image: "https://images.unsplash.com/photo-1528747045269-390fe33c19f2?w=800&q=80" },
      { id: "a4", title: "Report AI Blackmail", icon: <AlertCircle />, desc: "If someone creates a fake explicit image of you using AI, don't pay. Report it immediately to cyber police.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80" },
    ]
  }
];

// Define PhoneCall here since it was missing from imports
import { PhoneCall } from "lucide-react";

export function SafePractices() {
  const [activeDomainId, setActiveDomainId] = useState(domainsData[0].id);
  const activeDomain = domainsData.find(d => d.id === activeDomainId) || domainsData[0];

  const [activeDoId, setActiveDoId] = useState(activeDomain.dos[0].id);
  const activeDo = activeDomain.dos.find(d => d.id === activeDoId) || activeDomain.dos[0];

  // Update active DO when domain changes
  const handleDomainChange = (domainId: string) => {
    setActiveDomainId(domainId);
    const domain = domainsData.find(d => d.id === domainId);
    if (domain) {
      setActiveDoId(domain.dos[0].id);
    }
  };

  return (
    <div className="py-24 bg-white relative">
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-4">
            Safe Digital Practices
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Essential hygiene rules to keep your digital life secure across all platforms.
          </p>
        </div>

        {/* Domain Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 border-b border-slate-200 pb-8">
          {domainsData.map((domain) => (
            <button
              key={domain.id}
              onClick={() => handleDomainChange(domain.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 relative",
                activeDomainId === domain.id
                  ? "text-primary bg-primary/10 border-primary shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              )}
            >
              {domain.icon}
              {domain.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Dynamic Image */}
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-xl order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeDo.id}
                src={activeDo.image}
                alt={activeDo.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${activeDo.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex p-3 rounded-2xl mb-4 bg-primary text-white shadow-lg">
                    {React.cloneElement(activeDo.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-3xl font-black font-heading text-white mb-2 drop-shadow-md">
                    {activeDo.title}
                  </h3>
                  <p className="text-white/90 text-lg max-w-md drop-shadow-md">
                    {activeDo.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side: List of 4 DO's */}
          <div className="flex flex-col gap-4 order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                {activeDomain.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-slate-900">
                {activeDomain.name} Guidelines
              </h3>
            </div>

            {activeDomain.dos.map((doItem, index) => (
              <button
                key={doItem.id}
                onClick={() => setActiveDoId(doItem.id)}
                className={cn(
                  "text-left p-6 rounded-2xl border transition-all duration-300 group relative overflow-hidden",
                  activeDoId === doItem.id
                    ? "bg-white border-primary shadow-lg ring-1 ring-primary/20"
                    : "bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-md"
                )}
              >
                {/* Active Indicator Line */}
                {activeDoId === doItem.id && (
                  <motion.div
                    layoutId="activeIndicatorDo"
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary rounded-l-2xl"
                  />
                )}

                <div className="flex items-start gap-5">
                  <div className={cn(
                    "mt-1 p-3 rounded-xl transition-colors shadow-sm",
                    activeDoId === doItem.id ? "bg-primary text-white" : "bg-white text-slate-500 group-hover:text-primary border border-slate-100"
                  )}>
                    {React.cloneElement(doItem.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <h4 className={cn(
                      "text-xl font-bold font-heading mb-2 transition-colors",
                      activeDoId === doItem.id ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
                    )}>
                      {index + 1}. {doItem.title}
                    </h4>
                    <AnimatePresence>
                      {activeDoId === doItem.id && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-slate-600 text-lg leading-relaxed overflow-hidden"
                        >
                          {doItem.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
