import React from 'react'
import { useEffect } from 'react'
import { usePostsStore } from '../stores/postsStore'
import GlobalPostCard from './GlobalPostCard'
import Navbar from './Navbar'
function GlobalPosts() {
    const { posts, setPosts } = usePostsStore()
    const fetchGlobalPosts = async () => {
        const response = await fetch('http://localhost:5000/posts')
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
        {posts.map((post) => (
            <GlobalPostCard key={post.id} posts={post} />
        ))}
    </div>
    </>
  )
}

export default GlobalPosts