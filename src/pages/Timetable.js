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
                        <th scope="col">Wed</th> <th scope="col">Thurs</th>
                        <th scope="col">Fri</th>
                    </tr>   
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" className="row">7:00 - 1:00</th>
                        <td>Stretch · Cardio · Strength<br /><small>Carlos Emmanuella</small></td>
                        <td>Yoga · Pilates · Core<br /><small>Nancy Lee</small></td>
                        <td>Kickboxing<br /><small>Ronald Diaz</small></td>
                        <td>Core + Mobility<br /><small>Nina Patel</small></td>
                        <td>Mediation<br /><small>Mirasaki Sakura</small></td>
                    </tr>
                     <tr>
                        <th scope="row" className="row">9:00 - 2:00</th>
                        <td>Stretch · Cardio · Strength<br /><small>Carlos Emmanuella</small></td>
                        <td>Yoga · Pilates · Core<br /><small>Nancy Lee</small></td>
                        <td>Kickboxing<br /><small>Ronald Diaz</small></td>
                        <td>Core + Mobility<br /><small>Nina Patel</small></td>
                        <td>Mediation<br /><small>Mirasaki Sakura</small></td>
                    </tr>
                    <tr>
                        <th scope="row" className="row">9:00 - 2:00</th>
                        <td>Stretch · Cardio · Strength<br /><small>Carlos Emmanuella</small></td>
                        <td>Yoga · Pilates · Core<br /><small>Nancy Lee</small></td>
                        <td>Kickboxing<br /><small>Ronald Diaz</small></td>
                        <td>Core + Mobility<br /><small>Nina Patel</small></td>
                        <td>Mediation<br /><small>Mirasaki Sakura</small></td>
                    </tr>
                    <tr>
                        <th scope="row" className="row">9:00 - 2:00</th>
                        <td>Stretch · Cardio · Strength<br /><small>Carlos Emmanuella</small></td>
                        <td>Yoga · Pilates · Core<br /><small>Nancy Lee</small></td>
                        <td>Kickboxing<br /><small>Ronald Diaz</small></td>
                        <td>Core + Mobility<br /><small>Nina Patel</small></td>
                        <td>Mediation<br /><small>Mirasaki Sakura</small></td>
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