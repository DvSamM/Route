// import React from 'react'
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Admin from "../Admin/Admin"

const AdLayout = () => {
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
                <h1 className="welText" style={{textAlign:"center", color:"purple", fontWeight:"bolder"}}>ADMIN SIGNIN</h1>
            <div class="loader"></div>
 
            </>
             

        ) : (
            <>  
            <Admin/>      
            <Outlet/>
            
            </>
        )

        }
    </>
  )
}

export default AdLayout