import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MultiRangeSlider from '../../../components/MultiRangeSlider/MultiRangeSlider'
import fakeProducts from '../../../data/fakeProducts'
import { useAuth } from '../../../context/AuthContext'
export default function Index() {

    const [productsToShow , setProductsToShow ] = useState([])
    const [range , setRange ] = useState({
        min:0,
        max:10000
    })
    const [selectedCategory , setSelectedCategory ] = useState("all")

    // let mainImg = 'https://images.unsplash.com/photo-1634643836960-c345b3c3e998?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8c29mYXx8fHx8fDE2NzYxMTQzMDA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600'

const {allProducts,allCategories} = useAuth()

const handleChange = (e)  => {

    let getTitle = e.target.value;
    setSelectedCategory(getTitle)
    console.log(selectedCategory)
}



const makeImage = (image)=>{
    const blob = new Blob([new Uint8Array(image.data.data)], {
        type: image.contentType,
      });
    
      // Generate a URL for the Blob
      const imageUrl = URL.createObjectURL(blob);
      return imageUrl
}







// useEffect(() => {

//     setProductsToShow(allProducts)

//     let newP = allProducts.filter((p) => {
//       return selectedCategory === p.category ;
//     });
  
//     setProductsToShow(newP); // Slice the filtered array before setting the state

//     // newP = productsToShow.filter((p)=>{
//     //     return p.price>range.min && p.price<range.max 
//     // })

//     // setProductsToShow(newP)



//   if(selectedCategory==='all'){
//     setProductsToShow(allProducts)
//   }

//   }, [selectedCategory,allProducts]);





console.log(productsToShow)




    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h4 className='fw-bold'>SHOPE WITH US</h4>
                        <p className='mb-0 fw-bold disabled my-5'>Browse From {allProducts.length} Latest Items</p>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-12 col-md-4 col-lg-3">
                        <h5 className='mb-4 mt-3'>Filter Product</h5>

                        {/* <div className="card px-3 py-4 shadow-lg">

                            <select className=" form-select rounded-0 " aria-label="Default select example">
                                <option value="sofa" defaultValue={'sofa'}>Size</option>
                                <option value="1">Chair</option>
                                <option value="2">Table</option>
                                <option value="3">Lights</option>
                            </select>


                            <select className=" form-select my-4 rounded-0 " aria-label="Default select example">
                                <option value="sofa" defaultValue={'sofa'}>Type</option>
                                <option value="1">Chair</option>
                                <option value="2">Table</option>
                                <option value="3">Lights</option>
                            </select>

                            <select className=" form-select rounded-0 " aria-label="Default select example">
                                <option value="sofa" defaultValue={'sofa'}>Color</option>
                                <option value="1">Chair</option>
                                <option value="2">Table</option>
                                <option value="3">Lights</option>
                            </select>


                            <select className=" form-select mt-3 rounded-0 " aria-label="Default select example">
                                <option value="sofa" defaultValue={'sofa'}>Range</option>
                                <option value="1">Chair</option>
                                <option value="2">Table</option>
                                <option value="3">Lights</option>
                            </select>

                        </div> */}

                        <h6 className='ms-4 mt-5'>Price Range</h6>
                   

                        <MultiRangeSlider
                            min={0}
                            max={10000}
                            onChange={({ min, max }) => setRange({min,max})}
                        />
                     





                        {/* <div className="card px-3 py-4 mt-5 mb-5 shadow-lg">

                            <h4 className='mb-4'>Latest Product</h4>


                            <div className="form-check form-switch">
                                <input className="form-check-input bg-secondary text-primary" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label h6" htmlFor="flexSwitchCheckDefault">Any </label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input bg-secondary text-primary" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label h6" htmlFor="flexSwitchCheckDefault">Today</label>
                            </div>
                            <div className="form-check form-switch">
                                <input className="form-check-input bg-secondary text-primary" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label h6" htmlFor="flexSwitchCheckDefault">Last 2 Days </label>
                            </div>
                          
                            <div className="form-check form-switch">
                                <input className="form-check-input bg-secondary text-primary" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label h6" htmlFor="flexSwitchCheckDefault">Last 5 Days </label>
                            </div>
                          
                            <div className="form-check form-switch">
                                <input className="form-check-input bg-secondary text-primary" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label h6" htmlFor="flexSwitchCheckDefault">Last 10 Days </label>
                            </div>
                          
                            <div className="form-check form-switch">
                                <input className="form-check-input bg-secondary text-primary" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label h6" htmlFor="flexSwitchCheckDefault">Last 15 Days </label>
                            </div>
                          

                        </div> */}




                    </div>
                    <div className="col-12 col-md-8 col-lg-9">

                        <div className="row  ">
                            <div className="col-12 d-md-flex justify-content-between ">
                                <span>{productsToShow.length} Products Found</span>
                                <div className="d-flex  ">
                                    <span className='text-nowrap mt-2'>Sort by</span>
                                    <select className="ms-4 form-select " aria-label="Default select example" onChange={handleChange}>
                                    <option value={'all'} defaultValue={'all'}>All</option>
                                        {
                                            allCategories.map((c)=>{
                                                return <option key={c._id} value={c._id} >{c.name}</option>                                                
                                            })
                                        }
                                    </select>


                                </div>
                            </div>
                        </div>


                        <div className="row my-4">
                            {productsToShow.map((p, i) => {
                                return <div className="col-12 col-sm-6 col-md-6 col-lg-4 " key={p._id}>
                                    <article className='p-2' >
                                        <img className='img-fluid' style={{ height: 280 }} src={makeImage(p.photo)} alt="" /> <br />
                                        <Link to={`/productdetails/${p._id}`} className="card-title h5 text-black text-center text-decoration-none">{p.name}</Link>


                                        <h5 className='text-cente fw-bold text-secondary'>{p.price}$</h5>
                                    </article>
                                </div>
                            })}


                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}
