import './style.css';
import { PROJECT_TILES_DATA, ProjectCardData } from './Experience/World/ProjectTiles';
import confetti from 'canvas-confetti';
import Lenis from 'lenis';

// =======================================================
// 1. Initialize Lenis Smooth Scroll
// =======================================================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// =======================================================
// 3. Orbit Cards Scatter & Profile Window Gradual Expansion on Scroll
// =======================================================
const heroCenter = document.getElementById('hero-center');
const profileWindow = document.getElementById('profile-window');
const cardTopLeft = document.querySelector('.pos-top-left') as HTMLElement | null;
const cardBottomLeft = document.querySelector('.pos-bottom-left') as HTMLElement | null;
const cardTopRight = document.querySelector('.pos-top-right') as HTMLElement | null;
const cardBottomRight = document.querySelector('.pos-bottom-right') as HTMLElement | null;
const cardMidLeft = document.querySelector('.pos-mid-left') as HTMLElement | null;
const cardMidRight = document.querySelector('.pos-mid-right') as HTMLElement | null;

function handleScrollMotion() {
  const scrollY = window.scrollY || window.pageYOffset;
  const maxScroll = Math.max(window.innerHeight * 0.55, 340);
  const p = Math.min(Math.max(scrollY / maxScroll, 0), 1); // 0 to 1

  // 1. Scatter Orbit Cards Outward
  if (cardTopLeft) {
    cardTopLeft.style.transform = `translate3d(${-260 * p}px, ${-180 * p}px, 0) rotate(${-4 - 12 * p}deg) scale(${1 - 0.25 * p})`;
    cardTopLeft.style.opacity = `${Math.max(0, 1 - p * 1.35)}`;
    cardTopLeft.style.pointerEvents = p > 0.8 ? 'none' : 'auto';
  }

  if (cardBottomLeft) {
    cardBottomLeft.style.transform = `translate3d(${-260 * p}px, ${180 * p}px, 0) rotate(${3 + 12 * p}deg) scale(${1 - 0.25 * p})`;
    cardBottomLeft.style.opacity = `${Math.max(0, 1 - p * 1.35)}`;
    cardBottomLeft.style.pointerEvents = p > 0.8 ? 'none' : 'auto';
  }

  if (cardTopRight) {
    cardTopRight.style.transform = `translate3d(${260 * p}px, ${-180 * p}px, 0) rotate(${4 + 12 * p}deg) scale(${1 - 0.25 * p})`;
    cardTopRight.style.opacity = `${Math.max(0, 1 - p * 1.35)}`;
    cardTopRight.style.pointerEvents = p > 0.8 ? 'none' : 'auto';
  }

  if (cardBottomRight) {
    cardBottomRight.style.transform = `translate3d(${260 * p}px, ${180 * p}px, 0) rotate(${-3 - 12 * p}deg) scale(${1 - 0.25 * p})`;
    cardBottomRight.style.opacity = `${Math.max(0, 1 - p * 1.35)}`;
    cardBottomRight.style.pointerEvents = p > 0.8 ? 'none' : 'auto';
  }

  if (cardMidLeft) {
    cardMidLeft.style.transform = `translate3d(${-320 * p}px, ${-40 * p}px, 0) rotate(${2 - 8 * p}deg) scale(${1 - 0.25 * p})`;
    cardMidLeft.style.opacity = `${Math.max(0, 1 - p * 1.35)}`;
    cardMidLeft.style.pointerEvents = p > 0.8 ? 'none' : 'auto';
  }

  if (cardMidRight) {
    cardMidRight.style.transform = `translate3d(${320 * p}px, ${40 * p}px, 0) rotate(${-5 + 8 * p}deg) scale(${1 - 0.25 * p})`;
    cardMidRight.style.opacity = `${Math.max(0, 1 - p * 1.35)}`;
    cardMidRight.style.pointerEvents = p > 0.8 ? 'none' : 'auto';
  }

  // 2. Smooth fade on center hero text
  if (heroCenter) {
    heroCenter.style.transform = `translate3d(0, ${-60 * p}px, 0)`;
    heroCenter.style.opacity = `${Math.max(0, 1 - p * 1.15)}`;
  }

  // 3. Gradual Expansion & Subsequent Fade-Out on Scroll ("พอเลื่อนขึ้นไออันนี้ก็จะขึ้นตามค่อยๆ จางหายไป")
  if (profileWindow) {
    if (scrollY <= 450) {
      // Phase 1: Expanding into full view
      const scale = 0.84 + 0.16 * p;
      const translateY = (1 - p) * 60;
      const opacity = 0.65 + 0.35 * p;
      const radius = 38 - 10 * p;
      profileWindow.style.transform = `scale(${scale}) translate3d(0, ${translateY}px, 0)`;
      profileWindow.style.opacity = `${opacity}`;
      profileWindow.style.borderRadius = `${radius}px`;
    } else {
      // Phase 2: Glides up and smoothly fades away as user scrolls into works
      const fadeP = Math.min(Math.max((scrollY - 450) / 420, 0), 1);
      const scale = 1 - fadeP * 0.05;
      const translateY = -fadeP * 80;
      const opacity = Math.max(0, 1 - fadeP * 1.25);
      profileWindow.style.transform = `scale(${scale}) translate3d(0, ${translateY}px, 0)`;
      profileWindow.style.opacity = `${opacity}`;
      profileWindow.style.borderRadius = '28px';
    }
  }

  // 4. Staggered Cinematic Reveal for Case Studies (#works)
  const worksHead = document.querySelector('.section-head-center') as HTMLElement | null;
  const workCards = document.querySelectorAll('.work-card');

  if (worksHead) {
    const headP = Math.min(Math.max((scrollY - 360) / 360, 0), 1);
    worksHead.style.opacity = `${headP}`;
    worksHead.style.transform = `translate3d(0, ${(1 - headP) * 45}px, 0)`;
  }

  workCards.forEach((card, index) => {
    const htmlCard = card as HTMLElement;
    if (htmlCard.dataset.isHovered === 'true') return; // Don't override user hover tilt

    const cardP = Math.min(Math.max((scrollY - (400 + index * 90)) / 360, 0), 1);
    htmlCard.style.opacity = `${cardP}`;
    htmlCard.style.transform = `translate3d(0, ${(1 - cardP) * 65}px, 0) scale(${0.94 + 0.06 * cardP})`;
  });
}

window.addEventListener('scroll', handleScrollMotion, { passive: true });
lenis.on('scroll', handleScrollMotion);
handleScrollMotion(); // Initial tick

// =======================================================
// Interactive 3D Magnetic Tilt & Cursor Glare on Work Cards
// =======================================================
document.querySelectorAll('.work-card').forEach((card) => {
  const htmlCard = card as HTMLElement;

  htmlCard.addEventListener('mousemove', (e) => {
    htmlCard.dataset.isHovered = 'true';
    const rect = htmlCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth tilt (max 7 degrees)
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    htmlCard.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    htmlCard.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
    htmlCard.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale3d(1.025, 1.025, 1.025)`;
  });

  htmlCard.addEventListener('mouseleave', () => {
    htmlCard.dataset.isHovered = 'false';
    htmlCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
  });
});

// =======================================================
// Tabs Navigation Logic (Fastwork Profile)
// =======================================================
const tabButtons = document.querySelectorAll('.fw-tab-btn');
const tabPanels = document.querySelectorAll('.fw-tab-panel');

function switchTab(tabId: string) {
  tabButtons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });
  tabPanels.forEach(panel => {
    panel.classList.toggle('active', panel.id === `tab-panel-${tabId}`);
  });
}

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.getAttribute('data-tab');
    if (tabId) switchTab(tabId);
  });
});

// =======================================================
// 4. Project Detail Modal Logic
// =======================================================
const projectModal = document.getElementById('project-detail-modal') as HTMLElement;
const projectCloseBtn = document.getElementById('project-modal-close') as HTMLElement;
const modalCode = document.getElementById('detail-code') as HTMLElement;
const modalTitle = document.getElementById('detail-title') as HTMLElement;
const modalTagline = document.getElementById('detail-tagline') as HTMLElement;
const modalMetric = document.getElementById('detail-metric') as HTMLElement;
const modalStatus = document.getElementById('detail-status') as HTMLElement;
const modalLiveBtn = document.getElementById('detail-live-btn') as HTMLAnchorElement;

function openProjectModal(data: ProjectCardData) {
  if (!projectModal) return;
  modalCode.textContent = `[ ${data.code} // PRODUCTION SPECS ]`;
  modalCode.style.color = '#0569ff';
  modalTitle.textContent = data.title;
  modalTagline.textContent = data.tagline;
  modalMetric.textContent = data.metric;
  modalStatus.textContent = data.status;
  modalStatus.style.color = '#10b981';
  modalLiveBtn.href = data.liveUrl;
  modalLiveBtn.textContent = `เปิดดูเว็บไซต์จริง (${data.title.split(' ')[0]}) ↗`;

  projectModal.style.display = 'flex';
}

function closeProjectModal() {
  if (projectModal) projectModal.style.display = 'none';
}

if (projectCloseBtn) projectCloseBtn.addEventListener('click', closeProjectModal);
if (projectModal) {
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
  });
}

// Hook HTML Project Card Buttons
document.querySelectorAll('.open-project-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const id = (btn as HTMLElement).dataset.projectId;
    const project = PROJECT_TILES_DATA.find((p) => p.id === id);
    if (project) {
      openProjectModal(project);
    }
  });
});

// =======================================================
// 5. Direct Briefing Modal Logic (Fastwork Style)
// =======================================================
const briefModal = document.getElementById('brief-modal') as HTMLElement;
const briefCloseBtn = document.getElementById('brief-modal-close') as HTMLElement;
const briefForm = document.getElementById('brief-form') as HTMLFormElement;
const briefSuccess = document.getElementById('brief-success-view') as HTMLElement;
const briefSummaryBox = document.getElementById('brief-summary-box') as HTMLElement;
const briefCopyBtn = document.getElementById('brief-copy-btn') as HTMLElement;

function openBriefModal() {
  closeProjectModal();
  if (!briefModal) return;
  briefModal.style.display = 'flex';
  if (briefForm) briefForm.style.display = 'block';
  if (briefSuccess) briefSuccess.style.display = 'none';
}

function closeBriefModal() {
  if (briefModal) briefModal.style.display = 'none';
}

document.querySelectorAll('.trigger-brief-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    openBriefModal();
  });
});

if (briefCloseBtn) briefCloseBtn.addEventListener('click', closeBriefModal);
if (briefModal) {
  briefModal.addEventListener('click', (e) => {
    if (e.target === briefModal) closeBriefModal();
  });
}

if (briefForm) {
  briefForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const clientName = (document.getElementById('brief-name') as HTMLInputElement).value;
    const clientContact = (document.getElementById('brief-contact') as HTMLInputElement).value;
    const clientService = (document.getElementById('brief-service') as HTMLSelectElement).value;
    const clientDetails = (document.getElementById('brief-details') as HTMLTextAreaElement).value;

    if (briefSummaryBox) {
      briefSummaryBox.innerHTML = `
        <div style="margin-bottom:6px;"><strong>ผู้ติดต่อ:</strong> ${clientName}</div>
        <div style="margin-bottom:6px;"><strong>ช่องทางติดต่อ:</strong> ${clientContact}</div>
        <div style="margin-bottom:6px;"><strong>ประเภทงาน:</strong> ${clientService}</div>
        <div><strong>รายละเอียด:</strong> ${clientDetails}</div>
      `;
    }

    briefForm.style.display = 'none';
    if (briefSuccess) briefSuccess.style.display = 'block';

    // Celebration Confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });

    if (briefCopyBtn) {
      briefCopyBtn.onclick = () => {
        const text = `[บรีฟงานสำหรับ พี]\nผู้ติดต่อ: ${clientName}\nช่องทางติดต่อ: ${clientContact}\nประเภทงาน: ${clientService}\nรายละเอียด: ${clientDetails}`;
        navigator.clipboard.writeText(text);
        briefCopyBtn.textContent = '✓ คัดลอกบรีฟลงคลิปบอร์ดแล้ว';
        setTimeout(() => {
          briefCopyBtn.textContent = 'คัดลอกรายละเอียดบรีฟ';
        }, 2500);
      };
    }
  });
}

console.log('✨ Clean White Fastwork Portfolio with Orbit Scroll Motion initialized successfully.');
