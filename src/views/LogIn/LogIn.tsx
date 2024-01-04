import './LogIn.css';
import * as React from 'react';
import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";


const LogIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user)

    // email/password sign in
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`${errorCode}: ${errorMessage}`)
      });
  };

  // Google sign in
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      {/* Image */}
      <div id='leftHalf'></div>

      {/* Login */}
      <div id='rightHalf'>
        <img className='img-logo-login' src='src/Images/KCLightBrwn.png' height={250} width={250} />
        <div className="login-label">
          <div className="login-container">
            <h3 className='login'>LOGIN</h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <input className='login-email' onChange={(event) => {
            setUser({ ...user, email: event.target.value })
          }}
            placeholder='Enter Email'
            id='email'
            name='email'
            autoComplete='current-email' required />

          <input className='login-password' onChange={(event) => {
            setUser({ ...user, password: event.target.value })
          }}
            placeholder='Enter Password'
            name="password"
            type="password"
            id="password"
            autoComplete="current-password" required/>
          <button className='login-btn'>login</button>

          <div className='login-form'>
            <button id='googleBtn' onClick={signInWithGoogle} className='google-btn'><FcGoogle /> Log In with Google</button>
          </div>

          <div className='signUp-msg'>
            <Link to="/signup">{"Don't have an account? Sign Up Here!"}</Link>
          </div>
        </form>
      </div>

    </>
  );
}
export default LogIn