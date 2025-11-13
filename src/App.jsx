import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Pencaker from './pages/dashboard/Pencaker';
import Perusahaan from './pages/dashboard/Perusahaan';
import Lowongan from './pages/dashboard/Lowongan';
import Pelatihan from './pages/dashboard/Pelatihan';
import Pengaduan from './pages/dashboard/Pengaduan';
import Laporan from './pages/dashboard/Laporan';
import Konten from './pages/dashboard/Konten';
import Users from './pages/dashboard/Users';
import Pengaturan from './pages/dashboard/Pengaturan';
import Login from './pages/auth/Login';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/pencaker" element={<Pencaker />} />
        <Route path="/dashboard/perusahaan" element={<Perusahaan />} />
        <Route path="/dashboard/lowongan" element={<Lowongan />} />
        <Route path="/dashboard/pelatihan" element={<Pelatihan />} />
        <Route path="/dashboard/pengaduan" element={<Pengaduan />} />
        <Route path="/dashboard/laporan" element={<Laporan />} />
        <Route path="/dashboard/konten" element={<Konten />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/dashboard/pengaturan" element={<Pengaturan />} />
      </Routes>
    </Router>
  );
}

export default App;
