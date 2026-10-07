import './style.css';
import { Experience } from './Experience/Experience';
import { PROJECT_TILES_DATA, ProjectCardData } from './Experience/World/ProjectTiles';
import confetti from 'canvas-confetti';
import Lenis from 'lenis';

// 1. Initialize Lenis Smooth Scroll
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

// 2. Initialize Three.js WebGL Experience
const canvas = document.getElementById('webgl-canvas') as HTMLCanvasElement;
const experience = new Experience(canvas);

// 3. Project Detail Modal Logic
const projectModal = document.getElementById('project-detail-modal') as HTMLElement;
const projectCloseBtn = document.getElementById('project-modal-close') as HTMLElement;
const modalCode = document.getElementById('detail-code') as HTMLElement;
const modalTitle = document.getElementById('detail-title') as HTMLElement;
const modalTagline = document.getElementById('detail-tagline') as HTMLElement;
const modalMetric = document.getElementById('detail-metric') as HTMLElement;
const modalStatus = document.getElementById('detail-status') as HTMLElement;
const modalLiveBtn = document.getElementById('detail-live-btn') as HTMLAnchorElement;

function openProjectModal(data: ProjectCardData) {
  modalCode.textContent = `[ ${data.code} // SYSTEM SPECS ]`;
  modalCode.style.color = data.accentColor;
  modalTitle.textContent = data.title;
  modalTagline.textContent = data.tagline;
  modalMetric.textContent = data.metric;
  modalStatus.textContent = data.status;
  modalStatus.style.color = data.accentColor;
  modalLiveBtn.href = data.liveUrl;
  modalLiveBtn.textContent = `OPEN PRODUCTION DEPLOYMENT (${data.title.split(' ')[0]}) ↗`;

  projectModal.style.display = 'flex';
}

function closeProjectModal() {
  projectModal.style.display = 'none';
}

if (projectCloseBtn) projectCloseBtn.addEventListener('click', closeProjectModal);
if (projectModal) {
  projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModal();
  });
}

// Hook 3D Tile Click
experience.onProjectSelect = (data) => {
  openProjectModal(data);
};

// Also Hook HTML Card Clicks
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

// 4. Direct Briefing Modal Logic
const briefModal = document.getElementById('brief-modal') as HTMLElement;
const briefCloseBtn = document.getElementById('brief-modal-close') as HTMLElement;
const briefForm = document.getElementById('brief-form') as HTMLFormElement;
const briefSuccess = document.getElementById('brief-success-view') as HTMLElement;
const briefSummaryBox = document.getElementById('brief-summary-box') as HTMLElement;
const briefCopyBtn = document.getElementById('brief-copy-btn') as HTMLElement;

function openBriefModal() {
  closeProjectModal();
  briefModal.style.display = 'flex';
  briefForm.style.display = 'block';
  briefSuccess.style.display = 'none';
}

function closeBriefModal() {
  briefModal.style.display = 'none';
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

    briefSummaryBox.innerHTML = `
      <div style="margin-bottom:8px;"><strong>CLIENT //</strong> ${clientName}</div>
      <div style="margin-bottom:8px;"><strong>CONTACT //</strong> ${clientContact}</div>
      <div style="margin-bottom:8px;"><strong>SCOPE //</strong> ${clientService}</div>
      <div><strong>SPECIFICATION //</strong> ${clientDetails}</div>
    `;

    briefForm.style.display = 'none';
    briefSuccess.style.display = 'block';

    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });

    if (briefCopyBtn) {
      briefCopyBtn.onclick = () => {
        const text = `[COMMISSION BRIEF FOR P]\nCLIENT: ${clientName}\nCONTACT: ${clientContact}\nSCOPE: ${clientService}\nDETAILS: ${clientDetails}`;
        navigator.clipboard.writeText(text);
        briefCopyBtn.textContent = '✓ COPIED SPECIFICATION TO CLIPBOARD';
        setTimeout(() => {
          briefCopyBtn.textContent = 'COPY SPECIFICATION';
        }, 2500);
      };
    }
  });
}

// 5. Live Telemetry Clock (Bangkok UTC+7)
function updateClock() {
  const clockEl = document.getElementById('live-clock');
  if (clockEl) {
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    clockEl.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())} BKK`;
  }
}
setInterval(updateClock, 1000);
updateClock();

console.log('🚀 Brutalist Three.js Portfolio Engine Initialized successfully.');
