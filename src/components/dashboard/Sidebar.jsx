import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout() {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const location = useLocation();

    const toggleSidebar = () => setIsMinimized(!isMinimized);
    const openMobileSidebar = () => setIsMobileOpen(true);
    const closeMobileSidebar = () => setIsMobileOpen(false);

    const menuItems = [
        { name: 'Dashboard', icon: 'ri-dashboard-line', path: '/dashboard' },
        { name: 'Pencari Kerja', icon: 'ri-user-line', path: '/dashboard/pencaker' },
        { name: 'Perusahaan', icon: 'ri-building-line', path: '/dashboard/perusahaan' },
        { name: 'Lowongan', icon: 'ri-briefcase-line', path: '/dashboard/lowongan' },
        { name: 'Pelatihan / BLK', icon: 'ri-book-open-line', path: '/dashboard/pelatihan' },
        { name: 'Pengaduan', icon: 'ri-alert-line', path: '/dashboard/pengaduan' },
        { name: 'Laporan', icon: 'ri-file-chart-line', path: '/dashboard/laporan' },
        { name: 'Konten Website', icon: 'ri-pages-line', path: '/dashboard/konten' },
        { name: 'User Management', icon: 'ri-shield-user-line', path: '/dashboard/users' },
        { name: 'Pengaturan', icon: 'ri-settings-2-line', path: '/dashboard/pengaturan' },
    ];

    return (
        <>
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={closeMobileSidebar}
                ></div>
            )}

            <aside
                className={`fixed top-0 left-0 z-50 h-screen bg-[#355485] text-white transition-transform duration-300 lg:transition-all flex flex-col
                ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} 
                lg:translate-x-0 ${isMinimized ? 'w-16' : 'w-64'}`}
            >
                <div className="flex items-center p-5 border-b border-[#4f90c6]">
                    {isMinimized ? (
                        <div className="w-full flex justify-center">
                            <span className="text-2xl">💼</span>
                        </div>
                    ) : (
                        <h1 className="text-xl font-bold">
                            DISNAKER<span className="font-normal text-sm">KabPaser</span>
                        </h1>
                    )}
                </div>

                <nav className="mt-4 px-2 flex-1 overflow-y-auto">
                    <ul className="space-y-1">
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors
                                        ${isActive
                                                ? 'bg-[#4f90c6] font-semibold'
                                                : 'hover:bg-[#4f90c6]'
                                            }`}
                                        onClick={() => setIsMobileOpen(false)} // tutup sidebar di mobile
                                    >
                                        <i className={`${item.icon} text-lg`}></i>
                                        {!isMinimized && <span>{item.name}</span>}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* <button
                    onClick={toggleSidebar}
                    className="hidden lg:flex m-4 mb-6 items-center justify-center w-8 h-8 bg-[#2a436c] hover:bg-[#4f90c6] rounded-full text-sm transition-colors"
                    aria-label={isMinimized ? 'Expand sidebar' : 'Minimize sidebar'}
                >
                    <i className={`ri-arrow-${isMinimized ? 'right' : 'left'}-s-line`}></i>
                </button> */}
            </aside>

            <header
                className={`fixed top-0 right-0 left-0 z-40 bg-white shadow-sm border-b border-[#e5e7eb] px-4 py-4 transition-all duration-300 flex items-center gap-4
                ${isMinimized ? 'lg:left-16' : 'lg:left-64'} min-h-16`}
            >
                <button
                    onClick={openMobileSidebar}
                    className="lg:hidden p-2 text-[#6b7280]"
                    aria-label="Toggle Sidebar"
                >
                    <i className="ri-menu-line text-xl"></i>
                </button>

                <div className="hidden sm:flex flex-grow max-w-[300px]">
                    <div className="relative w-full">
                        <i className="ri-search-2-line absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]"></i>
                        <input
                            type="text"
                            placeholder="Cari data..."
                            className="w-full pl-10 pr-4 py-2 border border-[#e5e7eb] rounded-lg bg-[#f9fafb] focus:outline-none focus:ring-2 focus:ring-[#4f90c6]"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-6 ml-auto">
                    <button
                        className="relative text-[#6b7280] hover:text-[#355485]"
                        aria-label="Notifikasi"
                    >
                        <i className="ri-notification-2-line text-xl"></i>
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                            3
                        </span>
                    </button>

                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-2 text-[#6b7280] hover:text-[#355485]"
                        >
                            <div className="w-8 h-8 bg-[#4f90c6] rounded-full flex items-center justify-center text-white text-sm font-medium">
                                AD
                            </div>
                            <span className="hidden md:inline text-sm font-medium">Admin Disnaker</span>
                            <i className={`ri-arrow-down-s-line text-gray-500 text-sm transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}></i>
                        </button>

                        {dropdownOpen && (
                            <ul className="absolute right-0 mt-2 w-48 bg-white border border-[#e5e7eb] rounded-lg shadow-lg py-1 z-50">
                                <li>
                                    <Link to="/dashboard/profile" className="flex items-center gap-3 px-4 py-2 hover:bg-[#f9fafb] text-[#6b7280] text-sm">
                                        <i className="ri-user-settings-line"></i> Profil Saya
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/pengaturan" className="flex items-center gap-3 px-4 py-2 hover:bg-[#f9fafb] text-[#6b7280] text-sm">
                                        <i className="ri-settings-2-line"></i> Pengaturan
                                    </Link>
                                </li>
                                <hr className="my-1 border-[#e5e7eb]" />
                                <li>
                                    <Link to="/logout" className="flex items-center gap-3 px-4 py-2 hover:bg-red-50 text-red-600 text-sm">
                                        <i className="ri-logout-box-r-line"></i> Keluar
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>

                {dropdownOpen && (
                    <div
                        className="fixed inset-0 z-30 lg:hidden"
                        onClick={() => setDropdownOpen(false)}
                    ></div>
                )}
            </header>
        </>
    );
}
