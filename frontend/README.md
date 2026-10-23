# 🌿 Dyt. Sena Alkan - Bütünsel Beslenme & MoodNutri™ Frontend

Bu dizin, **Dyt. Sena Alkan Bütünsel Beslenme Kliniği** web uygulamasının **TypeScript** ve **React (Vite)** ile geliştirilmiş frontend kod tabanını ve yapılan tüm teknik işlemlerin kayıtlarını içerir.

---

## 📌 Frontend Kapsamında Yapılan İşlemler ve Notlar

### 1. Modern Teknoloji Yığını & Proje Başlatma
- **Altyapı**: Vite + React 19 + TypeScript (`react-ts` şablonu).
- **Tip Güvenliği**: Tüm durumlar, hesaplayıcı girdileri, makro modelleri, MoodNutri veri yapıları ve randevu akışı `src/types/index.ts` altında strict TypeScript arayüzleriyle modellendi (`verbatimModuleSyntax` uyumlu).
- **İkonografi & Efektler**: Modern sağlık & wellness temasına uygun `lucide-react` vektör ikonları ve başarı anlarında tetiklenen `canvas-confetti` kutlama motoru entegre edildi.
- **GitHub Pages Uyumluluğu**: `vite.config.ts` dosyasına `base: './'` tanımlandı. Bu sayede GitHub Pages alt dizinlerinde ya da özel alan adlarında tüm CSS, JS ve görsel varlıklar 404 hatası olmadan göreceli yollarla yüklenir.

---

### 2. Geliştirilen İnteraktif Bileşenler & Modüller

| Modül / Bileşen | Dosya Yolu | Fonksiyon & Açıklama |
| :--- | :--- | :--- |
| **Navbar & Tema Yönetimi** | `src/components/Navbar.tsx` | Sticky glassmorphism header, mobil çekmece menü, koyu/açık tema (Dark/Light mode) anahtarı, Danışan Portalı hızlı giriş butonu ve Randevu CTA'sı. |
| **Hero (Giriş) Bölümü** | `src/components/Hero.tsx` | Kısıtlayıcı diyetlerden uzaklaştıran, özşefkat odaklı güçlü başlık, günün hatırlatması kartı, 1250+ danışan ve %96 kalıcılık metrikleri, diyetisyen portresi. |
| **Hakkımda & Yaklaşımım** | `src/components/About.tsx` | Dyt. Sena Alkan biyografisi, Hacettepe ve Fonksiyonel Tıp referansları, interaktif karşılaştırma modülü (*Klasik Şok Diyetler vs. Bütünsel Beslenme Felsefemiz*). |
| **Klinik Hizmetler** | `src/components/Services.tsx` | 4 temel danışmanlık paketi, içerik kartları, detaylı modal önizleme ve doğrudan randevu formunu ilgili paketle açan butonlar. |
| **Akıllı Kalori & Makro Hesaplayıcı** | `src/components/SmartTools.tsx` | **Mifflin-St Jeor** formülüyle yaş, boy, kilo, cinsiyet ve aktiviteye göre BMR ve TDEE hesaplama; hedefe göre kalori açığı/fazlası, protein/karb/yağ gram ve yüzde dağılımı. Tek tıkla "Danışan Paneline Aktar" özelliği. |
| **Dijital Su Takip Asistanı** | `src/components/SmartTools.tsx` | Kilo ve aktiviteye göre hidrasyon ihtiyacı hesaplama; animasyonlu su şişesi dolum efekti, +250ml / +330ml / +500ml hızlı ekleme butonları, localStorage saklama, %100 hedefe ulaşıldığında konfeti patlaması. |
| **MoodNutri™ (USP Modülü)** | `src/components/MoodNutri.tsx` | Sektörde fark yaratan 6 duygu durumu (Stresli, Yorgun, Tatlı Krizinde, Duygusal Açlık, Zihinsel Sis, Şişkin). Nörotransmitter ve biyokimyasal analiz, tüketilecek/uzak durulacak besinler, acil durum pratik tarifleri, 30 saniyelik mindful nefes egzersizi. |
| **Online Randevu Sistemi** | `src/components/AppointmentModal.tsx` | 4 adımlı interaktif randevu akışı (Hizmet Seçimi ➔ Online/Yüz Yüze & Tarih/Saat Slotu ➔ Danışan Bilgileri & Not ➔ Randevu Kodu & WhatsApp Hızlı Onay Yönlendirmesi). |
| **Danışan Portalı (Portal Demo)** | `src/components/ClientPortalModal.tsx` | Giriş yapan danışan deneyimi: Başlangıç/güncel kilo takip grafiği (-3.6 kg yağ kaybı), günlük kalori ve su ilerleme çubukları, interaktif öğün kontrol listesi ("Yedim ✓"), diyetisyenden canlı koçluk notu, hızlı soru sorma formu. |
| **Yorumlar & Başarı Hikayeleri** | `src/components/Testimonials.tsx` | Gerçekçi dönüşüm hikayeleri, etiket filtreleme (Sürdürülebilir Kilo, Bağırsak Sağlığı, Duygusal Açlık), öncesi/sonrası kazanımları. |
| **SSS & İletişim** | `src/components/FAQSection.tsx` | Açılır/kapanır akordeon SSS, doğrudan mesajlaşma formu, WhatsApp hattı ve klinik çalışma saatleri. |
| **Footer** | `src/components/Footer.tsx` | Klinik iletişim bilgileri, yasal tıbbi sorumluluk reddi (disclaimer), yukarı çık butonu ve telif hakları. |

---

### 3. Tasarım Sistemi ve Görsel Kimlik (`src/index.css`)
- **Renk Paleti**:
  - `Sage Green` (`#2D6A4F`, `#52B788`, `#E8F5E9`) - Doğallık, güven ve iyileşme.
  - `Warm Terracotta / Peach` (`#E07A5F`, `#F4A261`) - Enerji, samimiyet ve şefkat.
  - `Linen / Cream` (`#FBF9F5`, `#F4EFE6`) - Gözü yormayan yumuşak arka planlar.
  - `Slate / Forest` (`#1C2D27`, `#0E1813`) - Okunabilirliği yüksek tipografi ve dark mode.
- **Tipografi**: Google Fonts `Outfit` (başlıklar) ve `Plus Jakarta Sans` (gövde metinleri).
- **Mikro Etkileşimler**: Kartlarda yumuşak süzülme (`translateY(-4px)`), su şişesi akışkan dolum animasyonu, süzülen rozetler (`floatSlow`), cam morfolojisi (`backdrop-filter: blur(14px)`).

---

### 4. Kullanılan Komutlar

```bash
# Geliştirme sunucusunu başlatma (Vite dev server)
npm run dev

# TypeScript kontrolü ve üretim derlemesi (Production bundle)
npm run build

# Derlenen çıktıyı yerel ortamda önizleme
npm run preview

# Doğrudan GitHub Pages'e yayına alma (gh-pages)
npm run deploy
```

---

### 5. Dizin Yapısı

```
frontend/
├── public/
│   ├── dietitian.jpg          # Yüksek çözünürlüklü diyetisyen görseli
│   └── healthy_bowl.jpg       # Sağlıklı bütünsel kase görseli
├── src/
│   ├── components/            # Yeniden kullanılabilir UI bileşenleri
│   │   ├── About.tsx
│   │   ├── AppointmentModal.tsx
│   │   ├── ClientPortalModal.tsx
│   │   ├── FAQSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── MoodNutri.tsx
│   │   ├── Navbar.tsx
│   │   ├── Services.tsx
│   │   ├── SmartTools.tsx
│   │   └── Testimonials.tsx
│   ├── data/
│   │   └── contentData.ts     # Tüm UX metinleri, MoodNutri veritabanı & hesaplama formülü
│   ├── types/
│   │   └── index.ts           # TypeScript arayüzleri ve veri tipleri
│   ├── App.tsx                # Ana uygulama ve durum orkestrasyonu
│   ├── index.css              # Tasarım sistemi, tema değişkenleri ve animasyonlar
│   └── main.tsx               # Uygulama giriş noktası
├── index.html                 # SEO başlıkları ve Google Fonts
├── package.json               # Paket bağımlılıkları ve betikler
├── tsconfig.json              # TypeScript yapılandırması
└── vite.config.ts             # Vite yapılandırması (base: './')
```
