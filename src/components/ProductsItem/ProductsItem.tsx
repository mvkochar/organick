import React from 'react'
import './ProductsItem.css'
import { Link } from 'react-router-dom'

type ProductsItemProps = {
    id: number
    category: string
    image: string
    title: string
    isSale: boolean
    salePrice: string
    price: string
    rating: number
    bgcolor?: string
}

const ProductsItem = ({ id, category, image, title, isSale,
    salePrice, price, rating, bgcolor = "#F9F8F8" }: ProductsItemProps) => {
    return (
        <div className='products-item d-f jc-sb' style={{ backgroundColor: bgcolor }}>
            <div className="products-item-category">{category}</div>
            <div><Link to={`/product/${id}`}><img src={image} alt="product" width={335} height={324} /></Link></div>
            <div className="products-item-title">{title}</div>
            <div className="products-item-info d-f jc-sb align-center">
                <div className="products-item-price d-f align-center">
                    {
                        isSale ?
                            <>
                                <div className="old-price">${price}</div>
                                <div className="current-price">${salePrice}</div>
                            </>
                            : <div className="current-price">${price}</div>
                    }
                </div>
                <div className="products-item-rating d-f">
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
            </div>
        </div>
    )
}

export default ProductsItem