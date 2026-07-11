import React, { useState } from 'react';
//import type { ChangeEvent, FormEvent } from "react";
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';
  
export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await register({ username, email, fullName, password } as any);
      navigate('/login');
    } catch (err: any) {
      setError(err?.message || 'Error en el registro');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-semibold mb-4">Registro</h1>

        {error && <div className="text-sm text-red-600 mb-3">{error}</div>}

        <label className="block mb-2 text-sm">Usuario</label>
        <input className="w-full border p-2 mb-3 rounded" value={username} onChange={(e) => setUsername(e.target.value)} required />

        <label className="block mb-2 text-sm">Email</label>
        <input type="email" className="w-full border p-2 mb-3 rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label className="block mb-2 text-sm">Nombre completo</label>
        <input className="w-full border p-2 mb-3 rounded" value={fullName} onChange={(e) => setFullName(e.target.value)} required />

        <label className="block mb-2 text-sm">Contraseña</label>
        <input type="password" className="w-full border p-2 mb-4 rounded" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded disabled:opacity-60" disabled={loading}>
          {loading ? 'Registrando...' : 'Registrarme'}
        </button>
      </form>
    </div>
  );
}
