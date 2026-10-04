import React from 'react';
import { ShieldCheck, Award, Clock, Heart, Send } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenHireModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHireModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Banner inside footer */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-10 mb-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">
              มีไอเดียโปรเจกต์ใหม่ในใจแล้วหรือยัง?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl">
              ส่งบรีฟงานเพื่อรับการประเมินราคาและแผนงานเบื้องต้นฟรี ตอบกลับทุกข้อความภายใน 15 นาที
            </p>
          </div>
          <button
            onClick={onOpenHireModal}
            className="shrink-0 bg-white hover:bg-slate-100 active:scale-95 text-blue-700 font-bold px-8 py-3.5 rounded-2xl shadow-lg transition-all flex items-center gap-2 text-sm"
          >
            <Send className="w-4 h-4" />
            <span>ส่งบรีฟงานตอนนี้</span>
          </button>
        </div>

        {/* 3 Pillars of Trust (Fastwork guarantees) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-12 border-b border-slate-800 text-xs">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">รับประกันผลงานตรงสเปก</div>
              <div className="text-slate-400 mt-0.5">ทำงานตามขอบเขตและสัญญาบรีฟ ตรวจสอบได้ทุกขั้นตอน</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">ส่งงานตรงตามกำหนดเวลา 99%</div>
              <div className="text-slate-400 mt-0.5">วาง Milestone ชัดเจน พร้อมรายงานความคืบหน้าสม่ำเสมอ</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm">มาตรฐาน Full-Stack & UI/UX</div>
              <div className="text-slate-400 mt-0.5">ส่งมอบ Source Code สะอาด และไฟล์ Figma ลิขสิทธิ์ของคุณ 100%</div>
            </div>
          </div>
        </div>

        {/* Bottom links and copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
              FW
            </div>
            <span>© {new Date().getFullYear()} {PROFILE_DATA.name}. Fastwork Portfolio Template.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-300 transition-colors">แพ็กเกจบริการ</a>
            <a href="#projects" className="hover:text-slate-300 transition-colors">ผลงานเด่น</a>
            <a href="#estimator" className="hover:text-slate-300 transition-colors">คำนวณราคา</a>
            <a href="#reviews" className="hover:text-slate-300 transition-colors">รีวิว</a>
            <span>LINE: <strong className="text-emerald-400">{PROFILE_DATA.contacts.line}</strong></span>
          </div>
        </div>

      </div>
    </footer>
  );
};
