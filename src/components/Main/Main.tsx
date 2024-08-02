import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Blog, Home, Portfolio, Services, Shop, Team } from '../../pages'

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
      <Route
        path='portfolio'
        element={<Portfolio/>}
      />
      <Route
        path='team'
        element={<Team/>}
      />
      <Route
        path='blog'
        element={<Blog/>}
      />
    </Routes>
  )
}

export default Main