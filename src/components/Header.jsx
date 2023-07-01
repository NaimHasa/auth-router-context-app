import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.css';
import { authContext } from '../ConTaxt/UserContext';

const Header = () => {
    const { user, logOut } = useContext(authContext);
    // console.log('context', user);

    const logOutHandle = () => {
        logOut()
            .then(() => {

            })
            .catch();

    }
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
                    {user?.email && <span style={{ color: 'white' }}>Welcome {user.email}</span>}
                    {
                        user?.email ?
                            <button onClick={logOutHandle} className="btn btn-xs">Log Out</button>
                            : <Link to='/login'>
                                <button className="btn btn-xs">Log In</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;