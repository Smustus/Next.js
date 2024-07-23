import PageHeader from "@/components/PageHeader"
import Button from "@/components/Button"
import prisma from "@/db/db"
import TableHeader from "@/components/table/TableHeader";
import TableHead from "@/components/table/TableHead";
import AdminProductTable from "@/components/table/AdminProductTable";

interface Product {
  id: string;
  title: string;
  priceHundredth: number;
  filePath: string;
  imagePath: string;
  available: boolean;
  _count: { orders: number };
}

const fetchProducts = async () => {
  const products = await prisma.product.findMany({select: {
    id: true,
    title: true,
    priceHundredth: true,
    filePath: true,
    imagePath: true,
    available: true,
    _count: { select: { orders: true }}
    },
    orderBy: { title: "asc" }
  });
  console.log(products);
  return products;
}

const AdminProducts = async () => {

  const products: Product[] = await fetchProducts();

  if(products.length < 1){
    return <p>No products found</p>
  }
  
  return (
    <main className='flex flex-col bg-stone-200 w-full h-screen text-stone-800'>
      <PageHeader>Admin Produktsida</PageHeader>

      <Button btnText="Lägg till produkt" href="/admin/products/new" className="inline-block p-4 m-2 bg-stone-700 text-white rounded  hover:text-stone-300 hover:bg-stone-600 hover:text-focus-visible:outline-dotted focus-visible:text-stone-400 focus-visible:rounded drop-shadow-lg w-fit h-fit font-semibold"/>
      
      <div className="wrapper w-11/12">
        <TableHead>
          <TableHeader>Produktnamn</TableHeader>
          <TableHeader>Pris</TableHeader>
          <TableHeader>Tillgänglig</TableHeader>
          <TableHeader>Beställningar</TableHeader>
          <TableHeader></TableHeader>
        </TableHead>
        <AdminProductTable products={products} />
      </div>

    </main>
  )
} 

export default AdminProducts;