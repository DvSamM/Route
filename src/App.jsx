import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from "./Components/Home/Layout/Layout"
import Landing from './Components/Home/Landing/Landing'
import StuLayout from './Components/Student/StuLayout/StuLayout'
import Signup from './Components/Student/Signup/Signup'
import Signin from './Components/Student/Signin/Signin'
import AdLayout from './Components/Ad/AdLayout.jsx/AdLayout'
import Notfound from './Components/404/Notfound'
import Dashboard from './Components/Dashboard/Dashboard'
import AdDash from './Components/Ad/AdDash/AdDash';

const App = () => {
  return (
    <>  
  <Routes>
    <Route path='*' element={<Notfound/>}/>
    <Route path='/' element={<Layout/>}>
    <Route path='/' element={<Landing/>} />
    <Route path='/home' element={<Landing/>} />
    </Route>

    <Route path='/user' element={<StuLayout/>}>

    <Route path='/user/' element={<Navigate to={Signin}/>}  />
    <Route path='/user/signin' element={<Signin/>}  />
    <Route path='/user/signup' element={<Signup/>}/>
    
    </Route>

    <Route path='/admin/signin'element={<AdLayout/>} >
  
    </Route>

    <Route path='/admin/dashboard' element={<AdDash/>}/>

    <Route>
    <Route path='/dashboard/:email' element={<Dashboard />}/>
    </Route>

    </Routes>

    </>
  )
}

export default App