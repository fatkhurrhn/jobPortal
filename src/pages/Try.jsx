import React, { useState } from 'react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const latestJobs = [
    {
      id: 1,
      posisi: 'Frontend Developer',
      perusahaan: 'PT Solusi Digital',
      logo: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100&h=100&fit=crop',
      lokasi: 'Bandung',
      tipe: 'Full-time',
      gaji: 'Rp 8-12 Juta',
      tanggal: '15 Nov 2025',
    },
    {
      id: 2,
      posisi: 'Operator Produksi',
      perusahaan: 'CV Makmur Abadi',
      logo: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=100&h=100&fit=crop',
      lokasi: 'Bekasi',
      tipe: 'Shift',
      gaji: 'Rp 4-6 Juta',
      tanggal: '14 Nov 2025',
    },
    {
      id: 3,
      posisi: 'Digital Marketing',
      perusahaan: 'Startup Creative',
      logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=100&h=100&fit=crop',
      lokasi: 'Jakarta',
      tipe: 'Remote',
      gaji: 'Rp 6-9 Juta',
      tanggal: '13 Nov 2025',
    },
  ];

  const newsList = [
    {
      id: 1,
      judul: 'Pelatihan Gratis Bidang Digital Dimulai Bulan Ini',
      tanggal: '10 Nov 2025',
      ringkasan: 'Disnaker membuka pendaftaran pelatihan web development, UI/UX, dan digital marketing untuk 500 peserta.',
      gambar: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
    },
    {
      id: 2,
      judul: 'Job Fair Kota Bandung Hadirkan 50+ Perusahaan',
      tanggal: '8 Nov 2025',
      ringkasan: 'Event bursa kerja akan digelar pada 15-17 November di Gedung Sabilulungan dengan 2,000 lowongan.',
      gambar: 'https://images.unsplash.com/photo-1551833726-c70e7f7f796c?w=400&h=250&fit=crop',
    },
  ];

  const stats = {
    lowongan: 912,
    pencaker: 14230,
    perusahaan: 345,
    pelatihan: 28,
  };

  const faqs = [
    {
      id: 1,
      q: 'Apakah semua lowongan diverifikasi?',
      a: 'Ya, semua lowongan diverifikasi oleh tim Disnaker untuk memastikan keamanan dan keaslian informasi. Perusahaan harus melampirkan dokumen legal sebelum lowongan dipublikasikan.'
    },
    {
      id: 2,
      q: 'Bagaimana cara mendaftar sebagai pencari kerja?',
      a: 'Anda bisa mendaftar online melalui menu "Daftar Pencaker" dengan mengisi formulir online atau datang langsung ke kantor Disnaker terdekat dengan membawa KTP, ijazah, dan pas foto 3x4.'
    },
    {
      id: 3,
      q: 'Apakah layanan ini gratis?',
      a: 'Ya, seluruh layanan penempatan tenaga kerja, pelatihan BLK, dan pendaftaran pencari kerja bersifat GRATIS tanpa dipungut biaya apapun.'
    },
    {
      id: 4,
      q: 'Berapa lama proses verifikasi Kartu Kuning?',
      a: 'Proses verifikasi Kartu Kuning (AK1) membutuhkan waktu 3-5 hari kerja setelah dokumen lengkap diterima. Status dapat dipantau melalui akun online Anda.'
    }
  ];

  const successStories = [
    {
      id: 1,
      nama: 'Rina Sari',
      pekerjaan: 'UI/UX Designer',
      perusahaan: 'Tech Startup Indonesia',
      testimoni: 'Melalui Disnaker, saya mendapatkan pelatihan gratis dan langsung diterima kerja di perusahaan impian.',
      foto: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
    },
    {
      id: 2,
      nama: 'Budi Santoso',
      pekerjaan: 'Teknisi Mesin',
      perusahaan: 'PT Manufaktur Jaya',
      testimoni: 'Dari pengangguran menjadi teknisi berkat pelatihan BLK. Terima kasih Disnaker!',
      foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    },
  ];

  const partners = [
    { name: 'Google', logo: 'https://via.placeholder.com/120x60/355485/FFFFFF?text=GOOGLE' },
    { name: 'Microsoft', logo: 'https://via.placeholder.com/120x60/4f90c6/FFFFFF?text=MS' },
    { name: 'Telkom', logo: 'https://via.placeholder.com/120x60/90b6d5/FFFFFF?text=TELKOM' },
    { name: 'Bank BRI', logo: 'https://via.placeholder.com/120x60/355485/FFFFFF?text=BRI' },
    { name: 'PT Astra', logo: 'https://via.placeholder.com/120x60/4f90c6/FFFFFF?text=ASTRA' },
  ];

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#355485] to-[#4f90c6] rounded-lg flex items-center justify-center">
                  <i className="ri-building-line text-white text-lg"></i>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#2a436c]">DISNAKER</h1>
                  <p className="text-xs text-gray-500 -mt-1">Kota Bandung</p>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-[#2a436c] font-medium border-b-2 border-[#355485] pb-1">Beranda</a>
                <a href="#" className="text-gray-600 hover:text-[#2a436c] transition-colors">Lowongan</a>
                <a href="#" className="text-gray-600 hover:text-[#2a436c] transition-colors">Pelatihan</a>
                <a href="#" className="text-gray-600 hover:text-[#2a436c] transition-colors">Informasi</a>
                <a href="#" className="text-gray-600 hover:text-[#2a436c] transition-colors">Pengaduan</a>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a href="/login" className="text-[#2a436c] hover:text-[#355485] font-medium transition-colors">Masuk</a>
              <a href="/register" className="bg-gradient-to-r from-[#355485] to-[#4f90c6] hover:from-[#2a436c] hover:to-[#355485] text-white px-6 py-2 rounded-lg transition-all shadow-lg">Daftar</a>
            </div>

            <div className="md:hidden">
              <button className="text-[#2a436c] p-2">
                <i className="ri-menu-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative bg-gradient-to-r from-[#355485] to-[#4f90c6] text-white py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Wujudkan Impian
            <span className="block text-2xl md:text-3xl text-blue-100 font-light mt-3">Karier Anda Dimulai Di Sini</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Temukan lowongan kerja terbaik, tingkatkan skill dengan pelatihan gratis, dan raih masa depan cerah
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/jobs" className="px-8 py-4 bg-white text-[#355485] font-semibold rounded-xl hover:bg-gray-50 transition-all shadow-2xl flex items-center justify-center gap-3 transform hover:-translate-y-1">
              <i className="ri-search-line"></i>
              Cari Lowongan
            </a>
            <a href="/register/pencaker" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              <i className="ri-user-add-line"></i>
              Daftar Pencaker
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 -mt-8 relative z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"></i>
                  <input
                    type="text"
                    placeholder="Posisi, perusahaan, atau kata kunci..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all text-lg"
                  />
                </div>
              </div>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all text-lg"
              >
                <option value="">Semua Lokasi</option>
                <option value="Bandung">Bandung</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Bekasi">Bekasi</option>
              </select>
              <button className="px-6 py-4 bg-gradient-to-r from-[#355485] to-[#4f90c6] hover:from-[#2a436c] hover:to-[#355485] text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-lg shadow-lg">
                <i className="ri-search-line"></i>
                Cari
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl font-bold text-[#2a436c] mb-4">Mengapa Memilih Disnaker?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Kami memberikan solusi lengkap untuk kebutuhan karier Anda</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-3xl text-[#355485]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#2a436c] mb-3">Lowongan Terverifikasi</h3>
              <p className="text-gray-600">Semua lowongan telah diverifikasi keasliannya oleh tim Disnaker</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-book-open-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-[#2a436c] mb-3">Pelatihan Gratis</h3>
              <p className="text-gray-600">Ikuti berbagai pelatihan skill untuk meningkatkan kompetensi Anda</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-2-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-[#2a436c] mb-3">Pendampingan Penuh</h3>
              <p className="text-gray-600">Tim profesional siap membantu dari pendaftaran hingga penempatan kerja</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-[#2a436c]">Lowongan Terbaru</h2>
              <p className="text-gray-600 mt-2">Temukan pekerjaan yang sesuai dengan passion dan keahlian Anda</p>
            </div>
            <a href="/jobs" className="flex items-center gap-2 text-[#355485] hover:text-[#2a436c] font-semibold transition-colors group">
              Lihat Semua Lowongan
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img src={job.logo} alt={job.perusahaan} className="w-14 h-14 rounded-xl object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-[#2a436c] text-lg hover:text-[#355485] transition-colors truncate">{job.posisi}</h3>
                      <p className="text-gray-600 truncate">{job.perusahaan}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <i className="ri-map-pin-line text-[#4f90c6]"></i>
                      <span>{job.lokasi}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <i className="ri-time-line text-[#4f90c6]"></i>
                      <span>{job.tipe}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <i className="ri-money-dollar-circle-line text-[#4f90c6]"></i>
                      <span className="font-semibold text-green-600">{job.gaji}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="text-sm text-gray-500">{job.tanggal}</span>
                    <button className="px-4 py-2 bg-gradient-to-r from-[#355485] to-[#4f90c6] hover:from-[#2a436c] hover:to-[#355485] text-white text-sm rounded-lg transition-all flex items-center gap-2 shadow-lg">
                      Lamar Sekarang
                      <i className="ri-send-plane-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-[#2a436c] mb-12 text-center">Berita & Informasi Terkini</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsList.map((news) => (
              <div key={news.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 overflow-hidden transition-all duration-300 transform hover:-translate-y-1">
                <img src={news.gambar} alt={news.judul} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-bold text-[#2a436c] text-xl mb-3 hover:text-[#355485] transition-colors">
                    {news.judul}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{news.ringkasan}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <i className="ri-calendar-line"></i>
                      <span>{news.tanggal}</span>
                    </div>
                    <button className="text-[#355485] hover:text-[#2a436c] font-medium flex items-center gap-1 transition-colors">
                      Baca Selengkapnya
                      <i className="ri-arrow-right-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2a436c] mb-4">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-gray-600 text-lg">Temukan jawaban untuk pertanyaan umum seputar layanan Disnaker</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-[#2a436c] text-lg flex items-center gap-3">
                    <i className="ri-question-line text-[#4f90c6]"></i>
                    {faq.q}
                  </h3>
                  <i className={`ri-arrow-down-s-line text-[#4f90c6] text-xl transition-transform duration-300 ${activeFaq === faq.id ? 'rotate-180' : ''
                    }`}></i>
                </button>

                <div className={`px-6 transition-all duration-300 ${activeFaq === faq.id ? 'pb-4 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                  <p className="text-gray-600 leading-relaxed pl-9">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#355485] to-[#2a436c] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Kisah Sukses</h2>
          <p className="text-blue-100 mb-12 text-lg max-w-2xl mx-auto">Dengar langsung dari mereka yang telah berhasil mendapatkan pekerjaan melalui Disnaker</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-left">
                <div className="flex items-center gap-4 mb-4">
                  <img src={story.foto} alt={story.nama} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-lg">{story.nama}</h4>
                    <p className="text-blue-200">{story.pekerjaan} di {story.perusahaan}</p>
                  </div>
                </div>
                <p className="text-blue-100 italic">"{story.testimoni}"</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Partner Perusahaan Terpercaya</h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {partners.map((partner, index) => (
                <img key={index} src={partner.logo} alt={partner.name} className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-r from-[#f8fafc] to-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl">
            <h2 className="text-3xl font-bold text-[#2a436c] mb-4">Siap Memulai Perjalanan Karier Anda?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan pencari kerja yang telah menemukan pekerjaan impian melalui platform kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/register/pencaker" className="px-8 py-4 bg-gradient-to-r from-[#355485] to-[#4f90c6] hover:from-[#2a436c] hover:to-[#355485] text-white font-semibold rounded-xl transition-all shadow-lg flex items-center justify-center gap-3 transform hover:-translate-y-1">
                <i className="ri-user-add-line"></i>
                Daftar Pencari Kerja
              </a>
              <a href="/register/perusahaan" className="px-8 py-4 border-2 border-[#355485] text-[#355485] font-semibold rounded-xl hover:bg-[#f9fafb] transition-all flex items-center justify-center gap-3">
                <i className="ri-building-line"></i>
                Daftar Perusahaan
              </a>
            </div>
            <p className="mt-6 text-gray-600">
              Sudah punya akun? <a href="/login" className="text-[#355485] hover:underline font-semibold">Masuk di sini</a>
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#2a436c] text-white pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="ri-building-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-xl">DISNAKER</h4>
                  <p className="text-sm text-gray-300">Kota Bandung</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Dinas Tenaga Kerja Kota Bandung - Melayani dengan hati untuk masa depan yang lebih baik
              </p>
              <div className="flex gap-4">
                {['facebook', 'instagram', 'youtube', 'twitter'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-white/10 hover:bg-[#4f90c6] text-white rounded-lg flex items-center justify-center transition-colors">
                    <i className={`ri-${social}-fill`}></i>
                  </a>
                ))}
              </div>
            </div>

            {[
              {
                title: 'Layanan',
                links: ['Lowongan Kerja', 'Pelatihan BLK', 'Kartu Kuning', 'Pengaduan', 'Konsultasi']
              },
              {
                title: 'Perusahaan',
                links: ['Daftar Perusahaan', 'Pasang Lowongan', 'Verifikasi', 'Partnership', 'Testimoni']
              },
              {
                title: 'Bantuan',
                links: ['Pusat Bantuan', 'Hubungi Kami', 'FAQ', 'Syarat Layanan', 'Kebijakan Privasi']
              }
            ].map((section, idx) => (
              <div key={idx}>
                <h5 className="font-bold text-lg mb-6 text-white">{section.title}</h5>
                <ul className="space-y-3">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                        <i className="ri-arrow-right-s-line text-sm"></i>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/20 text-center">
            <p className="text-gray-400">
              &copy; 2025 Dinas Tenaga Kerja Kota Bandung. All rights reserved. |
              <span className="mx-2">Jl. Merdeka No. 123, Bandung</span> |
              <span className="mx-2">(022) 1234-5678</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}