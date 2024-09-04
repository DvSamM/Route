import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Signup = () => {
  let studentArray = []
  const Navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')

  

  const handleMail = (e) =>{
    setEmail(e.target.value)    
  }
  const handlePass = (e) =>{
    setPass(e.target.value)
  }

  const handleSignup = (e) =>{

    let studentArray = JSON.parse(localStorage.getItem("userInfo")) || [];

    e.preventDefault()
    let user = {email, password}
    studentArray.push(user)
    localStorage.setItem("userInfo", JSON.stringify(studentArray))
    console.log(user)
    Navigate("/user/signin");

    alert("Signup successful! You can now sign in.");
  }


  return (
    <>
          <main className="form-signin w-75  m-auto mt-5 shadow-lg p-3 mb-5 bg-body rounded">
        <form onSubmit={handleSignup}>
          <h6>SIGN UP IF YOU DON'T AN ACCOUNT</h6>
          <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control" required
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={handleMail}
            />
            <label for="floatingInput">Email</label>
          </div>{" "}
          <br />
          <div className="form-floating">
            <input
              type="password"
              className="form-control" required
              id="floatingInput"
              value={password}
              onChange={handlePass}
            />
            <label for="floatingInput">Password</label>
          </div>{" "}
          <br />
          <div className="form-floating">
            <input
              type="password"
              className="form-control" required
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Confirm Password</label>
          </div>
          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
            <p className="mt-2">
              Already have an Account?{" "}
              <a href="" style={{ color: "blue" }}>
                <Link to="/user/signin">
                Sign In
                </Link>
              </a>
            </p>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign Up
          </button>
          <p className="mt-5 mb-3 text-body-secondary">
            &copy; SAM'S COMPANY, 2024
          </p>
        </form>
      </main>

    </>
  )
}

export default Signup