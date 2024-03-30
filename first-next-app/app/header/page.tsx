import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='p-5 border-solid border-b-2 border-gray-800'>
      <div className='text-center'>Header</div>
      <nav className="nav flex items-center justify-center m-6">
        <Link href="/" className="nav__homeLink m-6">Home</Link>
        <Link href="/users" className="nav__userLink m-6">Users</Link>
        <Link href="/products" className="nav__productsLink m-6">Products</Link>
      </nav>
    </header>
  )
}

export default Header;