import './SignUp.css'
import * as React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate, Link } from 'react-router-dom';


const SignUp = () => {
  const [user, setUser] = useState({
    fName: '',
    lName: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        navigate('/login')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode}: ${errorMessage}`)
        // ..
      });
  };


  return (
    <>
      <div id='rightHalfSU'></div>
      <div id='leftHalfSU'>
        <div>
          <img className='img-logo-signup' src='src/Images/KCLightBrwn.png' height={200} width={200} />
        </div>
        <form action="action_page.php" onSubmit={handleSubmit}>
          <div className="container">
            <h1 className='signup-header'>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <input type="text" placeholder="Enter First Name" name="fname" required onChange={(event) => {
              setUser({ ...user, fName: event.target.value })
            }} className='signin-input'/>

            <input type="text" placeholder="Enter Last Name" name="lname" required onChange={(event) => {
              setUser({ ...user, lName: event.target.value })
            }} className='signin-input'/>

            <input type="text" placeholder="Enter Email" name="email" required onChange={(event) => {
              setUser({ ...user, email: event.target.value })
            }} className='signin-input'/>

            <input type="password" placeholder="Enter Password" name="password" required onChange={(event) => {
              setUser({ ...user, password: event.target.value })
            }} className='signin-input'/>

            <div className="clearfix">
              <Link className="account" to="/login">Already have an account? Login Here!</Link>
              <button type="submit" className="signupbtn">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </>

  );
}
export default SignUp