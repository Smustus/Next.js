import { NavLink, Navigation } from '@/components/Navigation';
import Image from 'next/image';

export const dynamic = "force-dynamic" //disallow caching

function Layout({children,}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      <Navigation className='flex justify-between items-center bg-gradient-to-t from-slate-500 via-slate-400 via-40% to-slate-700 text-stone-100' >
        <div className='w-full relative flex'>
          <Image alt="logo" width={80} height={80} src="/Ecomm2.png" className='absolute -top-10 left-0 brightness-200'/>
        </div>
        
        <section className='flex justify-between items-center w-full'>
          <div className='w-full flex justify-center'>
          <NavLink href="/">Startsida</NavLink>
          </div>
          <div className='w-full flex justify-center'>
          <NavLink href="/products">Produkter</NavLink>
          </div>
          <div className='w-full flex justify-center'>
          <NavLink href="/orders">Beställningar</NavLink>
          </div>
        </section>
        <NavLink href="/admin" className="w-full flex justify-end">Admin Page</NavLink>
      </Navigation>
      <div className="">
        {children}
      </div>
      
    </>
  );
}


export default Layout