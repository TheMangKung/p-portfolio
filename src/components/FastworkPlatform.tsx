import React from 'react';
import { Project, PROJECTS } from '../data/portfolioData';

interface FastworkPlatformProps {
  onOpenWaitlist: () => void;
  onSelectProject: (project: Project) => void;
}

export const FastworkPlatform: React.FC<FastworkPlatformProps> = ({
  onOpenWaitlist,
  onSelectProject,
}) => {
  return (
    <section id="platform" className="start-selling-platform is-platform-shrink-track is-visible" aria-labelledby="built-heading">
      <div className="start-selling-platform-card">
        <div className="start-selling-platform-layout">
          
          <div className="start-selling-platform-mission">
            <div className="start-selling-platform-mission-header">
              <div className="start-selling-platform-mission-copy">
                <p id="built-heading" className="start-selling-platform-mission-title">
                  One platform is everything you need
                </p>
              </div>
            </div>

            <div className="start-selling-platform-rows">
              
              {/* Feature 1: Document your portfolio and reviews */}
              <article className="start-selling-platform-row is-copy-center is-document p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm mb-8">
                <div className="max-w-3xl mx-auto text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
                    Document your portfolio and reviews
                  </h3>
                  <p className="text-slate-600 text-sm">
                    โชว์ผลงานจริงระดับโปรดักชันพร้อมเคสสตูดิโอ สถิติ และรีวิวจากลูกค้าตัวจริงเพื่อสร้างความน่าเชื่อถือสูงสุด
                  </p>
                </div>

                {/* Interactive Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {PROJECTS.slice(0, 3).map((proj) => (
                    <div
                      key={proj.id}
                      onClick={() => onSelectProject(proj)}
                      className="cursor-pointer group bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-blue-500 overflow-hidden transition-all duration-300 shadow-xs hover:shadow-lg"
                    >
                      <div className="aspect-[16/10] overflow-hidden bg-slate-200">
                        <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-4">
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                          {proj.categoryLabel}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm mt-1.5 line-clamp-1 group-hover:text-blue-600 transition-colors">
                          {proj.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                          {proj.shortDesc}
                        </p>
                        <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400">
                          <span>{proj.client}</span>
                          <span className="text-amber-500 font-bold">★ {proj.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* Feature 2: Get discovered. Earn more */}
              <article className="start-selling-platform-row is-discover p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
                      Get discovered. Earn more
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      ระบบ AI Matching และการจัดอันดับของ Fastwork ช่วยให้ผู้ว่าจ้างที่ต้องการทักษะเฉพาะของคุณค้นพบโปรไฟล์ได้ทันที ปิดการขายได้รวดเร็วขึ้น
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-center gap-2">✓ ติดอันดับการค้นหา Top Rated Creator</li>
                      <li className="flex items-center gap-2">✓ สรุปทักษะและผลงานผ่าน AI Assistant</li>
                      <li className="flex items-center gap-2">✓ สร้างรายได้มั่นคงทั้งจากลูกค้าใหม่และลูกค้าประจำ</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 p-6 text-white text-center flex flex-col items-center justify-center min-h-[220px]">
                    <span className="text-xs uppercase tracking-wider text-blue-300 font-bold">AI Discovery Engine</span>
                    <div className="text-3xl font-extrabold mt-2">15,000+ Businesses</div>
                    <p className="text-xs text-slate-300 mt-2 max-w-xs">
                      ธุรกิจและสตาร์ตอัปทั่วภูมิภาคค้นหาฟรีแลนซ์คุณภาพผ่าน Fastwork ทุกสัปดาห์
                    </p>
                  </div>
                </div>
              </article>

              {/* Feature 3: Maintain relationship with your clients. Keep every order organized */}
              <article className="start-selling-platform-row is-maintain p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Simulated Fastwork quotation card */}
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm max-w-sm mx-auto w-full">
                    <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                      <span className="font-bold text-slate-700">QUOTATION</span>
                      <span>Valid until: 21 Aug 2026</span>
                    </div>
                    <div className="text-3xl font-black text-slate-900 mb-1">
                      $12,000
                    </div>
                    <div className="text-xs font-semibold text-blue-600 mb-4">
                      Full-Stack Web & Brand Design Pack
                    </div>
                    <div className="space-y-1.5 border-t border-slate-200 pt-3">
                      <div className="h-2 w-3/4 bg-slate-200 rounded-full" />
                      <div className="h-2 w-full bg-slate-200 rounded-full" />
                      <div className="h-2 w-1/2 bg-slate-200 rounded-full" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
                      Maintain relationship with your clients. <br />
                      Keep every order <span className="text-blue-600 underline">Organized</span>
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      ไม่ต้องปวดหัวกับการส่งใบเสนอราคา ติดตามสถานะงาน หรือตามเก็บเงิน ระบบจัดการออเดอร์ช่วยดูแลทุกขั้นตอนแบบอัตโนมัติ
                    </p>
                    <button
                      type="button"
                      onClick={onOpenWaitlist}
                      className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all"
                    >
                      สร้างโปรไฟล์ผลงานตอนนี้
                    </button>
                  </div>
                </div>
              </article>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
