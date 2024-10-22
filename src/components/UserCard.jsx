import React from 'react'
import { Link } from 'react-router-dom'
import { Person,ChatDots,PersonAdd } from 'react-bootstrap-icons'
function UserCard({user,getUsers}) {
  return (
    <div className='user-card'>
        <div className="userIcon">
            <Person />
        </div>
        <h1>{user.username}</h1>
        <p>{user.email}</p>
        <div className="userStats">
          <div className="followers">
            <PersonAdd />
            <p>{user.followers_count}</p>
          </div>
          <div className="comments">
            <ChatDots />
            <p>{5}</p>
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