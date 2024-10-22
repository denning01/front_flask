import React from 'react'
import { useEffect } from 'react'
import { usePostsStore } from '../stores/postsStore'
import GlobalPostCard from './GlobalPostCard'
import Navbar from './Navbar'
function GlobalPosts() {
    const { posts, setPosts } = usePostsStore()
    const fetchGlobalPosts = async () => {
        const response = await fetch('https://demo-flask-app-1kry.onrender.com/posts')
        const data = await response.json()
        console.log(data)
        setPosts(data)
    }
    useEffect(() => {
        fetchGlobalPosts()
    }, [])
  return (
    <>
        <Navbar />
        <div className='global-posts'>
        {posts.map((post, index) => (
            <GlobalPostCard key={index} posts={post} />
        ))}
    </div>
    </>
  )
}

export default GlobalPosts