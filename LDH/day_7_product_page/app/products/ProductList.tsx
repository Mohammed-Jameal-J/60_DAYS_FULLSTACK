import React from 'react'
import { fetchProducts } from '@/lib/api'
import SearchBar from './SearchBar';

const ProductList = async ({ searchParams }: { searchParams: { search?: string } }) => {
    const data = await fetchProducts(searchParams.search);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-3'>
            <SearchBar />

        {data?.products.map((product) => (
            <div key={product.id} className='card bg-base-100 shadow-xl w-96 m-4'>
                <figure>
                <img src={product.thumbnail} alt={product.title} className='card-image' />
                </figure>
                 <div className='card-body'>
               <h2 className='card-title'>{product.title}</h2>
                <p className='card-text'>{product.description}</p>
                <p className='font-bold'>${product.price}</p>
            </div>
            </div>
           
        ))}
    </div>
  )
}

export default ProductList