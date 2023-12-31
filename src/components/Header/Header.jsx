import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
          <nav className='header'>
            <h2>Knowledge Cafe</h2>
            <div>
            <div id='nav'>
            <a href=''>Home</a>
            <a href=''>Blogs</a>
            <a href=''>Help</a>
            <a href=''>Login</a>
            </div>
            <img src='https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80' alt='' />
            </div>
        </nav>
        <hr />
        </>
    );
};

export default Header;