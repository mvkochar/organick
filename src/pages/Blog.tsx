import React from 'react'
import './css/Blog.css'
import Newsletter from '../components/Newsletter/Newsletter'
import PostsList from '../components/PostsList/PotstsList'
import BlogItem from '../components/BlogItem/BlogItem'

const Blog = () => {
    return (
        <>
            <main className='blog-main'>
                <h1 className="blog-title">Recent News</h1>
            </main>
            <div className="blog-content d-f jc-sb">
                {
                    PostsList.map((post) => {
                        return (
                            <BlogItem
                                id={post.id}
                                image={post.image}
                                date={post.date}
                                month={post.month}
                                authorName={post.authorName}
                                title={post.title}
                                description={post.description}
                            />
                        )
                    })
                }
            </div>
            <Newsletter />
            <div style={{ marginBottom: "120px" }}></div>
        </>
    )
}

export default Blog