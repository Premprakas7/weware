import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Post from './Post'
import Update from './Update'

const AllRoute = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/post' element={<Post/>} />
        <Route path='/edit/:id' element={<Update/>} />

    </Routes>
      
    </div>
  )
}

export default AllRoute
