import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import productsList from '../../../data/fakeProducts'
import { useAuth } from '../../../context/AuthContext'

export default function PopularProducts() {
const [filteredProducts , setFilteredProducts ] = useState(productsList)
const [isActive , setIsActive ] = useState(true)
const [isLoading , setIsLoading ] = useState(false)
const [productsToShow , setProductsToShow ] = useState([])
const [selectedCategory , setSelectedCategory ] = useState("64cf756d8d46cacdba9af50f")

const {allProducts,allCategories} = useAuth()


const handleClick = (e)  => {

    let getTitle = e.target.value;
    console.log(getTitle)
    setSelectedCategory(getTitle)
}



    useEffect(() => {
        let newP = allProducts.filter((p) => {
          return selectedCategory === p.category;
        });
      
        setProductsToShow(newP.slice(0, 3)); // Slice the filtered array before setting the state
      }, [selectedCategory,allProducts]);



   
    let categoriesToShow = allCategories.slice(0,6)

    console.log(productsToShow)



    const makeImage = (image)=>{
        const blob = new Blob([new Uint8Array(image.data.data)], {
            type: image.contentType,
          });
        
          // Generate a URL for the Blob
          const imageUrl = URL.createObjectURL(blob);
          return imageUrl
    }
    

    return (
        <>

            <div className="container-fluid mt-5 ">
                <div className="row">
                    <div className="col-3 "></div>
                    <div className="col-6">
                        <div className="text-center">
                            <h3 className='fw-bold'>POPULAR PRODUCTS</h3>
                            <small className='fw-bold disabled py-5'>Lorem ipsum dolor sit amet elit.quos id doloribus alias facilis eveniet maiores repudiandae, rem delectus hic nisi ratione! Magni, sapiente!</small>
                        </div>
                    </div>
                    <div className="col-3 "></div>
                </div>


                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 text-center py-5">


                        {categoriesToShow.map((cat)=>{

                            
// return <button className= {`btn btn-transparent borderBottom px-4 ${isActive?'sofaActive':''}`}   value={cat.name}  onClick={handleClick}>{cat.name}</button>
return <button className= {`btn btn-transparent borderBottom px-4 `}   value={cat._id}  onClick={handleClick}>{cat.name}</button>

                        })}

                        {/* <button className='btn btn-transparent borderBottom px-4 ' value='table'  onClick={handleClick2 }>Table</button>
                        <button className='btn btn-transparent borderBottom px-4 ' value='chair'  onClick={handleClick2 }>Chair</button>
                        <button className='btn btn-transparent borderBottom px-4 ' value='bed'  onClick={handleClick2 }>Bed</button>
                        <button className='btn btn-transparent borderBottom px-4 ' value='light'  onClick={handleClick2 }>Lightning</button>
                        <button className='btn btn-transparent borderBottom px-4 ' value='decorate'  onClick={handleClick2 }>Decore</button> */}
                        <hr className='m-0 d-none d-md-block' />
                    </div>
                    <div className="col-2"></div>
                </div>


            </div>
            <div className="container my-">
                <div className="row mb-5">
                    {isLoading?<div className='spinner spinner-border ms-auto me-auto text-secondary'></div>:
                    <div className="col">
                        <div className="card-group" >

                        {productsToShow.map((pro)=>{
                            return <div className="card border-0 px-1 rounded" key={pro._id}>  
                            {/* <img  style={{height:250}} src={filteredProducts[0].image} className="card-img-top" alt={filteredProducts[0].id} /> */}
                            <img  style={{height:250}} src={makeImage(pro.photo)} className="card-img-top" alt={pro.name} />

                            <div className="card-body">
                                <Link to={`/productdetails/${pro._id}`}  className="card-title h5 text-black text-center">{pro.name}</Link>
                                <p className="card-text text-center fw-bold text-secondary fs-4">{pro.price}$</p>
                            </div>
                        </div>

                        })}


                            
                            {/* <div className="card  border-0 px-1 rounded">  
                                <img  style={{height:250}} src={filteredProducts[1].image} className="card-img-top " alt={filteredProducts[1].id} />
                                <div className="card-body">
                                    <Link to={`/productdetails/${filteredProducts[1].id}`}  className="card-title h5 text-black text-center">{filteredProducts[1].name}</Link>
                                    <p className="card-text text-center fw-bold text-secondary fs-4">{filteredProducts[1].price}</p>
                                </div>
                            </div>
                            <div className="card  border-0 px-1 rounded">  
                                <img  style={{height:250}} src={filteredProducts[3].image} className="card-img-top img-fluid" alt={filteredProducts[3].id} />
                                <div className="card-body">
                                    <Link to={`/productdetails/${filteredProducts[3].id}`}  className="card-title h5 text-black text-center">{filteredProducts[3].name}</Link>
                                    <p className="card-text text-center fw-bold text-secondary fs-4">{filteredProducts[3].price}</p>
                                </div>
                            </div> */}
                        </div>
                    </div>}
                </div>
            </div>

        </>
    )
}
