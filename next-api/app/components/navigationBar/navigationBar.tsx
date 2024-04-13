import React from 'react'
import Link from 'next/link'

const NavigationBar = () => {
  return (
    <nav className='flex justify-center items-center'>
      <Link href="/posts" className="m-6">Posts</Link>
      <Link href="/products" className="m-6">Products</Link>
    </nav>
  )
}

export default NavigationBar