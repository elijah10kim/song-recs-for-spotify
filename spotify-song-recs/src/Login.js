import React from 'react';
import CallToAction from './CallToAction';

function Login() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Song Recs for Spotify</h1>
            </header>
            <CallToAction />
            <a className="btn-spotify" href="/auth/login" >
                    Login with Spotify
            </a>
        </div>
    );
}

export default Login;
