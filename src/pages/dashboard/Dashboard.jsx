import React, { useState } from 'react';
import Sidebar from '../../components/dashboard/Sidebar';
import Header from '../../components/dashboard/Header';
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
    const toggleSidebar = () => setIsMinimized(!isMinimized);

    // Data Statistik
    const stats = {
        jobSeekers: 12_345,
        activeJobs: 876,
        companies: 321,
        placements: '87%',
        newApplications: 23,
    };

    // ✅ DATA GRAFIK: Sudah diperbaiki, tambahkan 'data:'
    const monthlyData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        data: [120, 190, 140, 220, 280, 250, 300, 350, 320, 380, 400, 420], // ✅ Key 'data' ditambahkan
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
            y: {
                beginAtZero: true,
                grid: {
                    color: '#e5e7eb',
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };

    // Pie Chart: Penempatan per Sektor
    const pieData = {
        labels: ['IT & Digital', 'Manufaktur', 'Pertanian', 'Jasa', 'Konstruksi'],
        datasets: [
            {
                data: [35, 25, 15, 15, 10],
                backgroundColor: ['#4f90c6', '#90b6d5', '#cbdde9', '#355485', '#2a436c'],
                hoverOffset: 10,
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: 'bottom', labels: { color: '#6b7280' } },
            title: { display: true, text: 'Distribusi Penempatan Kerja per Sektor', color: '#2a436c' },
        },
    };

    // Tabel Lowongan Terbaru
    const recentJobs = [
        { id: 1, company: 'PT Tekno Jaya', role: 'Fullstack Developer', applicants: 45 },
        { id: 2, company: 'CV Makmur Abadi', role: 'Operator Produksi', applicants: 32 },
        { id: 3, company: 'UD Tani Maju', role: 'Petugas Lapangan', applicants: 28 },
    ];

    return (
        <>
            {/* Sidebar */}
            <Sidebar isMinimized={isMinimized} toggleSidebar={toggleSidebar} />

            {/* Header */}
            <Header />

            {/* Main Content */}
            <main
                className={`transition-all duration-300 min-h-screen bg-[#f9fafb] pt-20 pb-10 px-4 sm:px-6 lg:px-8 ${isMinimized ? 'ml-16' : 'ml-64'
                    }`}
            >
                {/* Judul */}
                <h1 className="text-xl sm:text-2xl font-bold text-[#2a436c] mb-6">Dashboard Overview</h1>

                {/* Stats Cards - Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-8">
                    <StatCard title="Pencari Kerja" value={stats.jobSeekers.toLocaleString()} change="+12%" color="#4f90c6" icon="ri-user-line" />
                    <StatCard title="Lowongan Aktif" value={stats.activeJobs} change="+5" color="#355485" icon="ri-briefcase-line" />
                    <StatCard title="Perusahaan" value={stats.companies} change="+3" color="#90b6d5" icon="ri-building-line" />
                    <StatCard title="Penempatan" value={stats.placements} change="↑ 5%" color="#2a436c" icon="ri-hand-heart-line" />
                    <StatCard title="Permohonan Baru" value={stats.newApplications} change="Hari ini" color="#cbdde9" icon="ri-file-list-line" />
                </div>

                {/* Charts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white p-4 rounded-xl shadow-md border border-[#e5e7eb] h-80">
                        <Bar data={barData} options={barOptions} />
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-md border border-[#e5e7eb] h-80 flex items-center justify-center">
                        <Pie data={pieData} options={pieOptions} />
                    </div>
                </div>

                {/* Recent Jobs Table */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-[#e5e7eb] mb-8 overflow-hidden">
                    <h2 className="text-lg font-semibold text-[#2a436c] mb-4">Lowongan Terbaru</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm min-w-max">
                            <thead>
                                <tr className="border-b border-[#e5e7eb]">
                                    <th className="pb-3 font-medium text-[#6b7280]">No</th>
                                    <th className="pb-3 font-medium text-[#6b7280]">Perusahaan</th>
                                    <th className="pb-3 font-medium text-[#6b7280]">Posisi</th>
                                    <th className="pb-3 font-medium text-[#6b7280]">Pelamar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentJobs.map((job) => (
                                    <tr key={job.id} className="border-b border-[#f3f4f6] hover:bg-[#f9fafb] transition-colors">
                                        <td className="py-3">{job.id}</td>
                                        <td className="py-3 font-medium">{job.company}</td>
                                        <td className="py-3 text-[#6b7280]">{job.role}</td>
                                        <td className="py-3">{job.applicants}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Insight */}
                <div className="mt-4 bg-gradient-to-r from-[#355485] to-[#4f90c6] text-white p-5 rounded-xl shadow-md text-center sm:text-left">
                    <h3 className="text-base sm:text-lg font-semibold">Insight Minggu Ini</h3>
                    <p className="mt-1 text-sm opacity-90">
                        Jumlah pelamar di sektor IT meningkat 18% dibanding minggu lalu. Rekomendasi: tingkatkan pelatihan digital skill.
                    </p>
                </div>
            </main>
        </>
    );
}

// ✅ StatCard: Responsif ikon & layout
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
                    className="p-2 sm:p-3 rounded-full text-white"
                    style={{ backgroundColor: color }}
                >
                    <i className={`${icon} text-lg sm:text-xl`}></i>
                </div>
            </div>
        </div>
    );
}