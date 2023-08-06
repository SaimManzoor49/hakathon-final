import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Home from '../Frontend/Home'
import About from './About'
import Contact from './Contact'
import ProductDetails from './ProductDetails'
import AllProducts from './AllProducts'




export default function Index() {
 
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path={`/productdetails/:productId`} element={<ProductDetails />} />
        <Route path={`/products`} element={<AllProducts />} />
    </Routes>
    <Footer />
    </>
  )
}
