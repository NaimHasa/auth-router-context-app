import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.css';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-neutral">
                <div className="flex-1">
                    <a className="text-3xl font-bold text-gray-100 ">Network Solution BD</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-bold text-gray-100">
                        <Link to='/'>Home</Link>
                        <Link to='/login'>LogIn</Link>
                        <Link to='/register'>Register</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;