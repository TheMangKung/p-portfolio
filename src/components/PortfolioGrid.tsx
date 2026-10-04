import React, { useState } from 'react';
import { Star, ExternalLink, Code2, Palette, Layers, Clock, Eye, Sparkles } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface PortfolioGridProps {
  searchQuery: string;
  onSelectProject: (project: Project) => void;
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  searchQuery,
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'design' | 'fullstack'>('all');

  const categories = [
    { id: 'all', label: 'ทั้งหมด (All Projects)', icon: Layers },
    { id: 'web', label: 'Web Development', icon: Code2 },
    { id: 'design', label: 'UI/UX Design & Branding', icon: Palette },
    { id: 'fullstack', label: 'Full-Stack Apps', icon: Sparkles },
  ] as const;

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = activeCategory === 'all' || proj.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-12 bg-slate-50/60 border-y border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED WORKS & CASE STUDIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              ผลงานที่ผ่านมา (Portfolio Gallery)
            </h2>
            <p className="mt-1 text-slate-600 text-sm">
              คัดสรรผลงานการพัฒนาเว็บแอปพลิเคชันและออกแบบ UI/UX สำหรับลูกค้าจริง
            </p>
          </div>

          <div className="text-xs font-medium text-slate-500">
            แสดง {filteredProjects.length} จาก {PROJECTS.length} โปรเจกต์
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid (Fastwork card style) */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-2xl border border-slate-200 my-6">
            <p className="text-slate-500 text-sm font-medium">ไม่พบผลงานที่ตรงกับคำค้นหา "{searchQuery}"</p>
            <button
              onClick={() => { setActiveCategory('all'); }}
              className="mt-3 text-xs text-blue-600 font-semibold hover:underline"
            >
              ล้างตัวกรองทั้งหมด
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden fastwork-card-shadow fastwork-card-hover"
              >
                {/* Project Image Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-blue-600/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow">
                      <Eye className="w-3.5 h-3.5" />
                      <span>เปิดดู Case Study ละเอียด</span>
                    </span>
                  </div>

                  {/* Category Chip on Top Left */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Rating on Top Right */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-slate-800 text-xs font-bold px-2 py-0.5 rounded-md shadow-sm flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                    <span>{project.rating.toFixed(1)}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  {/* Client and duration */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-medium text-slate-700 truncate max-w-[180px]">
                      {project.client}
                    </span>
                    <span className="flex items-center gap-1 shrink-0 text-slate-400">
                      <Clock className="w-3 h-3" />
                      <span>ใช้เวลา {project.deliveryDays} วัน</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-600 transition-colors line-clamp-1 mb-2">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed mb-4 flex-1">
                    {project.shortDesc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[11px] font-medium text-slate-400 px-1 py-0.5">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
