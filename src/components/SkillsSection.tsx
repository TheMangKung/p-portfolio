import React from 'react';
import { Code2, Palette, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-12 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            <span>VERIFIED CAPABILITIES & TECH STACK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            ทักษะและความเชี่ยวชาญ (Skills & Tools)
          </h2>
          <p className="mt-1 text-slate-600 text-sm">
            ครอบคลุมทั้งงานเขียนโค้ด Web Development ระดับ Production และการออกแบบ UI/UX สวยงามใช้งานง่าย
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 transition-colors"
            >
              <h3 className="font-bold text-slate-900 text-base mb-4 pb-2 border-b border-slate-200/70">
                {cat.category}
              </h3>

              <div className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between text-xs sm:text-sm bg-white p-2.5 rounded-xl border border-slate-100 shadow-xs"
                  >
                    <span className="font-medium text-slate-800">{skill.name}</span>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
