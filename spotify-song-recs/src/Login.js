import React from 'react';
import Hero from './Hero';

function Login() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Song Recs for Spotify</h1>
                <nav>About</nav>
            </header>
            <Hero />
          <footer>
            Background Photo by <a href="https://unsplash.com/@adkorte?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Adrian Korte</a> on <a href="https://unsplash.com/photos/round-black-vinyl-disc-on-vinyl-player-5gn2soeAc40?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </footer>
        </div>
    );
}

export default Login;
