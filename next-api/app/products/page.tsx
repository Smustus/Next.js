import axios from 'axios';
import Link from 'next/link';
import { ProductTemplate } from '../types';

const Products = async () => {

  let products = [];

  try {
    const response = await axios.get('http://localhost:3000/api/products');
    console.log(response.data);
    const data = response.data;

    products = data.map((obj: ProductTemplate) => {
      return <li key={obj.id}>{obj.title}</li>
    });
  } catch (error) {
    console.log(error);
  }

  return (
    <main className='flex flex-col justify-center items-center'>    
      <Link href="/">Home</Link>
      <section className="productSection">
        { products }
      </section>
    </main>

  )
}

export default Products;