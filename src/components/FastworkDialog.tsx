import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface FastworkDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FastworkDialog: React.FC<FastworkDialogProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Web Developer & UI/UX');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 110,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-3xl max-w-sm w-full p-6 sm:p-8 shadow-2xl z-10 border border-slate-200">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors text-lg"
        >
          ×
        </button>

        {submitted ? (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-xl font-black text-slate-900">
              You're on the list! 🎉
            </h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              ขอบคุณที่สนใจ Fastwork Portfolio เราได้รับข้อมูลของคุณแล้ว ({email}) และจะติดต่อกลับเพื่อให้สิทธิ์เข้าใช้งานก่อนใครครับ!
            </p>
            <button
              onClick={handleReset}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all mt-2"
            >
              ปิดหน้าต่าง
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Fastwork Emblem */}
            <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-md shadow-blue-500/20">
              FW
            </div>

            <div>
              <h3 className="text-xl font-black text-slate-900">
                Join our waitlist
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                Show the world what you can do with Fastwork.
              </p>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                Email address or LINE ID *
              </label>
              <input
                type="text"
                required
                placeholder="name@example.com หรือ @line"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                What is your profession?
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:bg-white focus:border-blue-500 focus:outline-none"
              >
                <option value="Web Developer & UI/UX">Web Developer & UI/UX Designer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Full-Stack Developer">Full-Stack Developer</option>
                <option value="Graphic / Branding Designer">Graphic / Branding Designer</option>
                <option value="Client / Business Hiring">ฉันเป็นผู้ว่าจ้าง (Hiring Clients)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
            >
              Request Access
            </button>

            <p className="text-[10px] text-slate-400 text-center">
              Available October 1st, by invitation only.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};
