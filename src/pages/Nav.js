import "../styles/Nav.css"
import { useState } from "react";

// SVGS
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container__navbar">
            <header className="title__nav">
                <h3 className="title-text">
                    TANZEN
                </h3>
                <div className="links__navbar">
                    <a href="#highlights">Highlights</a>
                    <a href="#coaches">Coaches</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#timetable">Timetable</a>
                    <a href="#faq">FAQ</a>
                    <a href="#reviews">Reviews</a>
                </div>
                <button 
                    id="menu-btn"
                    className="hamburger-menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <RxHamburgerMenu />
                </button>
                <div id="supple-links__nav" className={`supple-links ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
                    <a href="#highlights">Highlights</a>
                    <a href="#coaches">Coaches</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#timetable">Timetable</a>
                    <a href="#faq">FAQ</a>
                    <a href="#reviews">Reviews</a>
                </div>
            </header>
        </div>
    );
}

export default Navbar