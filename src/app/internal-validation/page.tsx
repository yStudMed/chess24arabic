import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

export default async function InternalValidationPage() {
  const h = await headers();
  const forwardedFor = h.get('x-forwarded-for');
  const ip = forwardedFor?.split(',')[0]?.trim() || h.get('x-real-ip') || 'unknown';
  const allowed = ['127.0.0.1', '::1', 'localhost'];
  if (!allowed.includes(ip)) {
    notFound(); // Renders app/not-found.tsx
  };
  return (
    <div>
      <h1>Internal Validation</h1>
      <p>Access granted from: {ip}</p>
    </div>
  );
};
