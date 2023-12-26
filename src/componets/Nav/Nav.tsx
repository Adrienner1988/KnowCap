import './Nav.css'
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineAddAPhoto } from "react-icons/md"; 
import { useState } from 'react'; 
import UseAuth from '../../componets/UseAuth/UseAuth';

const Nav = () => {
  const { user, handleSignOut } = UseAuth();

  const [ menuOpen, setMenuOpen] = useState(false)

  const handleClick = () =>{
    setMenuOpen(!menuOpen)
  }

  return (
    <>
     <nav>
    <Link to={"/"} className='title'>Know Cap</Link>
    <div className='menu' onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
  
    </div>
    <ul className={menuOpen ? 'open' : ''}>
      <li><NavLink to={"/"}>Home</NavLink></li>

      <li><NavLink to={'/search'}>Product Search</NavLink></li>

      <li><NavLink to={'/post'}>Create Post <MdOutlineAddAPhoto /></NavLink></li>

      <li><NavLink to={'/beat'}>The Beat</NavLink></li>

      <li><NavLink to={'/profile'}>Profile</NavLink></li>

      <li className='user-name'>{user.email}</li>

      <li><NavLink to={'/login'} onClick={handleSignOut}>Log Out</NavLink></li>
    </ul>
    </nav>
    </>
  )
}
export default Nav



