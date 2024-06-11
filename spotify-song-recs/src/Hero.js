import React from 'react';

function Hero() {
    return (
        <div className='hero-container'>
            <div className='hero'>
                <p id = "hero-txt">Can't find the perfect song?</p>
                <p id = "message"> Tailor your music experience and find exactly what you want to listen to with ease.</p>
                <p>Filter songs by <span className= "parameters" style={{color: "rgb(226, 50, 50)"}}>danceabilitiy</span>, <span className= "parameters" style={{color: "rgb(187, 71, 187)"}}>energy</span>, <span className= "parameters" style={{color: "rgb(73, 68, 212)"}}>tempo</span> and more!</p>
                <a className="btn-spotify" href="/auth/login" >
                        Login with Spotify
                </a>
            </div>
            <div className='hero-right'>

            </div>

        </div>
    );
}

export default Hero;



