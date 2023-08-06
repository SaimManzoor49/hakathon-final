import React from 'react'
import { Link } from 'react-router-dom'
import Third from '../Home/Third'

export default function About() {
    return (
        <>



            <div className="container-fluid">
                <div className="row bg-primary">
                    <div className="col ms-1">
                        {/* <div className="bg-img1 ms-1"></div> */}
                        <div className="position-relative">
                            <img className='img-fluid' src='https://images.unsplash.com/photo-1615800002234-05c4d488696c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mYXx8fHx8fDE2NzQyMzM1Mjg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920' alt="" />
                            <div className="col-4 bg-primar position-about py-2 py-md-4 px-2 px-md-5 fw-bold">
                                <h1 className='fw-bold f2 text-white '>ABOUT</h1>
                                <h5 className=' f3 text-white text-decoration-none  '><Link to={'/'} className=' f3 text-white text-decoration-none  hover-color' >Home </Link>  &gt; <Link to={'/about'} className=' f3 text-white text-decoration-none hover-color' >About</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary ms-3 ms-md-5 bottom-line"></div>


            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <p className='text-center disabled'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quaerat distinctio explicabo sequi libero beatae totam repellat consequatur alias dicta, illum maxime eligendi perferendis omnis temporibus consequuntur adipisci maiores praesentium.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col position-relative">
                        <img className='img-fluid' src='https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2hhaXJ8fHx8fHwxNjc2MDI0MTEw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920' alt="" />
                        <div className="cliping bg-white "></div>
                        <div className="cliping2 bg-white "></div>
                        <div className="cliping3 bg-white "></div>

                    </div>
                </div>
                <div className="row my-5">
                    <div className="col text-center">
                        <h3>JOURNY START FROM</h3>
                        <p className='disabled'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, assumenda! Amet ea vitae laborum impedit nesciunt architecto veniam dolorem! Quam pariatur voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum a molestias, voluptatum alias eligendi mollitia omnis pariatur animi sint earum in repellendus excepturi veniam doloribus quod qui assumenda placeat.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col position-relative">
                        <img className='img-fluid' src='https://images.unsplash.com/photo-1614062388233-2e45bbcce648?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mYXx8fHx8fDE2NzYwMzQ0NjE&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920' alt="" />
                        <div className="cliping bg-white "></div>
                        <div className="cliping2 bg-white "></div>
                        <div className="cliping3 bg-white "></div>

                    </div>
                </div>




                <div className="row my-5">
                    <div className="col text-center">
                        <h3>{new Date().getFullYear()}</h3>
                        <p className='disabled'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, assumenda! Amet ea vitae laborum impedit nesciunt architecto veniam dolorem! Quam pariatur voluptatum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum a molestias, voluptatum alias eligendi mollitia omnis pariatur animi sint earum in repellendus excepturi veniam doloribus quod qui assumenda placeat.</p>
                    </div>
                </div>

                    <Third />

            </div>


        </>
    )
}
