import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai' 

export default function FooterB() {
    let year = new Date().getFullYear();
  return (
    <>
     <div className="container-fluid">
        <div className="row bg-primary  ">
            <div className="col  ms-2 fm-e bg-dark text-white d-flex justify-content-center align-items-center ">
                <p className='mb-0 text-white fw-bold d-flex'>&copy; {year} All Rights Reserved. <AiOutlineHeart className='mb-1 bg-secondary rounded-circle border-secondary p-1 h4 ' /> </p>
            </div>
        </div>
     </div> 
    </>
  )
}
