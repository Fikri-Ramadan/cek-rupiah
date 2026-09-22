# 💱 CekRupiah (FX Checker)

> Aplikasi web pemantau nilai tukar mata uang real-time, konversi kurs, dan analisis pasar finansial yang responsif dan performan.

[![Live Demo](https://img.shields.io/badge/Live_Demo-cekrupiah.vercel.app-brightgreen?style=for-the-badge&logo=vercel)](https://cekrupiah.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14+-202022?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Zustand](https://img.shields.io/badge/Zustand-5.0+-4C202D?style=for-the-badge&logo=react&logoColor=white)](https://zustand.docs.pmnd.rs/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 📸 Preview

![CekRupiah Dashboard Preview](https://raw.githubusercontent.com/fikri-ramadan/cek-rupiah/main/public/og-image.png)

---

## 🌟 Fitur Utama

- 🪟 **Interactive Currency Converter**: Konversi mata uang secara real-time saat mengetik, dilengkapi fitur swap, kalkulasi kurs live, serta opsi favorit dan simpan riwayat konversi.
- 🔍 **Searchable Currency Picker**: Pencarian mata uang interaktif berdasarkan kode atau nama, dikelompokkan ke dalam kategori Popular & Other Currencies lengkap dengan bendera negara.
- 📈 **Live Market Ticker**: Ticker running text untuk memantau pergerakan pasangan mata uang utama secara real-time beserta persentase perubahan 24 jam.
- 📊 **Interactive Rate History Chart**: Visualisasi grafik tren harga (Line & Area Chart) dengan rentang fleksibel (1D, 1W, 1M, 3M, 1Y, 5Y) dan indikator statistik lengkap (Open, Last, Change, % Change).
- ⚖️ **Multi-Currency Comparison**: Bandingkan nominal konversi ke berbagai mata uang sekaligus dalam satu tampilan dan sematkan (pin) baris mata uang ke favorit.
- ⭐️ **Pinned Favorites**: Pantau daftar pasangan mata uang favorit dengan live rate dan indikator perubahan harian, serta fitur klik untuk memuat kembali ke kalkulator utama.
- 📜 **Conversion History Log**: Pencatatan riwayat transaksi konversi dengan waktu relatif (relative time), dilengkapi fitur manajemen log (hapus per entri atau bersihkan semua).
- 💾 **Local Data Persistence**: Penyimpanan otomatis data favorit, riwayat konversi, dan status tab aktif di localStorage agar tidak hilang saat browser ditutup.
- ♿️ **Responsive & Accessible UI**: Desain responsif di semua ukuran layar, mendukung hover/focus states interaktif.

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
- **State Management**: [Zustand](https://zustand.docs.pmnd.rs/) (Client-side state & global store)
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
   git clone https://github.com/Fikri-Ramadan/cek-rupiah.git
   cd cek-rupiah
   npm install
   npm run dev