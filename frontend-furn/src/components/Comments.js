import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import ReactStars from "react-rating-stars-component";

export default function Comments() {


 

    return (

        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6">


                        <div className="container-fluid mt-5">
                            <div className="row">
                                <div className="col-12 col-md-5 p-4 bg-ligh d-flex justify-content-center align-items-center flex-column">
                                  
                                </div>
                            </div>
                            <div className="row mt-4 mb-3">
                                <div className="col  ">
                                    <div className="position-relative">
                                        <img className='img-fluid rounded-circle' style={{ height: '60px' }} src="https://images.unsplash.com/flagged/photo-1552054814-8c580ce130d1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8aHVtYW58fHx8fHwxNjc2MjE0NzA5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400" alt="" />
                                        <span className='h6 ms-3'>Blake Ruazi</span> <br />
                                        <small className='mb-0 position-absolute review-stars' ><AiFillStar className='golden fs-4' /><AiFillStar className='golden fs-4' /><AiFillStar className='golden fs-4' /><AiFillStar className='golden fs-4' /><AiFillStar className='golden fs-4' /></small>
                                        <small className='disabled'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  vitae possimus dolore totam porro quos asperiores, beatae blanditiis animi incidunt tempore.</small>
                                     <br />   <button className='btn btn-outline-secondary rounded-5 mt-2 px-4 mb-3 fw-bold position-absolut reply-button '>Reply</button>
                                    </div>
                                    <div className="position-relative">
                                        <img className='img-fluid rounded-circle' style={{ height: '60px' }} src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8aHVtYW58fHx8fHwxNjc2MjE1OTkz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400" alt="" />
                                        <span className='h6 ms-3'>Blake Ruazi</span> <br />
                                        <small className='mb-0 position-absolute review-stars' ><AiFillStar className='golden fs-4' /><AiFillStar className='golden fs-4' /><AiFillStar className='golden fs-4' /><AiFillStar className='golden fs-4' /><AiFillStar className='golden fs-4' /></small>
                                        <small className='disabled'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  vitae possimus dolore totam porro quos asperiores, beatae blanditiis animi incidunt tempore.</small>
                                     <br />   <button className='btn btn-outline-secondary rounded-5 mt-2 px-4 mb-3 fw-bold position-absolut reply-button '>Reply</button>
                                    </div>
                                    <div className="position-relative">
                                        <img className='img-fluid rounded-circle' style={{ height: '60px' }} src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8aHVtYW58fHx8fHwxNjc2MjE1OTM5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400" alt="" />
                                        <span className='h6 ms-3'>Blake Ruazi</span> <br />
                                        <small className='mb-0 position-absolute review-stars' ><AiFillStar className='golden fs-4' /><AiFillStar className='golden fs-4' /><AiFillStar className='golden fs-4' /><AiFillStar className='golden fs-4' /><AiFillStar className='golden fs-4' /></small>
                                        <small className='disabled'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  vitae possimus dolore totam porro quos asperiores, beatae blanditiis animi incidunt tempore.</small>
                                     <br />   <button className='btn btn-outline-secondary rounded-5 mt-2 px-4 mb-3 fw-bold position-absolut reply-button '>Reply</button>
                                    </div>
                                    <div className="position-relative">
                                        <img className='img-fluid rounded-circle' style={{ height: '60px' }} src="https://images.unsplash.com/photo-1620122303020-87ec826cf70d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8aHVtYW58fHx8fHwxNjc2MjE1ODgx&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=400" alt="" />
                                        <span className='h6 ms-3'>Blake Ruazi</span> <br />
                                        <small className='mb-0 position-absolute review-stars' ><AiFillStar className='golden fs-4' /><AiFillStar className='golden fs-4' /><AiFillStar className='golden fs-4' /><AiFillStar className='golden fs-4' /><AiFillStar className='golden fs-4' /></small>
                                        <small className='disabled'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  vitae possimus dolore totam porro quos asperiores, beatae blanditiis animi incidunt tempore.</small>
                                     <br />   <button className='btn btn-outline-secondary rounded-5 mt-2 px-4 mb-3 fw-bold position-absolut reply-button '>Reply</button>
                                    </div>


                                </div>
                            </div>
                        </div>











                    </div>
                    <div className="col-12 col-md-6">


                        <h3 className='fw-bold mt-5 '>Post a Comment</h3>

                        <input className="form-control mt-3 rounded-0" type="text" placeholder="Your Full Name" aria-label="default input example"></input>
                        <input className="form-control mt-3 rounded-0" type="text" placeholder="Email Address" aria-label="default input example"></input>
                        <input className="form-control mt-3 rounded-0" type="text" placeholder="Phone Number" aria-label="default input example"></input>
                        <input className="form-control mt-3 rounded-0" type="text" placeholder="Comment!" aria-label="default input example"></input>
                        <div className="d-flex align-items-right">
                            <button className="btn btn-secondary px-4 rounded-0 text-white mt-2 mb-4 ms-auto fw-bold">SUBMIT NOW</button>
                        </div>

                    </div>
                </div>
            </div>





        </>
    )
}
