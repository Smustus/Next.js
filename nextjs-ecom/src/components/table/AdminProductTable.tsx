"use client";
import React, { useState } from 'react';
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import TableRow from './TableRow';
import TableCell from './TableCell';
import { NavLink } from '@/components/Navigation';
import { formatNumber, formatSEK } from '@/utilities/formatters';
import TableCellInteractive from './TableCellInteractive';
import { DeleteItem, ToggleActiveItem } from '@/app/admin/_actions/productActions';
import MenuItemSeparator from '../dropdownMenu/MenuItemSeparator';
import { Product } from '@/app/admin/products/page';

interface AdminProductTableProps {
  products: Product[];
}

const AdminProductTable: React.FC<AdminProductTableProps> = ({ products }) => {
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
            <div className="cursor-pointer inline-block">
              <DropdownMenu
                isActive={activeDropdown === product.id}
                toggleDropdown={() => handleDropdownToggle(product.id)}>
                <NavLink href="/admin" className='text-base' disabled>DashBoard</NavLink>
                <MenuItemSeparator />
                <NavLink href={`/admin/products/${product.id}/edit`} className='text-base'>Ändra</NavLink>
                <MenuItemSeparator />
                <ToggleActiveItem id={product.id} available={product.available} />
                <MenuItemSeparator />
                <DeleteItem id={product.id} disabled={product._count.orders > 0}/>
                <MenuItemSeparator />
                <a download href={`/admin/products/${product.id}/download`} className={`text-base p-2 m-2 hover:text-stone-400 hover:text-focus-visible:outline-dotted focus-visible:text-stone-400 focus-visib drop-shadow-lg`}>
                  Ladda ner
                </a>
              </DropdownMenu>
            </div>
          </TableCellInteractive>
        </TableRow>
      ))}
    </section>
  );
};

export default AdminProductTable;