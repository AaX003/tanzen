import "../styles/Timetable.css"

function Timetable() {
    return (
         <div className="container__timetable">
            <section className="timetable__hero">
                <main className="hero">
                    <h2 className="timetable__title">
                        Weekly Class Template
                    </h2>
                    <p className="timetable__subtitle">
                        Choose one of our routine templates,
                        or build one yourself.
                    </p>
                </main>
            </section>

            <div className="timetable-wrapper">
               <table className="timetable" role="table">
                <caption className="caption" aria-hidden="true">Weekly Class Timetable</caption>
                <thead>
                    <tr>
                        <th scope="col" className="col">Time</th>
                        <th scope="col">Mon</th><th scope="col">Tue</th>
                        <th scope="col">Wed</th><th scope="col">Thurs</th>
                        <th scope="col">Fri</th>
                    </tr>   
                </thead>
                <tbody>
                    <tr>
                    <th scope="row" className="row">7:00 - 1:00</th>
                    <td>HIIT · Strength Circuit<br /><small>Chris Varela</small></td>
                    <td>Yoga · Mindful Flow<br /><small>Amara Chen</small></td>
                    <td>Box Fit · Conditioning<br /><small>Jorge Ramirez</small></td>
                    <td>Mobility & Stretch<br /><small>Tara Nguyen</small></td>
                    <td>Pilates · Core Sculpt<br /><small>Leah Brooks</small></td>
                    </tr>

                    <tr>
                    <th scope="row" className="row">9:00 - 2:00</th>
                    <td>Functional Training<br /><small>Chris Varela</small></td>
                    <td>Power Yoga<br /><small>Amara Chen</small></td>
                    <td>Kickboxing · Pads<br /><small>Jorge Ramirez</small></td>
                    <td>Strength + Mobility<br /><small>Tara Nguyen</small></td>
                    <td>Meditation & Breathwork<br /><small>Leah Brooks</small></td>
                    </tr>

                    <tr>
                    <th scope="row" className="row">3:00 - 6:00</th>
                    <td>CrossFit Foundations<br /><small>Tyler Scott</small></td>
                    <td>Vinyasa Flow<br /><small>Amara Chen</small></td>
                    <td>Combat Training<br /><small>Jorge Ramirez</small></td>
                    <td>Stretch & Recovery<br /><small>Tara Nguyen</small></td>
                    <td>Core Stability<br /><small>Leah Brooks</small></td>
                    </tr>

                    <tr>
                    <th scope="row" className="row">6:00 - 9:00</th>
                    <td>Evening Strength<br /><small>Tyler Scott</small></td>
                    <td>Gentle Yoga<br /><small>Amara Chen</small></td>
                    <td>Cardio Boxing<br /><small>Jorge Ramirez</small></td>
                    <td>Mobility Flow<br /><small>Tara Nguyen</small></td>
                    <td>Guided Meditation<br /><small>Leah Brooks</small></td>
                    </tr>
                </tbody>
               </table>
            </div>
              <a 
                href="#!"
                className="create-btn"
                >
                Create Schedule
            </a>
        </div>
    );
}

export default Timetable