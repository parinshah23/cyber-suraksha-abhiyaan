"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Activity, ShieldCheck, Lock, Bug, Key, Wifi, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";
import { ColourfulText } from "@/components/ui/colourful-text";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const HeroSection = () => {
  return (
    <AuroraBackground className="bg-slate-50 pt-10 min-h-[90vh]">
      <div className="relative flex items-center overflow-hidden w-full h-full">
      
      {/* Grid Background Pattern */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, #e2e8f0 1px, transparent 1px),
            linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Decorative Gradients */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[70vh]">
          
          {/* Left Side: Text Content */}
          <div className="max-w-2xl text-center lg:text-left pt-10 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in relative z-20">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-slate-700">National Cyber Security Awareness</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight mb-6 text-slate-900 leading-tight relative z-20">
              Stay Alert. <br />
              <ColourfulText text="Stay Secure." className="drop-shadow-sm" />
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 relative z-20">
              Your first line of defense in the digital world. Learn to identify threats, protect your digital identity, and report cyber frauds instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start relative z-20">
              <MagneticButton>
                <Link 
                  href="#top-frauds" 
                  className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-blue-700 text-white rounded-full font-bold shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  Explore Frauds
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              
              <MagneticButton>
                <Link 
                  href="#safe-practices" 
                  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-full font-bold shadow-sm transition-all flex items-center justify-center"
                >
                  Learn Safety Rules
                </Link>
              </MagneticButton>
            </div>
          </div>

          {/* Right Side: Duo Mascot and Floating Icons */}
          <div className="relative flex justify-center lg:justify-end items-center h-full w-full mt-12 lg:mt-0 min-h-[500px] lg:min-h-[700px]">
            
            {/* Main Mascot Image with mix-blend-multiply to remove white background */}
            <div className="relative w-full h-full max-w-[600px] mx-auto z-10 animate-float">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/mascot-duo.png" 
                alt="Cyber Security Mascots" 
                className="w-full h-full object-contain mix-blend-multiply" 
              />
            </div>

            {/* Floating Icons Scattered Around */}
            {/* Top Left (Green Shield) */}
            <div className="absolute top-[15%] left-[10%] md:left-[20%] w-14 h-14 bg-green-50 rounded-2xl border border-green-100 shadow-lg flex items-center justify-center animate-bounce z-20" style={{ animationDelay: '0s', animationDuration: '3s' }}>
              <ShieldCheck className="w-6 h-6 text-green-600" />
            </div>

            {/* Top Right (Blue Lock) */}
            <div className="absolute top-[20%] right-[10%] w-14 h-14 bg-blue-50 rounded-2xl border border-blue-100 shadow-lg flex items-center justify-center animate-bounce z-20" style={{ animationDelay: '0.4s', animationDuration: '3.5s' }}>
              <Lock className="w-6 h-6 text-blue-600" />
            </div>

            {/* Middle Left (Blue EyeOff) */}
            <div className="absolute top-[45%] left-[5%] w-12 h-12 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-lg flex items-center justify-center animate-bounce z-20" style={{ animationDelay: '0.8s', animationDuration: '2.8s' }}>
              <EyeOff className="w-5 h-5 text-indigo-600" />
            </div>

            {/* Middle Right (Red Bug) */}
            <div className="absolute top-[50%] right-[5%] md:right-[15%] w-12 h-12 bg-red-50 rounded-2xl border border-red-100 shadow-lg flex items-center justify-center animate-bounce z-20" style={{ animationDelay: '1.2s', animationDuration: '3.2s' }}>
              <Bug className="w-5 h-5 text-red-600" />
            </div>

            {/* Bottom Left (Orange Wifi) */}
            <div className="absolute bottom-[20%] left-[15%] md:left-[25%] w-14 h-14 bg-orange-50 rounded-2xl border border-orange-100 shadow-lg flex items-center justify-center animate-bounce z-20" style={{ animationDelay: '0.6s', animationDuration: '3.6s' }}>
              <Wifi className="w-6 h-6 text-orange-600" />
            </div>

            {/* Bottom Right (Purple Key) */}
            <div className="absolute bottom-[25%] right-[20%] w-14 h-14 bg-purple-50 rounded-2xl border border-purple-100 shadow-lg flex items-center justify-center animate-bounce z-20" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
              <Key className="w-6 h-6 text-purple-600" />
            </div>

          </div>
        </div>
      </div>
      </div>
    </AuroraBackground>
  );
};
