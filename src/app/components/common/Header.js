import React from 'react';
import { Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
    console.log('loading: ' +loading);

    return (
        <div>
            <div>
                <nav className="navbar navbar-default">
                    <ul className="nav nav-pills">
                        <li><IndexLink to="/" activeClassName="active" >HomePage</IndexLink></li>
                        <li><Link to="/courses" activeClassName="active">Courses</Link></li>
                        <li><Link to="/about" activeClassName="active">About</Link></li>
                    </ul>

                    {loading && <LoadingDots interval={100} dots={20}/>}
                </nav>
            </div>
        </div>
    );
};

export default Header;