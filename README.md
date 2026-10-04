# Fastwork Portfolio - Next-Gen Edition 🚀
> เว็บไซต์ Portfolio ระดับพรีเมียม สไตล์ [fastwork.com](https://fastwork.com/) (Next-Gen Creator Platform) สำหรับ **P (@p_dev) — Senior Full-Stack Developer & UI/UX Designer**

---

## 🌟 ฟีเจอร์เด่นของโปรเจกต์ (Key Features)

1. **ดีไซน์ถอดแบบ Fastwork.com 100% (High-Fidelity):**
   - **Hero Section:** พาดหัวตัวใหญ่พร้อมอนิเมชันพู่กันวนรอบคำว่า *"you"* (Vector Brush Loop) แบบเดียวกับบนเว็บ fastwork.com
   - **Orbit 3D Floating Stage:** การ์ดโปรไฟล์เอียงองศาแบบ 3D ลอยอย่างลื่นไหล พร้อมสถานะออนไลน์สีเขียว (Live online indicator)
   - **Modern Aesthetic:** Typography, Layout, Button Glows, Backdrop Blur และโทนสีตรงตามต้นฉบับ
2. **ระบบส่งบรีฟงาน Interactive (Direct Briefing Modal):**
   - คลิกปุ่ม *"ส่งบรีฟงาน / ติดต่อจ้างงาน"* จะเปิดฟอร์มบรีฟงานสไตล์ Fastwork ทันที
   - รองรับการกรอกชื่อ, ช่องทางติดต่อ, เลือกประเภทบริการ, งบประมาณ และความต้องการ
   - เมื่อกดส่งจะมีเอฟเฟกต์ **Confetti พลุกระดาษฉลองความสำเร็จ 🎉** พร้อมปุ่มคัดลอกสรุปบรีฟงานลงคลิปบอร์ด
3. **Featured Projects Showcase Modal (3 ผลงานเด่น):**
   - คลิกปุ่ม *"ดูผลงานทั้งหมด"* เพื่อเปิดแผงแสดงผลงานจริงระดับโปรดักชัน พร้อมลิงก์เข้าชมเว็บจริง:
     1. **Sangjan Live Screen Shoutout** ([https://sangjan.com/](https://sangjan.com/)): Commercial B2B SaaS ส่งภาพ & ข้อความขึ้นจอ LED สดทันที (Latency < 200ms)
     2. **WUSAB.net** ([https://www.wusab.net/](https://www.wusab.net/)): Official University Portal ขององค์การนักศึกษา ม.วลัยลักษณ์ รองรับนักศึกษา 15,000+ คน (Lighthouse 98/100)
     3. **Check in - SAB of Walailak U. (OpenWorld)** ([https://openworld.wusab.net/](https://openworld.wusab.net/)): ระบบเช็กอินเข้าร่วมกิจกรรมระดับมหาวิทยาลัย สแกน QR ตรวจสอบสิทธิ์ใน 1 วินาที
4. **รองรับ n8n Git Control Center (`n8n-git-ui`):**
   - มีสคริปต์ `sync_n8n_git.bat` ดึงประวัติ Git Commit และ Unified Diff แสดงบนไดอะแกรมแบบ n8n Workflow ได้ทันที

---

## 💻 คู่มือย้ายโปรเจกต์และรันบนเครื่องใหม่ (Migration & Setup Guide)

### 1. สิ่งที่ต้องมีในเครื่องใหม่ (Prerequisites)
- **Node.js** เวอร์ชัน 18.x ขึ้นไป ([ดาวน์โหลด Node.js](https://nodejs.org/))
- **Git** ([ดาวน์โหลด Git](https://git-scm.com/))
- **Python 3.8+** (ตัวเลือกเสริม: หากต้องการรัน `n8n-git-control-center`)

---

### 2. ขั้นตอนการนำโปรเจกต์ไปรัน (Step-by-Step)

#### วิธีที่ A: ผ่าน Git (แนะนำที่สุด)
เปิด Command Prompt หรือ PowerShell ในโฟลเดอร์ที่คุณต้องการ (เช่น `D:\Projects` หรือ `C:\Users\<username>\Desktop`):
```bash
# 1. Clone โปรเจกต์ลงเครื่องใหม่
git clone https://github.com/TheMangKung/p-portfolio.git

# 2. เข้าสู่โฟลเดอร์โปรเจกต์
cd p-portfolio

# 3. ติดตั้ง Dependencies ทั้งหมด
npm install

# 4. รัน Local Development Server
npm run dev
```

#### วิธีที่ B: คัดลอกผ่าน Flash Drive / Zip
1. คัดลอกโฟลเดอร์ `p-portfolio` ไปวางในเครื่องใหม่ (ไม่ต้องก๊อปปี้โฟลเดอร์ `node_modules` ไปเพื่อความรวดเร็ว)
2. เปิด Terminal ในโฟลเดอร์โปรเจกต์
3. รันคำสั่ง:
   ```bash
   npm install
   npm run dev
   ```

---

### 3. คำสั่งที่ใช้งานบ่อย (Useful Commands)

| คำสั่ง | คำอธิบาย |
| :--- | :--- |
| `npm run dev` | รันเซิร์ฟเวอร์จำลองสำหรับพัฒนา (เปิดที่ `http://localhost:5173/`) |
| `npm run build` | คอมไพล์โค้ดสำหรับนำขึ้น Production Web Hosting (ไฟล์จะอยู่ที่โฟลเดอร์ `dist/`) |
| `npm run preview` | ทดสอบเปิดดูไฟล์จากโฟลเดอร์ `dist/` บน Local |
| `sync_n8n_git.bat` | ดับเบิลคลิกเพื่อซิงก์ Git DAG เข้าสู่ `n8n-git-control-center` |

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
p-portfolio/
├── public/                       # Assets ทั้งหมด (ฟอนต์, รูปภาพ, ไอคอนต้นฉบับ 94 รายการ)
│   ├── selling/                  # รูปโปรไฟล์, อวาตาร์, กราฟิกการ์ด Fastwork
│   │   ├── p-avatar.jpg          # รูปโปรไฟล์ของ P
│   │   ├── p-cover.jpg           # รูปหน้าปกของ P
│   │   └── ...
│   └── fonts/                    # ฟอนต์ทางการ Playpen Sans & Fastwork Bold
├── src/
│   ├── data/
│   │   └── portfolioData.ts      # ข้อมูลโปรเจกต์, แพ็กเกจราคา, รีวิว, ข้อมูลผู้พัฒนา P
│   ├── fastwork.css              # สไตล์ชีต CSS ทั้งหมดของ Fastwork (~270KB)
│   ├── App.tsx                   # React root component
│   └── main.tsx                  # Vite React entry point
├── index.html                    # หน้าหลัก Landing Page, Orbit 3D Cards, Modals
├── package.json                  # การตั้งค่า Dependencies (React, Vite, Tailwind)
├── vite.config.ts                # การตั้งค่า Vite build tool
├── sync_n8n_git.bat              # ตัวช่วยซิงก์ประวัติเข้า n8n Git Control
└── README.md                     # เอกสารคู่มือโปรเจกต์
```

---

## 🎨 การปรับแต่งเนื้อหาเพิ่มเติม (Customization)

1. **แก้ไขข้อมูลโปรไฟล์ และผลงาน:**
   - แก้ไขที่ไฟล์ `src/data/portfolioData.ts`
   - สามารถเพิ่ม/ลดผลงานในตัวแปร `PROJECTS` หรือปรับเปลี่ยนแพ็กเกจบริการในตัวแปร `SERVICES`
2. **แก้ไขรูปภาพ:**
   - เปลี่ยนไฟล์รูปภาพโปรไฟล์ใน `public/selling/p-avatar.jpg` และ `public/selling/p-cover.jpg`
3. **แก้ไขฟอร์มบรีฟงาน หรือหน้าเว็บหลัก:**
   - ปรับแต่ง Modal หรือ Section ต่าง ๆ ได้ที่ไฟล์ `index.html`

---

## 🤝 จัดทำโดย
- **P (@p_dev)** — Senior Full-Stack Developer & UI/UX Designer
- GitHub: [https://github.com/TheMangKung](https://github.com/TheMangKung)
