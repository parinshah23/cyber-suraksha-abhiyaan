"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export const ResizableNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated navigation links to map exactly to the sections on the home page
  const navLinks = [
    { name: "Top Frauds", href: "/#top-frauds" },
    { name: "Videos", href: "/#videos" },
    { name: "Activities", href: "/#activities" },
    { name: "Safe Practices", href: "/#safe-practices" },
    { name: "Report Fraud", href: "/#report-fraud" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-surface-border transition-all">
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
              <ShieldAlert className="w-8 h-8 text-primary" />
            </div>
            <span className="font-heading font-bold text-2xl text-foreground group-hover:text-primary transition-colors">
              Cyber <span className="text-primary">Suraksha</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  link.name === "Report Fraud"
                    ? "text-accent hover:bg-accent/10 font-bold"
                    : "text-slate-600 hover:text-primary hover:bg-slate-100"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-primary hover:bg-slate-100 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute w-full glass border-t border-surface-border transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 shadow-xl flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "block px-3 py-3 rounded-xl text-base font-medium transition-colors",
                link.name === "Report Fraud"
                  ? "text-accent font-bold hover:bg-accent/10"
                  : "text-slate-600 hover:text-primary hover:bg-slate-100"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
