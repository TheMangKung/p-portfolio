import React from 'react';
import { Star, ShieldCheck, ThumbsUp, MessageSquare } from 'lucide-react';
import { REVIEWS, PROFILE_DATA } from '../data/portfolioData';

export const ReviewsSection: React.FC = () => {
  const ratingBreakdown = [
    { stars: 5, percentage: 98, count: 121 },
    { stars: 4, percentage: 2, count: 3 },
    { stars: 3, percentage: 0, count: 0 },
    { stars: 2, percentage: 0, count: 0 },
    { stars: 1, percentage: 0, count: 0 },
  ];

  return (
    <section id="reviews" className="py-12 bg-slate-50/70 border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-2 border border-amber-200">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>REAL CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            รีวิวและความพึงพอใจจากผู้ว่าจ้าง
          </h2>
          <p className="mt-1 text-slate-600 text-sm">
            การันตีคุณภาพและความประทับใจจากลูกค้าองค์กรและสตาร์ตอัปที่ไว้วางใจ
          </p>
        </div>

        {/* Rating Breakdown & Highlights Box */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Big Score Box */}
            <div className="md:col-span-4 text-center md:border-r border-slate-100 md:pr-8">
              <div className="text-5xl sm:text-6xl font-black text-slate-900 tracking-tight">
                {PROFILE_DATA.stats.rating}
              </div>
              <div className="flex items-center justify-center gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-500 font-medium">
                จากทั้งหมด {PROFILE_DATA.stats.totalReviews} ความคิดเห็น
              </div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full font-semibold">
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>100% ลูกค้ายินดีแนะนำต่อ</span>
              </div>
            </div>

            {/* Bars column */}
            <div className="md:col-span-8 space-y-2">
              {ratingBreakdown.map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1 w-14 font-medium text-slate-600">
                    <span>{row.stars}</span>
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full transition-all duration-500"
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                  <div className="w-12 text-right text-slate-400 font-medium">
                    {row.count} รีวิว
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-xs hover:border-blue-200 transition-colors"
            >
              <div>
                {/* Header of review */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.clientName}
                      className="w-11 h-11 rounded-full object-cover border border-slate-100"
                    />
                    <div>
                      <div className="flex items-center gap-1.5 font-bold text-slate-900 text-sm">
                        <span>{review.clientName}</span>
                        {review.verified && (
                          <span title="ผู้ว่าจ้างจริงยืนยันแล้ว" className="inline-flex">
                            <ShieldCheck className="w-4 h-4 text-emerald-500" />
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500">{review.clientRole}</div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{review.date}</div>
                  </div>
                </div>

                {/* Project Tag */}
                <div className="inline-block text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md mb-3">
                  งาน: {review.projectTitle}
                </div>

                {/* Comment body */}
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  "{review.comment}"
                </p>
              </div>

              {/* Feedback footer */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-600 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" /> รีวิวผ่านการตรวจสอบแล้ว
                </span>
                <span>ตอบกลับโดยฟรีแลนซ์: ขอบพระคุณมากครับ ยินดีให้บริการเสมอครับ 🙏</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
