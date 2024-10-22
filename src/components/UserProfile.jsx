import React from 'react'
import { useUsersStore } from '../stores/usersStore'
import { useEffect, useState } from 'react'
import { Person, CardList, PersonFillDown, PersonFillUp, ChatDots } from 'react-bootstrap-icons'
import Navbar from './Navbar'

function UserProfile({ user, assignUser }) {
  const users = useUsersStore((state) => state.users)
  const [userProfile, setUserProfile] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const token = localStorage.getItem('token')  // Retrieve the token only once

  useEffect(() => {
    async function fetchUserData() {
      if (!token) {
        console.error("No token found. Redirecting to login...");
        // Optionally, you can redirect the user to a login page here
        return;
      }
  
      try {
        const res = await fetch('https://demo-flask-app-1kry.onrender.com/profile', {
          headers: {
            'Authorization': `Bearer ${token}`, // Ensure correct formatting
          },
        });
  
        if (!res.ok) {
          if (res.status === 401) {
            console.error("Unauthorized: Invalid or expired token.");
            // Handle token expiration or invalid token here
            // Optionally redirect to login or show an error message
          } else {
            console.error(`Error ${res.status}: Failed to fetch user profile`);
          }
          return;
        }
  
        const data = await res.json();
        console.log(data);
        setUserProfile(data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      } finally {
        setIsLoading(false);
      }
    }
  
    fetchUserData();
  }, [token]);
  
  return (
    <>
      <Navbar />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='profile'>
          <div className="profile-header">
            <div className="profile-image">
              <Person />
            </div>
            <div className="profile-info">
              <h1>{userProfile.username}</h1> {/* Correct variable name */}
              <p>{userProfile.email}</p>
              <div className="buttons">
                <button>Follow</button>
              </div>
            </div>
          </div>
          <div className="stats">
            <div className="stat">
              <p className='icon'><CardList /></p>
              <p>100</p>
            </div>
            <div className="stat">
              <p className='icon'><PersonFillDown /></p>
              <p>100</p>
            </div>
            <div className="stat">
              <p className='icon'><PersonFillUp /></p>
              <p>100</p>
            </div>
            <div className="stat">
              <p className='icon'><ChatDots /></p>
              <p>100</p>
            </div>
          </div>
          <div className='global-posts'></div>
        </div>
      )}
    </>
  )
}

export default UserProfile
