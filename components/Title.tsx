import React from 'react'

const Title = ({children}:{children: React.ReactNode}) => {
  return (
    <section className="rounded-lg bg-white py-2 px-4 shadow text-xl font-bold">{children}</section>
  );
}

export default Title