import React from 'react'

const AddProducts = () => {
  return (
    <div className='max-w-md mx-auto bg-white shadow-md rounded-lg p-6'>
        <h2 className='text-2xl font-bold mb-4'>Add New Product</h2>
        <form action="" className='space-y-4'>
            {/* name */}
            <div>
                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                <input type="text" id='name' placeholder="Enter product name" className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg focus:outline focus:ring-1 focus:ring-indigo-500' />
            </div>
            {/* price */}
            <div>
                <label htmlFor="price" className='block text-sm font-medium text-gray-700'>Price</label>
                <input type="number" id='price' placeholder='Enter product price' className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg focus:outline focus:ring-1 focus:ring-indigo-500' />
            </div>
            {/* category */}
            <div>
                <label htmlFor="category" className='block text-sm font-medium text-gray-700'>Category</label>
                <select id='category' className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg focus:outline focus:ring-1 focus:ring-indigo-500'>
                    <option value="">Select a category</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">Books</option>
                    <option value="home">Home & Garden</option>
                    <option value="sports">Sports & Outdoors</option>
                    <option value="beauty">Beauty & Health</option>
                    <option value="toys">Toys & Games</option>
                    <option value="automotive">Automotive</option>
                </select>
            </div>
            {/* Description */}
            <div>
                <label htmlFor="description" className='block text-sm font-medium text-gray-700'>Description</label>
                <input type="text" id='description' placeholder='Enter product description' className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg focus:outline focus:ring-1 focus:ring-indigo-500' />
            </div>
            {/* image */}
            <div>
                <label htmlFor="image" className='block text-sm font-medium text-gray-700'>Image URL</label>
                <input type="url" id='image' placeholder="https://example.com/image.jpg" className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg focus:outline focus:ring-1 focus:ring-indigo-500' />
            </div>
            {/* button */}
            <div>
                <button type='submit' className='w-full bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600'>Add Product</button>
            </div>
        </form>
    </div>
  )
}

export default AddProducts