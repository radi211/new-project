import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function LoginScreen({ onSuccess }) {
    return (
        <section className="login">
            <div className="login__glow"></div>
            <div className="login__panel">
                <div className="brand">
                    <div className="brand__mark"></div>
                    <div>
                        <p className="brand__title">SoftEdu</p>
                        <p className="brand__tag">Education Management Software</p>
                    </div>
                </div>
                <h1 className="login__heading">Log In</h1>
                <form className="login__form">
                    <label className="field">
                        <span className="field__icon">@</span>
                        <input
                            type="text"
                            placeholder="01930493796"
                            aria-label="Phone number"
                        />
                    </label>
                    <label className="field">
                        <span className="field__icon">*</span>
                        <input type="password" placeholder="Password" aria-label="Password" />
                        <button type="button" className="field__action" aria-label="Toggle password">
                            Show
                        </button>
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" />
                        <span>Remember Password</span>
                    </label>
                    <button className="primary" type="button" onClick={onSuccess}>
                        Login
                    </button>
                    <button className="link" type="button">
                        Forgot Password?
                    </button>
                </form>
            </div>
            <span className="float-square square--one"></span>
            <span className="float-square square--two"></span>
            <span className="float-square square--three"></span>
            <span className="float-square square--four"></span>
        </section>
    );
}

function HomeScreen() {
    return (
        <section className="home">
            <header className="home__header">
                <div className="brand">
                    <div className="brand__mark"></div>
                    <div>
                        <p className="brand__title">SoftEdu</p>
                        <p className="brand__tag">School Management System</p>
                    </div>
                </div>
                <div className="home__chip">Institute ID: 30160</div>
            </header>

            <div className="home__hero">
                <h2>Welcome back!</h2>
                <p>Login successful. Your home page is ready.</p>
            </div>

            <div className="home__grid">
                <div className="home__card">
                    <h3>Students</h3>
                    <p>Manage student profiles, admissions, and attendance.</p>
                </div>
                <div className="home__card">
                    <h3>Teachers & Staff</h3>
                    <p>Assign classes, handle payroll, and track performance.</p>
                </div>
                <div className="home__card">
                    <h3>Exams & Results</h3>
                    <p>Publish results and generate report cards.</p>
                </div>
            </div>
        </section>
    );
}

export default function App() {
    const [view, setView] = useState('login');

    return (
        <div className="app">
            {view === 'login' ? (
                <LoginScreen onSuccess={() => setView('home')} />
            ) : (
                <HomeScreen />
            )}
        </div>
    );
}

const root = document.getElementById('app');

if (root) {
    createRoot(root).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
