import './SignUp.css'
import * as React from 'react';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { KCLightBrown } from '../../Images';


const SignUp = () => {
  const [user, setUser] = useState({
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
  }


  return (
    <>
      <div id='rightHalfSU'></div>
      <div id='leftHalfSU' className='p-1 md:p-16 lg:p-20 xl:p-24'>
        <div>
          <img className='img-logo-signup' src={KCLightBrown} height={200} width={200} />
        </div>
        <form action="action_page.php" onSubmit={handleSubmit}>
          <div className="container">
            <h1 className='signup-header'>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <input type="text" placeholder="Enter Email" name="email" required onChange={(event) => {
              setUser({ ...user, email: event.target.value })
            }} className='signin-input' />

            <input type="password" placeholder="Enter Password" name="password" required onChange={(event) => {
              setUser({ ...user, password: event.target.value })
            }} className='signin-input' />

            <div className="clearfix">
              <button type="submit" className="signupbtn">Sign Up</button>
            </div>
            <Link className="account px-0" to="/login">Already have an account? Login Here!</Link>
          </div>
        </form>
      </div>
    </>
  )
}
export default SignUp