import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/features/products/productSlice'

const AddProducts = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const dispatch = useDispatch()
      const onSubmit = (data) => {
        dispatch(addProduct(data))
      }

  return (
    <div className='max-w-md mx-auto bg-white shadow-md rounded-lg p-6'>
        <h2 className='text-2xl font-bold mb-4'>Add New Product</h2>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            {/* name */}
            <div>
                <label  className='block text-sm font-medium text-gray-700'>Name</label>
                <input type="text" id='name' {...register("name", { required: true })} placeholder="Enter product name" className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg focus:outline focus:ring-1 focus:ring-indigo-500' />
            </div>
            {/* price */}
            <div>
                <label className='block text-sm font-medium text-gray-700'>Price</label>
                <input type="price" id='price' {...register("price", { required: true })} placeholder='Enter product price' className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg focus:outline focus:ring-1 focus:ring-indigo-500' />
            </div>
            {/* category */}
            <div>
                <label htmlFor="category" className='block text-sm font-medium text-gray-700'>Category</label>
                <select id='category' {...register("category", { required: true })} className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg focus:outline focus:ring-1 focus:ring-indigo-500'>
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
                <input type="text" id='description' {...register("description", { required: true })} placeholder='Enter product description' className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg focus:outline focus:ring-1 focus:ring-indigo-500' />
            </div>
            {/* image */}
            <div>
                <label htmlFor="image" className='block text-sm font-medium text-gray-700'>Image URL</label>
                <input type="url" id='image' {...register("image", { required: true })} placeholder="https://example.com/image.jpg" className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg focus:outline focus:ring-1 focus:ring-indigo-500' />
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