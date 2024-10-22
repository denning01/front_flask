import React from 'react'
import UserCard from './UserCard'
import { useUsersStore } from '../stores/usersStore'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'

function Users() {
 
  const [users,setUsers] = useState ([]) 
  const getUsers = async ()=>{
    const res = await fetch('https://demo-flask-app-1kry.onrender.com/users')
    const data = await res.json()
    console.log(data)
    setUsers(data)
  }

  useEffect(()=>{
    getUsers()
  },[])
  return (
    <>
    <Navbar />
    <div className='users'>
        {users.map((user)=>(
            <UserCard key={user.id} user={user} getUsers= {getUsers} />
        ))}
    </div>
    </>
  )
}

export default Users