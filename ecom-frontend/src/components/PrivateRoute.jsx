import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ publicPage = false, adminOnly = false }) => {
    const { user } = useSelector((state) => state.auth);
    const isAdmin = user && user?.roles?.includes("ROLE_ADMIN");

    if (publicPage) {
        return user ? <Navigate to="/" /> : <Outlet />
    }

    if (adminOnly) {
        if (!isAdmin) {
            return <Navigate to="/"/>
        }
    }
    
    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute