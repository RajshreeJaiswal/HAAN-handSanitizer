import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'


function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
  )
}

export default AllRoutes