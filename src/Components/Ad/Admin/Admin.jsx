import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  let adminArr = []
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    // console.log(email); 
   }
   const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    // console.log(password);
   }

   const handleParam = (e) => {
    e.preventDefault();
    let adminInfo = {email, password};
    adminArr.push(adminInfo);
    console.log(adminInfo);
    localStorage.setItem("admin", JSON.stringify(adminArr));
    Navigate("/admin/dashboard");
   }
  return (
    <>
          <main className="form-signin w-75  m-auto mt-5 shadow-lg p-3 mb-5 bg-body rounded">
        <form onSubmit={handleParam}>
          <h6>Admin Login Page</h6>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={handleEmailChange}
            />
            <label for="floatingInput">Admin Email</label>
          </div>{" "}
          <br />
          <div className="form-floating">
            <input
              type="password"
              className="form-control" required
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="form-check text-start my-3">
            <input
              className="form-check-input" required
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">
            &copy; SAM'S COMPANY, 2024
          </p>
        </form>
      </main>

    </>
  )
}

export default Admin