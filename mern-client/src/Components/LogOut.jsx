import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';

const LogOut = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { logOut } = useContext(AuthContext);
    const handlelogout = () => {
        logOut().then(() => {
            // Sign-out successful.
            alert('sign-out successfull');
            navigate(from, { replace: true });
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handlelogout}>Logout</button>
        </div>
    )
}

export default LogOut