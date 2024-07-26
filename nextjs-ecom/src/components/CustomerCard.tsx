import { formatSEK } from '@/utilities/formatters';
import React from 'react'
import Button from './Button';
import Image from 'next/image';

interface CustomerCardProps {
  id: string,
  title: string,
  description: string,
  priceHundredth: number,
  imagePath: string,
}

const CustomerCard = ({id, title, description, priceHundredth, imagePath}: CustomerCardProps) => {
  return (
  <article className='flex flex-col rounded bg-slate-50 text-slate-800 overflow-hidden min-w-40 shadow-lg'>
    <figure className='relative w-full h-auto aspect-square'>
      <Image src={imagePath} alt={title} fill />
    </figure>
    <header className='p-2'>
      <h3 className='text-lg'>{title}</h3>
      <p className='text-xs'>{formatSEK(priceHundredth / 100)}</p>
    </header>
    <section className='flex-grow p-2'>
      <p className='line-clamp-4 text-sm'>{description}</p>
    </section>
    <section className='p-2'>
      <Button className='bg-gradient-to-br from-slate-300 via-slate-400 to-slate-300 text-stone-100' href={`/products/${id}/purchase`}>Lägg i varukorg</Button>
    </section>
  </article>
)
}
export default CustomerCard;

export const CustomerCardEmpty = () => {
  return(
  <article className='flex flex-col justify-center rounded bg-slate-50 text-slate-800 animate-pulse overflow-hidden min-w-40'>
    <figure className='relative w-full h-auto aspect-square'>
      <div className='w-full h-full bg-gray-300'></div>
    </figure>
    <header className='p-2'>
      <div className='w-full h-5 bg-gray-300 my-1'></div>
      <div className='w-2/4 h-4 bg-gray-300'></div>
    </header>
    <section className='flex-grow p-2'>
      <div className='w-full h-4 bg-gray-300'></div>
    </section>
    <section className='p-2'>
      <div className='w-full h-4 rounded bg-gray-400'></div>
    </section>
  </article>
  )
}
