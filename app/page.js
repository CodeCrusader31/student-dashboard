'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/config';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push('/dashboard');
      } else {
        router.push('/login');
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [router]);

  return (
    <main className="flex items-center justify-center min-h-screen">
      <p className="text-lg font-medium">Redirecting...</p>
    </main>
  );
}
