import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Post from './Post'

const AllRoute = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/post' element={<Post/>} />
    </Routes>
      
    </div>
  )
}

export default AllRoute
