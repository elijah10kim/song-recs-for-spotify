import React from 'react';

// hero layout should have the text and login on the left, with some image on right.
function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero'>
                <p id = "hero-txt">Can't find the perfect song?</p>
                <p id = "message"> Tailor your music experience and find exactly what you want to listen to with ease.</p>
                <p id = "message">Filter songs by <span className= "parameters">danceabilitiy</span>, <span className= "parameters">energy</span>, <span className= "parameters">tempo</span> and more!</p>
                <a className="btn-spotify" href="/auth/login" >
                        Login with Spotify
                </a>
            </div>
            <div className='hero-right'>
                <ul>
                    <li>
                        placeholder 1
                    </li>
                    <li>
                        placeholder 2
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Hero;



