"use client";
import React from "react";
import { PhoneCall, Globe, Shield, FileText, CheckCircle2, AlertTriangle } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function ReportFraud() {
  const reportingMethods = [
    {
      id: "helpline",
      method: "1930 National Helpline",
      icon: <PhoneCall className="w-6 h-6 text-accent" />,
      steps: [
        "Call 1930 immediately from any phone.",
        "Provide your account details and transaction history.",
        "Follow the operator's instructions."
      ],
      requiredInfo: "Bank account number, transaction ID, date and time of fraud, suspect's details.",
      expectedOutcome: "Immediate freezing of the suspect's bank account or wallet to stop funds.",
      badge: "Fastest / Emergency"
    },
    {
      id: "portal",
      method: "Cybercrime.gov.in Portal",
      icon: <Globe className="w-6 h-6 text-primary" />,
      steps: [
        "Visit cybercrime.gov.in.",
        "Click on 'File a Complaint'.",
        "Register using your mobile number and OTP.",
        "Fill in the detailed form and upload evidence."
      ],
      requiredInfo: "Screenshots of chats/transactions, bank statements, suspect's details, identity proof.",
      expectedOutcome: "Formal police complaint registered. An Investigating Officer (IO) is assigned.",
      badge: "Official Record"
    },
    {
      id: "sanchar",
      method: "Sanchar Saathi (Chakshu)",
      icon: <Shield className="w-6 h-6 text-secondary" />,
      steps: [
        "Visit sancharsaathi.gov.in.",
        "Navigate to the 'Chakshu' reporting section.",
        "Report suspected fraud communication (SMS, Call)."
      ],
      requiredInfo: "Screenshot of the fraudulent message, phone number of the sender, date and time.",
      expectedOutcome: "The reported number/device is investigated and blocked across all telecom networks.",
      badge: "Preventive"
    }
  ];

  return (
    <div className="py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      <BackgroundBeams />
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-bold mb-6 shadow-sm">
            <AlertTriangle className="w-5 h-5" />
            Official Reporting Guide
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
            Victim of Cyber Fraud? <br /> Act Fast.
          </h2>
          <p className="text-xl text-slate-300">
            Do not panic. Follow these official government procedures immediately to secure your accounts and register a formal complaint. The golden hour is critical.
          </p>
        </div>

        {/* Structured Table Section (Full Width) */}
        <div className="w-full">
          <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[1000px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-8 text-lg font-heading font-bold text-slate-800 w-1/4">Reporting Method</th>
                    <th className="p-8 text-lg font-heading font-bold text-slate-800 w-1/4">Steps to Follow</th>
                    <th className="p-8 text-lg font-heading font-bold text-slate-800 w-1/4">Required Information</th>
                    <th className="p-8 text-lg font-heading font-bold text-slate-800 w-1/4">Expected Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {reportingMethods.map((method) => (
                    <tr key={method.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-8 align-top">
                        <div className="flex flex-col gap-3">
                          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                            {method.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 leading-tight mt-2">{method.method}</h3>
                          <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full w-fit border border-slate-200">
                            {method.badge}
                          </span>
                        </div>
                      </td>
                      <td className="p-8 align-top">
                        <ol className="list-decimal list-inside space-y-3 text-slate-700 text-lg">
                          {method.steps.map((step, idx) => (
                            <li key={idx} className="pl-2 leading-relaxed">{step}</li>
                          ))}
                        </ol>
                      </td>
                      <td className="p-8 align-top">
                        <div className="flex items-start gap-3 text-slate-700 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                          <FileText className="w-6 h-6 text-slate-400 shrink-0 mt-0.5" />
                          <p className="text-base leading-relaxed font-medium">{method.requiredInfo}</p>
                        </div>
                      </td>
                      <td className="p-8 align-top">
                        <div className="flex items-start gap-3 text-success/90 bg-success/5 p-5 rounded-2xl border border-success/20">
                          <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5 text-success" />
                          <p className="text-base leading-relaxed font-bold">{method.expectedOutcome}</p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
