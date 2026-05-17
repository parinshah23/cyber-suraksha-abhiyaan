"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const allVideos = [
  { id: "v1", category: "Phishing Scams", title: "How to Spot a Phishing Email", duration: "3:45", views: "125K", thumbnail: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { id: "v2", category: "Phishing Scams", title: "The 'Update KYC' SMS Trap", duration: "5:12", views: "89K", thumbnail: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&q=80", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { id: "v3", category: "Social Engineering", title: "Understanding Digital Arrests", duration: "6:30", views: "250K", thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { id: "v4", category: "Social Engineering", title: "The 'Friend in Need' WhatsApp Scam", duration: "4:20", views: "150K", thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { id: "v5", category: "Financial Frauds", title: "Job Offer Frauds Explained", duration: "5:45", views: "95K", thumbnail: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { id: "v6", category: "Financial Frauds", title: "UPI QR Code Trickery", duration: "3:20", views: "300K", thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
];

const categories = ["All", "Phishing Scams", "Social Engineering", "Financial Frauds"];

export function Videos() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredVideos = activeTab === "All" 
    ? allVideos 
    : allVideos.filter(v => v.category === activeTab);

  return (
    <div className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-slate-900 mb-4">
            Educational Videos
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Watch official safety guides and awareness campaigns to understand how scammers operate.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 relative",
                activeTab === cat 
                  ? "text-white shadow-md" 
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              )}
            >
              {activeTab === cat && (
                <motion.div
                  layoutId="activeTabBg"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video) => (
              <motion.a
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <CardSpotlight className="h-full p-4 bg-white border border-slate-100 shadow-sm hover:shadow-xl rounded-3xl">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/40 transition-colors" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center shadow-xl scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                      <Play className="w-6 h-6 ml-1 fill-current" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white">
                    {video.duration}
                  </div>
                  
                  <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white">
                    {video.category}
                  </div>
                </div>
                
                <div className="px-2 pb-2">
                  <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-sm font-medium text-slate-500">
                    {video.views} views • Cyber Suraksha
                  </p>
                </div>
                </CardSpotlight>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-20 text-slate-500 font-medium text-lg">
            No videos found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
