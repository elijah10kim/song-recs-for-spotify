import React from 'react';

function Login() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Song Recs for Spotify</h1>
                <a className="btn-spotify" href="/auth/login" >
                    Login with Spotify
                </a>
            </header>
        </div>
    );
}

export default Login;
