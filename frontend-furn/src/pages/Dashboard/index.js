import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import Home from '../Frontend/Home'
// import About from './About'
// import Contact from './Contact'
// import ProductDetails from './ProductDetails'
// import AllProducts from './AllProducts'
import Dash from './Dash'
import UpdateProduct from '../../components/Dashboard/UpdateProduct'
import { useAuth } from '../../context/AuthContext'




export default function Index() {
 
const {user} = useAuth()

console.log(user.email)
if (!user.email) {
    return <Navigate to={"/auth/login"} />;
  } else {
    
    
    return <Routes>
        <Route path='/' element={<Dash />} />
        <Route path='/admin/update/:slug' element={<UpdateProduct />} />
        {/* <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path={`/productdetails/:productId`} element={<ProductDetails />} />
      <Route path={`/products`} element={<AllProducts />} /> */}
    </Routes>
    }
}
