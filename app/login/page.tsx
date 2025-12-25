'use client';
import { useState } from 'react';
import { api } from '../../lib/api';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const submit = async () => {
    setMsg(null);
    try {
      const data = await api('/auth/login', { method: 'POST', body: JSON.stringify(form) });
      setToken(data.token);
      localStorage.setItem('token', data.token);
      setMsg('Logged in.');
    } catch (e: any) { setMsg(e.message); }
  };
  return (
    <div className="max-w-sm">
      <h1 className="text-xl font-semibold mb-4">Login</h1>
      <input className="border p-2 mb-2 w-full" placeholder="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input className="border p-2 mb-2 w-full" type="password" placeholder="password" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
      {msg && <p className="mt-3">{msg}</p>}
      {token && <p className="mt-1 text-xs break-all">Token: {token}</p>}
    </div>
  );
}