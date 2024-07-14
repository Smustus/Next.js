import PageHeader from "@/components/PageHeader"
import ProductForm from "../productForm/ProductForm"

const NewProduct = () => {
  return (
    <main className='bg-stone-200 w-full h-screen text-stone-800'>
      <PageHeader>Add new product</PageHeader>
      <ProductForm />
    </main>
  )
}

export default NewProduct