import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function NavBar() {
    const navigate = useNavigate();
    const onLogout = () =>{
        //TODO
        navigate('/login')
    }

    return (
            <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <nav>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px', fontWeight: 'bold' }}>Movie Reviews</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>All Movies</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>My Reviews</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Shared With Me</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>All Reviews</a>
      </nav>
      <div>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Edit Profile</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', marginRight: '20px' }}>Change Password</a>
        <button href="#" style={{ backgroundColor : '#333' , color: '#fff', textDecoration: 'none' }} onClick={onLogout}>Logout</button>
      </div>
    </header>
    )
}

export default NavBar
