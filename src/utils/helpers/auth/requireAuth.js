import React from 'react'
import { Outlet } from 'react-router-dom'

export default function RequireAuth({ children }) {
    return (
        <div>{children}</div>
    )
}
