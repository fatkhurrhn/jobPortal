import React, { useState } from 'react';

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="bg-white shadow-sm border-b border-[#e5e7eb] px-6 py-4 flex items-center justify-between fixed left-0 right-0 top-0 z-40 ml-64 transition-all duration-300">
            {/* Search Bar */}
            <div className="flex items-center gap-4 flex-1 max-w-lg">
                <div className="relative">
                    <i className="ri-search-2-line absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9ca3af]"></i>
                    <input
                        type="text"
                        placeholder="Cari pencaker, lowongan..."
                        className="pl-10 pr-4 py-2 w-full border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] bg-[#f9fafb]"
                    />
                </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-6">
                {/* Notification Bell */}
                <button className="relative text-[#6b7280] hover:text-[#355485]">
                    <i className="ri-notification-2-line text-xl"></i>
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                </button>

                {/* Profile Dropdown */}
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-2 text-[#6b7280] hover:text-[#355485] focus:outline-none"
                    >
                        <div className="w-8 h-8 bg-[#4f90c6] rounded-full flex items-center justify-center text-white text-sm font-medium">AD</div>
                        <span className="hidden md:inline text-sm font-medium">Admin Disnaker</span>
                        <i className="ri-arrow-down-s-line text-gray-500"></i>
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-[#e5e7eb] rounded-lg shadow-lg py-1 z-50">
                            <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-[#f9fafb] text-[#6b7280]">
                                <i className="ri-user-settings-line"></i> Profil Saya
                            </a>
                            <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-[#f9fafb] text-[#6b7280]">
                                <i className="ri-settings-2-line"></i> Pengaturan
                            </a>
                            <hr className="my-1 border-[#e5e7eb]" />
                            <a href="/logout" className="flex items-center gap-3 px-4 py-2 hover:bg-red-50 text-red-600">
                                <i className="ri-logout-box-r-line"></i> Keluar
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}