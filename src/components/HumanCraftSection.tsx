import React from 'react';
import { ShieldCheck, Sparkles, Star, MapPin, Award, CheckCircle2, ArrowRight, Zap, Code2, Palette } from 'lucide-react';
import { PROFILE_DATA, SERVICES, ServicePackage } from '../data/portfolioData';

interface HumanCraftSectionProps {
  onSelectPackage: (pkg: ServicePackage) => void;
  onOpenHireModal: () => void;
}

export const HumanCraftSection: React.FC<HumanCraftSectionProps> = ({
  onSelectPackage,
  onOpenHireModal,
}) => {
  return (
    <section id="people" className="py-20 bg-white border-y border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (Fastwork.com Style) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3 border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>THE HUMAN CRAFT MATTERS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            People still need <span className="text-blue-600 underline decoration-blue-200 underline-offset-4">people</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            {PROFILE_DATA.heroQuote}
          </p>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            ในยุคของ AI ลูกค้าไม่ได้ต้องการแค่โค้ดหรือภาพที่เจนออกมา แต่ต้องการผู้เชี่ยวชาญที่เข้าใจบริบทธุรกิจ มีรสนิยมทางดีไซน์ และรับผิดชอบส่งมอบงานจนสำเร็จจริง
          </p>
        </div>

        {/* Creator Showcase Card (Fastwork.com Profile Layout) */}
        <div className="bg-[#FAFBFD] rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm max-w-5xl mx-auto">
          
          {/* Creator Profile Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="flex items-start sm:items-center gap-5">
              <div className="relative shrink-0">
                <img
                  src={PROFILE_DATA.avatar}
                  alt={PROFILE_DATA.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-white shadow-md"
                />
                <span className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-full p-1 border-2 border-white shadow">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </span>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {PROFILE_DATA.name}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">{PROFILE_DATA.username}</span>
                  <span className="text-[11px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                    Claimed Profile
                  </span>
                </div>

                <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1 flex flex-wrap items-center gap-3">
                  <span className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{PROFILE_DATA.location}</span>
                  </span>
                  <span>•</span>
                  <span className="text-blue-600 font-bold">{PROFILE_DATA.followers}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" /> {PROFILE_DATA.stats.rating} ({PROFILE_DATA.stats.totalReviews} รีวิว)
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl leading-relaxed">
                  {PROFILE_DATA.bio}
                </p>
              </div>
            </div>

            <button
              onClick={onOpenHireModal}
              className="shrink-0 w-full md:w-auto px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>ส่งบรีฟงานโดยตรง</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Services List (Fastwork.com Sold & Pricing Format) */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Services & Packages
              </h4>
              <span className="text-xs text-slate-500 font-medium">
                ทั้งหมด {SERVICES.length} บริการหลัก
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => onSelectPackage(srv)}
                  className="cursor-pointer group bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h5 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                        {srv.name}
                      </h5>
                    </div>

                    <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-base font-extrabold text-blue-600">
                        ฿{srv.price.toLocaleString()}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        Sold {srv.soldCount} • ★ {srv.rating} ({srv.reviewCount})
                      </div>
                    </div>

                    <span className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Micro banner: 0% Platform Fee / Direct Client Advantage */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-blue-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <span className="font-bold text-white">Direct Client Guarantee: </span>
                  <span className="text-slate-300">ทำงานร่วมกันโดยตรง ไม่มีค่านายหน้าแฝง รับประกันการส่งมอบงานและดูแลหลังการขาย 100%</span>
                </div>
              </div>
              <button
                onClick={onOpenHireModal}
                className="shrink-0 px-4 py-1.5 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors"
              >
                คุยรายละเอียด
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
