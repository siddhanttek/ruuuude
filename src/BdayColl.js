// src/BirthdayCollage.js
import React, { useState } from 'react';
import './BdayColl.css';

const BdayColl = () => {
    const [isGiftOpened, setIsGiftOpened] = useState(false);

    const handleGiftClick = () => {
        setIsGiftOpened(true);
    };

    return (
        <div className="background">
            {/* Stars Layer */}
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
            
            {/* Meteors */}
            <div className="meteor"></div>
            <div className="meteor"></div>
            <div className="meteor"></div>
            <div className="meteor"></div>
            <div className="meteor"></div>
            <div className="meteor"></div>
            <div className="meteor"></div>
            <div className="meteor"></div>
            
            {/* Main Content */}
            <div className="main-content">
                {/* Main Message */}
                <div className="message-container">
                    <div className="message">Happy Birthday Chikki!</div>
                    <div className="subtitle">✨ May your day be as magical as you are ✨</div>
                </div>
                
                {/* Gift Box */}
                <div className="gift-container">
                    {!isGiftOpened ? (
                        <div className="gift-box" onClick={handleGiftClick}>
                            <div className="gift-box-body">
                                <div className="gift-box-lid"></div>
                                <div className="gift-box-ribbon-vertical"></div>
                                <div className="gift-box-ribbon-horizontal"></div>
                                <div className="gift-box-bow"></div>
                                <div className="gift-box-side-left"></div>
                                <div className="gift-box-side-right"></div>
                                <div className="gift-box-side-top"></div>
                            </div>
                            <div className="gift-instruction">Click to open!🎁</div>
                        </div>
                    ) : (
                        <div className="revealed-image">
                            <img 
                                src="/dyson.png" 
                                alt="Dyson Airwrap Multi-styler" 
                                className="surprise-image"
                            />
                            <div className="surprise-text">🎉 tada! 🎉</div>
                        </div>
                    )}
                </div>
            </div>
            
            {/* Floating particles */}
            <div className="particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
            </div>
        </div>
    );
};

export default BdayColl; 