import React, { Component } from 'react';
import  "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <IconButton>
                    <PersonIcon fontSize="large" className="header__icon" />
                </IconButton>
            </div>
        );
    }
}

export default Header;