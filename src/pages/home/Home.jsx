import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../products/Products'
import AddProducts from '../products/AddProducts'

const Home = () => {
  const products = useSelector((state) => state.products)
  console.log(products)
  return (
    <div className="py-10 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Products List (Imported Component) */}
        <div className="lg:col-span-2">
          <Products />
        </div>

        {/* Add Product Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <AddProducts />
        </div>
      </div>
    </div>
  )
}

export default Home