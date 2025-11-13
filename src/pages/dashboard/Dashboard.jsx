import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export default function Dashboard() {
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

    /* ---------- DATA ---------- */
    const stats = {
        jobSeekers: 12_345,
        activeJobs: 876,
        companies: 321,
        placements: '87%',
        newApplications: 23,
    };

    const monthlyData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [120, 190, 140, 220, 280, 250, 300, 350, 320, 380, 400, 420],
    };

    const barData = {
        labels: monthlyData.labels,
        datasets: [
            {
                label: 'Pencari Kerja Baru',
                data: monthlyData.data,
                backgroundColor: '#4f90c6',
                borderColor: '#355485',
                borderWidth: 1,
            },
        ],
    };

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            title: { display: true, text: 'Jumlah Pendaftar Pencari Kerja (2025)' },
        },
        scales: {
            y: { beginAtZero: true, grid: { color: '#e5e7eb' } },
            x: { grid: { display: false } },
        },
    };

    const sectorData = {
        labels: ['IT & Digital', 'Manufaktur', 'Pertanian', 'Jasa', 'Konstruksi'],
        datasets: [
            {
                data: [35, 25, 15, 15, 10],
                backgroundColor: ['#4f90c6', '#90b6d5', '#cbdde9', '#355485', '#2a436c'],
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom' },
            title: { display: true, text: 'Distribusi Penempatan Kerja per Sektor' },
        },
    };

    const demographicsData = {
        labels: ['18-25', '26-35', '36-45', '46+'],
        datasets: [
            {
                label: 'Laki-laki',
                data: [220, 180, 90, 40],
                backgroundColor: '#4f90c6',
            },
            {
                label: 'Perempuan',
                data: [180, 160, 100, 50],
                backgroundColor: '#90b6d5',
            },
        ],
    };

    const demographicOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: { display: true, text: 'Distribusi Pencari Kerja Berdasarkan Usia & Gender' },
        },
        scales: {
            y: { beginAtZero: true, grid: { color: '#e5e7eb' } },
            x: { grid: { display: false } },
        },
    };

    const expiringJobs = [
        { id: 1, company: 'PT Solusi Digital', role: 'UI/UX Designer', deadline: '2 hari lagi', applicants: 38 },
        { id: 2, company: 'CV Bangun Jaya', role: 'Supervisor Lapangan', deadline: '3 hari lagi', applicants: 29 },
    ];

    const recentTrainings = [
        { id: 1, name: 'Pelatihan Web Development', peserta: 25, status: 'Berlangsung' },
        { id: 2, name: 'Pelatihan Otomotif Dasar', peserta: 30, status: 'Pendaftaran' },
        { id: 3, name: 'Pelatihan Pertanian Organik', peserta: 20, status: 'Selesai' },
    ];

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
                    <h1 className="text-xl sm:text-2xl font-bold text-[#2a436c] mb-6">Dashboard Overview</h1>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                        <StatCard title="Pencari Kerja" value={stats.jobSeekers.toLocaleString()} change="+12%" color="#4f90c6" icon="ri-user-line" />
                        <StatCard title="Lowongan Aktif" value={stats.activeJobs} change="+5" color="#355485" icon="ri-briefcase-line" />
                        <StatCard title="Perusahaan" value={stats.companies} change="+3" color="#90b6d5" icon="ri-building-line" />
                        <StatCard title="Penempatan" value={stats.placements} change="↑ 5%" color="#2a436c" icon="ri-hand-heart-line" />
                        <StatCard title="Permohonan Baru" value={stats.newApplications} change="Hari ini" color="#cbdde9" icon="ri-file-list-line" />
                    </div>

                    {/* Charts Row 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <div className="bg-white p-4 rounded-xl shadow-md border border-[#e5e7eb] h-80">
                            <Bar data={barData} options={barOptions} />
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-md border border-[#e5e7eb] h-80 flex items-center justify-center">
                            <Pie data={sectorData} options={pieOptions} />
                        </div>
                    </div>

                    {/* Demographics Chart */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-[#e5e7eb] mb-8 h-80">
                        <Bar data={demographicsData} options={demographicOptions} />
                    </div>

                    {/* Expiring Jobs */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-[#e5e7eb] mb-8 overflow-hidden">
                        <h2 className="text-lg font-semibold text-[#2a436c] mb-4">Lowongan Hampir Tutup</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm min-w-max">
                                <thead>
                                    <tr className="border-b border-[#e5e7eb]">
                                        <th className="pb-3 font-medium text-[#6b7280]">No</th>
                                        <th className="pb-3 font-medium text-[#6b7280]">Perusahaan</th>
                                        <th className="pb-3 font-medium text-[#6b7280]">Posisi</th>
                                        <th className="pb-3 font-medium text-[#6b7280]">Deadline</th>
                                        <th className="pb-3 font-medium text-[#6b7280]">Pelamar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {expiringJobs.map((job) => (
                                        <tr key={job.id} className="border-b hover:bg-[#f9fafb]">
                                            <td className="py-3">{job.id}</td>
                                            <td className="py-3 font-medium">{job.company}</td>
                                            <td className="py-3">{job.role}</td>
                                            <td className="py-3">
                                                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">{job.deadline}</span>
                                            </td>
                                            <td className="py-3">{job.applicants}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Recent Trainings */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-[#e5e7eb] mb-8">
                        <h2 className="text-lg font-semibold text-[#2a436c] mb-4">Pelatihan Terdaftar</h2>
                        <div className="space-y-4">
                            {recentTrainings.map((t) => (
                                <div
                                    key={t.id}
                                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-[#e5e7eb] rounded-lg bg-[#f9fafb]"
                                >
                                    <div>
                                        <p className="font-medium">{t.name}</p>
                                        <p className="text-sm text-[#6b7280]">Peserta: {t.peserta} orang</p>
                                    </div>
                                    <span
                                        className={`mt-2 sm:mt-0 inline-block px-3 py-1 text-xs font-semibold rounded-full ${t.status === 'Berlangsung'
                                                ? 'bg-blue-100 text-blue-800'
                                                : t.status === 'Pendaftaran'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-gray-100 text-gray-800'
                                            }`}
                                    >
                                        {t.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Insight */}
                    <div className="bg-gradient-to-r from-[#355485] to-[#4f90c6] text-white p-5 rounded-xl shadow-md mb-6">
                        <h3 className="text-base sm:text-lg font-semibold">🔍 Insight Minggu Ini</h3>
                        <ul className="mt-2 text-sm space-y-1 opacity-90">
                            <li>• Pelamar IT naik 18% — butuh lebih banyak pelatihan coding.</li>
                            <li>• 7 lowongan besar akan tutup dalam 5 hari — dorong promosi.</li>
                            <li>• Partisipasi perempuan di pelatihan meningkat 12%.</li>
                        </ul>
                    </div>
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