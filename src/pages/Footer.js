import '../styles/Footer.css';
import { FaInstagram, FaFacebook, FaX } from 'react-icons/fa6';
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="container__footer" aria-label="Site footer">
      <section className="footer-hero">
        <div className="hero__footer">
          <h3 className="title__footer">TANZEN</h3>
          <ul className="social-links" aria-label="Social media">
            <li className="social-tag">
              <a href="#!" aria-label="Instagram"><FaInstagram /></a>
            </li>
            <li className="social-tag">
              <a href="#!" aria-label="Facebook"><FaFacebook /></a>
            </li>
            <li className="social-tag">
              <a href="#!" aria-label="X (formerly Twitter)"><FaX /></a>
            </li>
            <li className="social-tag">
              <a href="#!" aria-label="LinkedIn"><FaLinkedin /></a>
            </li>
          </ul>
        </div>

        <div className="footer-content">
          <nav className="main-content" aria-label="Footer navigation">
            <ul className="product-links">
              <li className="nav-links-title"><h3 className="nav-link-title">General</h3></li>
                <li className="nav-link"><a href="#!">Features</a></li>
                <li className="nav-link"><a href="#!">Programs</a></li>
                <li className="nav-link"><a href="#!">Pricing</a></li>
                <li className="nav-link"><a href="#!">Buildable Routines</a></li>
            </ul>

            <ul className="resource-links">
              <li className="nav-links-title"><h3 className="nav-link-title">Resources</h3></li>
              <li className="nav-link"><a href="#!">Diet Tips</a></li>
              <li className="nav-link"><a href="#!">Cooking Videos & Recipes</a></li>
              <li className="nav-link"><a href="#!">Health & Wellness</a></li>
              <li className="nav-link"><a href="#!">FAQ</a></li>
            </ul>

            <ul className="company-links">
              <li className="nav-links-title"><h3 className="nav-link-title">Company</h3></li>
              <li className="nav-link"><a href="#!">About Us</a></li>
              <li className="nav-link"><a href="#!">Careers</a></li>
              <li className="nav-link"><a href="#!">Contact</a></li>
              <li className="nav-link"><a href="#!">Sponsorships</a></li>
            </ul>

            <ul className="legal-links">
              <li className="nav-links-title"><h3 className="nav-link-title">Legal</h3></li>
              <li className="nav-link"><a href="#!">Privacy Policy</a></li>
              <li className="nav-link"><a href="#!">Terms of Service</a></li>
              <li className="nav-link"><a href="#!">Cookie Policy</a></li>
            </ul>

            <figure className="hint-container">
              <figcaption>
                Customer service hours: Mon–Fri 9am–6pm ET Sat–Sun 10am–4pm ET
              </figcaption>
            </figure>
          </nav>
          <div className="footer-divider" aria-hidden="true" />
          <div className="add-content">
            <small className="rights-reserved-msg">© 2025 TANZEN. All rights reserved.</small>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;