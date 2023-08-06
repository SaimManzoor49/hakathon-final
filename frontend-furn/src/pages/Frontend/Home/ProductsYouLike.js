import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productsList from "../../../data/fakeProducts";
import { useAuth } from "../../../context/AuthContext";

export default function ProductsYouLinke() {
  const [filteredProducts, setFilteredProducts] = useState(productsList);
  const [isActive, setIsActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [productsToShow, setProductsToShow] = useState([]);

  const { allProducts, allCategories } = useAuth();

  useEffect(() => {
      setProductsToShow(allProducts.slice(0, 3)); // Slice the filtered array before setting the state
  }, [allProducts]);


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
              <h3 className="fw-bold">PRODUCTS YOU MAY LIKE</h3>
              <small className="fw-bold disabled py-5">
                Lorem ipsum dolor sit amet elit.quos id doloribus alias facilis
                eveniet maiores repudiandae, rem delectus hic nisi ratione!
                Magni, sapiente!
              </small>
            </div>
          </div>
          <div className="col-3 "></div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row mb-5">
          {isLoading ? (
            <div className="spinner spinner-border ms-auto me-auto text-secondary"></div>
          ) : (
            <div className="col">
              <div
                className="card-group"
                onClick={() => {
                  console.log(filteredProducts[0].category);
                }}
              >
                {productsToShow.map((p) => {
                  return (
                    <div className="card border-0 px-1 rounded" key={p._id}>
                      <img
                        style={{ height: 250 }}
                        src={makeImage(p.photo)}
                        className="card-img-top"
                        alt={p.name}
                      />
                      <div className="card-body">
                        <Link
                          to={`/productdetails/${p._id}`}
                          className="card-title h5 text-black text-center"
                        >
                          {p.name}
                        </Link>
                        <p className="card-text text-center  fw-bold text-secondary fs-4">
                          {p.price}$
                        </p>
                      </div>
                    </div>
                  );
                })}

                {/* <div className="card  border-0 px-1 rounded">
                                    <img style={{ height: 250 }} src={filteredProducts[1].image} className="card-img-top " alt={filteredProducts[1].id} />
                                    <div className="card-body">
                                         <Link to={`/productdetails/${filteredProducts[1].id}`}   className="card-title h5 text-black text-center">{filteredProducts[1].name}</Link>
                                        <p className="card-text text-center fw-bold text-secondary fs-4">{filteredProducts[1].price}</p>
                                    </div>
                                </div>
                                <div className="card  border-0 px-1 rounded">
                                    <img style={{ height: 250 }} src={filteredProducts[3].image} className="card-img-top img-fluid" alt={filteredProducts[3].id} />
                                    <div className="card-body">
                                         <Link to={`/productdetails/${filteredProducts[3].id}`}   className="card-title h5 text-black text-center">{filteredProducts[3].name}</Link>
                                        <p className="card-text text-center fw-bold text-secondary fs-4">{filteredProducts[3].price}</p>
                                    </div>
                                </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
