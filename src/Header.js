import React from 'react';
import  "./Header.css";
import TinderIcon from './images/tinder-logo.png';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';

const Header = () => {
        return (
            <div className="header">
                <IconButton>
                    <PersonIcon fontSize="large" className="header__icon" />
                </IconButton>

                <img
                    className="header__logo"
                    src={TinderIcon}
                />

                <IconButton> 
                    <QuestionAnswerIcon fontSize="large" className="header__icon" />
                </IconButton>
                

            </div>
        );
}

export default Header;