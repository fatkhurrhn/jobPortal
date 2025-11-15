import React, { useState } from 'react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState('');

  // Dummy Data Lowongan Terbaru
  const latestJobs = [
    {
      id: 1,
      posisi: 'Frontend Developer',
      perusahaan: 'PT Solusi Digital',
      logo: 'https://via.placeholder.com/60/355485/FFFFFF?text=SD',
      lokasi: 'Bandung',
      tipe: 'Full-time',
      sektor: 'Teknologi',
      pendidikan: 'S1',
      tanggal: '15 Nov 2025',
    },
    {
      id: 2,
      posisi: 'Operator Produksi',
      perusahaan: 'CV Makmur Abadi',
      logo: 'https://via.placeholder.com/60/4f90c6/FFFFFF?text=MA',
      lokasi: 'Bekasi',
      tipe: 'Shift',
      sektor: 'Manufaktur',
      pendidikan: 'SMK',
      tanggal: '14 Nov 2025',
    },
    {
      id: 3,
      posisi: 'Petugas Lapangan',
      perusahaan: 'UD Tani Maju',
      logo: 'https://via.placeholder.com/60/90b6d5/FFFFFF?text=TM',
      lokasi: 'Temanggung',
      tipe: 'Kontrak',
      sektor: 'Pertanian',
      pendidikan: 'D3',
      tanggal: '13 Nov 2025',
    },
  ];

  // Dummy Data Berita
  const newsList = [
    {
      id: 1,
      judul: 'Pelatihan Gratis Bidang Digital Dimulai Bulan Ini',
      tanggal: '10 Nov 2025',
      ringkasan: 'Disnaker membuka pendaftaran pelatihan web development, UI/UX, dan digital marketing...',
    },
    {
      id: 2,
      judul: 'Job Fair Kota Bandung Hadirkan 50+ Perusahaan',
      tanggal: '8 Nov 2025',
      ringkasan: 'Event bursa kerja akan digelar pada 15-17 November di Gedung Sabilulungan.',
    },
  ];

  // Dummy Statistik
  const stats = {
    lowongan: 912,
    pencaker: 14_230,
    perusahaan: 345,
    pelatihan: 28,
  };

  // FAQ
  const faqs = [
    {
      q: 'Apakah semua lowongan diverifikasi?',
      a: 'Ya, semua lowongan diverifikasi oleh tim Disnaker untuk memastikan keamanan dan keaslian informasi.',
    },
    {
      q: 'Bagaimana cara mendaftar sebagai pencari kerja?',
      a: 'Kamu bisa mendaftar online melalui menu "Daftar Pencaker" atau datang langsung ke kantor Disnaker terdekat.',
    },
    {
      q: 'Apakah layanan ini gratis?',
      a: 'Ya, seluruh layanan penempatan tenaga kerja, pelatihan, dan pendaftaran bersifat GRATIS.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ===== NAVBAR ===== */}
      <nav className="bg-white shadow-lg border-b border-[#e5e7eb] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#355485] rounded-lg flex items-center justify-center">
                  <i className="ri-building-line text-white text-lg"></i>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#2a436c]">DISNAKER</h1>
                  <p className="text-xs text-[#6b7280] -mt-1">Kota Bandung</p>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-[#2a436c] hover:text-[#355485] font-medium transition-colors">Beranda</a>
                <a href="#" className="text-[#6b7280] hover:text-[#2a436c] transition-colors">Lowongan</a>
                <a href="#" className="text-[#6b7280] hover:text-[#2a436c] transition-colors">Pelatihan</a>
                <a href="#" className="text-[#6b7280] hover:text-[#2a436c] transition-colors">Informasi</a>
                <a href="#" className="text-[#6b7280] hover:text-[#2a436c] transition-colors">Pengaduan</a>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a href="/login" className="text-[#2a436c] hover:text-[#355485] font-medium transition-colors">Masuk</a>
              <a href="/register" className="bg-[#355485] hover:bg-[#2a436c] text-white px-4 py-2 rounded-lg transition-colors">Daftar</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-[#2a436c] p-2">
                <i className="ri-menu-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-r from-[#355485] to-[#4f90c6] text-white py-20 px-4 sm:px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center mix-blend-overlay"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Portal Layanan Tenaga Kerja
            <span className="block text-[#cbdde9] text-xl md:text-2xl font-normal mt-2">
              Dinas Tenaga Kerja Kota Bandung
            </span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Temukan lowongan kerja terbaru, ikuti pelatihan gratis, dan dapatkan dukungan karier dari pemerintah.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/jobs" className="px-8 py-4 bg-white text-[#355485] font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2">
              <i className="ri-search-line"></i>
              Cari Lowongan
            </a>
            <a href="/register/pencaker" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <i className="ri-user-add-line"></i>
              Daftar Pencaker
            </a>
            <a href="/register/perusahaan" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <i className="ri-building-line"></i>
              Daftar Perusahaan
            </a>
          </div>
        </div>
      </section>

      {/* ===== PENCARIAN CEPAT ===== */}
      <section className="py-12 bg-[#f9fafb] -mt-8 relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-[#e5e7eb]">
            <h2 className="text-xl md:text-2xl font-semibold text-[#2a436c] mb-6 text-center">Cari Lowongan Kerja</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="Kata kunci (misal: IT, guru, teknisi)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all"
              >
                <option value="">Semua Lokasi</option>
                <option value="Bandung">Bandung</option>
                <option value="Bekasi">Bekasi</option>
                <option value="Temanggung">Temanggung</option>
              </select>
              <button className="px-6 py-3 bg-[#355485] hover:bg-[#2a436c] text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2">
                <i className="ri-search-line"></i>
                Cari
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATISTIK RINGKAS ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2a436c] mb-12">Statistik Layanan Disnaker</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: 'Lowongan Aktif', value: stats.lowongan.toLocaleString(), icon: 'ri-briefcase-line', color: 'bg-blue-500' },
              { label: 'Pencari Kerja', value: stats.pencaker.toLocaleString(), icon: 'ri-user-line', color: 'bg-green-500' },
              { label: 'Perusahaan Mitra', value: stats.perusahaan, icon: 'ri-building-line', color: 'bg-purple-500' },
              { label: 'Program Pelatihan', value: stats.pelatihan, icon: 'ri-book-line', color: 'bg-orange-500' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg border border-[#e5e7eb] hover:shadow-xl transition-all"
              >
                <div className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${stat.icon} text-white text-2xl`}></i>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-[#2a436c]">{stat.value}</p>
                <p className="text-sm text-[#6b7280] mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOWONGAN TERBARU ===== */}
      <section className="py-16 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2a436c]">Lowongan Terbaru</h2>
              <p className="text-[#6b7280] mt-2">Temukan pekerjaan yang sesuai dengan keahlian Anda</p>
            </div>
            <a href="/jobs" className="text-[#355485] hover:text-[#2a436c] font-medium flex items-center gap-2 transition-colors">
              Lihat Semua
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl border border-[#e5e7eb] transition-all group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img src={job.logo} alt={job.perusahaan} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[#2a436c] text-lg group-hover:text-[#355485] transition-colors truncate">{job.posisi}</h3>
                    <p className="text-[#6b7280] truncate">{job.perusahaan}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                  <div className="flex items-center gap-2 text-[#6b7280]">
                    <i className="ri-map-pin-line"></i>
                    <span>{job.lokasi}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6b7280]">
                    <i className="ri-time-line"></i>
                    <span>{job.tipe}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6b7280]">
                    <i className="ri-building-line"></i>
                    <span>{job.sektor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#6b7280]">
                    <i className="ri-graduation-cap-line"></i>
                    <span>{job.pendidikan}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-[#e5e7eb]">
                  <span className="text-xs text-[#9ca3af]">{job.tanggal}</span>
                  <button className="px-4 py-2 bg-[#355485] hover:bg-[#2a436c] text-white text-sm rounded-lg transition-colors flex items-center gap-2">
                    Lamar
                    <i className="ri-send-plane-line"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BERITA & INFORMASI ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2a436c] mb-8">Berita & Informasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsList.map((news) => (
              <div
                key={news.id}
                className="bg-gradient-to-r from-[#f8fafc] to-white p-6 rounded-2xl border border-[#e5e7eb] hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-3 bg-gradient-to-b from-[#355485] to-[#4f90c6] rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#2a436c] text-lg group-hover:text-[#355485] transition-colors mb-2">
                      {news.judul}
                    </h3>
                    <p className="text-[#6b7280] mb-3 leading-relaxed">{news.ringkasan}</p>
                    <div className="flex items-center gap-2 text-sm text-[#9ca3af]">
                      <i className="ri-calendar-line"></i>
                      <span>{news.tanggal}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 bg-[#f9fafb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2a436c] mb-4">Pertanyaan Umum</h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5e7eb] hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-[#2a436c] text-lg mb-3 flex items-center gap-3">
                  <i className="ri-question-line text-[#4f90c6]"></i>
                  {faq.q}
                </h3>
                <p className="text-[#6b7280] leading-relaxed pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROGRAM & PELATIHAN ===== */}
      <section className="py-16 bg-gradient-to-br from-[#355485] to-[#2a436c] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Program Pelatihan BLK</h2>
          <p className="mb-8 opacity-90 max-w-2xl mx-auto text-lg">
            Tingkatkan keterampilan Anda dengan pelatihan gratis dari Balai Latihan Kerja
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { name: 'Web Development', icon: 'ri-code-s-slash-line', duration: '6 Hari' },
              { name: 'Digital Marketing', icon: 'ri-megaphone-line', duration: '5 Hari' },
              { name: 'Teknisi Elektronik', icon: 'ri-tools-line', duration: '7 Hari' },
            ].map((pel, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/15 transition-all group">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                  <i className={`${pel.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-2">{pel.name}</h3>
                <p className="text-sm opacity-90 mb-4">Durasi: {pel.duration}</p>
                <button className="px-4 py-2 bg-white text-[#355485] rounded-lg hover:bg-gray-100 text-sm font-medium transition-colors">
                  Daftar Sekarang
                </button>
              </div>
            ))}
          </div>

          <a href="/pelatihan" className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
            Lihat semua program pelatihan
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>
      </section>

      {/* ===== CTA DAFTAR AKUN ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-r from-[#f8fafc] to-white p-8 md:p-12 rounded-3xl border border-[#e5e7eb]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2a436c] mb-4">Siap Mendapatkan Pekerjaan Impian?</h2>
            <p className="text-lg text-[#6b7280] mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pencari kerja yang telah menemukan pekerjaan melalui platform kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register/pencaker" className="px-8 py-4 bg-[#355485] hover:bg-[#2a436c] text-white font-semibold rounded-xl transition-all shadow-lg flex items-center justify-center gap-3">
                <i className="ri-user-add-line"></i>
                Daftar Pencari Kerja
              </a>
              <a href="/register/perusahaan" className="px-8 py-4 border-2 border-[#355485] text-[#355485] font-semibold rounded-xl hover:bg-[#f9fafb] transition-all flex items-center justify-center gap-3">
                <i className="ri-building-line"></i>
                Daftar Perusahaan
              </a>
            </div>
            <p className="mt-6 text-sm text-[#6b7280]">
              Sudah punya akun? <a href="/login" className="text-[#355485] hover:underline font-medium">Masuk di sini</a>
            </p>
          </div>
        </div>
      </section>

      {/* ===== KONTAK & LAYANAN PENGADUAN ===== */}
      <section className="py-16 bg-[#f9fafb]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5e7eb]">
              <h3 className="text-xl font-bold text-[#2a436c] mb-4 flex items-center gap-3">
                <i className="ri-customer-service-2-line text-[#4f90c6]"></i>
                Hubungi Kami
              </h3>
              <div className="space-y-4 text-[#6b7280]">
                <div className="flex items-center gap-3">
                  <i className="ri-phone-line text-[#4f90c6]"></i>
                  <span>(022) 12345678</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-mail-line text-[#4f90c6]"></i>
                  <span>disnaker@bandungkota.go.id</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-map-pin-line text-[#4f90c6]"></i>
                  <span>Jl. Merdeka No. 123, Bandung</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-time-line text-[#4f90c6]"></i>
                  <span>Senin - Jumat, 08.00 - 16.00 WIB</span>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                {['facebook', 'instagram', 'youtube'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-[#f3f4f6] hover:bg-[#4f90c6] text-[#6b7280] hover:text-white rounded-lg flex items-center justify-center transition-colors">
                    <i className={`ri-${social}-line`}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e5e7eb]">
              <h3 className="text-xl font-bold text-[#2a436c] mb-4 flex items-center gap-3">
                <i className="ri-customer-service-line text-red-500"></i>
                Layanan Pengaduan
              </h3>
              <p className="text-[#6b7280] mb-6 leading-relaxed">
                Mengalami masalah dalam hubungan kerja? Sampaikan pengaduan Anda secara resmi dan aman.
              </p>
              <a href="/pengaduan" className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors">
                <i className="ri-customer-service-line"></i>
                Ajukan Pengaduan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-[#2a436c] text-white pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <i className="ri-building-line text-white text-lg"></i>
                </div>
                <div>
                  <h4 className="font-bold text-lg">DISNAKER</h4>
                  <p className="text-xs text-gray-300">Kota Bandung</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Dinas Tenaga Kerja Kota Bandung
                <br />
                Jl. Merdeka No. 123, Bandung
                <br />
                Jawa Barat, Indonesia
              </p>
            </div>

            {[
              {
                title: 'Navigasi',
                links: ['Beranda', 'Tentang Kami', 'Layanan', 'Kontak']
              },
              {
                title: 'Layanan',
                links: ['Lowongan Kerja', 'Pelatihan BLK', 'Kartu Kuning (AK1)', 'Pengaduan']
              },
              {
                title: 'Legal',
                links: ['Kebijakan Privasi', 'Syarat & Ketentuan', 'Peta Situs']
              }
            ].map((section, idx) => (
              <div key={idx}>
                <h5 className="font-semibold mb-4 text-white">{section.title}</h5>
                <ul className="space-y-2">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-[#4f90c6]/30 text-center">
            <p className="text-sm text-gray-400">
              &copy; 2025 Dinas Tenaga Kerja Kota Bandung. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}