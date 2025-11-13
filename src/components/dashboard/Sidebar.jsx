import React from 'react';

export default function Sidebar({ isMinimized, toggleSidebar }) {
    const menuItems = [
        { name: 'Dashboard', icon: 'ri-dashboard-line' },
        { name: 'Pencari Kerja', icon: 'ri-user-line' },
        { name: 'Perusahaan', icon: 'ri-building-line' },
        { name: 'Lowongan', icon: 'ri-briefcase-line' },
        { name: 'Pelatihan / BLK', icon: 'ri-book-open-line' },
        { name: 'Pengaduan', icon: 'ri-alert-line' },
        { name: 'Laporan', icon: 'ri-file-chart-line' },
        { name: 'Konten Website', icon: 'ri-pages-line' },
        { name: 'User Management', icon: 'ri-shield-user-line' },
        { name: 'Pengaturan', icon: 'ri-settings-2-line' },
    ];

    return (
        <aside
            className={`bg-[#355485] text-white fixed left-0 top-0 h-screen transition-all duration-300 z-50 ${isMinimized ? 'w-16' : 'w-64'
                }`}
        >
            {/* Logo / Brand */}
            <div className="p-5 flex items-center border-b border-[#4f90c6]">
                {!isMinimized ? (
                    <h1 className="text-xl font-bold">JobPortal<span className="font-normal text-sm">Admin</span></h1>
                ) : (
                    <div className="w-full flex justify-center">
                        <span className="text-2xl">💼</span>
                    </div>
                )}
            </div>

            {/* Navigation */}
            <nav className="mt-4 px-2 space-y-1">
                {menuItems.map((item, index) => (
                    <a
                        href="#"
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-lg hover:bg-[#4f90c6] transition-colors cursor-pointer ${item.name === 'Dashboard' ? 'bg-[#4f90c6]' : ''
                            }`}
                    >
                        <i className={`${item.icon} text-lg`}></i>
                        {!isMinimized && <span className="font-medium">{item.name}</span>}
                    </a>
                ))}
            </nav>

            {/* Minimize Button */}
            <button
                onClick={toggleSidebar}
                className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#2a436c] hover:bg-[#4f90c6] rounded flex items-center justify-center text-sm transition"
            >
                <i className={`ri-arrow-${isMinimized ? 'right' : 'left'}-s-line`}></i>
            </button>
        </aside>
    );
}