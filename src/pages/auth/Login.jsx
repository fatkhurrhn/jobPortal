import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Jika pakai React Router

export default function Login() {
    const [form, setForm] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate(); // Hapus jika tidak pakai router

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Simulasi login (ganti dengan API asli nanti)
        setTimeout(() => {
            if (form.username === 'admin' && form.password === 'admin123') {
                setLoading(false);
                // Simpan token/session
                localStorage.setItem('adminToken', 'dummy-jwt-token');
                navigate('/dashboard'); // Redirect ke dashboard
            } else {
                setLoading(false);
                setError('Username atau password salah.');
            }
        }, 800);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f9fafb] px-4">
            {/* Card Login */}
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-[#e5e7eb] overflow-hidden">
                {/* Header Biru */}
                <div className="bg-[#355485] text-white py-6 px-8 text-center">
                    <h1 className="text-2xl font-bold">Admin Disnaker</h1>
                    <p className="text-sm opacity-90">Sistem Penempatan Tenaga Kerja</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {error && (
                        <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
                            {error}
                        </div>
                    )}

                    {/* Username */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-[#6b7280] mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                            placeholder="admin"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-[#6b7280] mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4f90c6] focus:border-transparent"
                            placeholder="admin123"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#355485] hover:bg-[#2a436c] text-white font-medium py-2.5 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                Memuat...
                            </>
                        ) : (
                            'Masuk'
                        )}
                    </button>
                </form>

                {/* Footer */}
                <div className="bg-[#f9fafb] px-8 py-4 text-center border-t border-[#e5e7eb]">
                    <p className="text-xs text-[#9ca3af]">
                        © 2025 Dinas Tenaga Kerja. Hak Cipta Dilindungi.
                    </p>
                </div>
            </div>
        </div>
    );
}