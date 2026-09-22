# 💱 CekRupiah (FX Checker)

> Aplikasi web pemantau nilai tukar mata uang real-time, konversi kurs, dan analisis pasar finansial yang responsif dan performan.

[![Live Demo](https://img.shields.io/badge/Live_Demo-cekrupiah.vercel.app-brightgreen?style=for-the-badge&logo=vercel)](https://cekrupiah.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14+-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 📸 Preview

![CekRupiah Dashboard Preview](https://raw.githubusercontent.com/fikri-ramadan/foreign-exchange-currency-converter-app/main/public/og-image.jpg)

---

## 🌟 Fitur Utama

- 📈 **Live Market Ticker Header**: Running text pantauan mata uang utama (*Major Pairs*) secara *real-time* lengkap dengan indikator perubahan persentase harian.
- 🪟 **Interactive Currency Converter**: Kalkulator konversi kurs serbaguna dengan pencarian bendera & mata uang interaktif.
- ⭐️ **Pinned Favorites**: Simpan pasangan mata uang favorit kamu untuk memantau pergerakan harganya dalam satu tampilan ringkas.
- 📊 **Historical & Log Tracking**: Pantau riwayat perubahan kurs harian dan catat riwayat konversi yang telah dilakukan.
- 🌓 **Dark Mode UI**: Antarmuka modern dan *sleek* terinspirasi dari terminal finansial profesional.

---

## ⚡️ Optimasi & Arsitektur Teknis

Masalah utama dalam aplikasi *foreign exchange* (FX) adalah **efisiensi API Call**. Jika terdapat 10 item favorit dengan mata uang acuan yang berbeda-beda, metode naif (*looping fetch*) akan melakukan 10+ HTTP Request berturut-turut.

### 🧠 Solusi: Cross-Rate Math Strategy (1 API Call Engine)
Aplikasi ini menerapkan **Pivot Currency Strategy** menggunakan [Frankfurter API](https://www.frankfurter.app/):

1. **Agregasi Symbol Unik**: Aplikasi mengumpulkan seluruh kode ISO mata uang dari *Live Ticker* & *Favorites*.
2. **Single Request**: Mengirim hanya **1 HTTP Request** dengan acuan dasar `USD` untuk mengambil seluruh nilai tukar 7 hari terakhir.
3. **Kalkulasi Lintas Kurs (Client-side)**:
   $$\text{Rate}(A \rightarrow B) = \frac{\text{Rate}(\text{USD} \rightarrow B)}{\text{Rate}(\text{USD} \rightarrow A)}$$

> 💡 **Dampak**: Mengurangi beban lalu lintas jaringan hingga **90%**, menghilangkan risiko *rate limit*, dan memberikan waktu muat (*page load time*) yang sangat instan.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Zustand](https://pmnd.rs) (Client-side state & global store)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) / Lucide React
- **Icons**: ISO Country Flags SVG
- **Data Source**: [Frankfurter API](https://www.frankfurter.app/) (European Central Bank Data)
- **Deployment**: [Vercel](https://vercel.app/)

---

## 🚀 Memulai (Local Development)

Untuk menjalankan proyek ini secara lokal di komputer anda, ikuti langkah-langkah berikut:

### Prasyarat
- Node.js versi 18.x atau lebih baru
- npm / pnpm / yarn

### Langkah-langkah

1. **Clone repository ini:**
   ```bash
   git clone [https://github.com/](https://github.com/)[fikri-ramadan]/cekrupiah.git
   cd cekrupiah