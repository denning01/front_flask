import React, { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import  empty from '../assets/empty.png'
import Navbar from './Navbar'
import { Person } from 'react-bootstrap-icons'
function SingleGlobalPost() {
    const { id } = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [usercomment, setUserComment] = useState([])
    const fetchSinglePost = async () => {
        const response = await fetch(`https://demo-flask-app-1kry.onrender.com/posts/${id}`)
        const data = await response.json()
        console.log(data)
        setPost(data)
    }
    const fetchComments = async () => {
      const response = await fetch(`https://demo-flask-app-1kry.onrender.com/posts/${id}/comments`)
      const data = await response.json()
      console.log(data)
      setComments(data)
    }
    const handleSubmit = async () => {
      const newComment = {
        content: usercomment
      }
      let token = localStorage.getItem('token');
      const res = await fetch(`https://demo-flask-app-1kry.onrender.com/posts/${id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newComment),
      })
      const data = await res.json()
      console.log(data)
      fetchComments()
      setUsercomment('')
    }
    useEffect(() => {
        fetchSinglePost()
        fetchComments()
    }, [])
  return (
<>
    <Navbar/>
    {post?( 
    <div className='single-global-post'>
        <div className='single-global-post-header'>
        <h1>{post.title}</h1>
            <div className="author">
              <div className="author-icon">
                <Person />
              </div>
              <div className="author-info">
                <h1>{post.author}</h1>
                <p>This is the description of the author</p>
              </div>
            </div>
            <p className='post-description'>{post.content}</p> 
        </div>
        <div className="comments">
          <h1>Comments</h1>
          <div className="addComment">
            <div className="addComment-icon"> <Person /> </div>
            <div className="addComment-info">
              <textarea placeholder='Add a comment' value={usercomment}
              onChange={(e)=>{setUserComment(e.target.value)}} />
              <button onClick={handleSubmit}>Add Comment</button>
            </div>
          </div>
          {comments.map(comment => {
            return(
              <div className="comment" key={comment.id}>
                <div className="comment-icon">
                  <Person />
                </div>
                <div className="comment-info">
                  <h1>{comment.author}</h1>
                  <p>{comment.content}</p>
                </div>
              </div>
            )
          }
        )}
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