import prisma from '@/db/db'
import AdminCard from '@/components/AdminCard'
import Link from 'next/link'

async function getSaleData() {
  const data = await prisma.order.aggregate({
    _sum: { paidHundredth: true },
    _count: true
  })

  return {
    totalAmount: (data._sum.paidHundredth || 0) / 100,
    numberOfSales: data._count
  }
}

const AdminDashboard = async () => {
  const salesData = await getSaleData();
  return (
    <main className='bg-stone-200 w-full h-screen text-stone-800'>
      <h2 className='shadow-lg text-center p-2'>AdminDashboard</h2>
      <Link href="/" className='flex items-center justify-center underline m-4'>Home Page</Link>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-6 items-center text-center '>
        <AdminCard title="title" subtitle={salesData.numberOfSales} data={salesData.totalAmount}/>
        <AdminCard title="title" subtitle="subtitle" data="data"/>
        
      </section>
      
    </main>
  )
}


export default AdminDashboard