// COMPONENTS
import Navbar from "./Nav";
import Home from "./Home";
import Highlights from "./Highlights";
import Timetable from "./Timetable";
import Coaches from "./Coaches";
import FAQ from "./FAQ";
import Pricing from "./Pricing";
import Reviews from "./Reviews";
import Activities from "./Activities";
import Footer from "./Footer";

function Main() {
    return (
        <div className="container">
            <Navbar />

            <section id="home">
                <Home />
            </section>

            <section id="highlights">
                <Highlights />
            </section>

            <section id="timetable">
                <Timetable />
            </section>

            <section id="coaches">
                <Coaches />
            </section>

            <section id="pricing">
                <Pricing />
            </section>

            <section id="reviews">
                <Reviews />
            </section>

            <section id="activities">
                <Activities />
            </section>

            <section id="faq">
                <FAQ />
            </section>

            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default Main;