// src/BirthdayCollage.js
import React, { useState, useEffect } from 'react';
import './BdayColl.css';

const BdayColl = () => {
    const [isGiftOpened, setIsGiftOpened] = useState(false);
    // Target date: August 21st, 12 AM IST (next year)
    const targetDateIST = new Date('2025-08-21T00:00:00+05:30'); // 12 AM IST on 21 Aug

    // Function to get current IST time
    const getCurrentTimeInIST = () => {
        const now = new Date();
    
        // Convert local time to UTC, then add 5.5 hours for IST
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        return new Date(utc + (5.5 * 60 * 60 * 1000));
    };

    const calculateTimeLeft = () => {
        const nowIST = getCurrentTimeInIST();
        const difference = targetDateIST - nowIST;
    
        if (difference > 0) {
            const hours = Math.floor(difference / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            return { hours, minutes, seconds };
        }
        return { hours: 0, minutes: 0, seconds: 0 };
    };


    const [countdown, setCountdown] = useState(calculateTimeLeft());
    const [showCountdown, setShowCountdown] = useState(true);
    const [showStrobe, setShowStrobe] = useState(false);
    const [showBirthday, setShowBirthday] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            const newCountdown = calculateTimeLeft();
            
            if (newCountdown.hours > 0 || newCountdown.minutes > 0 || newCountdown.seconds > 0) {
                setCountdown(newCountdown);
            } else {
                // Countdown finished, start strobe effect
                setShowCountdown(false);
                setShowStrobe(true);
                
                // After 2 seconds strobe effect, show birthday content
                setTimeout(() => {
                    setShowStrobe(false);
                    setShowBirthday(true);
                }, 2000);
                
                // Clear the interval to stop the countdown
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleGiftClick = () => {
        setIsGiftOpened(true);
    };

    // Format time with leading zeros
    const formatTime = (time) => {
        return time.toString().padStart(2, '0');
    };

    if (showStrobe) {
        return (
            <div className="strobe-effect">
                <div className="strobe-content">HAPPY BIRTHDAY!</div>
            </div>
        );
    }

    if (!showBirthday) {
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
                
                {/* Countdown Timer */}
                <div className="main-content">
                    <div className="countdown-container">
                        <div className="countdown-timer">
                            <div className="time-unit">
                                <div className="time-value">{formatTime(countdown.hours)}</div>
                                <div className="time-label">Hours</div>
                            </div>
                            <div className="time-separator">:</div>
                            <div className="time-unit">
                                <div className="time-value">{formatTime(countdown.minutes)}</div>
                                <div className="time-label">Minutes</div>
                            </div>
                            <div className="time-separator">:</div>
                            <div className="time-unit">
                                <div className="time-value">{formatTime(countdown.seconds)}</div>
                                <div className="time-label">Seconds</div>
                            </div>
                        </div>
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
    }

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
