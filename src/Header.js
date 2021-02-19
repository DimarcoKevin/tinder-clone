import React, { Component } from 'react';
import  "./Header.css";
import TinderIcon from './images/tinder-logo.png';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <IconButton>
                    <PersonIcon fontSize="large" className="header__icon" />
                </IconButton>

                <img
                    className="header__logo"
                    src={TinderIcon}
                />
                

            </div>
        );
    }
}

export default Header;