import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaArrowLeft } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Page } from '../interfaces/page';
import { setPage } from '../redux/actions';
import '../styles/Header.css';
import logo from '../assets/logo.png';
import { IconButton } from './IconButton';

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const handleBackClick = () => {
        dispatch(setPage(Page.Intro));
    };

    return (
        <header className="header">
            <div className="back-button-container">
                <button className="back-button" onClick={handleBackClick}>
                    <IconButton icon={<FaArrowLeft />} />
                </button>
            </div>
            <div className="logo-container" onClick={handleBackClick}>
                <div className="logo-title">
                    <img src={logo} alt="Logo" className="logo-image" />
                </div>
            </div>
            <div className="social-icons-container">
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/dayeon-hwang/" target="_blank" rel="noopener noreferrer">
                    <IconButton icon={<FaLinkedin />} />
                    </a>
                    <a href="https://www.instagram.com/dayeonhwangg/" target="_blank" rel="noopener noreferrer">
                    <IconButton icon={<FaInstagram />} />
                    </a>
                    <a href="https://github.com/dayeonhwang" target="_blank" rel="noopener noreferrer">
                    <IconButton icon={<FaGithub />} />
                    </a>
                    <a href="mailto:contact@dayeonhwang.com" target="_blank" rel="noopener noreferrer">
                    <IconButton icon={<MdEmail />} />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;