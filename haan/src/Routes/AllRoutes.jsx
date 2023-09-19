import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'
import Product from '../components/product'


function AllRoutes() {
  return (
    <Routes>
        {/* /*<Route path='/' element={<Home/>}></Route> */}
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
    </Routes>
  )
}

export default AllRoutes