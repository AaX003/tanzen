
import "../styles/Highlights.css";

function Highlights() {
    const programs = [
        {
            title: "Beginner",
            desc: "Beginner lessons + short instructional demos",
            duration: "5-10 min",
            meta: "Cardio, Yoga, Stretch"
        },
        {
            title: "Intermediate",
            desc: "Intermediate lessons + longer demos + breaks",
            duration: "10-30 min",
            meta: "Cardio, Strength, Core, Pilates, Reprieve"
        },
        {
            title: "Advanced",
            desc: "Advanced lessons + longer demos + shorter breaks",
            duration: "30mins-1hr",
            meta: "Cardio, Strength, Kickboxing, HIIT, Reprieve"
        },
        {
            title: "Frenzy",
            desc: "More intense lessons + longer demos + no breaks",
            duration: "1hr-1hr 30mins",
            meta: "Cardio, Strength, Core, HIIT, Treadmill, Reprieve"
        }
    ]
    return (
        <div className="container__highlights">
            <section className="higlights__hero">
                <main className="hero">
                    <h2 className="title">
                        LET'S CONQUER
                    </h2>
                    <p className="subtitle">
                        TANZEN offers a wide variety of programs
                        bi-weekly for committed individuals--such as yourself.
                        Our trainers want to not only encourage, but invigorate you
                        to train and to love it!
                    </p>
                </main>
            </section>
            <section className="showcase__highlights" role="list">
                {programs.map((p, idx) => (
                    <article key={idx} className="program-card" role="listitem">
                        <h3 className="title">{p.title}</h3>
                        <p className="desc">{p.desc}</p>
                        <small className="duration" aria-label="Duration">{p.duration}</small>
                        <small className="meta-tags" aria-label="Meta tags">{p.meta}</small>
                        <a 
                            href="#!"
                            className="try-now-btn"
                        >
                            Try Now
                        </a>
                    </article>
                ))}
            </section>
        </div>
    );
}

export default Highlights