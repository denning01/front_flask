import React from 'react'
import { Link } from 'react-router-dom'
import { Person,ChatDots,PersonAdd } from 'react-bootstrap-icons'
function UserCard({user}) {
  return (
    <div className='user-card'>
        <div className="userIcon">
            <Person />
        </div>
        <h1>{user.name}</h1>
        <div className="userStats">
          <div className="followers">
            <PersonAdd />
            <p>{user.followers}</p>
          </div>
          <div className="comments">
            <ChatDots />
            <p>{user.total_comments}</p>
          </div>
        </div>
        <div className="buttons">
            <Link to={`/profile`}>View Profile</Link>
            <button>Follow</button>
        </div>
    </div>
  )
}

export default UserCard