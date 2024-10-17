import React from 'react'
import UserCard from './UserCard'
import { useUsersStore } from '../stores/usersStore'
import { useEffect } from 'react'
import Navbar from './Navbar'

function Users() {
  const {users,setUsers} = useUsersStore()

  const getUsers = async ()=>{
    const res = await fetch('http://localhost:5000/users')
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
            <UserCard key={user.id} user={user} />
        ))}
    </div>
    </>
  )
}

export default Users