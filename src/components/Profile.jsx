import React from 'react'
import {Person,CardList,PersonFillDown,PersonFillUp,ChatDots} from 'react-bootstrap-icons'
import { useEffect } from 'react'
import { usePostsStore } from '../stores/postsStore'  
import GlobalPostCard from './GlobalPostCard'
import Navbar from './Navbar'

function Profile() {
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
    <Navbar/>
    <div className='profile'>
      <div className="profile-header">
        <div className="profile-image">
          <Person/>
        </div>
        <div className="profile-info">
          <h1>John Doe</h1>
          <p>john.doe@example.com</p>
          <div className="buttons">
            <button>Follow</button>
          </div>
        </div>
      </div>
      <div className="stats">
        <div className="stat">
          <p className='icon'><CardList/></p>
          <p>100</p>
        </div>
        <div className="stat">
          <p className='icon'><PersonFillDown/></p>
          <p>100</p>
        </div>
        <div className="stat">
          <p className='icon'><PersonFillUp/></p>
          <p>100</p>
        </div>
        <div className="stat">
          <p className='icon'><ChatDots/></p>
          <p>100</p>
        </div>
      </div>
      <div className='global-posts'>
        {posts.map((post) => (
            <GlobalPostCard key={post.id} posts={post} />
        ))}
    </div>
    </div>
    </>
  )
}

export default Profile