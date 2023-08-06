import React from 'react'
import { GrDeliver } from 'react-icons/gr'
import { MdOutlinePayment } from 'react-icons/md'
import { BsCashStack } from 'react-icons/bs'
import { Ri24HoursLine } from 'react-icons/ri'
import { AiFillFacebook,AiFillTwitterSquare,AiFillInstagram } from 'react-icons/ai'



import logoPath from '../../assets/logo2.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="container-fluid">
                <div className="row me-md-3 bg-primary pt-3">
                    <div className="col"><h1>Our Services</h1></div>
                </div>
                <div className="row me- me-md-3 py-5 bg-primary">

                    <div className="col-3 col-mb-2">
                        <h1 className=''><GrDeliver /></h1>
                        <h6 className='fw-bold' >Fast & Free Delivary</h6>
                        <p className='disabled' >Free Delivary on all orders </p>
                    </div>
                    <div className="col-3 col-mb-2">
                        <h1 className=''><MdOutlinePayment /></h1>
                        <h6 className='fw-bold' >Secure Payment</h6>
                        <p className='disabled' >Free Delivary on all orders </p>
                    </div>
                    <div className="col-3 col-mb-2">
                        <h1 className=''><BsCashStack /></h1>
                        <h6 className='fw-bold' >Money Back Gurentee</h6>
                        <p className='disabled' >Free Delivary on all orders </p>
                    </div>
                    <div className="col-3">
                        <h1 className=''><Ri24HoursLine /></h1>
                        <h6 className='fw-bold' >Online Support</h6>
                        <p className='disabled' >Free Delivary on all orders </p>
                    </div>

                </div>

                <div className="row row-in-row bg-primary">
                <div className="row  py-5 ms-2 bg-dark text-white d-flex justify-content-center align-items-center">
                    <div className="col-6 col-md-3 ">
                        <div className="ms-auto me-auto ms-md-0 me-md-0"> 

                        <img src={logoPath} alt="f-logo" />
                        <p className='mt-4 disabled'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, ipsam blanditiis? Animi, perspiciatis numquam repellat harum saepe .</p>
                        <div className="d-flex">

                        <Link to={''} className='fs-1 icon iconfb text-primary'><AiFillFacebook/></Link>
                        <Link to={''} className='fs-1 icon icontw mx-2 text-primary'><AiFillTwitterSquare/></Link>
                        <Link to={''} className='fs-1 icon iconinsta text-primary'><AiFillInstagram/></Link>
                        </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 ">
                        <div className="ms-auto me-auto ms-md-0 me-md-0"> 

                        <h6 className='mb-5'>Quick Links</h6>
                        <p><Link to={''} className='disabled text-decoration-none' >Image licence</Link></p>
                        <p><Link to={''} className='disabled text-decoration-none' >Style Guide</Link></p>
                        <p><Link to={''} className='disabled text-decoration-none' >Privacy Policy</Link></p>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 ">
                        <div className="ms-auto me-auto ms-md-0 me-md-0"> 

                        <h6 className='mb-5'>Shop Catogries</h6>
                        <p><Link to={''} className='disabled text-decoration-none' >Image licence</Link></p>
                        <p><Link to={''} className='disabled text-decoration-none' >Style Guide</Link></p>
                        <p><Link to={''} className='disabled text-decoration-none' >Privacy Policy</Link></p>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 ">
                        <div className="ms-auto me-auto ms-md-0 me-md-0"> 

                        <h6 className='mb-5'>Partners</h6>
                        <p><Link to={''} className='disabled text-decoration-none' >Image licence</Link></p>
                        <p><Link to={''} className='disabled text-decoration-none' >Style Guide</Link></p>
                        <p><Link to={''} className='disabled text-decoration-none' >Privacy Policy</Link></p>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </>
    )
}
