import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className='flex justify-center items-center min-h-24 text-center w-full'>
      <Link href="/" className='text-slate-300 px-2 py-2 rounded hover:bg-slate-700 hover:text-slate-100 '>Home</Link>
      <Link href="/todos" className='text-slate-300 px-2 py-2 rounded hover:bg-slate-700 hover:text-slate-100 '>Todos</Link>
      <Link href="/new" className='text-slate-300 px-2 py-2 rounded hover:bg-slate-700 hover:text-slate-100 '>Add todo</Link>
    </nav>
  )
}

export default Header