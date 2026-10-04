import React from 'react';

interface FastworkPainAndCommissionProps {
  onOpenWaitlist: () => void;
}

export const FastworkPainAndCommission: React.FC<FastworkPainAndCommissionProps> = ({
  onOpenWaitlist,
}) => {
  return (
    <>
      {/* SECTION 3: Pain Points */}
      <section className="pain" aria-labelledby="pain-heading">
        <div className="pain-sticky">
          <div className="pain-inner">
            <div className="pain-copy">
              <h2 id="pain-heading">Freelancing is hard enough...</h2>
              <p>Let us handle the problem for you</p>
            </div>

            {/* Visual sticky notes floating */}
            <div className="pain-notes" aria-hidden="true">
              <div className="pain-notes-stage flex flex-wrap justify-center gap-4 py-8 max-w-4xl mx-auto">
                <div className="p-4 rounded-xl bg-amber-100 text-amber-900 shadow-md rotate-[-2deg] text-xs font-bold max-w-[200px]">
                  📌 "Chasing unpaid invoices for weeks..."
                </div>
                <div className="p-4 rounded-xl bg-rose-100 text-rose-900 shadow-md rotate-[3deg] text-xs font-bold max-w-[220px]">
                  📌 "Scope creep without extra budget..."
                </div>
                <div className="p-4 rounded-xl bg-purple-100 text-purple-900 shadow-md rotate-[-3deg] text-xs font-bold max-w-[210px]">
                  📌 "Other platforms taking 20% cut forever..."
                </div>
                <div className="p-4 rounded-xl bg-blue-100 text-blue-900 shadow-md rotate-[2deg] text-xs font-bold max-w-[200px]">
                  📌 "Disorganized briefs across 5 chat apps..."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Commission & Transparent Advantages */}
      <section className="commission" aria-labelledby="commission-heading">
        <div className="commission-track">
          <div className="commission-sticky">
            <div className="commission-card">
              <div className="commission-inner">
                
                {/* Header with animated brush underline */}
                <div className="commission-header">
                  <h2 id="commission-heading">
                    <span className="commission-title-muted">Other platforms keep taking fee.</span>{' '}
                    <span className="commission-title-accent">
                      We let you keep more.{' '}
                      <span className="commission-underline" aria-hidden="true">
                        <svg className="underline-frame frame-0" viewBox="0 0 199.201 19.8599" preserveAspectRatio="none">
                          <path
                            d="M1.60039 13.4372C31.8306 5.54148 128.476 -0.496335 133.514 2.29038C138.552 5.07709 71.2215 11.1148 73.5117 17.1528C75.8018 23.1909 162.1 2.29037 197.6 8.1"
                            pathLength="1"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </h2>
                </div>

                {/* The 3 Commission Benefit Columns */}
                <div className="commission-rows grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                  
                  {/* Card 1: Direct Client 100% */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg mb-4">
                        100%
                      </div>
                      <h3 className="font-bold text-slate-900 text-base mb-2">
                        Bring your own clients, you keep 100%!
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Invite them through your profile link and use us to get the job done — 0% referral fee, forever! (aka 0% commission). Payment fee may apply.
                      </p>
                    </div>

                    <div className="pt-6">
                      <div className="flex items-center gap-2">
                        <img className="w-7 h-7 rounded-full" src="/selling/commission/client-avatar-1.png" alt="" />
                        <img className="w-7 h-7 rounded-full" src="/selling/commission/client-avatar-2.png" alt="" />
                        <img className="w-7 h-7 rounded-full" src="/selling/commission/client-avatar-3.png" alt="" />
                        <span className="text-xs font-semibold text-slate-500 ml-1">0% Fee</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: One-time small fee */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">
                        0%
                      </div>
                      <h3 className="font-bold text-slate-900 text-base mb-2">
                        A client from us? A small referral fee, then 0%.
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        We only charge on the first project. Keep 100% on every repeat project with that client forever. No lifetime lock-in or permanent cuts.
                      </p>
                    </div>

                    <div className="pt-6">
                      <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        Repeat Orders: 0% Commission
                      </span>
                    </div>
                  </div>

                  {/* Card 3: Global Escrow & Protection */}
                  <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg mb-4">
                        🛡️
                      </div>
                      <h3 className="font-bold text-slate-900 text-base mb-2">
                        Secure payment worldwide
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        Escrow protection, automated invoices, multi-currency support, and guaranteed payouts once milestones are approved.
                      </p>
                    </div>

                    <div className="pt-6">
                      <button
                        type="button"
                        onClick={onOpenWaitlist}
                        className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs transition-colors"
                      >
                        Start with your portfolio
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
