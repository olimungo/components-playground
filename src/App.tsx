import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MdVoicemail } from 'react-icons/md';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <div className="text-red-500">
                    <MdVoicemail />
                </div>
            </header>
        </div>
    );
}

export default App;
