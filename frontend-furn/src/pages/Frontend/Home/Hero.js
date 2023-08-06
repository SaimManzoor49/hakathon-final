import React from 'react'

export default function Hero() {
    return (
        <>



            <div className="container-fluid">
                <div className="row bg-primary">
                    <div className="col ms-1">
                        {/* <div className="bg-img1 ms-1"></div> */}
                        <div className="position-relative">
                        <img className='img-fluid' src='https://images.unsplash.com/photo-1615800002234-05c4d488696c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mYXx8fHx8fDE2NzQyMzM1Mjg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920' alt="" />
                        <div className="col-4 bg-primary position py-2 py-md-4 px-2 px-md-5 fw-bold">
                            <h3 className='disabled fw-bold f1'>70% SALE OFF</h3>
                            <h1 className='fw-bold f2'>FERNITURE AT COST</h1>
                            <h6 className='disabled f3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem accusantium nihil.</h6>
                            <button className='btn btn-secondary borderBottom text-white fw-bold rounded-0 mt-1 mt-md-3 mb-0 mb-md-2 f4' >DISCOVER MORE</button>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-primary ms-3 ms-md-5 bottom-line"></div>


        </>
    )
}
