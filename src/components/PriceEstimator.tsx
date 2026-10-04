import React, { useState } from 'react';
import { Calculator, CheckCircle2, Sparkles, Send, ArrowRight } from 'lucide-react';

interface PriceEstimatorProps {
  onApplyEstimate: (estimate: {
    projectType: string;
    features: string[];
    isExpress: boolean;
    totalPrice: number;
    estimatedDays: number;
  }) => void;
}

export const PriceEstimator: React.FC<PriceEstimatorProps> = ({ onApplyEstimate }) => {
  const [selectedType, setSelectedType] = useState('web-corporate');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['cms', 'seo']);
  const [isExpress, setIsExpress] = useState(false);

  const projectTypes = [
    { id: 'landing', name: 'Landing Page / Portfolio หน้าเดียว', basePrice: 4900, baseDays: 4 },
    { id: 'web-corporate', name: 'เว็บไซต์ธุรกิจ / บริษัท (4-6 หน้า)', basePrice: 14500, baseDays: 9 },
    { id: 'saas-custom', name: 'ระบบ Custom SaaS / E-Commerce', basePrice: 32000, baseDays: 20 },
    { id: 'uiux-system', name: 'UI/UX Design System & Prototype (Figma)', basePrice: 9900, baseDays: 7 },
  ];

  const availableFeatures = [
    { id: 'cms', name: 'ระบบหลังบ้าน Admin & CMS จัดการเนื้อหา', price: 4500, addDays: 2 },
    { id: 'payment', name: 'ระบบชำระเงิน PromptPay / บัตรเครดิต', price: 5000, addDays: 3 },
    { id: 'api-db', name: 'เชื่อมต่อ API / ฐานข้อมูลเฉพาะทาง (Custom DB)', price: 6500, addDays: 4 },
    { id: 'seo', name: 'ปรับแต่ง On-page SEO & Google Tracking', price: 2500, addDays: 1 },
    { id: 'maintenance', name: 'ขยายการดูแลระบบและบั๊กเป็น 90 วัน', price: 3000, addDays: 0 },
  ];

  const currentType = projectTypes.find((t) => t.id === selectedType) || projectTypes[0];

  const toggleFeature = (fId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(fId) ? prev.filter((id) => id !== fId) : [...prev, fId]
    );
  };

  // Calculations
  const featuresPrice = selectedFeatures.reduce((acc, fId) => {
    const feat = availableFeatures.find((f) => f.id === fId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const baseCalculatedPrice = currentType.basePrice + featuresPrice;
  const totalPrice = isExpress ? Math.round(baseCalculatedPrice * 1.25) : baseCalculatedPrice;

  const featuresDays = selectedFeatures.reduce((acc, fId) => {
    const feat = availableFeatures.find((f) => f.id === fId);
    return acc + (feat ? feat.addDays : 0);
  }, 0);
  const estimatedDays = isExpress
    ? Math.max(3, Math.round((currentType.baseDays + featuresDays) * 0.65))
    : currentType.baseDays + featuresDays;

  const handleSendToBrief = () => {
    const featureNames = selectedFeatures.map(
      (fId) => availableFeatures.find((f) => f.id === fId)?.name || fId
    );
    onApplyEstimate({
      projectType: currentType.name,
      features: featureNames,
      isExpress,
      totalPrice,
      estimatedDays,
    });
  };

  return (
    <section id="estimator" className="py-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2 border border-emerald-200">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE ESTIMATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            ระบบคำนวณและประเมินราคางานเบื้องต้น
          </h2>
          <p className="mt-1 text-slate-600 text-sm">
            เลือกฟังก์ชันที่คุณต้องการเพื่อดูการประมาณการค่าใช้จ่ายและระยะเวลาได้แบบ Real-time
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Inputs Column */}
          <div className="p-6 sm:p-8 lg:col-span-7 space-y-6">
            
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                1. เลือกประเภทโปรเจกต์ของคุณ
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-500/20'
                          : 'border-slate-200 hover:border-slate-300 bg-slate-50/40'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900">{type.name}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1">
                        เริ่มต้น ฿{type.basePrice.toLocaleString()} • ประมาณ {type.baseDays} วัน
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Extra Features */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                2. เลือกฟีเจอร์หรือบริการเสริมที่ต้องการ
              </label>
              <div className="space-y-2.5">
                {availableFeatures.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <div
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'border-blue-500 bg-blue-50/40'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => {}}
                          className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                        />
                        <span className="text-xs sm:text-sm font-medium text-slate-800">
                          {feat.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold text-slate-700 whitespace-nowrap ml-2">
                        +฿{feat.price.toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Speed option */}
            <div className="pt-2">
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                3. ระยะเวลาการส่งมอบ
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsExpress(false)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    !isExpress
                      ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-500/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">ระยะเวลามาตรฐาน</div>
                  <div className="text-[11px] text-slate-500">ตามกระบวนการทำงานปกติ</div>
                </button>

                <button
                  type="button"
                  onClick={() => setIsExpress(true)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isExpress
                      ? 'border-blue-600 bg-blue-50/50 ring-2 ring-blue-500/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold text-amber-600 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ด่วนพิเศษ Express (+25%)</span>
                  </div>
                  <div className="text-[11px] text-slate-500">ลดระยะเวลาลงประมาณ 35%</div>
                </button>
              </div>
            </div>

          </div>

          {/* Result / Summary Column */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white p-6 sm:p-8 lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs uppercase tracking-wider text-blue-200 font-semibold">
                  สรุปประมาณการงบประมาณ
                </span>
                <span className="text-[11px] bg-blue-500/20 text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-400/20">
                  Real-time Quote
                </span>
              </div>

              <div className="py-6">
                <div className="text-xs text-slate-400">ราคาประเมินเบื้องต้น (โดยประมาณ)</div>
                <div className="text-4xl sm:text-5xl font-black text-white mt-1 tracking-tight">
                  ฿{totalPrice.toLocaleString()}
                </div>
                <div className="text-xs text-blue-200/80 mt-1">
                  * รวมไฟล์ Source Code และการรับประกันผลงาน
                </div>
              </div>

              {/* Specs Breakdown */}
              <div className="space-y-3 py-4 border-y border-white/10 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">ประเภทงาน:</span>
                  <span className="font-semibold text-right text-slate-200">{currentType.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">ฟีเจอร์ที่เลือก:</span>
                  <span className="font-semibold text-slate-200">{selectedFeatures.length} รายการ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">ระยะเวลาส่งมอบโดยประมาณ:</span>
                  <span className="font-semibold text-emerald-400">{estimatedDays} วันทำการ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">การแก้ไขงาน:</span>
                  <span className="font-semibold text-slate-200">3 - 5 ครั้ง (ตามแพ็กเกจ)</span>
                </div>
              </div>
            </div>

            {/* Action to Brief */}
            <div className="pt-6 mt-6">
              <button
                onClick={handleSendToBrief}
                className="w-full bg-blue-500 hover:bg-blue-400 active:scale-95 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2 transition-all"
              >
                <span>นำราคานี้ไปส่งบรีฟงานทันที</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[11px] text-slate-400 mt-2.5">
                ไม่มีข้อผูกมัด • ยินดีให้คำปรึกษาและปรับปรุงสโคปก่อนเริ่มงานจริง
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
