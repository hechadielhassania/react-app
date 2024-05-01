import React from 'react'
import myImage from './img/vp.png';

function EmpItem() {
  return (
    <div className='emp_item'>
        <div className='img_Emp'><img src={myImage} /></div>
        <div className='name_Emp'>
          <h1>James King</h1>
          <h5>President and CEO</h5>
        </div>
    </div>
  )
}

export default EmpItem