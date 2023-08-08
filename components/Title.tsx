import React from 'react'

const Title = ({children}:{children: React.ReactNode}) => {
  return (
    <section className="rounded bg-white p-4 shadow">{children}</section>
  );
}

export default Title