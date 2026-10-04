import React, { useState, useEffect } from 'react';
import { X, Send, Paperclip, CheckCircle2, ShieldCheck, Clock, Sparkles, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PROFILE_DATA, ServicePackage, Project } from '../data/portfolioData';

interface HireModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackage?: ServicePackage | null;
  initialProject?: Project | null;
  initialEstimate?: {
    projectType: string;
    features: string[];
    isExpress: boolean;
    totalPrice: number;
    estimatedDays: number;
  } | null;
}

export const HireModal: React.FC<HireModalProps> = ({
  isOpen,
  onClose,
  initialPackage,
  initialProject,
  initialEstimate,
}) => {
  const [formData, setFormData] = useState({
    clientName: '',
    contactChannel: '',
    projectTitle: '',
    projectType: 'Web Development + UI/UX',
    budget: '',
    timeline: '1-2 สัปดาห์',
    description: '',
  });

  const [attachments, setAttachments] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  // Pre-fill form when package or estimate changes
  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({
        ...prev,
        projectTitle: `จ้างงาน: แพ็กเกจ ${initialPackage.name}`,
        projectType: initialPackage.name,
        budget: `฿${initialPackage.price.toLocaleString()}`,
        timeline: initialPackage.deliveryTime,
        description: `ต้องการพัฒนาโปรเจกต์ตามแพ็กเกจ ${initialPackage.name} \nรายละเอียดเบื้องต้น:\n- รวม Source Code\n- สโคปงาน: ${initialPackage.description}`,
      }));
    } else if (initialProject) {
      setFormData((prev) => ({
        ...prev,
        projectTitle: `สนใจโปรเจกต์สไตล์: ${initialProject.title}`,
        projectType: initialProject.categoryLabel,
        description: `ต้องการปรึกษาเพื่อพัฒนาโปรเจกต์ที่มีลักษณะคล้ายกับ ${initialProject.title} สำหรับธุรกิจของผม/ดิฉัน`,
      }));
    } else if (initialEstimate) {
      setFormData((prev) => ({
        ...prev,
        projectTitle: `โปรเจกต์ ${initialEstimate.projectType}`,
        projectType: initialEstimate.projectType,
        budget: `฿${initialEstimate.totalPrice.toLocaleString()}`,
        timeline: `${initialEstimate.estimatedDays} วันทำการ`,
        description: `รายการฟังก์ชันที่ต้องการ:\n${initialEstimate.features.map((f) => `- ${f}`).join('\n')}\n${initialEstimate.isExpress ? '(ต้องการส่งมอบแบบ Express)' : ''}`,
      }));
    }
  }, [initialPackage, initialProject, initialEstimate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSimulateAttach = () => {
    const mockFiles = ['requirements-doc.pdf', 'moodboard-design.png', 'brand-guideline.fig'];
    const random = mockFiles[Math.floor(Math.random() * mockFiles.length)];
    if (!attachments.includes(random)) {
      setAttachments([...attachments, random]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Fire festive celebration confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleCopySummary = () => {
    const text = `[สรุปบรีฟงาน]\nหัวข้อ: ${formData.projectTitle}\nประเภท: ${formData.projectType}\nงบประมาณ: ${formData.budget || 'ตามประเมิน'}\nกำหนดการ: ${formData.timeline}\nผู้ติดต่อ: ${formData.clientName} (${formData.contactChannel})\nรายละเอียด: ${formData.description}`;
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 z-10">
        
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white/95 backdrop-blur-md z-20">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                FASTWORK DIRECT BRIEF
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">
              ส่งบรีฟงานถึง {PROFILE_DATA.name.split(' ')[0]}
            </h2>
            <div className="flex items-center gap-3 text-xs text-slate-500 mt-1">
              <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                <Clock className="w-3.5 h-3.5" /> ตอบกลับเฉลี่ย &lt; 15 นาที
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> รับประกันงานตรงสเปก 100%
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {submitted ? (
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-md">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                ส่งบรีฟงานสำเร็จเรียบร้อยแล้ว! 🎉
              </h3>
              <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                ระบบได้รับข้อมูลของคุณแล้ว ชานนท์จะทำการประเมินขอบเขตและติดต่อกลับผ่าน{' '}
                <strong className="text-blue-600">{formData.contactChannel || 'ช่องทางที่คุณระบุ'}</strong> โดยเร็วที่สุดครับ
              </p>
            </div>

            {/* Brief Summary Box */}
            <div className="text-left bg-slate-50 rounded-2xl p-5 border border-slate-200 text-xs sm:text-sm space-y-2">
              <div className="font-bold text-slate-900 pb-2 border-b border-slate-200">
                📋 ข้อมูลสรุปบรีฟงานที่คุณส่ง:
              </div>
              <div><strong className="text-slate-600">ผู้ติดต่อ:</strong> {formData.clientName}</div>
              <div><strong className="text-slate-600">ช่องทางติดต่อ:</strong> {formData.contactChannel}</div>
              <div><strong className="text-slate-600">หัวข้อ:</strong> {formData.projectTitle}</div>
              {formData.budget && <div><strong className="text-slate-600">งบประมาณ:</strong> {formData.budget}</div>}
              <div><strong className="text-slate-600">กำหนดการ:</strong> {formData.timeline}</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={handleCopySummary}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm transition-all"
              >
                {copiedSummary ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copiedSummary ? 'คัดลอกสรุปแล้ว!' : 'คัดลอกสรุปบรีฟ'}</span>
              </button>

              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <span>ตกลง / ปิดหน้าต่าง</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            
            {/* Row 1: Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  ชื่อของคุณ หรือ บริษัท *
                </label>
                <input
                  type="text"
                  required
                  placeholder="เช่น คุณสมชาย (TechStart Co.)"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  เบอร์โทร หรือ LINE ID / อีเมล *
                </label>
                <input
                  type="text"
                  required
                  placeholder="เช่น Line: @mybusiness หรือ เบอร์โทร"
                  value={formData.contactChannel}
                  onChange={(e) => setFormData({ ...formData, contactChannel: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-slate-900"
                />
              </div>
            </div>

            {/* Row 2: Title and Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  หัวข้องาน / โปรเจกต์ *
                </label>
                <input
                  type="text"
                  required
                  placeholder="เช่น ทำเว็บ E-commerce เมล็ดกาแฟ"
                  value={formData.projectTitle}
                  onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  ประเภทบริการ
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-slate-900"
                >
                  <option value="Web Development + UI/UX">Web Development + UI/UX (ครบวงจร)</option>
                  <option value="Landing Page & Portfolio">Landing Page & Portfolio หน้าเดียว</option>
                  <option value="Business Website (4-6 หน้า)">เว็บไซต์ธุรกิจ / บริษัท (4-6 หน้า)</option>
                  <option value="Custom Full-Stack SaaS">ระบบ Custom SaaS / E-Commerce</option>
                  <option value="UI/UX Design in Figma">ออกแบบ UI/UX Figma & Prototype</option>
                </select>
              </div>
            </div>

            {/* Row 3: Budget and Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  งบประมาณโดยประมาณ (บาท)
                </label>
                <input
                  type="text"
                  placeholder="เช่น ฿15,000 หรือ ตามตกลง"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  กำหนดการที่ต้องการ
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-slate-900"
                >
                  <option value="ด่วนพิเศษ (3-5 วัน)">ด่วนพิเศษ (3-5 วัน)</option>
                  <option value="1-2 สัปดาห์">1-2 สัปดาห์</option>
                  <option value="3-4 สัปดาห์">3-4 สัปดาห์</option>
                  <option value="มีความยืดหยุ่น">มีความยืดหยุ่น ไม่รีบ</option>
                </select>
              </div>
            </div>

            {/* Row 4: Detailed description */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                รายละเอียดหรือความต้องการของงาน *
              </label>
              <textarea
                required
                rows={4}
                placeholder="อธิบายฟังก์ชันที่ต้องการ, หน้าตาเว็บที่ชอบ (ถ้ามี reference เว็บตัวอย่างแปะลิงก์ได้เลยครับ), กลุ่มลูกค้าเป้าหมาย ฯลฯ"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all text-slate-900"
              />
            </div>

            {/* Attachments simulator */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  แนบไฟล์ตัวอย่าง / เอกสารบรีฟ (Optional)
                </span>
                <button
                  type="button"
                  onClick={handleSimulateAttach}
                  className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
                >
                  <Paperclip className="w-3.5 h-3.5" />
                  <span>+ จำลองการแนบไฟล์</span>
                </button>
              </div>

              {attachments.length > 0 ? (
                <div className="flex flex-wrap gap-2 pt-1">
                  {attachments.map((file, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200"
                    >
                      <Paperclip className="w-3 h-3 text-slate-500" />
                      {file}
                      <button
                        type="button"
                        onClick={() => setAttachments(attachments.filter((_, i) => i !== idx))}
                        className="text-slate-400 hover:text-rose-500 ml-1"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              ) : (
                <div
                  onClick={handleSimulateAttach}
                  className="p-3 border border-dashed border-slate-300 rounded-xl text-center text-xs text-slate-400 hover:bg-slate-50 cursor-pointer"
                >
                  คลิกเพื่อจำลองการแนบไฟล์ PDF, รูปภาพ หรือเอกสารบรีฟ
                </div>
              )}
            </div>

            {/* Safe Fastwork Trust Notice */}
            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center gap-2.5 text-xs text-blue-900">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                ข้อมูลของคุณจะถูกเก็บรักษาเป็นความลับ และไม่มีการเปิดเผยต่อบุคคลภายนอก 100%
              </span>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all text-sm"
              >
                <Send className="w-4 h-4" />
                <span>ยืนยันการส่งบรีฟงาน (เริ่มประเมินฟรี)</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
