import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const App = () => {
   const [productsCount, setProductsCount] = React.useState(0)

   const heandleProductsCount = ()=> {
     setProductsCount((prevState) => {
      return (
        prevState + 1
      )
     })
   } 
   
  return (
    <>
      <Header productsCount={productsCount}/>
      <Main handleProductsCount={heandleProductsCount}/>
      <Footer/>
    </>
  )
}

export default App