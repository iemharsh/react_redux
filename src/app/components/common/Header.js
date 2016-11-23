import React from 'react';
import { Link, IndexLink} from 'react-router';
const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <ul className="nav nav-pills">
                <li><IndexLink to="/" activeClassName="active" >HomePage</IndexLink></li>
                <li><Link to="/courses" activeClassName="active">Courses</Link></li>
                <li><Link to="/about" activeClassName="active">About</Link></li>
            </ul>
        </nav>
    );
};

export default Header;