import React from 'react'
import { Person,ChatDots} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
function GlobalPostCard({posts}) {
  return (
    <div className='global-post-card'>
        <Link to={`/post/${posts.id}`}>
        <div className='global-post-card-header'>
            {/* <img src={posts.image} alt="" /> */}
            <h1>{posts.title.substring(0,30)}...</h1>
            <p>{posts.content.substring(0,100)}...</p>
            <div className="meta">
                <div className="author">
                    <Person />
                    <p>{posts.author}</p>
                </div>
                <div className="comments">
                    <ChatDots />
                    <p>20</p>
                </div>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default GlobalPostCard