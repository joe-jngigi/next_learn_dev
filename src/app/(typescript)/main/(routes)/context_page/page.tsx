'use client'
import React, {useContext} from 'react'
import { products } from './productdata'
import { productsProps } from '@/types/types';
import { ThemeContext } from './context/ThemeContextProvider';

const Contextpage = () => {
  // const init_product = products
  // console.log(products);
  const checkTheme = useContext(ThemeContext)
  console.log('After:' ,checkTheme);
    // console.log(checkTheme);
  
  return (
    <div className='min-h-[70vh]'>
      <h2 className='text-2xl font-semibold text-slate-300 mb-3'>Products</h2>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
        
        {
          products.map((product: productsProps) =>(
            
            <div key={product.product_id} className='bg-slate-900 p-3 rounded-xl flex flex-col gap-3'>
              
              <span className='flex justify-between items-center'>
                <h3 className='text-xl font-semibold'>{product.product_name}</h3>
                <p className='text-14 text-slate-100'>$ {product.product_price}</p>
              </span>

              <span className='flex justify-between items-center text-slate-500'>
                <p>{product.product_size}</p>
                <p>{product.product_color}</p>
              </span>
              <p className='text-slate-500 text-sm'>{product.product_description}</p>
              
            </div>
            
          ))
          
        }
      </div>
      <div>

      </div>
    </div>
  )
}

export default Contextpage