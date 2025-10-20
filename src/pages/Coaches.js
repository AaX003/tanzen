import "../styles/Coaches.css"

// IMAGES
import carlos from "../images/coachTwo.jpg";
import nina from "../images/coachSeven.jpg";
import ronald from "../images/coachThree.jpg";
import mina from "../images/coachOne.jpg";
import avery from "../images/coachFive.jpg"
import dale from "../images/coachSix.jpg";

function Coaches() {
    const coaches = [
        {
            img: carlos,
            name: "Carlos Emmanuella",
            title: "Head Strength & Conditioning Instructor",
            tags: "Powerlifting · Core Stability  · HIIT",
            quote: "You're looking stronger already"
        },
         {  img: nina,
            name: "Nina Patel",
            title: "Flexbility & Mobility Instructor",
            tags: "Pilates · Yoga  · Injury Prevention",
            quote: "Encourage flexibility gracefully"
        },
         {  img: ronald,
            name: "Ronald Diaz",
            title: "Combat Fitness Instructor",
            tags: "Kickboxing · Endurance  · Speed",
            quote: "Faster! Harder! More intensity!"
        },
         {  img: mina,
            name: "Mina Lee",
            title: "Functional Training Specialist",
            tags: "CrossFit · Balance  · Agility Drills",
            quote: "Proper balance can help posture!"
        },
         {  img: avery,
            name: "Avery Thompson",
            title: "Nutrition & Wellness Specialist",
            tags: "Meal Planning · Sports Nutrition  · Portion Control",
            quote: "Enjoy eating but mindfully"
        },
        {   img: dale,
            name: "Dale Reese",
            title: "Dance Fitness Instructor",
            tags: "Zumba · Rhythm Conditioning · Core Strength",
            quote: "Keep dancing!"
        }
    ]
    return (
        <div className="container__coaches">
            <section className="coaches__hero">
                <main className="hero">
                    <header className="title__hero">
                        <h2 className="title__coaches">
                            Certified Instructors
                        </h2>
                        <p className="subtitle__coaches">
                            At TANZEN, we have instructors with 
                            exceptional coaching skills and certifications
                            that soldifies their capabilities.
                        </p>
                    </header>
                </main>
            </section>
            <section className="showcase__coaches">
                <div className="coaches-grid">
                    {coaches.map((c, idx) => (
                        <article key={idx} className="coach-card">
                            <img src={c.img} alt={`Coach: ${c.img}`} className="coach-img" />
                            <h4 className="coach-name">{c.name}</h4>
                            <p className="coach-title">{c.title}</p>
                            <small className="coach-tags">{c.tags}</small>
                            <blockquote className="coach-quote">{c.quote}</blockquote>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Coaches