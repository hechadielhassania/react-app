import React from 'react'
import Header from "./Header"
import EmpItem from './EmpItem'
import EmpInfo  from './EmpInfo'

function EmployeePage({title}) {
  return (
    <div className='emp_page'>
      <Header topic={title}/>
      <div className='emp_Infos'>
        <EmpItem />
        <EmpInfo />
      </div>
    </div>
  )
}

export default EmployeePage