import React from 'react'

export default function AnimatedHeroContent() {
    return (
        <div className="hero-content-container">
            <div className="animated-header-hero">
                <div className="timothy-container">
                    <h1 className="header-timothy">T
                        <span className="eye-tim">
                        <svg width="16" height="63" viewBox="0 0 15 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="16" height="56" fill="white"/>
                        </svg></span>
                        <span className="dot-tim">
                        <svg width="19" height="18" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="9.5" cy="9" rx="8.5" ry="8" fill="white"/>
                        </svg></span>
                    mothy</h1>
                </div>
                <div className="williams-container">
                     <h1 className="header-williams">Williams-</h1>
                </div>
                <div className="fowler-container">
                <h1 className="header-fowler">Fow <span className="space-fowler"></span>ler</h1>
                </div>
            </div>

        </div>
    )
}
