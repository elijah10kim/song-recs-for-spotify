import React from 'react';

function Hero() {
    return (
        <div className='hero'>
            <p id = "message">Discover the perfect songs for every moment by customizing your search. Tailor your music experience and find exactly what you want to listen to with ease.</p>
            <p>Filter songs by <span className= "parameters" style={{color: "#ff0000"}}>danceabilitiy</span>, <span className= "parameters" style={{color: "white"}}>energy</span>, <span className= "parameters" style={{color: "blue"}}>tempo</span> and more!</p>
        </div>
    );
}

export default Hero;



