import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const products = useSelector((state) => state.products)

  return (
    <div className='py-8 px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

        {/* Product List */}
        <div className='col-span-1 md:col-span-2'>
          {products.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {products.map((product) => (
                <div key={product.id} className='card bg-base-100 shadow-xl'>
                  <figure className='p-4'>
                    <img
                      src={product.image}
                      alt={product.name || 'Product'}
                      className='h-48 object-contain'
                    />
                  </figure>
                  <div className='card-body'>
                    <h2 className='card-title'>{product.name}</h2>
                    <p className='text-sm text-gray-500'>${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='text-center text-gray-500 py-16'>
              <p className='text-xl font-medium'>No products available</p>
              <p className='text-sm'>Please add some products to get started.</p>
            </div>
          )}
        </div>

        {/* Add Product Sidebar Placeholder */}
        <div className='bg-white rounded shadow p-4'>
          <h3 className='text-lg font-semibold mb-4'>Add New Product</h3>
          <p className='text-gray-600'>Form or modal goes here.</p>
        </div>
      </div>
    </div>
  )
}

export default Home