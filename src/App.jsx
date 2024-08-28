import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from "./Components/Home/Layout/Layout"
import Landing from './Components/Home/Landing/Landing'
import StuLayout from './Components/Student/StuLayout/StuLayout'
import Signup from './Components/Student/Signup/Signup'
import Signin from './Components/Student/Signin/Signin'
import AdLayout from './Components/Ad/AdLayout.jsx/AdLayout'
import Admin from './Components/Ad/Admin/Admin'

const App = () => {
  return (
    <>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route path='/' element={<Landing/>} />
    <Route path='/home' element={<Landing/>} />
    </Route>

    <Route path='/user' element={<StuLayout/>}>

    <Route path='/user/signin' element={<Signin/>}  />
    <Route path='/user/signup' element={<Signup/>}/>
    
    </Route>
    <Route path='/admin/signin'element={<AdLayout/>} >
    {/* <Route path='/admin/signin' element={<Navigate to={Admin}/>}/> */}
    </Route>
    </Routes>

    </>
  )
}

export default App