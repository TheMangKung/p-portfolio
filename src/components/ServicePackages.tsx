import React from 'react';
import { Check, Clock, RefreshCw, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES, ServicePackage } from '../data/portfolioData';

interface ServicePackagesProps {
  onSelectPackage: (pkg: ServicePackage) => void;
}

export const ServicePackages: React.FC<ServicePackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="services" className="py-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRICING & PACKAGES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            แพ็กเกจบริการและราคามาตรฐาน
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            เลือกแพ็กเกจที่ตรงกับสเกลโปรเจกต์ของคุณ การันตีผลงานคุณภาพพร้อมส่งมอบ Source Code และไฟล์ออกแบบครบถ้วน
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col rounded-2xl bg-white border transition-all duration-300 ${
                pkg.isPopular
                  ? 'border-blue-500 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500/20 md:-translate-y-2'
                  : 'border-slate-200 shadow-md hover:border-slate-300 hover:shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold py-1 px-4 rounded-full shadow-md flex items-center gap-1 uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5 fill-current text-amber-300" />
                  {pkg.badge || 'ยอดนิยม'}
                </div>
              )}

              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-slate-900">{pkg.name}</h3>
                  {!pkg.isPopular && pkg.badge && (
                    <span className="text-[11px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <p className="text-slate-500 text-xs leading-relaxed min-h-[36px] mb-4">
                  {pkg.description}
                </p>

                {/* Price block in Fastwork style */}
                <div className="my-4 py-4 px-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-xs text-slate-500 font-medium">ราคาเริ่มต้น</div>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-3xl font-extrabold text-blue-600">
                      ฿{pkg.price.toLocaleString('th-TH')}
                    </span>
                    <span className="text-xs text-slate-500">/ โปรเจกต์</span>
                  </div>
                </div>

                {/* Timeline and Revisions */}
                <div className="grid grid-cols-2 gap-2 text-xs py-3 border-y border-slate-100 mb-6 text-slate-600">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{pkg.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <RefreshCw className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{pkg.revisions}</span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2.5 flex-1 mb-8">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                    รายละเอียดที่รวมในแพ็กเกจ:
                  </div>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    pkg.isPopular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 active:scale-[0.98]'
                      : 'bg-slate-100 hover:bg-blue-600 text-slate-800 hover:text-white active:scale-[0.98]'
                  }`}
                >
                  <span>เลือกแพ็กเกจนี้</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom requirements notice */}
        <div className="mt-8 text-center text-xs text-slate-500">
          * มีความต้องการพิเศษหรือระบบขนาดใหญ่? สามารถปรึกษาและปรับแต่งขอบเขตงาน (Custom Scope) ได้ตามต้องการ
        </div>

      </div>
    </section>
  );
};
