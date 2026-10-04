import React, { useState } from 'react';

interface FastworkFutureProps {
  onOpenWaitlist: () => void;
}

interface ProfessionData {
  id: string;
  name: string;
  label: string;
  handle: string;
  followers: string;
  bio: string;
  location: string;
  tags: string[];
  cover: string;
  avatar: string;
  services: {
    title: string;
    price: string;
    sold: number;
    rating: string;
    reviews: number;
    image: string;
  }[];
}

const PROFESSIONS: ProfessionData[] = [
  {
    id: 'web-developer',
    name: 'Chanon Dev',
    label: 'Web Developer',
    handle: '@chanon_dev',
    followers: '128K followers',
    bio: 'Full-stack developer specializing in high-performance React/Next.js web apps, SaaS dashboards, and conversion-focused architectures with Clean Code.',
    location: 'Bangkok, Thailand',
    tags: ['Full-Stack', 'React / Next.js', 'Tailwind CSS', 'PostgreSQL'],
    cover: '/selling/hero/bold-cover.jpg',
    avatar: '/selling/sellers/web-developer/avatar.jpg',
    services: [
      {
        title: 'Custom Full-Stack Web Application & SaaS Development',
        price: '฿32,000',
        sold: 28,
        rating: '5.0',
        reviews: 24,
        image: '/selling/media/post-2.png',
      },
      {
        title: 'High-Converting Performance Landing Page (95+ PageSpeed)',
        price: '฿9,500',
        sold: 54,
        rating: '4.9',
        reviews: 48,
        image: '/selling/media/service-kitchen.png',
      },
      {
        title: 'API Gateway Integration, Database & Payment System',
        price: '฿16,000',
        sold: 19,
        rating: '5.0',
        reviews: 17,
        image: '/selling/media/post-3.png',
      },
    ],
  },
  {
    id: 'graphic-designer',
    name: 'Bold Sarunyoo',
    label: 'UI/UX Designer',
    handle: '@bold_design',
    followers: '95K followers',
    bio: 'Senior Product Designer crafting pixel-perfect design systems, interactive prototypes in Figma, and scalable web/mobile app experiences.',
    location: 'Bangkok, Thailand',
    tags: ['UI/UX Design', 'Design System', 'Figma Prototype', 'Micro-interactions'],
    cover: '/selling/hero/chapavich-cover.jpg',
    avatar: '/selling/sellers/ux-ui-designer/avatar.jpg',
    services: [
      {
        title: 'Complete Mobile App UI/UX Design System (180+ Components)',
        price: '฿18,500',
        sold: 41,
        rating: '5.0',
        reviews: 38,
        image: '/selling/media/post-5.jpg',
      },
      {
        title: 'SaaS Dashboard UI & Wireframing Kit',
        price: '฿14,000',
        sold: 32,
        rating: '4.9',
        reviews: 29,
        image: '/selling/media/post-2.png',
      },
      {
        title: 'Brand Identity & Visual Style Guide for Startups',
        price: '฿12,000',
        sold: 22,
        rating: '5.0',
        reviews: 20,
        image: '/selling/media/post-3.png',
      },
    ],
  },
  {
    id: 'sound-composer',
    name: 'Chapavich Temnitikul',
    label: 'Sound Composer',
    handle: '@phil_wc',
    followers: '142K followers',
    bio: 'Film composer with six Best Original Score awards, scoring features, series and documentaries across Thailand and Asia.',
    location: 'Bangkok, Thailand',
    tags: ['Film Scoring', 'Original Soundtrack', 'Sound Design'],
    cover: '/selling/sellers/sound-composer/cover.jpg',
    avatar: '/selling/sellers/sound-composer/avatar.jpg',
    services: [
      {
        title: 'Custom Short Film & Commercial Scoring',
        price: '฿15,000',
        sold: 18,
        rating: '4.8',
        reviews: 14,
        image: '/selling/sellers/sound-composer/service-scoring.jpg',
      },
      {
        title: 'Feature Film / Series Original Score & Sound Design',
        price: '฿500,000',
        sold: 12,
        rating: '5.0',
        reviews: 10,
        image: '/selling/sellers/sound-composer/service-feature.jpg',
      },
      {
        title: 'Original Soundtrack & Ambient Music Production',
        price: '฿20,000',
        sold: 7,
        rating: '4.9',
        reviews: 6,
        image: '/selling/sellers/sound-composer/service-ost.jpg',
      },
    ],
  },
  {
    id: 'photographer',
    name: 'Karn Kraipasit',
    label: 'Photographer',
    handle: '@karn_photo',
    followers: '68K followers',
    bio: 'Editorial and commercial photographer creating stunning architectural and portrait imagery for international publications.',
    location: 'Bangkok, Thailand',
    tags: ['Commercial', 'Architecture', 'Portrait'],
    cover: '/selling/hero/weng-cover.jpg',
    avatar: '/selling/sellers/photographer/avatar.jpg',
    services: [
      {
        title: 'Commercial Brand & Product Photography Session',
        price: '฿25,000',
        sold: 34,
        rating: '5.0',
        reviews: 30,
        image: '/selling/hero/weng-cover.jpg',
      },
      {
        title: 'Architectural & Interior Design Photography',
        price: '฿18,000',
        sold: 21,
        rating: '4.9',
        reviews: 19,
        image: '/selling/hero/peter-cover.jpg',
      },
    ],
  },
  {
    id: 'ai-automation',
    name: 'JOB AGICAFET',
    label: 'AI Automation',
    handle: '@job_ai',
    followers: '45K followers',
    bio: 'AI workflows and automation engineer building enterprise AI agents, prompt architectures, and integrations.',
    location: 'Bangkok, Thailand',
    tags: ['AI Agents', 'Automation', 'Workflow'],
    cover: '/selling/hero/slayalldeep-cover.jpg',
    avatar: '/selling/sellers/ai-automation/avatar.jpg',
    services: [
      {
        title: 'Custom AI Agent & Automated Customer Service Workflow',
        price: '฿24,000',
        sold: 15,
        rating: '5.0',
        reviews: 14,
        image: '/selling/media/service-kitchen.png',
      },
    ],
  },
];

export const FastworkFuture: React.FC<FastworkFutureProps> = ({ onOpenWaitlist }) => {
  const [activeTab, setActiveTab] = useState<string>('web-developer');

  const activeProf = PROFESSIONS.find((p) => p.id === activeTab) || PROFESSIONS[0];

  return (
    <section id="people" className="start-selling-future" aria-labelledby="future-heading">
      <div className="start-selling-future-card">
        
        {/* Header with pe-o-ple avatar stack */}
        <div className="start-selling-future-header">
          <div className="start-selling-future-header-copy">
            <h2 id="future-heading" className="start-selling-future-title">
              <span className="start-selling-future-title-lead">People still need</span>{' '}
              <span className="start-selling-future-title-words">
                pe
                <span className="start-selling-future-people-o">
                  <span className="start-selling-future-people-o-stage">
                    <img
                      loading="lazy"
                      decoding="async"
                      className="start-selling-future-people-o-vector"
                      src="/selling/people-wordmark/o.svg"
                      alt=""
                      width="26"
                      height="26"
                      draggable={false}
                    />
                    <span className="start-selling-future-people-o-stack">
                      {PROFESSIONS.map((p, idx) => (
                        <button
                          key={p.id}
                          type="button"
                          className="start-selling-future-people-o-face"
                          onClick={() => setActiveTab(p.id)}
                          style={{ '--o-face': idx } as React.CSSProperties}
                          title={p.name}
                        >
                          <img src={p.avatar} alt="" draggable={false} />
                        </button>
                      ))}
                    </span>
                  </span>
                </span>
                ple
              </span>
            </h2>

            <p className="start-selling-future-copy">
              <span className="start-selling-future-copy-lead">
                Clients don't just buy outputs. They buy expertise, experience, taste, and trust.
              </span>{' '}
              <br aria-hidden="true" /> That's why your portfolio matters more than ever.
            </p>
          </div>
        </div>

        {/* Profile Showcase with tabs and real services */}
        <div className="start-selling-future-showcase">
          <section id="profile-showcase" className="start-selling-profile" aria-label="Fastwork profile showcase">
            <div className="start-selling-profile-sticky">
              <div className="start-selling-profile-chrome">
                
                {/* Vertical Tabs on the Left */}
                <div className="start-selling-profile-tabs" role="tablist" aria-orientation="vertical">
                  {PROFESSIONS.map((prof, idx) => {
                    const isActive = activeTab === prof.id;
                    return (
                      <button
                        key={prof.id}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveTab(prof.id)}
                        className={`start-selling-profile-tab ${isActive ? 'is-active' : ''}`}
                        style={{ '--tab-i': idx } as React.CSSProperties}
                      >
                        <span className="start-selling-profile-tab-label">{prof.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Profile Card Center Content */}
                <div className="start-selling-profile-viewport">
                  <div className="start-selling-profile-content">
                    
                    {/* Cover & Avatar Header */}
                    <div className="start-selling-profile-header">
                      <div className="start-selling-profile-cover">
                        <img src={activeProf.cover} alt="Cover" decoding="async" />
                      </div>
                      <div className="start-selling-profile-avatar-wrap">
                        <img className="start-selling-profile-avatar" src={activeProf.avatar} alt={activeProf.name} />
                        <img className="start-selling-profile-online" src="/selling/profile/online.svg" alt="Online" />
                      </div>
                    </div>

                    {/* Bio & Details */}
                    <div className="start-selling-profile-info">
                      <div className="start-selling-profile-name-row">
                        <h3 className="start-selling-profile-name">{activeProf.name}</h3>
                        <span className="start-selling-profile-handle">{activeProf.handle}</span>
                        <span className="start-selling-profile-claim">
                          <img src="/selling/icons/claim.svg" alt="" /> Claim
                        </span>
                        <span className="start-selling-profile-followers">• {activeProf.followers}</span>
                      </div>

                      <p className="start-selling-profile-bio">{activeProf.bio}</p>

                      <div className="start-selling-profile-location">
                        <img src="/selling/icons/pin.svg" alt="" /> {activeProf.location}
                      </div>

                      <div className="start-selling-profile-tags">
                        {activeProf.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="start-selling-profile-tag">{tag}</span>
                        ))}
                      </div>
                    </div>

                    {/* Services Cards */}
                    <div className="start-selling-profile-services-wrap">
                      <div className="start-selling-profile-services-head">
                        <h4>Services</h4>
                        <button type="button" onClick={onOpenWaitlist} className="start-selling-profile-view-all">View all</button>
                      </div>

                      <div className="start-selling-profile-services-grid">
                        {activeProf.services.map((svc, sIdx) => (
                          <div key={sIdx} onClick={onOpenWaitlist} className="start-selling-service-card cursor-pointer">
                            <div className="start-selling-service-cover">
                              <img src={svc.image} alt={svc.title} />
                            </div>
                            <div className="start-selling-service-body">
                              <h5 className="start-selling-service-title">{svc.title}</h5>
                              <div className="start-selling-service-meta">
                                <span className="start-selling-service-price">{svc.price}</span>
                                <span className="start-selling-service-stat">· Sold {svc.sold}</span>
                                <span className="start-selling-service-rating">· ★ {svc.rating} ({svc.reviews})</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA bar */}
                    <div className="start-selling-profile-footer">
                      <span>3,788 people showcasing their work</span>
                      <button type="button" onClick={onOpenWaitlist} className="start-selling-profile-cta-btn">
                        Join waitlist
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>

      </div>
    </section>
  );
};
