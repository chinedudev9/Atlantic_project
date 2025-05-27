// lib/api.js
export async function fetchVacancies() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/tenants/${process.env.NEXT_PUBLIC_TENANT_ID}/external/vacancies`, {
    headers: { Accept: 'application/json' }
  });

  const data = await res.json();
  return data?.data || [];
}
