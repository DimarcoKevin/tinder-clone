import React, { Component } from 'react';
import  "./Header.css";
import PersonIcon from '@material-ui/icons/Person';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <PersonIcon fontSize="large" className="header__icon" />
            </div>
        );
    }
}

export default Header;