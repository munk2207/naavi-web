'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function EmailRedirect() {
  const params = useSearchParams();
  const id = params.get('id');
  const [countdown, setCountdown] = useState(2);

  useEffect(() => {
    if (!id) return;
    const target = `https://mail.google.com/mail/u/0/#all/${id}`;
    const timer = setTimeout(() => {
      window.location.href = target;
    }, 500);
    const tick = setInterval(() => setCountdown(c => c - 1), 1000);
    return () => { clearTimeout(timer); clearInterval(tick); };
  }, [id]);

  if (!id) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">No email ID provided.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4">
      <div className="text-4xl">📧</div>
      <p className="text-gray-700 font-medium">Opening your email…</p>
      <a
        href={`https://mail.google.com/mail/u/0/#all/${id}`}
        className="text-sm text-blue-600 underline"
      >
        Tap here if it doesn&apos;t open automatically
      </a>
    </div>
  );
}
