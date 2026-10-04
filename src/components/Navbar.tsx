import React, { useState } from 'react';
import { Search, ShieldCheck, Sparkles, Send, Globe, ChevronDown } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface NavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onOpenHireModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  setSearchQuery,
  onOpenHireModal,
}) => {
  const [lang, setLang] = useState<'TH' | 'EN'>('TH');

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
      {/* Top micro banner */}
      <div className="bg-[#131922] text-white text-[11px] font-medium py-1.5 px-4 text-center flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Fastwork · Show the world what you can do • พร้อมรับโปรเจกต์ใหม่ไตรมาสนี้ ให้คำปรึกษาฟรี</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo Brand with Fastwork.com look */}
          <a href="#" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
              F
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                Fastwork<span className="text-blue-600">.me</span>
              </span>
              <span className="text-[10px] text-slate-400 font-semibold -mt-1 tracking-wide">
                SHOWCASE PORTFOLIO
              </span>
            </div>
          </a>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-sm mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ค้นหาผลงาน เช่น React, Figma, SaaS, Booking..."
                className="w-full pl-9 pr-4 py-2 bg-slate-100 hover:bg-slate-200/60 focus:bg-white text-xs sm:text-sm rounded-full border border-transparent focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-slate-800 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 bg-slate-200 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-600">
            <a href="#projects" className="hover:text-blue-600 transition-colors">ผลงานเด่น</a>
            <a href="#people" className="hover:text-blue-600 transition-colors">บริการ & โปรไฟล์</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">แพ็กเกจราคา</a>
            <a href="#estimator" className="hover:text-blue-600 transition-colors">ประเมินราคา</a>
            <a href="#reviews" className="hover:text-blue-600 transition-colors">รีวิว</a>
          </nav>

          {/* Language Switcher + Hire CTA */}
          <div className="flex items-center gap-3">
            {/* Language Switcher like fastwork.com */}
            <button
              onClick={() => setLang(lang === 'TH' ? 'EN' : 'TH')}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>{lang}</span>
            </button>

            <button
              onClick={onOpenHireModal}
              className="flex items-center gap-2 bg-[#131922] hover:bg-blue-600 active:scale-95 text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all"
            >
              <Send className="w-3.5 h-3.5 text-blue-400" />
              <span>ส่งบรีฟงาน</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
