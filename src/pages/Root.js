
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
            <Home />
            <Highlights />
            <Timetable />
            <Coaches />
            <Pricing />
            <Reviews />
            <Activities />
            <FAQ />
            <Footer />
        </div>
    );
}

export default Main