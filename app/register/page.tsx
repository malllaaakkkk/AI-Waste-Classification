'use client';
import { useState } from 'react';
import { api } from '../../lib/api';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [msg, setMsg] = useState<string | null>(null);
  const submit = async () => {
    setMsg(null);
    try {
      await api('/auth/register', { method: 'POST', body: JSON.stringify(form) });
      setMsg('Registered successfully. You can login.');
    } catch (e: any) { setMsg(e.message); }
  };
  return (
    <div className="max-w-sm">
      <h1 className="text-xl font-semibold mb-4">Register</h1>
      {['name','email','password'].map((k) => (
        <input key={k} className="border p-2 mb-2 w-full" placeholder={k} type={k==='password'?'password':'text'}
          value={(form as any)[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })}/>
      ))}
      <button onClick={submit} className="bg-green-600 text-white px-4 py-2 rounded">Register</button>
      {msg && <p className="mt-3">{msg}</p>}
    </div>
  );
}