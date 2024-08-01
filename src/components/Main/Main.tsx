import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Home, Services, Shop } from '../../pages'

const Main = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='about'
        element={<About />}
      />
      <Route
        path='shop'
        element={<Shop />}
      />
      <Route
        path='services'
        element={<Services/>}
      />
    </Routes>
  )
}

export default Main