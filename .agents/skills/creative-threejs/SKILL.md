---
name: creative-threejs
description: Best-practice blueprint for building high-end, human-crafted (anti-AI-slop) creative landing pages and portfolios using Three.js and the Experience/World architectural pattern. Use when designing, scaffolding, or implementing interactive 3D WebGL experiences, editorial portfolios, and scroll-driven WebGL animations.
---

# Creative Three.js & Portfolio Engineering Guide (Anti-AI-Slop Edition)

คู่มือและมาตรฐานการสร้างเว็บไซต์ Portfolio / Landing Page สไตล์ Creative Developer ระดับรางวัล (Awwwards / FWA / Webby) ด้วย Three.js + TypeScript/Vanilla เน้นความเป็นงานฝีมือมนุษย์ หลีกเลี่ยงดีไซน์แบบ AI สำเร็จรูป (Anti AI-Slop)

---

## 💎 1. ปรัชญาการออกแบบ: Human-Crafted (Anti AI-Slop)

### สิ่งที่ "ห้ามทำ" (AI-Slop Patterns ที่ต้องหลีกเลี่ยง):
- ❌ การจัดบล็อกเป็น Bento Grid สำเร็จรูปที่มีไอคอนเรืองแสงเหมือนกันทุกช่อง
- ❌ การไล่เฉดสีม่วง-ฟ้า (Neon Purple/Blue Gradient) บนพื้นหลังดำแบบลอยๆ
- ❌ การใช้ฟอนต์ Inter / Roboto แบบไม่มีน้ำหนักความหนาบางที่ตัดกัน
- ❌ การใส่วัตถุ 3D หมุนเคว้งคว้างโดยไม่มีความหมายหรือไม่เชื่อมโยงกับการเลื่อนหน้าเว็บ (Scroll)

### สิ่งที่ "ต้องยึดถือ" (Human-Crafted Standards):
- ✅ **Editorial Typography:** ใช้คู่ฟอนต์ที่มีบุคลิกเด่นชัด (เช่น Bold Serif หรือ Brutalist Display ผสมกับ Monospace / Clean Grotesk)
- ✅ **Purposeful 3D:** วัตถุ 3D ต้องทำหน้าที่เป็นจุดนำสายตา สะท้อนอัตลักษณ์ของผู้พัฒนา (เช่น Kinetic Sculpture, Dynamic Glass Refraction, Interactive Particle Ribbon, Wireframe Mesh)
- ✅ **Scroll-Driven Storytelling:** กล้อง 3D (Camera) และการหมุนของวัตถุต้องตอบสนองต่อการ Scroll ของผู้ใช้อย่างนุ่มนวล
- ✅ **Physical Nuance & Micro-interactions:** มีระบบแสงเงาที่สมจริง (PBR), Tone mapping ที่เป็นธรรมชาติ, และการตอบสนองต่อตำแหน่งเมาส์ (Mouse Parallax)

---

## 🏛️ 2. สถาปัตยกรรมโครงสร้าง: `Experience & World Pattern`

เพื่อป้องกันโค้ดแบบสปาเกตตี (Spaghetti Code) และให้ดูแลรักษาระยะยาวได้ง่าย ต้องแยก **Engine (ระบบแกนกลาง)** ออกจาก **Content (เนื้อหา 3D)** เสมอ:

```text
src/
├── main.ts                    # Entry point: สร้าง new Experience(canvas)
├── style.css                  # Typography, Layout, Smooth Scroll
│
├── Experience/
│   ├── Experience.ts          # Main Singleton Controller
│   ├── Camera.ts              # จัดการ PerspectiveCamera และ Mouse Parallax
│   ├── Renderer.ts            # WebGLRenderer, ToneMapping, Shadows, OutputEncoding
│   │
│   ├── Utils/
│   │   ├── Sizes.ts           # จัดการ Window Resize, Viewport & Pixel Ratio
│   │   ├── Time.ts            # Animation Loop (tick/RAF) และ Delta Time
│   │   ├── Resources.ts       # จัดการโหลด Textures / GLTF พร้อม Event Progress
│   │   └── Debug.ts           # lil-gui สำหรับปรับแสง/กล้องขณะพัฒนา
│   │
│   └── World/
│       ├── World.ts           # Scene Director ที่รวมทุก Object เข้าด้วยกัน
│       ├── Environment.ts     # จัดแสง (Ambient, Directional, Shadows, Fog)
│       ├── HeroObject.ts      # วัตถุ 3D ชิ้นเอก (Sculpture / Particles / Canvas)
│       └── ScrollSync.ts      # ซิงก์ตำแหน่ง Scroll ของหน้าเว็บเข้ากับ 3D
```

### หน้าที่ของแต่ละส่วน:
1. **`Experience.ts` (Singleton):** ทำหน้าที่เป็นศูนย์กลาง ให้ Object ลูกทุกตัวสามารถเรียกเข้าถึง `scene`, `camera`, `renderer`, `time`, `sizes` ได้โดยไม่ต้องส่ง Props ข้ามไปมา
2. **`Sizes.ts` & `Time.ts`:** จัดการเรื่อง Event Emitter โดยส่งอีเวนต์ `resize` และ `tick` ให้ทุกชิ้นส่วนอัปเดตไปพร้อมกัน
3. **`Renderer.ts`:** ควบคุมการ Render ตั้งค่า `antialias: true`, ปรับ `toneMapping = THREE.ACESFilmicToneMapping`, และจำกัด `pixelRatio = Math.min(window.devicePixelRatio, 2)` เพื่อไม่ให้เครื่องกระตุกบนจอความละเอียดสูง
4. **`HTML Overlay`:** วาง HTML Content เป็น Layer ด้านบน Canvas โดยตั้งค่า `pointer-events: none` ที่ Container หลัก และใส่ `pointer-events: auto` เฉพาะปุ่มหรือลิงก์ที่ต้องการให้คลิกได้

---

## ⚡ 3. มาตรฐานประสิทธิภาพ (Performance Checklist)

1. **Memory Management (ป้องกัน Memory Leak):**
   - เมื่อ Object ถูกทำลาย ต้องสั่ง `geometry.dispose()`, `material.dispose()`, `texture.dispose()`
2. **Draw Calls Optimization:**
   - ใช้วัตถุแบบ InstancedMesh หากมีชิ้นส่วนซ้ำกันจำนวนมาก (เช่น ฝูงอนุภาค หรือบล็อกซ้ำๆ)
3. **Responsive Clamp:**
   - ห้ามใช้ `window.devicePixelRatio` โดยไม่ Clamp (ต้องไม่เกิน 2 เสมอ)
4. **Shadow Optimization:**
   - จำกัดความละเอียด Shadow Map (เช่น 1024x1024 หรือ 2048x2048) และเปิดรับเงาเฉพาะ Object ที่จำเป็น

---

## 🚀 4. ขั้นตอนการทำงานร่วมกับผู้ใช้ (Step-by-Step Workflow)

1. **Step 1: Alignment (ถามความต้องการ):** ตกลงทิศทาง Vibe, โทนสี, ประเภทของวัตถุ 3D (Hero 3D Object), และเนื้อหาที่จะนำเสนอ
2. **Step 2: Scaffolding:** วางโครงสร้างไฟล์ตามสถาปัตยกรรม `Experience & World Pattern`
3. **Step 3: 3D Core Setup:** รัน Canvas, Scene, Lights, Camera, Responsive Resize
4. **Step 4: Hero Object Creation:** ปั้นชิ้นงาน 3D หรือระบบอนุภาคที่เป็นเอกลักษณ์
5. **Step 5: Interaction & Scroll Binding:** ผูกการเลื่อนเมาส์และ Scroll เข้ากับมุมมอง 3D
6. **Step 6: Typography & Polish:** วางเลย์เอาต์หน้าเว็บจริง ฟอนต์ และการส่งบรีฟงาน
