import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AutoToTop from './components/AutoToTop';
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
import Profile from './pages/dashboard/Profile';
import HomePage from './pages/HomePage';
import Try from './pages/Try';
function App() {
  return (
    <Router>
      <AutoToTop/>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" />} /> */}

        <Route path="/" element={<HomePage />} />
        <Route path="/try" element={<Try />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/profile" element={<Profile />} />
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
