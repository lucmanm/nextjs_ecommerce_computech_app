"use client"
import React from 'react'
import { Settings } from '@/lib/constant';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Container from '../../../(admin)/components/Container';

const Category = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const category = searchParams.get("category")

    const handleTags = (filter: string) => {
        router.push(`${pathname}?category=${filter}`)
    }
  return (
    <div>

      {Settings.map((filter) => (
          <button
          key={filter}
          type="button"
          onClick={() => handleTags(filter)}
          className={`
          ${
              category === filter
              ? "bg-gradient-to-br text-white font-normal from-blue-400 via-blue-500 to-blue-600"
              : "font-normal"
            } whitespace-nowrap rounded-lg px-4 py-1 capitalize text-sm tb:text-base`}
            >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default Category