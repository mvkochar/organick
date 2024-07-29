import React from 'react'
import './BlogItem.css'

type BlogItemProps = {
    id: number
    image: string
    date: number
    month: string
    authorName: string
    title: string
    description: string
}

const BlogItem = ({ id, image, date, month, authorName, title, description }: BlogItemProps) => {
    return (
        <div className='blog-item'>
            <div className="blog-item-main" style={{background: `url("${image}") no-repeat`}}>
                <div className="blog-item-date"><span>{date}</span><br />{month}</div>
            </div>
            <div className="blog-item-info">
                <div className="blog-item-author">By {authorName}</div>
                <h3 className="blog-item-title">{title}</h3>
                <p className="blog-item-desc">{description}</p>
                <div className="action-wr d-f jc-sb align-center action-wr__light">
                    <div className="action-text">Read More</div>
                    <a><img src="/images/arrow.png" alt="Arrow" /></a>
                </div>
            </div>
        </div>
    )
}

export default BlogItem