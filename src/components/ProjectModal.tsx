import React, { useEffect } from 'react';
import { X, ExternalLink, Code2, Palette, Star, Clock, CheckCircle2, Send, TrendingUp, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onHireForThis: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onHireForThis,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Card */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 z-10 flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-all shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-xs font-bold uppercase tracking-wider bg-blue-600 px-3 py-1 rounded-md mb-2 inline-block shadow">
              {project.categoryLabel}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-2">
              <span>ลูกค้า: <strong className="text-white">{project.client}</strong></span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" /> ระยะเวลา {project.deliveryDays} วัน
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-3.5 h-3.5 fill-current" /> {project.rating.toFixed(1)} / 5.0
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 flex-1">
          
          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pb-4 border-b border-slate-100">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl shadow transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>เปิดดูเว็บไซต์จริง (Live Demo)</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all"
              >
                <Code2 className="w-4 h-4 text-slate-300" />
                <span>ดู Source Code (GitHub)</span>
              </a>
            )}
            {project.figmaUrl && (
              <a
                href={project.figmaUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all"
              >
                <Palette className="w-4 h-4 text-purple-200" />
                <span>ดูไฟล์ Figma Prototype</span>
              </a>
            )}
          </div>

          {/* Overview text */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
              ภาพรวมของโครงการ (Project Overview)
            </h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics Highlight */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
              {project.metrics.map((m, mIdx) => (
                <div key={mIdx} className="text-center">
                  <div className="text-lg sm:text-xl font-extrabold text-blue-600">{m.value}</div>
                  <div className="text-[11px] text-slate-600 font-medium mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Case Study breakdown */}
          {project.caseStudyDetails && (
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
                <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <span>💡 โจทย์และความท้าทาย (The Challenge)</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700">
                  {project.caseStudyDetails.challenge}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80">
                <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <span>🚀 โซลูชันและการแก้ปัญหา (The Solution)</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700">
                  {project.caseStudyDetails.solution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>ผลลัพธ์ที่ได้รับจริง (Measurable Impact)</span>
                </h4>
                <div className="space-y-2">
                  {project.caseStudyDetails.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              เทคโนโลยีและเครื่องมือที่ใช้:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-100 font-semibold text-xs text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer CTA of modal */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            อยากได้เว็บหรือระบบสไตล์นี้? สามารถส่งบรีฟงานเพื่อเริ่มโปรเจกต์ได้ทันที
          </div>
          <button
            onClick={() => {
              onClose();
              onHireForThis(project);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl shadow transition-all active:scale-95 text-sm"
          >
            <Send className="w-4 h-4" />
            <span>ส่งบรีฟงานสไตล์นี้</span>
          </button>
        </div>

      </div>
    </div>
  );
};
