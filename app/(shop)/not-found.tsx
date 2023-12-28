"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
 
export default function NotFound() {
    const router = useRouter();

  useEffect(() => {
    // Redirect after 5 seconds
    const redirectTimer = setTimeout(() => {
      router.push('/'); // Replace with your destination page
    }, 5000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div>
      <h2 className='h2'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}