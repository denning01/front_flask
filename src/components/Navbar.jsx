import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { BoxArrowInLeft ,PersonAdd,List} from 'react-bootstrap-icons'
function Navbar() {
  const [showMobileNav,setShowMobileNav] = useState(false)

  const handleShowMobileNav = () => {
    setShowMobileNav(!showMobileNav)
  }
  return (
    <div className='navbar'>
    <h1 className='logo'>Travel <span>Journal</span></h1>
    
    <nav>
      <ul>
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/users'}>Other creators</Link></li>
        <li><Link to={'/myposts'}>My journals</Link></li>
        <li><Link to={'/updateprofile'}>My profile</Link></li>
        <li className='RegisterBtn'><Link to={'/register'} className='btn'>
        Register
        <PersonAdd/>
        </Link></li>
        <li className='LoginBtn'><Link to={'/login'} className='btn'>
        <BoxArrowInLeft/>
        Login</Link>
        </li>
      </ul>
    </nav>
    <div className="hamburger" onClick={handleShowMobileNav}>
      <List/>
    </div>
    {showMobileNav && ( 
    <div className="mobile-nav">
      <ul>
        <li><Link to={'/home'}>Home</Link></li>
        <li><Link to={'/users'}>Other creators</Link></li>
        <li><Link to={'/myposts'}>My journals</Link></li>
        <li><Link to={'/updateprofile'}>My profile</Link></li>
        <li className='RegisterBtn'><Link to={'/register'} className='btn'>
        Register
        <PersonAdd/>
        </Link></li>
      </ul>
    </div>)}
</div>
  )
}

export default Navbar