import React from 'react'
import { BsInstagram } from 'react-icons/bs'

export default function Third() {
    const handleNav = ()=>{
        window.open('https://www.instagram.com/','_blank')  
    }
    return (
        <>

            <div className="container-fluid my-3">
                <div className="row py-4 py-md-3">
                    <div className="col-12 col-md-4 pb-4">
                        <h1 className='text-secondary ' ><BsInstagram /></h1>
                        <h1 className='fw-bold' >GET INSPIRED</h1>
                        <h1 className='fw-bold' >BY OUR INSTAGRAM</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae vero ullam ab?</p>
                        <button className='btn btn-secondary borderBottom text-white fw-bold rounded-0 mt-1 mt-md-3 mb-0 mb-md-2' >VISIT NOW</button>

                    </div>
                    <div className="col-12 col-md-4 px-0 insta position-relative" onClick={handleNav}><img className='img-fluid third-img' src="https://images.unsplash.com/photo-1615800002234-05c4d488696c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mYXx8fHx8fDE2NzQyMzM1Mjg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920" alt="" /><span className='insta-d'><BsInstagram/></span></div>
                    <div className="col- col-md-4 px-0 d-none d-md-block insta position-relative" onClick={handleNav}><img className='img-fluid third-img' src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1200&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mYXx8fHx8fDE2NzQyMDg0NTM&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920" alt="" /><span className='insta-d'><BsInstagram/></span></div>

                </div>
            </div>










        </>
    )
}
