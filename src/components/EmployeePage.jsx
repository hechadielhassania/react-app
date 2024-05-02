import React from 'react'
import Header from "./Header"
import EmpItem from './EmpItem'
import EmpInfo  from './EmpInfo'
import { allEmployees } from '../App'


function EmployeePage() {
  return (
    <div className='emp_page'>
      <div className='emp_Infos'>
        <EmpItem info={allEmployees[0]} />
        <EmpInfo />
      </div>
    </div>
  )
}

export default EmployeePage