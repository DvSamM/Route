// import React from 'react'
import { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar"
import { Outlet } from "react-router-dom"

const Landing = () => {
    const [Loading, setLoading] = useState()
    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])
  return (
    <>
        {Loading ? (
            <>
                <h1 className="welText" style={{textAlign:"center", color:"purple", fontWeight:"bolder"}}>WELCOME TO SAM'S SCHOOL</h1>
            <div class="loader"></div>
 
            </>
             

        ) : (
            <>        
            <Navbar/>
            <Outlet/>
            
            </>
        )

        }
    </>
  )
}

export default Landing