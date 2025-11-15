import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/dashboard/Sidebar';

export default function Pengaduan() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); 

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

  const [pengaduanList, setPengaduanList] = useState([
    {
      id: 1,
      tanggal: '10 Nov 2025',
      pelapor: 'Budi Santoso',
      nik: '3204121234567890',
      jenis: 'Upah Tidak Dibayar',
      perusahaan: 'CV Jaya Makmur',
      lokasi: 'Bandung',
      deskripsi: 'Sudah bekerja 3 bulan tanpa upah. Majikan mengabaikan permintaan pembayaran.',
      status: 'Proses',
      tindakLanjut: 'Sedang dilakukan pemanggilan terhadap pihak perusahaan.',
      bukti: true,
    },
    {
      id: 2,
      tanggal: '12 Nov 2025',
      pelapor: 'Ani Wijaya',
      nik: '3204130987654321',
      jenis: 'PHK Tanpa Pesangon',
      perusahaan: 'PT Global Teknik',
      lokasi: 'Jakarta',
      deskripsi: 'Di-PHK sepihak tanpa alasan jelas dan tidak diberi pesangon.',
      status: 'Pending',
      tindakLanjut: '',
      bukti: true,
    },
    {
      id: 3,
      tanggal: '8 Nov 2025',
      pelapor: 'Dedi Kusuma',
      nik: '3204141122334455',
      jenis: 'Lingkungan Kerja Tidak Aman',
      perusahaan: 'UD Bangun Jaya',
      lokasi: 'Bekasi',
      deskripsi: 'Tidak ada APD dan area kerja berisiko tinggi tanpa pengaman.',
      status: 'Selesai',
      tindakLanjut: 'Tim telah melakukan inspeksi. Perusahaan diberi surat peringatan dan wajib perbaiki fasilitas.',
      bukti: false,
    },
  ]);

  const [editNote, setEditNote] = useState({ id: null, value: '' });

  const filteredPengaduan = pengaduanList.filter(pengaduan => {
    const matchesSearch = pengaduan.pelapor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pengaduan.jenis.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pengaduan.perusahaan.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || pengaduan.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleUpdateStatus = (id, newStatus) => {
    setPengaduanList(
      pengaduanList.map((p) =>
        p.id === id ? { ...p, status: newStatus } : p
      )
    );
  };

  const handleEditNote = (id) => {
    const item = pengaduanList.find((p) => p.id === id);
    setEditNote({ id, value: item.tindakLanjut });
  };

  const handleSaveNote = (id) => {
    setPengaduanList(
      pengaduanList.map((p) =>
        p.id === id ? { ...p, tindakLanjut: editNote.value } : p
      )
    );
    setEditNote({ id: null, value: '' });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Selesai':
        return 'bg-green-100 text-green-800';
      case 'Proses':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getJenisColor = (jenis) => {
    switch (jenis) {
      case 'Upah Tidak Dibayar':
        return 'bg-red-100 text-red-800';
      case 'PHK Tanpa Pesangon':
        return 'bg-orange-100 text-orange-800';
      case 'Lingkungan Kerja Tidak Aman':
        return 'bg-purple-100 text-purple-800';
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
          <div className="mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-[#2a436c]">Layanan Pengaduan Ketenagakerjaan</h1>
            <p className="text-sm text-[#6b7280] mt-1">
              Kelola laporan pengaduan dari pekerja, pantau status, dan catat tindak lanjut
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard
              title="Total Pengaduan"
              value={pengaduanList.length}
              change="+5"
              color="#4f90c6"
              icon="ri-customer-service-line"
            />
            <StatCard
              title="Menunggu"
              value={pengaduanList.filter(p => p.status === 'Pending').length}
              change="Perlu tindakan"
              color="#355485"
              icon="ri-time-line"
            />
            <StatCard
              title="Diproses"
              value={pengaduanList.filter(p => p.status === 'Proses').length}
              change="Sedang ditangani"
              color="#90b6d5"
              icon="ri-refresh-line"
            />
            <StatCard
              title="Selesai"
              value={pengaduanList.filter(p => p.status === 'Selesai').length}
              change="+2"
              color="#2a436c"
              icon="ri-checkbox-circle-line"
            />
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md border border-[#e5e7eb] mb-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="Cari pelapor, jenis, atau perusahaan..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                >
                  <option value="all">Semua Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Proses">Proses</option>
                  <option value="Selesai">Selesai</option>
                </select>

                <div className="flex border border-[#e5e7eb] rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-[#355485] text-white' : 'bg-white text-gray-600'}`}
                  >
                    <i className="ri-grid-line"></i>
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`px-3 py-2 ${viewMode === 'table' ? 'bg-[#355485] text-white' : 'bg-white text-gray-600'}`}
                  >
                    <i className="ri-list-check"></i>
                  </button>
                </div>

                <button className="px-4 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] text-sm transition flex items-center gap-2">
                  <i className="ri-add-line"></i>
                  Laporkan
                </button>
              </div>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPengaduan.map((p) => (
                <div key={p.id} className="bg-white rounded-xl shadow-md border border-[#e5e7eb] overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-4 border-b border-[#e5e7eb] bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9]">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-[#2a436c] text-sm leading-tight truncate">#{p.id} - {p.jenis}</h3>
                        <p className="text-xs text-[#6b7280] truncate">{p.pelapor} • {p.tanggal}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${getStatusColor(p.status)}`}>
                        {p.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap mt-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${getJenisColor(p.jenis)}`}>
                        {p.jenis}
                      </span>
                      {p.bukti && (
                        <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded flex items-center gap-1">
                          <i className="ri-attachment-line"></i>
                          Bukti
                        </span>
                      )}
                    </div>
                  </div>

                   <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#6b7280]">Perusahaan</span>
                      <span className="font-medium text-right">{p.perusahaan}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#6b7280]">Lokasi</span>
                      <span className="font-medium">{p.lokasi}</span>
                    </div>
                    <div className="text-sm">
                      <p className="text-[#6b7280] mb-1">Deskripsi:</p>
                      <p className="text-[#2a436c] line-clamp-2 italic">{p.deskripsi}</p>
                    </div>
                  </div>

                  <div className="p-4 border-t border-[#e5e7eb] bg-[#f9fafb]">
                    <p className="text-xs text-[#6b7280] mb-1">Tindak Lanjut:</p>
                    <p className="text-sm text-[#2a436c] line-clamp-2">
                      {p.tindakLanjut || 'Belum ada catatan tindak lanjut.'}
                    </p>
                  </div>

                  <div className="p-4 border-t border-[#e5e7eb]">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditNote(p.id)}
                        className="flex-1 px-3 py-2 text-sm bg-[#4f90c6] text-white rounded-lg hover:bg-[#355485] transition flex items-center justify-center gap-1"
                      >
                        <i className="ri-edit-line"></i>
                        Edit Catatan
                      </button>
                      <select
                        value={p.status}
                        onChange={(e) => handleUpdateStatus(p.id, e.target.value)}
                        className="px-3 py-2 text-sm border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Proses">Proses</option>
                        <option value="Selesai">Selesai</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#cbdde9] text-[#2a436c]">
                    <tr>
                      <th className="py-3 px-4 text-left">ID</th>
                      <th className="py-3 px-4 text-left">Pelapor</th>
                      <th className="py-3 px-4 text-left">Jenis</th>
                      <th className="py-3 px-4 text-left">Perusahaan</th>
                      <th className="py-3 px-4 text-left">Status</th>
                      <th className="py-3 px-4 text-left">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPengaduan.map((p) => (
                      <tr key={p.id} className="border-b border-[#e5e7eb] hover:bg-[#f9fafb]">
                        <td className="py-3 px-4">
                          <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">#{p.id}</span>
                        </td>
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-medium text-[#2a436c]">{p.pelapor}</p>
                            <p className="text-xs text-[#6b7280]">{p.tanggal}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${getJenisColor(p.jenis)}`}>
                            {p.jenis}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-[#6b7280]">{p.perusahaan}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(p.status)}`}>
                            {p.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEditNote(p.id)}
                              className="px-3 py-1 text-xs bg-[#4f90c6] text-white rounded hover:bg-[#355485] transition"
                            >
                              Edit
                            </button>
                            <select
                              value={p.status}
                              onChange={(e) => handleUpdateStatus(p.id, e.target.value)}
                              className="px-2 py-1 text-xs border border-[#e5e7eb] rounded focus:ring-1 focus:ring-[#4f90c6]"
                            >
                              <option value="Pending">Pending</option>
                              <option value="Proses">Proses</option>
                              <option value="Selesai">Selesai</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {editNote.id && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-[#2a436c]">Edit Catatan Tindak Lanjut</h3>
                  <button
                    onClick={() => setEditNote({ id: null, value: '' })}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <i className="ri-close-line text-lg"></i>
                  </button>
                </div>
                <textarea
                  value={editNote.value}
                  onChange={(e) => setEditNote({ ...editNote, value: e.target.value })}
                  rows="4"
                  className="w-full px-3 py-2 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent mb-4"
                  placeholder="Catat tindakan yang telah dilakukan..."
                />
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setEditNote({ id: null, value: '' })}
                    className="px-4 py-2 border border-[#e5e7eb] text-gray-700 rounded-lg hover:bg-gray-50 transition"
                  >
                    Batal
                  </button>
                  <button
                    onClick={() => handleSaveNote(editNote.id)}
                    className="px-4 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          )}

          {filteredPengaduan.length === 0 && (
            <div className="text-center py-8 bg-white rounded-xl shadow-md border border-[#e5e7eb]">
              <i className="ri-customer-service-line text-4xl text-gray-300 mb-3"></i>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tidak ada pengaduan</h3>
              <p className="text-gray-600 mb-4">Coba ubah kata kunci pencarian atau filter</p>
              <button
                onClick={() => { setSearchTerm(''); setStatusFilter('all'); }}
                className="px-4 py-2 bg-[#355485] text-white rounded-lg hover:bg-[#2a436c] transition"
              >
                Reset Pencarian
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

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