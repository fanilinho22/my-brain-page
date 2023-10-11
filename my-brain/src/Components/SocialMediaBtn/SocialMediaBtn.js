import React from 'react';
import "./SocialMediaBtnStyles.css"

function SocialMediaBtn() {
    return (
        <div id='container'>
            <ul className="wrapper">
                <a href='https://www.instagram.com/mybrain.inc' target='_blank' rel='noopener noreferrer'>
                    <li className="icon instagram">
                        <span className="tooltip">@mybrain.inc</span>
                        <span><i className="fab fa-instagram"></i></span>
                    </li>
                </a>
                <a href='https://www.linkedin.com/company/mybrain' target='_blank' rel='noopener noreferrer'>
                    <li className="icon linkedin">
                        <span className="tooltip">MyBrain</span>
                        <span><i className="fab fa-linkedin-in"></i></span>
                    </li>
                </a>
                <a href='mailto:mybrain.startup@gmail.com'>
                    <li className="icon gmail">
                        <span className="tooltip">mybrain.startup@gmail.com</span>
                        <span><i className="fa-regular fa-envelope"></i></span>
                    </li>
                </a>
            </ul>
        </div>
    );
}

export default SocialMediaBtn;
