import './LogIn.css'
import { FormEvent, useState } from 'react'

interface User {
  email: string,
  password: string
}
const LogIn = () => {

  const [user, setUser] = useState<User>({
    email: '',
    password: ''
  })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log(user)
  }
  
  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>

        <label className="login-label" htmlFor="email">Email:</label><br />

        <input className="login-input" type="text" id="email" name="email" autoComplete="on" placeholder="youremail@you.com" onChange={(event) => { setUser({ ...user, email: event.target.value }) }} /><br />

        <label className="login-label" htmlFor="password">Password:</label><br />

        <input className="login-input" type="text" id="password" name="password" placeholder="Password" onChange={(event) => { setUser({ ...user, password: event.target.value }) }} /><br /><br />

        <button className='login-btn' type="submit" defaultValue="Submit">Log In</button>
      </form>

    </>
  )
}
export default LogIn