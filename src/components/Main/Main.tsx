import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  About, Blog, Changelog, Contact, Home, Licenses, NotFound, Portfolio,
  PortfolioSingle, Product, Protect, Service, Services, Shop, StyleGuid, Team
} from '../../pages'

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
        element={<Services />}
      />
      <Route
        path='portfolio'
        element={<Portfolio />}
      />
      <Route
        path='team'
        element={<Team />}
      />
      <Route
        path='blog'
        element={<Blog />}
      />
      <Route
        path='contact'
        element={<Contact />}
      />
      <Route
        path='/*'
        element={<NotFound />}
      />
      <Route
        path='licenses'
        element={<Licenses />}
      />
      <Route
        path='changelog'
        element={<Changelog />}
      />
      <Route
        path='protect'
        element={<Protect />}
      />
      <Route
        path='style-guid'
        element={<StyleGuid />}
      />
      <Route
        path='product/:id'
        element={<Product />}
      />
      <Route
        path='service/:id'
        element={<Service />}
      />
      <Route
        path='portfolio-single/:id'
        element={<PortfolioSingle />}
      />
    </Routes>
  )
}

export default Main