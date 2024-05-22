import "./Nav.css";
import { NavLink } from "react-router-dom";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { useState } from "react";
import UseAuth from "../UseAuth/UseAuth"; 
// useAuth is a custom hook for handling authentication
import { KCBlack } from "../../Images";

const Nav = () => {
  // Destructuring user and handleSignOut from the custom authentication hook
  const { user, handleSignOut } = UseAuth();

  // State to manage the open/closed state of the menu
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    // Function to toggle the menuOpen state setting it to false or not open
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        <img src={KCBlack} height={175} width={175}/>
  
        <div className="menu" onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Assigning the ul element to open when menuOpen is true, and removes the class wheen it's when false */}
        <ul className= {menuOpen ? "open" : ""} >
          {/* Conditional rendering based on user authentication */}
          {/* If logged in only show user log Out */}
          {user.email ? (
            <>
              <li>
                <NavLink to={"/meaning"}>Home</NavLink>
              </li>

              <li>
                <NavLink to={"/search"}>Product Search</NavLink>
              </li>

              <li>
                <NavLink to={"/post"}>
                  Create Post <MdOutlineAddAPhoto />
                </NavLink>
              </li>

              <li>
                <NavLink to={"/beat"}>The Beat</NavLink>
              </li>

              <li>
                <NavLink to={"/profile"}>Profile</NavLink>
              </li>

              {/* <li>
                <NavLink to={"/form"}>Profile Form</NavLink>
              </li> */}

              <li className="user-name">{user.email}</li>

              <li>
                <NavLink to={"/"} onClick={handleSignOut}>
                  Log Out
                </NavLink>
              </li>
            </>
          ) : (
            // If not logged in show sign up and login buttons
            <>
              <li>
                <NavLink to={"/"}>Login</NavLink>
              </li>

              <li>
                <NavLink to={"/signup"}>Sign Up</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};
export default Nav;
