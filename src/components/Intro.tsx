import React from 'react';
import { useDispatch } from 'react-redux';
import { Page } from '../interfaces/page';
import { setPage } from '../redux/actions';
import { IntroStrings } from '../strings/strings';
import '../styles/Intro.css';
import logo from '../assets/logo.png'; // Import your logo

const Intro: React.FC = () => {
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        dispatch(setPage(Page.Main));
    };

    return (
            <div className="intro-container">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="intro-logo" />
                </div>
                <div className="title">{IntroStrings.title}</div>
                <button className="coming-soon-button" onClick={handleButtonClick}>{IntroStrings.buttonText}</button>
            </div>
    );
};

export default Intro;