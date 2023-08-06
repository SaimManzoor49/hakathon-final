import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome, AiOutlineMobile, AiOutlineMail } from 'react-icons/ai'

export default function Contact() {
    return (
        <>


            <div className="container-fluid">
                <div className="row bg-primary">
                    <div className="col ms-1">
                        {/* <div className="bg-img1 ms-1"></div> */}
                        <div className="position-relative">
                            <img className='img-fluid' src='https://images.unsplash.com/photo-1614062388233-2e45bbcce648?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mYXx8fHx8fDE2NzYwMzQ0NjE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920' alt="" />
                            <div className="col-4 bg-primar position-about py-2 py-md-4 px-2 px-md-5 fw-bold">
                                <h1 className='fw-bold f2 text-white '>CONTACT</h1>
                                <h5 className=' f3 text-white text-decoration-none  '><Link to={'/'} className=' f3 text-white text-decoration-none  hover-color' >Home </Link>  &gt; <Link to={'/contact'} className=' f3 text-white text-decoration-none hover-color' >Contact</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary ms-3 ms-md-5 bottom-line"></div>




            <div className="container my-5">
                <div className="row my-4">
                    <div className="col text-center mt-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108976.81490831864!2d72.94381995350007!3d31.39964560716125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a79fdf865b%3A0x192e1cf2bfa21cd1!2sSaylani%20House%20Faisalabad!5e0!3m2!1sen!2s!4v1676035005144!5m2!1sen!2s" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='saylain-loc'></iframe>
                    </div>
                </div>


                <div className="row">
                    <div className="col-12 col-md- col-lg-8 mb-4">
                        <h3>Get in Touch</h3>
                        <div className="form-floating mt-4">
                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }}></textarea>
                            <label htmlFor="floatingTextaea2 disabled text-gray">Enter Message</label>
                        </div>
                        <div className="row mt-3">
                            <div className="col-12 col-md-6 mb-3 mb-md-0">
                                <input type="text" className="form-control" placeholder="Your Name"/>
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" className="form-control" placeholder="Email"  />
                            </div>
                        </div>
                        <div className="mt-3">
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Subject"/>
                        </div>
                        <button className='btn btn-outline-secondary btn-send p-3 mt-4 rounded-0 fw-bold '>SEND</button>
                    </div>


                    <div className="col-12 col-md- col-lg-4">
                        <div className="">
                            <span className='h2 mt-'><AiOutlineHome /></span>
                            <span className='h6  ms-1 mb-0'>Faisalabad-Pakistan</span><br />
                            <span className='small ms-5 mb-0 disabled'>Main Road,CA908</span>
                        </div>
                        <div className="my-2">
                            <span className='h2 mt-'><AiOutlineMobile /></span>
                            <a href='tel:+92 123456789' className='h6  text-decoration-none text-black link-hover ms-1 mb-0'>Tel:+92 123456789</a><br />
                            <span className='small ms-5 mb-0 disabled'>Monday to Friday, 9:00AM to 9:00PM </span>
                        </div>
                        <div className="">
                            <span className='h2 mt-'><AiOutlineMail /></span>
                            <a href='mailto:saummanzoor49@gmail.com' className='h6  text-decoration-none text-black link-hover ms-1 mb-0'>saummanzoor49@gmail.com</a><br />
                            <span className='small ms-5 mb-0 disabled'>Send us your Query any Time</span>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}
