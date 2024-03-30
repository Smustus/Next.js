import React from 'react';
import styles from './ProductCard.module.css';
import AddToCart from './AddToCart';



const ProductCard = () => {
  return (
    <article className='bg-yellow-800 p-4 m-5 rounded-md'>
      <div className='text-center'>ProductCard</div>
      <br />
      <AddToCart />
    </article>
  )
}

export default ProductCard