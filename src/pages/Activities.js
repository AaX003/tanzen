import "../styles/Activities.css"

// IMAGES
import walk from "../images/walk.png";
import run from "../images/run.png";
import dance from "../images/dance.png";
import kick from "../images/kickboxing.png";
import pilates from "../images/pilates.png";
import yoga from "../images/yoga.png";

function Activities() {

    const activity = [
        {
            icon: walk,
            name: "Walking"
        },
        {
            icon: run,
            name: "Running"
        },
        {
            icon: dance,
            name: "Dancing"
        },
        {
            icon: kick,
            name: "Kickboxing"
        }, 
        {
            icon: pilates,
            name: "Pilates"
        },
        {
            icon: yoga,
            name: "Yoga"
        }
    ]
    return (
        <div className="container__activities">
             <section className="activities__hero">
                <main className="hero">
                    <h2 className="activities__title">
                        LET'S GET STARTED
                    </h2>
                    <p className="activities__subtitle">
                        Browse through a selection of workouts
                        and choose whatever appeals to you!
                    </p>
                </main>
            </section>
            <section className="showcase__activities" role="list">
                {activity.map((a, idx) => (
                    <article key={idx} className="activity-card" role="listitem">
                        <img src={a.icon} alt={`${a.icon}`} loading="lazy" />
                        <h3 className="title">{a.name}</h3>
                    </article>
                ))}
            </section>
        </div>
    );
}

export default Activities