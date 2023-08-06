import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import Dashboard from './Dashboard'
export default function Router() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/*'    element={<Frontend />} />
        <Route path='/auth/*'  element={<Auth />} />
        <Route path='/dashboard/*'  element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
