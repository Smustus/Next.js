import Card from '@/components/Card'
import React from 'react'

const AdminDashboard = () => {
  return (
    <main className='bg-stone-200 w-full h-screen text-stone-800'>
      <h2 className='shadow-lg text-center p-2'>AdminDashboard</h2>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-6 items-center text-center '>
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  )
}

export default AdminDashboard