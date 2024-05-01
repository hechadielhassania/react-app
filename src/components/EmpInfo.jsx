import React from 'react'
import nextIcon from './img/next_icon.png'

function EmpInfo() {
  return (
    <div className='emp_infos'>
        <div className='info'>
            <h3>Call Office</h3>
            <h6>781-000-0002</h6>
        </div>
        <div className='btn_info'>
            <img src={nextIcon} />
        </div>
    </div>
  )
}

export default EmpInfo