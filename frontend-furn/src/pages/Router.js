import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Frontend from '../pages/Frontend'
import Dashboard from '../pages/Dashboard'
import Auth from '../pages/Auth'

export default function Router() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='/auth/*' element={<Auth />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
