import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/dashboard/Sidebar';

export default function Profil() {
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

    // Data user dummy
    const [user, setUser] = useState({
        foto: 'https://picsum.photos/200',
        nama: 'Ahmad Fauzi',
        email: 'fauzi@disnaker.go.id',
        telepon: '081234567890',
        jabatan: 'Superadmin',
        unit: 'Pimpinan',
        username: 'fauzi_admin',
        status: 'Aktif',
        terakhirLogin: '15 Nov 2025, 10:30 WIB',
        tema: 'light',
        notifikasi: true,
    });

    const [editMode, setEditMode] = useState(false);
    const [passwordForm, setPasswordForm] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [activityLog] = useState([
        { id: 1, aksi: 'Login', waktu: '15 Nov 2025, 10:30', detail: 'Login dari browser Chrome' },
        { id: 2, aksi: 'Edit Lowongan', waktu: '15 Nov 2025, 09:15', detail: 'Update lowongan "Frontend Developer"' },
        { id: 3, aksi: 'Tambah Pencaker', waktu: '14 Nov 2025, 16:20', detail: 'Daftarkan pencari kerja baru' },
        { id: 4, aksi: 'Export Laporan', waktu: '14 Nov 2025, 14:05', detail: 'Ekspor data penempatan (Excel)' },
    ]);

    const [form, setForm] = useState({ ...user });

    // Toggle edit mode
    const toggleEdit = () => {
        if (editMode) {
            // Simpan perubahan
            setUser({ ...form });
            alert('Profil berhasil diperbarui!');
        }
        setEditMode(!editMode);
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // Upload foto
    const handlePhotoUpload = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setForm({ ...form, foto: reader.result });
            reader.readAsDataURL(file);
        }
    };

    // Hapus foto
    const removePhoto = () => {
        if (confirm('Yakin ingin menghapus foto profil?')) {
            setForm({ ...form, foto: 'https://via.placeholder.com/120/9ca3af/FFFFFF?text=NO+PHOTO' });
        }
    };

    // Ubah password
    const handleChangePassword = (e) => {
        e.preventDefault();
        if (!passwordForm.oldPassword || !passwordForm.newPassword) {
            alert('Semua field wajib diisi!');
            return;
        }
        if (passwordForm.newPassword !== passwordForm.confirmPassword) {
            alert('Konfirmasi password tidak cocok.');
            return;
        }
        alert('Kata sandi berhasil diubah!');
        setPasswordForm({ oldPassword: '', newPassword: '', confirmPassword: '' });
    };

    // Logout
    const handleLogout = () => {
        if (confirm('Yakin ingin keluar?')) {
            localStorage.removeItem('adminToken');
            window.location.href = '/login';
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
                className={`transition-all duration-300 min-h-screen bg-[#f9fafb] pt-20 pb-10 ${
                    isMinimized ? 'lg:ml-16' : 'lg:ml-64'
                }`}
            >
                <div className="px-4 sm:px-6">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-xl sm:text-2xl font-bold text-[#2a436c]">Profil Pengguna</h1>
                        <p className="text-sm text-[#6b7280] mt-1">
                            Kelola informasi pribadi, keamanan, dan preferensi Anda
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Sidebar Profil */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] p-6 sticky top-24">
                                {/* Foto Profil */}
                                <div className="text-center mb-6">
                                    <div className="relative inline-block">
                                        <img
                                            src={form.foto}
                                            alt="Foto Profil"
                                            className="w-32 h-32 rounded-full object-cover border-4 border-[#cbdde9] mx-auto"
                                        />
                                        {editMode && (
                                            <div className="absolute bottom-0 right-0 flex gap-1">
                                                <label className="bg-[#4f90c6] text-white p-2 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-[#355485] transition-colors">
                                                    <i className="ri-camera-line text-sm"></i>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handlePhotoUpload}
                                                        className="hidden"
                                                    />
                                                </label>
                                                <button
                                                    onClick={removePhoto}
                                                    className="bg-red-500 text-white p-2 w-10 h-10 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors"
                                                >
                                                    <i className="ri-delete-bin-line text-sm"></i>
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                    <h2 className="text-xl font-bold text-[#2a436c] mt-4">{user.nama}</h2>
                                    <p className="text-sm text-[#6b7280]">{user.jabatan}</p>
                                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full font-medium mt-2">
                                        {user.status}
                                    </span>
                                </div>

                                {/* Info Singkat */}
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-center gap-3">
                                        <i className="ri-user-line text-[#6b7280]"></i>
                                        <span className="text-[#6b7280]">{user.username}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="ri-building-line text-[#6b7280]"></i>
                                        <span className="text-[#6b7280]">{user.unit}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <i className="ri-time-line text-[#6b7280]"></i>
                                        <span className="text-[#6b7280]">Login: {user.terakhirLogin}</span>
                                    </div>
                                </div>

                                {/* Tombol Utama */}
                                <div className="mt-6 space-y-3">
                                    <button
                                        onClick={toggleEdit}
                                        className={`w-full px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                                            editMode
                                                ? 'bg-green-600 hover:bg-green-700 text-white'
                                                : 'bg-[#355485] hover:bg-[#2a436c] text-white'
                                        }`}
                                    >
                                        <i className={`ri-${editMode ? 'check' : 'edit'}-line`}></i>
                                        {editMode ? 'Simpan Perubahan' : 'Edit Profil'}
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm transition-all flex items-center justify-center gap-2"
                                    >
                                        <i className="ri-logout-box-r-line"></i>
                                        Keluar / Logout
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Konten Utama */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Informasi Pengguna */}
                            <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] overflow-hidden">
                                <div className="p-6 border-b border-[#e5e7eb] bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9]">
                                    <h3 className="text-lg font-semibold text-[#2a436c] flex items-center gap-2">
                                        <i className="ri-user-settings-line"></i>
                                        Informasi Pengguna
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {editMode ? (
                                            <>
                                                <div>
                                                    <label className="block text-sm font-medium text-[#6b7280] mb-2">Nama Lengkap</label>
                                                    <input
                                                        type="text"
                                                        name="nama"
                                                        value={form.nama}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-[#6b7280] mb-2">Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-[#6b7280] mb-2">Telepon</label>
                                                    <input
                                                        type="text"
                                                        name="telepon"
                                                        value={form.telepon}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-[#6b7280] mb-2">Unit Kerja</label>
                                                    <input
                                                        type="text"
                                                        name="unit"
                                                        value={form.unit}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all"
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="space-y-1">
                                                    <label className="text-sm font-medium text-[#6b7280]">Nama Lengkap</label>
                                                    <p className="text-[#2a436c] font-medium">{user.nama}</p>
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-sm font-medium text-[#6b7280]">Email</label>
                                                    <p className="text-[#2a436c] font-medium">{user.email}</p>
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-sm font-medium text-[#6b7280]">Telepon</label>
                                                    <p className="text-[#2a436c] font-medium">{user.telepon}</p>
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-sm font-medium text-[#6b7280]">Unit Kerja</label>
                                                    <p className="text-[#2a436c] font-medium">{user.unit}</p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Ubah Kata Sandi */}
                            <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] overflow-hidden">
                                <div className="p-6 border-b border-[#e5e7eb] bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9]">
                                    <h3 className="text-lg font-semibold text-[#2a436c] flex items-center gap-2">
                                        <i className="ri-lock-password-line"></i>
                                        Ubah Kata Sandi
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <form onSubmit={handleChangePassword} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-[#6b7280] mb-2">Password Lama</label>
                                                <input
                                                    type="password"
                                                    value={passwordForm.oldPassword}
                                                    onChange={(e) =>
                                                        setPasswordForm({ ...passwordForm, oldPassword: e.target.value })
                                                    }
                                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-[#6b7280] mb-2">Password Baru</label>
                                                <input
                                                    type="password"
                                                    value={passwordForm.newPassword}
                                                    onChange={(e) =>
                                                        setPasswordForm({ ...passwordForm, newPassword: e.target.value })
                                                    }
                                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-[#6b7280] mb-2">Konfirmasi Password</label>
                                                <input
                                                    type="password"
                                                    value={passwordForm.confirmPassword}
                                                    onChange={(e) =>
                                                        setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })
                                                    }
                                                    className="w-full px-4 py-3 border border-[#e5e7eb] rounded-xl focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent transition-all"
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="px-6 py-3 bg-[#355485] hover:bg-[#2a436c] text-white rounded-xl text-sm transition-all flex items-center gap-2"
                                        >
                                            <i className="ri-save-line"></i>
                                            Simpan Kata Sandi
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Preferensi */}
                            <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] overflow-hidden">
                                <div className="p-6 border-b border-[#e5e7eb] bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9]">
                                    <h3 className="text-lg font-semibold text-[#2a436c] flex items-center gap-2">
                                        <i className="ri-settings-3-line"></i>
                                        Preferensi
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 border border-[#e5e7eb] rounded-xl hover:bg-[#f9fafb] transition-colors">
                                            <div className="flex items-center gap-3">
                                                <i className="ri-moon-line text-xl text-[#4f90c6]"></i>
                                                <div>
                                                    <p className="font-medium text-[#2a436c]">Mode Gelap</p>
                                                    <p className="text-sm text-[#6b7280]">Ubah tampilan menjadi mode gelap</p>
                                                </div>
                                            </div>
                                            <label className="inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={user.tema === 'dark'}
                                                    onChange={() =>
                                                        setUser({ ...user, tema: user.tema === 'light' ? 'dark' : 'light' })
                                                    }
                                                    className="sr-only peer"
                                                />
                                                <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>
                                        <div className="flex items-center justify-between p-4 border border-[#e5e7eb] rounded-xl hover:bg-[#f9fafb] transition-colors">
                                            <div className="flex items-center gap-3">
                                                <i className="ri-notification-3-line text-xl text-[#4f90c6]"></i>
                                                <div>
                                                    <p className="font-medium text-[#2a436c]">Notifikasi In-App</p>
                                                    <p className="text-sm text-[#6b7280]">Terima notifikasi di dalam aplikasi</p>
                                                </div>
                                            </div>
                                            <label className="inline-flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={user.notifikasi}
                                                    onChange={() =>
                                                        setUser({ ...user, notifikasi: !user.notifikasi })
                                                    }
                                                    className="sr-only peer"
                                                />
                                                <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Log Aktivitas */}
                            <div className="bg-white rounded-xl shadow-md border border-[#e5e7eb] overflow-hidden">
                                <div className="p-6 border-b border-[#e5e7eb] bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9]">
                                    <h3 className="text-lg font-semibold text-[#2a436c] flex items-center gap-2">
                                        <i className="ri-history-line"></i>
                                        Log Aktivitas
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <div className="space-y-3">
                                        {activityLog.map((log) => (
                                            <div key={log.id} className="flex items-start gap-4 p-4 border border-[#e5e7eb] rounded-xl hover:bg-[#f9fafb] transition-colors">
                                                <div className="w-10 h-10 bg-[#cbdde9] rounded-lg flex items-center justify-center flex-shrink-0">
                                                    <i className="ri-user-line text-[#355485]"></i>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                        <p className="font-medium text-[#2a436c]">{log.aksi}</p>
                                                        <span className="text-xs text-[#6b7280] bg-gray-100 px-2 py-1 rounded">
                                                            {log.waktu}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-[#6b7280] mt-1">{log.detail}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}