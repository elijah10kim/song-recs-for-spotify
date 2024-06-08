import React from 'react';
import Hero from './Hero';

function Login() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Song Recs for Spotify</h1>
            </header>
            <Hero />
            <a className="btn-spotify" href="/auth/login" >
                    Login with Spotify
            </a>
        </div>
    );
}

export default Login;
