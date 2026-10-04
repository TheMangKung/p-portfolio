import React, { useState } from 'react';
import { Send, ArrowDown, Sparkles, CheckCircle2, ShieldCheck, Heart, Share2, Eye, Star, Clock } from 'lucide-react';
import { PROFILE_DATA, ORBIT_CARDS, OrbitCard } from '../data/portfolioData';

interface FreelancerHeroProps {
  onOpenHireModal: () => void;
  onExploreProjects: () => void;
}

export const FreelancerHero: React.FC<FreelancerHeroProps> = ({
  onOpenHireModal,
  onExploreProjects,
}) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 md:py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-100/40">
      
      {/* Background Decorative Rings (Fastwork.com Orbit background) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full border border-slate-200/60 opacity-60" />
        <div className="w-[450px] h-[450px] md:w-[680px] md:h-[680px] rounded-full border border-dashed border-slate-300/40 opacity-50" />
        <div className="w-[300px] h-[300px] md:w-[460px] md:h-[460px] rounded-full border border-blue-100/70 opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating Actions on Top Right */}
        <div className="absolute top-0 right-4 sm:right-8 flex items-center gap-2 z-20">
          <button
            onClick={() => setLiked(!liked)}
            className={`p-2.5 rounded-full border shadow-xs transition-all ${
              liked ? 'bg-rose-50 border-rose-200 text-rose-500' : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-600'
            }`}
            title="บันทึกชื่นชอบ"
          >
            <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={handleShare}
            className="p-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 shadow-xs transition-all relative"
            title="แชร์โปรไฟล์"
          >
            <Share2 className="w-4 h-4" />
            {copied && (
              <span className="absolute -bottom-8 right-0 text-[11px] bg-slate-900 text-white px-2 py-1 rounded shadow whitespace-nowrap">
                คัดลอกลิงก์แล้ว!
              </span>
            )}
          </button>
        </div>

        {/* Center Hero Copy (Fastwork.com Signature Typography) */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          
          {/* Announcement Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-blue-600 font-bold">{PROFILE_DATA.status}</span>
            <span className="text-slate-300">•</span>
            <span>ตอบกลับบรีฟงานไว &lt; 15 นาที</span>
          </div>

          {/* Main Title: Show the world what *you* can do */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-950 tracking-tight leading-[1.08]">
            Show the world <br className="hidden sm:inline" />
            what{' '}
            <span className="relative inline-block text-blue-600 px-2">
              <span className="relative z-10 italic">you</span>
              {/* Hand-drawn vector brush loop inspired by fastwork.com */}
              <svg
                className="absolute -inset-x-2 -bottom-2 -top-1 w-[calc(100%+16px)] h-[calc(100%+12px)] text-blue-500/25 pointer-events-none"
                viewBox="0 0 120 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 35C15 20 40 10 75 12C105 14 112 32 98 48C84 64 35 62 18 50C5 38 12 18 38 15C64 12 108 22 108 40"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>{' '}
            can do
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            {PROFILE_DATA.subheadline}
          </p>

          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto italic">
            "{PROFILE_DATA.heroQuote}"
          </p>

          {/* CTAs Stack */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <button
              onClick={onOpenHireModal}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold text-sm shadow-xl shadow-blue-500/25 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>ส่งบรีฟงาน (เริ่มประเมินฟรี)</span>
            </button>

            <button
              onClick={onExploreProjects}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 active:scale-95 text-slate-800 font-bold text-sm border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4 text-blue-600" />
              <span>สำรวจผลงานจริง (Showcase)</span>
            </button>
          </div>

          {/* Trust stats pill bar */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              <strong className="text-slate-800 font-bold">{PROFILE_DATA.stats.rating}</strong> ({PROFILE_DATA.stats.totalReviews} รีวิว)
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>{PROFILE_DATA.stats.completedJobs} งานสำเร็จ (100%)</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>ส่งงานตรงเวลา 99%</span>
            </span>
          </div>

        </div>

        {/* Orbit 3D Floating Showcase Stage (Signature Fastwork.com Look) */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ORBIT_CARDS.map((card, idx) => {
              const isSelected = activeCard === card.id;
              return (
                <div
                  key={card.id}
                  onClick={() => setActiveCard(isSelected ? null : card.id)}
                  style={{
                    transform: `rotate(${card.rot}deg)`,
                  }}
                  className={`cursor-pointer group relative bg-white rounded-2xl border transition-all duration-300 overflow-hidden fw-card-shadow ${
                    card.isMain
                      ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-lg'
                      : 'border-slate-200 hover:border-blue-400 hover:-translate-y-2'
                  }`}
                >
                  {/* Card Cover */}
                  <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 relative">
                    <img
                      src={card.cover}
                      alt={card.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {card.isMain && (
                      <span className="absolute top-2.5 left-2.5 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                        CREATOR PROFILE
                      </span>
                    )}
                  </div>

                  {/* Card Body with Avatar and Online dot */}
                  <div className="p-4 relative">
                    <div className="flex items-center gap-3">
                      <div className="relative shrink-0">
                        <img
                          src={card.avatar}
                          alt={card.name}
                          className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-slate-900 text-sm truncate group-hover:text-blue-600 transition-colors">
                          {card.name}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {card.role} • {card.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-6 text-xs text-slate-400">
            * คลิกที่การ์ดเพื่อดูรายละเอียดหรือส่งบรีฟงานโดยตรง
          </div>
        </div>

        {/* Scroll Cue (Fastwork.com Scroll cue button) */}
        <div className="mt-12 text-center">
          <button
            onClick={onExploreProjects}
            className="inline-flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-blue-600 transition-colors group"
          >
            <span className="font-semibold tracking-wider uppercase text-[11px]">Scroll down</span>
            <div className="w-8 h-8 rounded-full border border-slate-200 group-hover:border-blue-400 flex items-center justify-center animate-bounce">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
