import "../styles/Home.css"

function Home() {
    return (
        <div className="container__home">
            <section className="hero__home">
                <main className="hero">
                    <header className="header__hero">
                        <h1 className="title">
                            TRAIN HARD,<br />
                            <span className="accent">WIN HARDER</span>
                        </h1>
                        <p className="subtitle">
                            Training under TANZEN comes not only with 
                            commitment and effort, but with vigor, 
                            attitude, and confidence! Trainers at TANZEN 
                            will push you into becoming a better <em>you</em>
                            -- no questions asked. Are you ready?
                        </p>
                    </header>
                    <div className="cta-container">
                        <a 
                            href="#!"
                            className="create-routine-btn"
                        >
                            Create Your Routine
                        </a>
                        <a
                            href="#!"
                            className="learn-more-btn"
                        >
                            Learn More
                        </a>
                    </div>
                    <ul className="stats__home">
                        <li className="stat">
                            <span className="cred">NASM-CPT</span>
                            <span className="text">certified</span>
                        </li>
                        <li className="stat">
                            <span className="cred">NSCA</span>
                            <span className="text">certified</span>
                        </li>
                        <li className="stat">
                            <span className="cred">ACE</span>
                            <span className="text">certified</span>
                        </li>
                    </ul>
                </main>
            </section>
            <div className="decorative-divider"></div>
        </div>
    );
}

export default Home