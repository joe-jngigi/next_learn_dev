'use client'

import { productsProps } from '@/app/typescript/types/types'
import React from 'react'
const AddProduct = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    
    console.log(formData.get('product_name'));
    const productname = formData.get('product_name')
    console.log(productname);
    
    

    const productData: productsProps = {
      product_id: Math.random(),
      product_name: '',
      product_price: '',
      product_description: '',
      product_size: '',
      product_color: ''
    }

    
    formData.forEach((value, key) =>{
      if (typeof value === 'string') {
        productData[key as keyof productsProps] = value;
      } 
    })
    console.log(productData);
    
  }
  return (
    <div className=' min-h-[70vh] flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='bg-black flex flex-col gap-5 sm:w-[600px] p-16 rounded-2xl' action="AddProduct">
        <input required className='rounded-full p-2 bg-main-dark-bg outline-none' type="text" name="product_name" id="product_name" placeholder="Product Name"/>
        <input required className='rounded-full p-2 bg-main-dark-bg outline-none' type="text" name="product_price" id="product_price" placeholder="Product Price"/>
        <input required className='rounded-full p-2 bg-main-dark-bg outline-none' type="text" name="product_description" id="product_description" placeholder="Product Description"/>
        <input required className='rounded-full p-2 bg-main-dark-bg outline-none' type="text" name="product_size" id="product_size" placeholder="Product Size"/>
        <input required className='rounded-full p-2 bg-main-dark-bg outline-none' type="text" name="product_color" id="product_color" placeholder="Product Color"/>

        <button  className='w-auto py-2 px-6 rounded-full border-2 duration-700 transition-all hover:text-black hover:dark:bg-green-200'>Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct