import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Blog, Contact, Home, NotFound, Portfolio, Services, Shop, Team } from '../../pages'

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
      <Route
        path='contact'
        element={<Contact/>}
      />
      <Route
        path='/*'
        element={<NotFound/>}
      />
    </Routes>
  )
}

export default Main