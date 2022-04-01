import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Header.css'

const Header = () => {

    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ color: match ? "red" : "black" }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }

    return (
        <div className='header-container'>
            <h1>Welcome to my new Projects</h1>
            <nav>
                <CustomLink to={'/home'}>Home</CustomLink>
                <CustomLink to={'/orders'}>Orders</CustomLink>
            </nav>
        </div>
    );
};

export default Header;