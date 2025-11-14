import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/dashboard/Sidebar';

export default function KontenWebsite() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMinimized(false);
      } else {
        setIsMinimized(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsMinimized((prev) => !prev);
  const closeMobileSidebar = () => setIsMobileOpen(false);

  // Dummy Data Berita
  const [beritaList, setBeritaList] = useState([
    {
      id: 1,
      judul: 'Pelatihan Digital Skill Gratis untuk Pencari Kerja',
      tanggal: '10 Nov 2025',
      kategori: 'Pelatihan',
      isi: 'Dinas Tenaga Kerja membuka pelatihan gratis bidang web development, UI/UX, dan digital marketing...',
      status: 'Publikasi',
    },
    {
      id: 2,
      judul: 'Job Fair Kota Bandung 2025 Dibuka untuk Umum',
      tanggal: '8 Nov 2025',
      kategori: 'Event',
      isi: 'Akan diselenggarakan Job Fair besar di Gedung Sabilulungan pada 15-17 November 2025...',
      status: 'Publikasi',
    },
    {
      id: 3,
      judul: 'Panduan Permohonan Kartu Kuning Online',
      tanggal: '5 Nov 2025',
      kategori: 'Informasi',
      isi: 'Simak panduan lengkap cara mengajukan AK1 secara online melalui portal Disnaker...',
      status: 'Draft',
    },
  ]);

  // Dummy Data Agenda
  const [agendaList, setAgendaList] = useState([
    {
      id: 1,
      acara: 'Job Fair Kota Bandung',
      tanggal: '15 - 17 Nov 2025',
      waktu: '08.00 - 16.00',
      lokasi: 'Gedung Sabilulungan',
      deskripsi: 'Bursa kerja dengan 50+ perusahaan peserta.',
      peserta: 'Terbuka untuk umum',
      status: 'Aktif',
    },
    {
      id: 2,
      acara: 'Pelatihan Web Development Batch 4',
      tanggal: '20 - 25 Nov 2025',
      waktu: '09.00 - 15.00',
      lokasi: 'BLK Kota Bandung',
      deskripsi: 'Pelatihan intensif 6 hari untuk pemrograman web.',
      peserta: 'Pendaftaran dibuka hingga 18 Nov',
      status: 'Pendaftaran',
    },
  ]);

  // Dummy Data Dokumen
  const [dokumenList, setDokumenList] = useState([
    {
      id: 1,
      nama: 'Formulir Permohonan Kartu Kuning (AK1)',
      tipe: 'PDF',
      ukuran: '125 KB',
      link: '#',
      uploadDate: '10 Nov 2025',
    },
    {
      id: 2,
      nama: 'Surat Rekomendasi Penempatan',
      tipe: 'DOCX',
      ukuran: '45 KB',
      link: '#',
      uploadDate: '8 Nov 2025',
    },
    {
      id: 3,
      nama: 'Laporan Tahunan Disnaker 2024',
      tipe: 'PDF',
      ukuran: '2.3 MB',
      link: '#',
      uploadDate: '5 Jan 2025',
    },
  ]);

  // Dummy Data FAQ
  const [faqList, setFaqList] = useState([
    {
      id: 1,
      pertanyaan: 'Bagaimana cara mendaftar Kartu Kuning?',
      jawaban: 'Pendaftaran dapat dilakukan secara online melalui portal ini atau datang langsung ke kantor Disnaker dengan membawa KTP, Ijazah, dan pas foto 3x4.',
      kategori: 'Administrasi',
      status: 'Publikasi',
    },
    {
      id: 2,
      pertanyaan: 'Apakah pelatihan dikenakan biaya?',
      jawaban: 'Tidak, seluruh pelatihan yang diselenggarakan oleh BLK milik pemerintah bersifat GRATIS bagi masyarakat.',
      kategori: 'Pelatihan',
      status: 'Publikasi',
    },
    {
      id: 3,
      pertanyaan: 'Bagaimana prosedur pengaduan PHK?',
      jawaban: 'Pelapor dapat mengisi formulir pengaduan di menu Pengaduan, melampirkan bukti seperti SK, slip gaji, dan surat PHK. Tim akan melakukan mediasi dalam 3-5 hari kerja.',
      kategori: 'Hukum',
      status: 'Draft',
    },
  ]);

  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [activeTab, setActiveTab] = useState('berita');

  // Fungsi edit
  const handleEdit = (section, item) => {
    setEditId(`${section}-${item.id}`);
    setEditForm({ ...item });
  };

  // Fungsi simpan
  const handleSave = (section, id) => {
    if (section === 'berita') {
      setBeritaList(
        beritaList.map((item) =>
          item.id === id ? { ...editForm } : item
        )
      );
    } else if (section === 'agenda') {
      setAgendaList(
        agendaList.map((item) =>
          item.id === id ? { ...editForm } : item
        )
      );
    } else if (section === 'faq') {
      setFaqList(
        faqList.map((item) =>
          item.id === id ? { ...editForm } : item
        )
      );
    }
    setEditId(null);
    setEditForm({});
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Publikasi':
      case 'Aktif':
        return 'bg-green-100 text-green-800';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pendaftaran':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getKategoriColor = (kategori) => {
    switch (kategori) {
      case 'Pelatihan':
        return 'bg-blue-100 text-blue-800';
      case 'Event':
        return 'bg-purple-100 text-purple-800';
      case 'Informasi':
        return 'bg-green-100 text-green-800';
      case 'Administrasi':
        return 'bg-orange-100 text-orange-800';
      case 'Hukum':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Sidebar
        isMinimized={isMinimized}
        toggleSidebar={toggleSidebar}
        isMobileOpen={isMobileOpen}
        closeMobile={closeMobileSidebar}
      />

      <main
        className={`transition-all duration-300 min-h-screen bg-[#f9fafb] pt-20 pb-10 ${isMinimized ? 'lg:ml-16' : 'lg:ml-64'
          }`}
      >
        <div className="px-4 sm:px-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-[#2a436c]">Manajemen Konten Website</h1>
            <p className="text-sm text-[#6b7280] mt-1">
              Kelola berita, agenda, dokumen publik, dan FAQ untuk website resmi Disnaker
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              title="Total Berita"
              value={beritaList.length}
              change="+3"
              color="#4f90c6"
              icon="ri-article-line"
            />
            <StatCard
              title="Agenda Aktif"
              value={agendaList.filter(a => a.status === 'Aktif' || a.status === 'Pendaftaran').length}
              change="2 berjalan"
              color="#355485"
              icon="ri-calendar-line"
            />
            <StatCard
              title="Dokumen Publik"
              value={dokumenList.length}
              change="+1"
              color="#90b6d5"
              icon="ri-file-text-line"
            />
            <StatCard
              title="FAQ Terbit"
              value={faqList.filter(f => f.status === 'Publikasi').length}
              change="Aktif"
              color="#2a436c"
              icon="ri-question-line"
            />
          </div>

          {/* Tab Navigation */}
          <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] mb-6 overflow-hidden">
            <div className="flex overflow-x-auto">
              {[
                { id: 'berita', label: '📰 Berita & Artikel', icon: 'ri-article-line' },
                { id: 'agenda', label: '📅 Agenda & Event', icon: 'ri-calendar-line' },
                { id: 'dokumen', label: '📎 Dokumen Publik', icon: 'ri-file-text-line' },
                { id: 'faq', label: '❓ FAQ', icon: 'ri-question-line' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab.id
                      ? 'text-[#355485] border-b-2 border-[#355485]'
                      : 'text-[#6b7280] hover:text-[#2a436c]'
                    }`}
                >
                  <i className={tab.icon}></i>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Berita & Artikel */}
          {activeTab === 'berita' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-[#2a436c]">Berita & Artikel</h2>
                <button className="px-4 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] text-sm transition flex items-center gap-2">
                  <i className="ri-add-line"></i>
                  Tambah Baru
                </button>
              </div>

              {beritaList.map((berita) => (
                <div key={berita.id} className="bg-white rounded-xl shadow-md border border-[#e5e7eb] overflow-hidden">
                  {editId === `berita-${berita.id}` ? (
                    <div className="p-6 space-y-4">
                      <input
                        type="text"
                        value={editForm.judul}
                        onChange={(e) => setEditForm({ ...editForm, judul: e.target.value })}
                        className="w-full px-3 py-2 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                        placeholder="Judul berita"
                      />
                      <textarea
                        value={editForm.isi}
                        onChange={(e) => setEditForm({ ...editForm, isi: e.target.value })}
                        rows="3"
                        className="w-full px-3 py-2 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                        placeholder="Isi berita"
                      />
                      <div className="flex flex-col sm:flex-row gap-3">
                        <select
                          value={editForm.status}
                          onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                          className="px-3 py-2 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                        >
                          <option value="Draft">Draft</option>
                          <option value="Publikasi">Publikasi</option>
                        </select>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleSave('berita', berita.id)}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                          >
                            <i className="ri-check-line"></i>
                            Simpan
                          </button>
                          <button
                            onClick={() => setEditId(null)}
                            className="px-4 py-2 border border-[#e5e7eb] text-gray-700 rounded-lg hover:bg-gray-50 transition"
                          >
                            Batal
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-[#2a436c] text-lg">{berita.judul}</h3>
                          <div className="flex items-center gap-3 mt-2 flex-wrap">
                            <span className="text-sm text-[#6b7280]">{berita.tanggal}</span>
                            <span className={`px-2 py-1 text-xs rounded-full ${getKategoriColor(berita.kategori)}`}>
                              {berita.kategori}
                            </span>
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(berita.status)}`}>
                              {berita.status}
                            </span>
                          </div>
                          <p className="text-sm text-[#6b7280] mt-3 line-clamp-2">{berita.isi}</p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit('berita', berita)}
                            className="px-3 py-2 text-sm bg-[#4f90c6] text-white rounded-lg hover:bg-[#355485] transition flex items-center gap-1"
                          >
                            <i className="ri-edit-line"></i>
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Agenda & Event */}
          {activeTab === 'agenda' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-[#2a436c]">Agenda & Event</h2>
                <button className="px-4 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] text-sm transition flex items-center gap-2">
                  <i className="ri-add-line"></i>
                  Tambah Agenda
                </button>
              </div>

              {agendaList.map((ag) => (
                <div key={ag.id} className="bg-white rounded-xl shadow-md border border-[#e5e7eb] overflow-hidden">
                  {editId === `agenda-${ag.id}` ? (
                    <div className="p-6 space-y-4">
                      <input
                        type="text"
                        value={editForm.acara}
                        onChange={(e) => setEditForm({ ...editForm, acara: e.target.value })}
                        className="w-full px-3 py-2 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                        placeholder="Nama acara"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          value={editForm.tanggal}
                          onChange={(e) => setEditForm({ ...editForm, tanggal: e.target.value })}
                          className="px-3 py-2 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                          placeholder="Tanggal"
                        />
                        <input
                          type="text"
                          value={editForm.lokasi}
                          onChange={(e) => setEditForm({ ...editForm, lokasi: e.target.value })}
                          className="px-3 py-2 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                          placeholder="Lokasi"
                        />
                      </div>
                      <textarea
                        value={editForm.deskripsi}
                        onChange={(e) => setEditForm({ ...editForm, deskripsi: e.target.value })}
                        rows="2"
                        className="w-full px-3 py-2 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                        placeholder="Deskripsi acara"
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleSave('agenda', ag.id)}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                        >
                          <i className="ri-check-line"></i>
                          Simpan
                        </button>
                        <button
                          onClick={() => setEditId(null)}
                          className="px-4 py-2 border border-[#e5e7eb] text-gray-700 rounded-lg hover:bg-gray-50 transition"
                        >
                          Batal
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-[#2a436c] text-lg">{ag.acara}</h3>
                          <div className="flex items-center gap-3 mt-2 flex-wrap">
                            <span className="text-sm text-[#6b7280]">
                              <i className="ri-calendar-line mr-1"></i>
                              {ag.tanggal}
                            </span>
                            <span className="text-sm text-[#6b7280]">
                              <i className="ri-time-line mr-1"></i>
                              {ag.waktu}
                            </span>
                            <span className="text-sm text-[#6b7280]">
                              <i className="ri-map-pin-line mr-1"></i>
                              {ag.lokasi}
                            </span>
                          </div>
                          <p className="text-sm text-[#6b7280] mt-3">{ag.deskripsi}</p>
                          <p className="text-xs text-[#9ca3af] mt-2">{ag.peserta}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(ag.status)}`}>
                            {ag.status}
                          </span>
                          <button
                            onClick={() => handleEdit('agenda', ag)}
                            className="px-3 py-2 text-sm bg-[#4f90c6] text-white rounded-lg hover:bg-[#355485] transition flex items-center gap-1"
                          >
                            <i className="ri-edit-line"></i>
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Dokumen Publik */}
          {activeTab === 'dokumen' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#2a436c]">Dokumen Publik</h2>
                <button className="px-4 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] text-sm transition flex items-center gap-2">
                  <i className="ri-upload-line"></i>
                  Unggah Dokumen
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-[#cbdde9] text-[#2a436c]">
                      <tr>
                        <th className="py-3 px-4 font-medium text-left">Nama Dokumen</th>
                        <th className="py-3 px-4 font-medium text-left">Tipe</th>
                        <th className="py-3 px-4 font-medium text-left">Ukuran</th>
                        <th className="py-3 px-4 font-medium text-left">Tanggal</th>
                        <th className="py-3 px-4 font-medium text-left">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e5e7eb]">
                      {dokumenList.map((doc) => (
                        <tr key={doc.id} className="hover:bg-[#f9fafb]">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <i className={`ri-file-${doc.tipe.toLowerCase()}-line text-lg text-[#4f90c6]`}></i>
                              <span className="font-medium text-[#2a436c]">{doc.nama}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                              {doc.tipe}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-[#6b7280]">{doc.ukuran}</td>
                          <td className="py-3 px-4 text-[#6b7280]">{doc.uploadDate}</td>
                          <td className="py-3 px-4">
                            <div className="flex gap-2">
                              <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
                                <i className="ri-download-line"></i>
                                Unduh
                              </button>
                              <button className="text-red-600 hover:text-red-800 text-sm flex items-center gap-1">
                                <i className="ri-delete-bin-line"></i>
                                Hapus
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* FAQ */}
          {activeTab === 'faq' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-[#2a436c]">FAQ (Pertanyaan Umum)</h2>
                <button className="px-4 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] text-sm transition flex items-center gap-2">
                  <i className="ri-add-line"></i>
                  Tambah FAQ
                </button>
              </div>

              {faqList.map((f) => (
                <div key={f.id} className="bg-white rounded-xl shadow-md border border-[#e5e7eb] overflow-hidden">
                  {editId === `faq-${f.id}` ? (
                    <div className="p-6 space-y-4">
                      <input
                        type="text"
                        value={editForm.pertanyaan}
                        onChange={(e) => setEditForm({ ...editForm, pertanyaan: e.target.value })}
                        className="w-full px-3 py-2 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                        placeholder="Pertanyaan"
                      />
                      <textarea
                        value={editForm.jawaban}
                        onChange={(e) => setEditForm({ ...editForm, jawaban: e.target.value })}
                        rows="3"
                        className="w-full px-3 py-2 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                        placeholder="Jawaban"
                      />
                      <div className="flex flex-col sm:flex-row gap-3">
                        <select
                          value={editForm.status}
                          onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                          className="px-3 py-2 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                        >
                          <option value="Draft">Draft</option>
                          <option value="Publikasi">Publikasi</option>
                        </select>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleSave('faq', f.id)}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                          >
                            <i className="ri-check-line"></i>
                            Simpan
                          </button>
                          <button
                            onClick={() => setEditId(null)}
                            className="px-4 py-2 border border-[#e5e7eb] text-gray-700 rounded-lg hover:bg-gray-50 transition"
                          >
                            Batal
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#2a436c] text-lg">{f.pertanyaan}</h3>
                          <p className="text-sm text-[#6b7280] mt-3">{f.jawaban}</p>
                          <div className="flex items-center gap-3 mt-3">
                            <span className={`px-2 py-1 text-xs rounded-full ${getKategoriColor(f.kategori)}`}>
                              {f.kategori}
                            </span>
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(f.status)}`}>
                              {f.status}
                            </span>
                          </div>
                        </div>
                        <button
                          onClick={() => handleEdit('faq', f)}
                          className="px-3 py-2 text-sm bg-[#4f90c6] text-white rounded-lg hover:bg-[#355485] transition flex items-center gap-1"
                        >
                          <i className="ri-edit-line"></i>
                          Edit
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

// StatCard Component
function StatCard({ title, value, change, color, icon }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-[#e5e7eb] hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs sm:text-sm text-[#6b7280]">{title}</p>
          <p className="text-xl sm:text-2xl font-bold text-[#2a436c] mt-1">{value}</p>
          <p className="text-xs text-[#9ca3af] mt-1">{change}</p>
        </div>
        <div
          className="p-2 sm:p-3 w-10 h-10 flex items-center justify-center rounded-full text-white"
          style={{ backgroundColor: color }}
        >
          <i className={`${icon} text-lg sm:text-xl`}></i>
        </div>
      </div>
    </div>
  );
}