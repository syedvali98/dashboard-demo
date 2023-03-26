import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
    const nav = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token')){
            nav("/dashboard")
        }
        else{
            nav("/login")
        }
    }, [])
    return (
        <div>...loading</div>
    )
}
