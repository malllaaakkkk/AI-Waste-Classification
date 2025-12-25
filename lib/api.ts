const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export async function api(path: string, opts?: RequestInit) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(opts?.headers || {}),
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  const res = await fetch(`${API}${path}`, {
    ...opts,
    headers,
  });
  
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}