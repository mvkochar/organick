import React from 'react'
import './css/Product.css'
import { useParams } from 'react-router-dom'
import ProductsList from '../components/ProductsList/ProductsList'
import Newsletter from '../components/Newsletter/Newsletter'
import ProductsItem from '../components/ProductsItem/ProductsItem'

type ProductProps = {
    handleProductsCount: ()=>void
}

const Product = ({handleProductsCount}:ProductProps) => {
    const { id } = useParams<string>()
    let a = id ? id : '0'
    let index = parseInt(a)

    const currentProduct = ProductsList[index]
    let rating = currentProduct.rating

    return (
        <>
            <main className='product-main'>
                <h1 className="product-main-title">Shop Single</h1>
            </main>
            <div className="product-content d-f align-center">
                <div><img src={currentProduct.image} alt="product" width={591} height={563} /></div>
                <div>
                    <h2 className="product-title">{currentProduct.title}</h2>
                    <div className="product-item-rating d-f">
                        {
                            rating === 0 ?
                                <>
                                    <div><img src="/images/unstar.png" alt="unstar" /></div>
                                    <div><img src="/images/unstar.png" alt="unstar" /></div>
                                    <div><img src="/images/unstar.png" alt="unstar" /></div>
                                    <div><img src="/images/unstar.png" alt="unstar" /></div>
                                    <div><img src="/images/unstar.png" alt="unstar" /></div>
                                </>
                                : rating === 1 ?
                                    <>
                                        <div><img src="/images/star.png" alt="star" /></div>
                                        <div><img src="/images/unstar.png" alt="unstar" /></div>
                                        <div><img src="/images/unstar.png" alt="unstar" /></div>
                                        <div><img src="/images/unstar.png" alt="unstar" /></div>
                                        <div><img src="/images/unstar.png" alt="unstar" /></div>
                                    </>
                                    : rating === 2 ?
                                        <>
                                            <div><img src="/images/star.png" alt="star" /></div>
                                            <div><img src="/images/star.png" alt="star" /></div>
                                            <div><img src="/images/unstar.png" alt="unstar" /></div>
                                            <div><img src="/images/unstar.png" alt="unstar" /></div>
                                            <div><img src="/images/unstar.png" alt="unstar" /></div>
                                        </>
                                        : rating === 3 ?
                                            <>
                                                <div><img src="/images/star.png" alt="star" /></div>
                                                <div><img src="/images/star.png" alt="star" /></div>
                                                <div><img src="/images/star.png" alt="star" /></div>
                                                <div><img src="/images/unstar.png" alt="unstar" /></div>
                                                <div><img src="/images/unstar.png" alt="unstar" /></div>
                                            </>
                                            : rating === 4 ?
                                                <>
                                                    <div><img src="/images/star.png" alt="star" /></div>
                                                    <div><img src="/images/star.png" alt="star" /></div>
                                                    <div><img src="/images/star.png" alt="star" /></div>
                                                    <div><img src="/images/star.png" alt="star" /></div>
                                                    <div><img src="/images/unstar.png" alt="unstar" /></div>
                                                </>
                                                : rating === 5 ?
                                                    <>
                                                        <div><img src="/images/star.png" alt="star" /></div>
                                                        <div><img src="/images/star.png" alt="star" /></div>
                                                        <div><img src="/images/star.png" alt="star" /></div>
                                                        <div><img src="/images/star.png" alt="star" /></div>
                                                        <div><img src="/images/star.png" alt="star" /></div>
                                                    </>
                                                    : null
                        }
                    </div>
                    <div className="product-price d-f align-center">
                        {
                            currentProduct.isSale ?
                                <>
                                    <div className="old-price">${currentProduct.price}</div>
                                    <div className="current-price">${currentProduct.salePrice}</div>
                                </>
                                : <div className="current-price">${currentProduct.price}</div>
                        }
                    </div>
                    <div className="product-cat">{currentProduct.category}</div>
                    <p className="product-desc">
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                    <div className="product-quantity d-f align-center">
                        <div className="product-quantity-title">Quantity:</div>
                        <textarea className="product-quantity-count" placeholder='1'></textarea>
                        <div className="action-wr d-f jc-sb align-center action-wr__dark">
                            <div className="action-text">Add to Cart</div>
                            <button className='btn-clear d-b' onClick={handleProductsCount}>
                                <img src="/images/arrow.png" alt="Arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-related">
                <h2 className="product-related-title">Related Products</h2>
                <div className="product-related-box d-f jc-sb">
                    {
                        ProductsList.filter((elem) => elem.id !== index).filter((elem) => elem.id < 4).map((product) => {
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
            </div>
            <Newsletter />
            <div style={{ marginBottom: "120px" }}></div>
        </>
    )
}

export default Product