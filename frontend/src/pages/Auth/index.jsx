import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

export default function index() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}  />
      <Route path='/register' element={<Signup/>}  />
    </Routes>
    </>
  )
}
