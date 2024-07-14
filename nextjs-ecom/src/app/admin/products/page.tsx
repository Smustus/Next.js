import PageHeader from "@/components/PageHeader"
import Button from "@/components/Button"

const AdminProducts = () => {
  return (
    <main className='bg-stone-200 w-full h-screen text-stone-800'>
      <PageHeader>Admin Products Page</PageHeader>

      <Button btnText="Add Product" href="/admin/products/new" />

    </main>
  )
}

export default AdminProducts