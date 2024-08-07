import React from 'react'
import './css/BlogSingle.css'
import { useParams } from 'react-router-dom'
import PostsList from '../components/PostsList/PotstsList'
import Newsletter from '../components/Newsletter/Newsletter'

const BlogSingle = () => {
    const { id } = useParams<string>()
    let a = id ? id : '0'
    let index = parseInt(a)

    const currentPost = PostsList[index]

    return (
        <>
            <div className="pos-r" style={{ height: "1144px" }}>
                <div><img src="/images/blog-single.png" alt="blog-single" /></div>
                <div className="blog-single-info">
                    <div className="blog-single-details d-f align-center">
                        <div className="post-date"><span>Posted On:</span> {currentPost.date}, {currentPost.month}</div>
                        <div className="post-author">By {currentPost.authorName}</div>
                    </div>
                    <h1 className="blog-single-title">{currentPost.title}</h1>
                    <p className="blog-single-desc">
                        {currentPost.description}
                    </p>
                </div>
            </div>
            <div className={currentPost.id === 3 ? "blog-single-content" : "d-n"} >
                <p className="blog-single-desc content-desc">
                    Uniquely matrix economically sound value through cooperative technology.
                    Competently parallel task fully researched data and enterprise process improvements.
                    Collaboratively expedite quality manufactured products via client-focused results quickly
                    communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply
                    chains rather than friction technology.
                </p>
                <h2 className="content-title">Preferred Form of Vitamin D?</h2>
                <p className="blog-single-desc content-desc">
                    It is a long established fact that a reader will be distracted by the readable content of
                    a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using 'Content here, content here', making it
                    look like readable English.
                </p>
                <ul className="content-list">
                    <li>Publishing packages and web pageLorem Ipsum as their default</li>
                    <li>Content here, content here', making it look like readable</li>
                    <li>Packages and web pageLorem Ipsum as their default</li>
                </ul>
                <p className="content-quote">
                    “The first rule of any organic used in a business is that nature applied to an efficient operation
                    will magnify the efficiency. The second is that organic applied to an inefficient operation
                    will magnify the health.”
                </p>
                <h4 className="content-subtitle">Make perfect organic product with us</h4>
                <p className="blog-single-desc content-desc">
                    It is a long established fact that a reader will be distracted by the readable content of a page 
                    when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                    distribution of letters, as opposed to using 'Content here, content here', making it look 
                    like readable English.
                </p>
                <ol className='content-list'>
                    <li>Publishing packages and web pageLorem Ipsum as their default</li>
                    <li>Content here, content here', making it look like readable</li>
                    <li>Packages and web pageLorem Ipsum as their default</li>
                    <li>more-or-less normal distribution of letters</li>
                </ol>
            </div>
            <Newsletter />
            <div style={{ marginBottom: "120px" }}></div>
        </>
    )
}

export default BlogSingle