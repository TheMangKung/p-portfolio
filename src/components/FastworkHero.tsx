import React, { useState, useEffect } from 'react';

interface FastworkHeroProps {
  onOpenWaitlist: () => void;
  onScrollToNext: () => void;
}

export const FastworkHero: React.FC<FastworkHeroProps> = ({
  onOpenWaitlist,
  onScrollToNext,
}) => {
  // Live countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 8,
    mins: 42,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-track" aria-labelledby="start-selling-heading">
      <div className="hero is-preparing">
        
        {/* The Authentic 3D Orbit Stage with Fastwork Cards */}
        <div className="orbit from-ring" aria-label="Featured portfolio cards">
          <div className="orbit-stage">
            <div className="orbit-stage-3d">
              
              {/* Card 1: Chapavich */}
              <article
                className="orbit-card"
                data-orbit-id="chapavich"
                data-orbit-side="left"
                style={{
                  left: '-1.78%',
                  top: '9.19%',
                  width: '195px',
                  height: '243px',
                  '--orbit-rot': '3.05deg',
                } as React.CSSProperties}
              >
                <div className="card-hit">
                  <span className="profile">
                    <span className="profile-cover">
                      <picture>
                        <img src="/selling/hero/chapavich-cover.jpg" alt="Chapavich" decoding="async" draggable={false} />
                      </picture>
                    </span>
                    <span className="profile-body">
                      <span className="avatar-row">
                        <span className="avatar">
                          <picture>
                            <img src="/selling/hero/chapavich-avatar.jpg" alt="" decoding="async" draggable={false} />
                          </picture>
                          <img className="online" src="/selling/profile/online.svg" alt="" draggable={false} />
                        </span>
                      </span>
                      <span className="profile-info">
                        <span className="profile-name">Chapavich Temnitikul</span>
                        <span className="profile-role">Sound Composer · Bangkok</span>
                      </span>
                    </span>
                  </span>
                </div>
              </article>

              {/* Card 2: Buttercup */}
              <article
                className="orbit-card"
                data-orbit-id="buttercup"
                data-orbit-side="right"
                style={{
                  left: '76.39%',
                  top: '-8.47%',
                  width: '193px',
                  height: '240px',
                  '--orbit-rot': '4deg',
                } as React.CSSProperties}
              >
                <div className="card-hit">
                  <span className="profile">
                    <span className="profile-cover">
                      <picture>
                        <img src="/selling/hero/buttercup-cover.jpg" alt="buttercup" decoding="async" draggable={false} />
                      </picture>
                    </span>
                    <span className="profile-body">
                      <span className="avatar-row">
                        <span className="avatar">
                          <picture>
                            <img src="/selling/hero/buttercup-avatar.jpg" alt="" decoding="async" draggable={false} />
                          </picture>
                          <img className="online" src="/selling/profile/online.svg" alt="" draggable={false} />
                        </span>
                      </span>
                      <span className="profile-info">
                        <span className="profile-name">buttercup</span>
                        <span className="profile-role">Packaging Designer · Bangkok</span>
                      </span>
                    </span>
                  </span>
                </div>
              </article>

              {/* Card 3: LEOBEER */}
              <article
                className="orbit-card"
                data-orbit-id="leobeer"
                data-orbit-side="left"
                style={{
                  left: '8.47%',
                  top: '-6.93%',
                  width: '193px',
                  height: '240px',
                  '--orbit-rot': '4deg',
                } as React.CSSProperties}
              >
                <div className="card-hit">
                  <span className="profile">
                    <span className="profile-cover">
                      <picture>
                        <img src="/selling/hero/leobeer-cover.jpg" alt="LEOBEER" decoding="async" draggable={false} />
                      </picture>
                    </span>
                    <span className="profile-body">
                      <span className="avatar-row">
                        <span className="avatar">
                          <picture>
                            <img src="/selling/sellers/ai-video-editor/avatar.jpg" alt="" decoding="async" draggable={false} />
                          </picture>
                          <img className="online" src="/selling/profile/online.svg" alt="" draggable={false} />
                        </span>
                      </span>
                      <span className="profile-info">
                        <span className="profile-name">LEOBEER</span>
                        <span className="profile-role">AI Video Editor · Bangkok</span>
                      </span>
                    </span>
                  </span>
                </div>
              </article>

              {/* Card 4: Slayalldeep */}
              <article
                className="orbit-card"
                data-orbit-id="slayalldeep"
                data-orbit-side="left"
                style={{
                  left: '13.04%',
                  top: '27.17%',
                  width: '203px',
                  height: '252px',
                  '--orbit-rot': '-2deg',
                } as React.CSSProperties}
              >
                <div className="card-hit">
                  <span className="profile">
                    <span className="profile-cover">
                      <picture>
                        <img src="/selling/hero/slayalldeep-cover.jpg" alt="Slayalldeep" decoding="async" draggable={false} />
                      </picture>
                    </span>
                    <span className="profile-body">
                      <span className="avatar-row">
                        <span className="avatar">
                          <picture>
                            <img src="/selling/hero/slayalldeep-avatar.jpg" alt="" decoding="async" draggable={false} />
                          </picture>
                          <img className="online" src="/selling/profile/online.svg" alt="" draggable={false} />
                        </span>
                      </span>
                      <span className="profile-info">
                        <span className="profile-name">Slayalldeep</span>
                        <span className="profile-role">Artist · Jakarta</span>
                      </span>
                    </span>
                  </span>
                </div>
              </article>

              {/* Card 5: Bold Sarunyoo (Web Designer) */}
              <article
                className="orbit-card float"
                data-orbit-id="bold"
                data-orbit-side="left"
                style={{
                  left: '-0.72%',
                  top: '44.49%',
                  width: '238px',
                  height: '297px',
                  '--orbit-rot': '4deg',
                } as React.CSSProperties}
              >
                <div className="card-hit">
                  <span className="profile">
                    <span className="profile-cover">
                      <picture>
                        <img src="/selling/hero/bold-cover.jpg" alt="Bold Sarunyoo" decoding="async" draggable={false} />
                      </picture>
                    </span>
                    <span className="profile-body">
                      <span className="avatar-row">
                        <span className="avatar">
                          <picture>
                            <img src="/selling/sellers/ux-ui-designer/avatar.jpg" alt="" decoding="async" draggable={false} />
                          </picture>
                          <img className="online" src="/selling/profile/online.svg" alt="" draggable={false} />
                        </span>
                      </span>
                      <span className="profile-info">
                        <span className="profile-name">Bold Sarunyoo</span>
                        <span className="profile-role">Web Designer · Bangkok</span>
                      </span>
                    </span>
                  </span>
                </div>
              </article>

              {/* Card 6: Weng Kitsana */}
              <article
                className="orbit-card"
                data-orbit-id="weng"
                data-orbit-side="left"
                style={{
                  left: '5.33%',
                  top: '67.47%',
                  width: '258px',
                  height: '322px',
                  '--orbit-rot': '3.05deg',
                } as React.CSSProperties}
              >
                <div className="card-hit">
                  <span className="profile">
                    <span className="profile-cover">
                      <picture>
                        <img src="/selling/hero/weng-cover.jpg" alt="Weng" decoding="async" draggable={false} />
                      </picture>
                    </span>
                    <span className="profile-body">
                      <span className="avatar-row">
                        <span className="avatar">
                          <picture>
                            <img src="/selling/hero/weng-avatar.jpg" alt="" decoding="async" draggable={false} />
                          </picture>
                          <img className="online" src="/selling/profile/online.svg" alt="" draggable={false} />
                        </span>
                      </span>
                      <span className="profile-info">
                        <span className="profile-name">Weng Kitsana</span>
                        <span className="profile-role">Photographer · San Francisco</span>
                      </span>
                    </span>
                  </span>
                </div>
              </article>

              {/* Card 7: Peter Sato */}
              <article
                className="orbit-card"
                data-orbit-id="peter"
                data-orbit-side="right"
                style={{
                  left: '86.31%',
                  top: '6.41%',
                  width: '193px',
                  height: '240px',
                  '--orbit-rot': '4deg',
                } as React.CSSProperties}
              >
                <div className="card-hit">
                  <span className="profile">
                    <span className="profile-cover">
                      <picture>
                        <img src="/selling/hero/peter-cover.jpg" alt="Peter Sato" decoding="async" draggable={false} />
                      </picture>
                    </span>
                    <span className="profile-body">
                      <span className="avatar-row">
                        <span className="avatar">
                          <picture>
                            <img src="/selling/hero/peter-avatar.jpg" alt="" decoding="async" draggable={false} />
                          </picture>
                          <img className="online" src="/selling/profile/online.svg" alt="" draggable={false} />
                        </span>
                      </span>
                      <span className="profile-info">
                        <span className="profile-name">Peter Sato</span>
                        <span className="profile-role">Interior Designer · Osaka</span>
                      </span>
                    </span>
                  </span>
                </div>
              </article>

              {/* Card 8: MOD SUPACHA */}
              <article
                className="orbit-card"
                data-orbit-id="mod"
                data-orbit-side="right"
                style={{
                  left: '89.08%',
                  top: '65.14%',
                  width: '190px',
                  height: '235px',
                  '--orbit-rot': '-4deg',
                } as React.CSSProperties}
              >
                <div className="card-hit">
                  <span className="profile">
                    <span className="profile-cover">
                      <picture>
                        <img src="/selling/hero/mod-cover.jpg" alt="MOD" decoding="async" draggable={false} />
                      </picture>
                    </span>
                    <span className="profile-body">
                      <span className="avatar-row">
                        <span className="avatar">
                          <picture>
                            <img src="/selling/hero/mod-avatar.jpg" alt="" decoding="async" draggable={false} />
                          </picture>
                          <img className="online" src="/selling/profile/online.svg" alt="" draggable={false} />
                        </span>
                      </span>
                      <span className="profile-info">
                        <span className="profile-name">MOD SUPACHA</span>
                        <span className="profile-role">Graphic Designer · Bangkok</span>
                      </span>
                    </span>
                  </span>
                </div>
              </article>

            </div>
          </div>
        </div>

        {/* Hero Center Copy */}
        <header className="hero-copy">
          <div className="hero-copy-main">
            <h1 id="start-selling-heading">
              <span className="heading-line">Show the world</span>{' '}
              <span className="hero-title">
                <span>what</span>{' '}
                <em
                  className="script-accent is-vector is-stroke is-idle"
                  aria-label="you"
                  style={{ width: 'calc(106 / 64 * 1em)', height: 'calc(74 / 64 * 1em)' }}
                >
                  <span className="sizer" aria-hidden="true"></span>
                  <span className="frame" aria-hidden="true" style={{ width: 'calc(106 / 64 * 1em)' }}>
                    <span
                      className="paint"
                      style={{ top: 0, right: 0, bottom: '-12.51%', left: '-7.78%' }}
                    >
                      <svg className="accent-svg is-idle-frame is-idle-frame-0" viewBox="0 0 114.25 83.2543" fill="none">
                        <path
                          className="accent-path"
                          pathLength="1"
                          d="M22.4387 26.4529C12.1446 42.5658 13.1546 58.4119 24.5196 58.4119C34.8123 58.4119 43.4429 48.9389 43.4429 26.4529C44.9502 36.2545 42.9456 46.7348 40.3751 62.9105C38.2974 75.9853 20.922 89.6051 3.25001 70.6382M91.4609 26.4529C84.3207 35.8915 78.2515 56.1744 86.5818 58.4119C99.75 61.9487 108.497 32.2023 109.211 27.9528C109.925 23.7034 103.726 50.9815 103.25 55.8724C102.774 60.7633 109.081 59.0336 110.39 55.8724M54.8674 38.8737C59.3418 28.4282 66.5969 24.5893 71.4685 26.4529C76.34 28.3166 76.8544 37.5019 73.4915 45.4942C70.1287 53.4866 64.7604 60.0773 58.4562 58.4119C53.4126 57.0794 49.3145 51.8372 54.8674 38.8737Z"
                          stroke="currentColor"
                          strokeWidth="6.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </em>{' '}
                <span>can do</span>
              </span>
            </h1>
            <p>In the age of AI, your portfolio proves why clients need you.</p>
          </div>

          {/* Countdown timer */}
          <div className="countdown" role="timer" aria-label="Time until launch">
            <div className="unit" aria-hidden="true">
              <span className="face"><span className="placeholder">{timeLeft.days}</span></span>
              <span className="label">days</span>
            </div>
            <div className="unit" aria-hidden="true">
              <span className="face"><span className="placeholder">{String(timeLeft.hours).padStart(2, '0')}</span></span>
              <span className="label">hours</span>
            </div>
            <div className="unit" aria-hidden="true">
              <span className="face"><span className="placeholder">{String(timeLeft.mins).padStart(2, '0')}</span></span>
              <span className="label">mins</span>
            </div>
            <div className="unit" aria-hidden="true">
              <span className="face"><span className="placeholder">{String(timeLeft.seconds).padStart(2, '0')}</span></span>
              <span className="label">seconds</span>
            </div>
          </div>

          {/* CTA Stack */}
          <div className="hero-cta-stack">
            <div className="hero-cta">
              <button type="button" onClick={onOpenWaitlist}>
                <svg className="solar solar-bell-linear cta-icon" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                  <path d="M18.7491 9.70957V9.00496C18.7491 5.13623 15.7274 2 12 2C8.27256 2 5.25087 5.13623 5.25087 9.00496V9.70957C5.25087 10.5552 5.00972 11.3818 4.5578 12.0854L3.45036 13.8095C2.43882 15.3843 3.21105 17.5249 4.97036 18.0229C9.57274 19.3257 14.4273 19.3257 19.0296 18.0229C20.789 17.5249 21.5612 15.3843 20.5496 13.8095L19.4422 12.0854C18.9903 11.3818 18.7491 10.5552 18.7491 9.70957Z" stroke="currentColor"/>
                  <path d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="currentColor" strokeLinecap="round"/>
                </svg>
                Join waitlist
              </button>
            </div>

            <button className="hero-cta-rsvp" type="button" onClick={onScrollToNext}>
              <svg className="solar solar-calendar-linear cta-icon" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                <path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z" stroke="currentColor"/>
                <path d="M7 4V2.5" stroke="currentColor" strokeLinecap="round"/>
                <path d="M17 4V2.5" stroke="currentColor" strokeLinecap="round"/>
                <path d="M2.5 9H21.5" stroke="currentColor" strokeLinecap="round"/>
              </svg>
              Explore Portfolios
            </button>

            <p className="hero-waitlist-note is-invite">
              * Available October 1st, by invitation only.
            </p>
          </div>
        </header>

        {/* Scroll down button */}
        <button type="button" className="scroll-cue" onClick={onScrollToNext}>
          <span className="scroll-float">
            <span className="scroll-label">Scroll down</span>
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="m5.5 7.25 4.5 4.5 4.5-4.5"></path>
              <path d="m5.5 11.25 4.5 4.5 4.5-4.5"></path>
            </svg>
          </span>
        </button>

      </div>
    </section>
  );
};
