import { useRef } from "react";
import React from 'react'
import EmployeeListItem from './EmployeeListItem'

function EmployeeList() {
  return (
    <div className="employeeList">
      <EmployeeListItem />
    </div>
  )
}

export default EmployeeList