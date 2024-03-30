import React from 'react'
import ProductCard from '../components/ProductCard/ProductCard'

const Products = () => {
  return (
    <main className='flex flex-col items-center justify-center p-6'>
     <h1 className='p-6'>Products</h1>
     <ProductCard />
    </main>
    
  )
}

export default Products