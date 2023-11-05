'use client'
import React, { useState } from 'react'

import { registered_workers } from '@/utils/data_file'

const PaginationComp = () => {

  const [CurrentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 25

  const lastIndex = CurrentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage

  const records = registered_workers.slice(firstIndex, lastIndex)
  console.log(records);

  const number_of_pages = Math.ceil(registered_workers.length / recordsPerPage)
  console.log(number_of_pages);
  
  const numbers_ = Array.from({ length: number_of_pages }, (_, index) => index + 1);
  console.log(numbers_.keys());

  const prevPage = () =>{
    if(CurrentPage !== 1){
      setCurrentPage(CurrentPage - 1)
    }else{
      setCurrentPage(number_of_pages)
    }
  }

  const nextPage = () =>{
    if(CurrentPage !== number_of_pages){
      setCurrentPage(CurrentPage + 1)
    }else{
      setCurrentPage(1)
    }
  }
  const changeCurrentPage =(number: number) => {
    setCurrentPage(number)
  }
  
  return (
    <div className='dark:bg-slate-950 p-3 rounded-2xl mt-7 min-h-590'>
      <div>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
            </tr>
          </thead>

          <tbody>
            {
              records.map((data) =>(
                <tr key={data.user_id}>
                  <td>{data.user_id}</td>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.email}</td>
                  <td>{data.department}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

        <div className='flex gap-5 items-center'>
          <button className='black_btn' onClick={prevPage}>Previous</button>

          <span className='flex flex-row gap-5 '  >
            {
              numbers_.slice(0, 4).map((number) =>(
                <button key={Math.random()} className='flex flex-row gap-5 '  onClick={() => changeCurrentPage(number)}>{number}</button>
              ))
            }
          </span>

          <button className='black_btn' onClick={nextPage}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default PaginationComp