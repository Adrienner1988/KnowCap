import './LogIn.css';
import * as React from 'react';
import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile} from 'firebase/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";


const LogIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  
  const googleProvider = new GoogleAuthProvider();
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
  }

  // Google sign in
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
  
      // Check if the user has a photoURL
      if (user.photoURL) {
        console.log("User Photo URL:", user.photoURL);
      } else {
        console.log("User does not have a Photo URL");
      }
  
      // Update user profile with additional information (if needed)
      await updateProfile(user, {
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
  
      navigate('/');
    } catch (error) {
      alert("Error signing in with Google");
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
            autoComplete="current-password" required />
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
  )
}
export default LogIn