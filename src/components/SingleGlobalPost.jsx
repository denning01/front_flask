import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import  empty from '../assets/empty.png'
import Navbar from './Navbar'
import { Person } from 'react-bootstrap-icons'
function SingleGlobalPost() {
    const { id } = useParams()
    const [post, setPost] = useState({})
    const fetchSinglePost = async () => {
        const response = await fetch(`http://localhost:5000/posts/${id}`)
        const data = await response.json()
        console.log(data)
        setPost(data)
    }
    useEffect(() => {
        fetchSinglePost()
    }, [id])
  return (
<>
    <Navbar/>
    {post?( 
    <div className='single-global-post'>
        <div className='single-global-post-header'>
        <h1>{post.title}</h1>
            <img src={post.image} alt="" /> 
            <div className="author">
              <div className="author-icon">
                <Person />
              </div>
              <div className="author-info">
                <h1>name</h1>
                <p>This is the description of the author</p>
              </div>
            </div>
            <p className='post-description'>{post.description}</p> 
        </div>
        <div className="comments">
          <h1>Comments</h1>
          <div className="addComment">
            <div className="addComment-icon"> <Person /> </div>
            <div className="addComment-info">
              <textarea placeholder='Add a comment' />
              <button>Add Comment</button>
            </div>
          </div>
          <div className="comment">
            <div className="comment-icon"> <Person /> </div>
            <div className="comment-info">
              <h1>name</h1>
              <p>This is the comment of the author</p>
            </div>
          </div>
        </div>
    </div>):(
      <div className='empty'>
        <img src={empty} alt="" />  
        <h1>Loading</h1>
      </div>
    
    )}
</>
  )
}

export default SingleGlobalPost