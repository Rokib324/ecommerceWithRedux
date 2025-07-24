import React from 'react'
import { useSelector } from 'react-redux'

const Products = () => {
  const products = useSelector((state) => state.products)

  if (products.length === 0) {
    return (
      <div className="text-center text-gray-500 py-16">
        <p className="text-xl font-medium">No products available</p>
        <p className="text-sm">Please add some products to see them here.</p>
      </div>
    )
  }

  return (
    <div className="py-8 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="card bg-base-100 shadow-sm w-full">
          <figure className="px-4 pt-4">
            <img
              src={product.image}
              alt={product.name || 'Product'}
              className="h-48 w-full object-contain"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p className="text-sm text-gray-600">${product.price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Products