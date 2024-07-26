import CustomerCard, { CustomerCardEmpty } from '@/components/CustomerCard'
import prisma from '@/db/db';
import React, { Suspense } from 'react'

async function fetchAvailableProducts(){
  return await prisma.product.findMany({where: {available: true}});
}

async function ProductSuspense() {
  const products = await fetchAvailableProducts();
  
  return products.map(product => 
    <CustomerCard key={product.id} {...product} />
  );
}

export default function CustomerProducts() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center text-center'>
      <Suspense fallback={<><CustomerCardEmpty /><CustomerCardEmpty /><CustomerCardEmpty /></>}>
        <ProductSuspense />
      </Suspense>
    </section>
  )
}



