"use client";
import React, { useState } from 'react';
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import TableRow from './TableRow';
import TableCell from './TableCell';
import { NavLink } from '@/components/Navigation';
import { formatNumber, formatSEK } from '@/tools/formatters';
import TableCellInteractive from './TableCellInteractive';

interface Product {
  id: string,
  title: string,
  priceHundredth: number,
  filePath: string,
  imagePath: string,
  available: boolean,
  _count: { orders: number }
}

interface AdminProductTableProps {
  products: Product[];
}

const AdminProductTable:  React.FC<AdminProductTableProps> = ({ products }) => {
  console.log(products);
  
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (productId: string) => {
    setActiveDropdown(prevActiveDropdown => (prevActiveDropdown === productId ? null : productId));
  };

  return (
    <section className="grid">
      {products.map((product: Product) => (
        <TableRow key={product.id}>
          <TableCell>{product.title}</TableCell>
          <TableCell>{formatSEK(product.priceHundredth / 100)}</TableCell>
          <TableCell>{product.available ? <p className="text-green-700">Ja</p> : <p className="text-red-700">Nej</p>}</TableCell>
          <TableCell>{formatNumber(product._count.orders)}</TableCell>
          <TableCellInteractive>
            <div className="cursor-pointer inline">
              <DropdownMenu
                isActive={activeDropdown === product.id}
                toggleDropdown={() => handleDropdownToggle(product.id)}>
                <NavLink href="/admin">DashBoard</NavLink>
                <NavLink href="/admin">DashBoard</NavLink>
                <NavLink href="/admin">DashBoard</NavLink>
                <NavLink href="/admin">DashBoard</NavLink>
              </DropdownMenu>
            </div>
          </TableCellInteractive>
        </TableRow>
      ))}
    </section>
  );
};

export default AdminProductTable;