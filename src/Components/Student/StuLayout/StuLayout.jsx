// import React from 'react'
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"

const StuLayout = () => {
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
                <h1 className="welText" style={{textAlign:"center", color:"purple", fontWeight:"bolder"}}>WELCOME TO YOUR PORTAL</h1>
            <div class="loader"></div>
 
            </>
             

        ) : (
            <>       
            <Outlet/>
            
            </>
        )

        }
    </>
  )
}

export default StuLayout