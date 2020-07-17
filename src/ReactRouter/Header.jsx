import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li> <NavLink exact activeClassName="active_class" to="/">Home</NavLink></li>
                    <li> <NavLink exact activeClassName="active_class" to="/about-us">About Us</NavLink></li>
                    <li> <NavLink activeClassName="active_class" to="/user">User</NavLink></li>
                    <li> <NavLink exact activeClassName="active_class" to="/contact-us">Contact Us</NavLink></li>
                </ul>
            </div> 
        )
    }
}
export default Header;