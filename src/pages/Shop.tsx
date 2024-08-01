import React from 'react'
import './css/Shop.css'
import Newsletter from '../components/Newsletter/Newsletter'
import ProductsList from '../components/ProductsList/ProductsList'
import ProductsItem from '../components/ProductsItem/ProductsItem'

const Shop = () => {
    return (
        <>
            <main className='shop-main'>
                <h1 className="shop-title">Shop</h1>
            </main>
            <div className="shop-box d-f jc-sb">
                {
                    ProductsList.map((product)=> {
                        return (
                            <ProductsItem
                            id={product.id}
                            category={product.category}
                            image={product.image}
                            title={product.title}
                            isSale={product.isSale}
                            salePrice={product.salePrice}
                            price={product.price}
                            rating={product.rating}
                          />
                        )
                    })
                }
            </div>
            <Newsletter/>
            <div style={{ marginBottom: "120px" }}></div>
        </>
    )
}

export default Shop