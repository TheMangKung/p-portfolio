# 🤖 Antigravity AI Handover & Context Guide (คู่มือส่งต่องานสำหรับ Antigravity)

> **สำหรับ AI Agent (Antigravity) บนเครื่องใหม่:**  
> โปรดอ่านเอกสารนี้ทันทีเมื่อเริ่มเซสชัน เพื่อรับทราบประวัติ บริบทโปรเจกต์ โครงสร้างไฟล์ และสิ่งที่ต้องทำต่อร่วมกับผู้ใช้ **P** โดยไม่ต้องเริ่มถามใหม่จากศูนย์

---

## 👤 ข้อมูลเจ้าของโปรเจกต์ (User Persona)
- **ชื่อ / นามปากกา:** P (`@p_dev`)
- **ตำแหน่ง / ความเชี่ยวชาญ:** Senior Full-Stack Developer & UI/UX Designer
- **GitHub:** [TheMangKung](https://github.com/TheMangKung)
- **สไตล์การทำงานที่ผู้ใช้ระบุไว้:** *"แก้ไปถามไปนะ"* (ทำทีละส่วน ปรับแต่งละเอียด ชวนคุยและสอบถามความพึงพอใจเป็นระยะ ไม่เปลี่ยนโค้ดก้าวกระโดดโดยไม่แจ้ง)

---

## 🎯 เป้าหมายของโปรเจกต์ (Project Mission)
สร้างเว็บไซต์ **Personal Portfolio** ที่ถอดแบบดีไซน์จาก **[fastwork.com](https://fastwork.com/)** (Next-Gen Creator Platform) 100% ทั้งความลื่นไหล (Smoothness), ฟิสิกส์ 3D Orbit, Vector Brush Loop บนคำว่า *"you"*, สีสัน, ฟอนต์ และจัดเต็มความพรีเมียม เพื่อใช้รับงานฟรีแลนซ์ระดับโปรดักชัน

### 3 ผลงานหลักที่ผู้ใช้สร้างจริง (Verified Showcase Projects):
1. **Live Screen Shoutout — Sangjan** ([https://sangjan.com/](https://sangjan.com/))
   - *สถานะ:* **Commercial B2B SaaS (สร้างจริงและขายได้แล้ว)**
   - *เทคโนโลยี:* React, Node.js, WebSocket High-Concurrency, Tailwind CSS, Live Moderation
   - *สโคป:* ส่งภาพ & ข้อความขึ้นจอ LED ใหญ่สดทันทีในงานอีเวนต์/คอนเสิร์ต Latency < 200ms
2. **WUSAB.net — องค์การบริหาร องค์การนักศึกษา ม.วลัยลักษณ์** ([https://www.wusab.net/](https://www.wusab.net/))
   - *สถานะ:* **University Enterprise Portal (พัฒนาเพื่อนักศึกษาและมหาวิทยาลัยฟรี)**
   - *เทคโนโลยี:* React / Next.js, TypeScript, Tailwind CSS, Design System
   - *สโคป:* พอร์ทัลศูนย์กลางข้อมูลข่าวสารและกิจกรรม รองรับนักศึกษากว่า 15,000 คน (Lighthouse 98/100)
3. **Check in - SAB of Walailak U. (OpenWorld)** ([https://openworld.wusab.net/](https://openworld.wusab.net/))
   - *สถานะ:* **High-Traffic Event Attendance Web App (พัฒนาเพื่อนักศึกษาฟรี)**
   - *เทคโนโลยี:* React, TypeScript, QR Scanner Verification, Real-Time DB
   - *สโคป:* ระบบเช็กอินเข้าร่วมกิจกรรมระดับมหาวิทยาลัย สแกนตรวจสอบสิทธิ์รวดเร็วใน 1 วินาที Uptime 99.99%

---

## 🏗️ โครงสร้างไฟล์และเทคโนโลยีที่ใช้ (Architecture)
- **Framework & Build Tool:** Vite + React + TypeScript + Tailwind CSS
- **Design System:** สกัดและ Unscope CSS มาจาก Fastwork.com ดั้งเดิม (`src/fastwork.css` ~270KB)
- **Assets (94 รายการ):** ดาวน์โหลดมาเก็บไว้ใน Local ครบถ้วนที่ `public/selling/`, `public/fonts/`, `public/_app/` (ไม่พึ่งพา Hotlink ภายนอก ทำให้เปิดออฟไลน์หรือโฮสต์ที่ไหนก็ไม่พัง)
- **ไฟล์สำคัญในโฟลเดอร์:**
  - `index.html`: หน้าหลัก Landing Page, 3D Orbit Stage, SvelteKit Shell, Interactive Brief Modal พร้อมเอฟเฟกต์ Confetti และ Featured Projects Showcase Modal
  - `src/data/portfolioData.ts`: โมเดลข้อมูลส่วนตัว, แพ็กเกจราคาบริการ, รีวิว, รายละเอียด Case Studies
  - `sync_n8n_git.bat`: สคริปต์ซิงก์ Git Graph เข้าแอป Git Time Machine
  - `package.json`: Dependencies และ Script รันงาน

---

## 🔄 ระบบ Git & Git Time Machine ที่เชื่อมต่ออยู่
- **GitHub Repository:** [https://github.com/TheMangKung/p-portfolio](https://github.com/TheMangKung/p-portfolio) (Branch: `main`)
- **Git Control Center (Git Time Machine):** 
  - แอป Desktop ควบคุม Git DAG สไตล์ n8n Workflow ที่พัฒนาโดยผู้ใช้ ([https://github.com/TheMangKung/n8n-git-control-center](https://github.com/TheMangKung/n8n-git-control-center))
  - มีฟังก์ชัน **Save Checkpoint** (Commit + Push อัตโนมัติ), **Sync Overwrite** (Fetch + Hard Reset อัตโนมัติ), และ **Clone จาก GitHub** ใน 1 คลิก

---

## 🚀 วิธีเริ่มงานบนเครื่องใหม่ (สำหรับรันเซิร์ฟเวอร์)
เมื่อโคลนโปรเจกต์ลงเครื่องใหม่แล้ว (ไม่ว่าจะเป็น Mac หรือ Windows):
```bash
# 1. ติดตั้ง Dependencies (ทำครั้งแรก)
npm install

# 2. รัน Local Dev Server
npm run dev
# เข้าชมได้ที่: http://localhost:5173/
```

---

## 📋 Roadmaps & สิ่งที่ต้องทำต่อร่วมกับผู้ใช้ (Next Steps)

Antigravity บนเครื่องใหม่สามารถเสนอและชวนผู้ใช้ทำตามลำดับหัวข้อนี้ได้เลย:

1. **ปรับแต่งรูปภาพจริงของผลงาน 3 ตัวในหน้าเว็บ:**
   - นำภาพหน้าจอของ **Sangjan**, **WUSAB.net** และ **OpenWorld Check-in** มาใส่แทนรูปสต็อกของ Fastwork เดิมใน Feed / Gallery
2. **ปรับแต่งหมวดหมู่บริการ & ราคา (Services & Pricing):**
   - ตรวจสอบกับผู้ใช้ว่าต้องการปรับราคาแพ็กเกจบริการใน `src/data/portfolioData.ts` เช่น งานพัฒนา Landing Page, งาน SaaS, หรืองาน Custom Web App หรือไม่
3. **เชื่อมต่อระบบส่งบรีฟงาน (Direct Briefing Webhook):**
   - ปัจจุบันปุ่ม *"ส่งบรีฟงาน"* มีฟอร์มสวยงามและกดคัดลอกสรุปบรีฟงานได้แล้ว
   - สามารถเสนอผู้ใช้เชื่อมต่อระบบแจ้งเตือนอัตโนมัติ เช่น **LINE Notify**, **Discord Webhook**, หรือส่งเข้า **n8n Workflow** ที่ผู้ใช้ใช้อยู่
4. **Deploy ขึ้น Production:**
   - เมื่อปรับแต่งจนผู้ใช้พอใจ สามารถแนะนำการ Deploy ผ่าน Vercel, Netlify, หรือ GitHub Pages พร้อมผูก Custom Domain ได้ทันที

---

> 💡 **คำแนะนำสำหรับ AI:** ให้เกียรติโค้ด CSS ต้นฉบับและฟังก์ชัน Modal ที่มีอยู่แล้วเสมอ รันเช็ก `http://localhost:5173/` ทุกครั้งหลังแก้โค้ด เพื่อให้มั่นใจว่าหน้าเว็บแสดงผลสมบูรณ์ 100%
