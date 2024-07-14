import { NavLink, Navigation } from '@/components/Navigation';
import Link from 'next/link';

export const dynamic = "force-dynamic" //disallow caching


function AdminLayout({children,}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      <Navigation>
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