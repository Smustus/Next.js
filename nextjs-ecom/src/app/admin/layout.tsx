import { NavLink, Navigation } from '@/components/Navigation';

export const dynamic = "force-dynamic" //Opt out of caching for all data requests in the route segment
//https://nextjs.org/docs/app/building-your-application/caching


function AdminLayout({children,}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      <Navigation className='flex justify-evenly bg-gradient-to-br from-stone-700 via-stone-500 to-stone-700 text-stone-100 '>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/users">Customers</NavLink>
        <NavLink href="/admin/orders">Orders</NavLink>
      </Navigation>
      <div className="">
        {children}
      </div>
      
    </>
  );
}


export default AdminLayout