import "../styles/FAQ.css";

function FAQ() {
  return (
    <section className="faq" aria-labelledby="faq-heading">
      <header className="headline-wrapper">
        <h2 id="faq-heading" className="accent" role="region" aria-label="Frequently Asked Questions">
          Frequently Asked Questions
        </h2>
        <small className="subheading__faq">
           Find all the answers we're commonly asked 
           at TANZEN
        </small>
      </header>

      <div className="accordian-container">
      <details className="accordian-list">
        <summary className="accordian-header">
          What makes TANZEN different from other fitness programs?
        </summary>
        <div className="accordian-info">
          <p>
            TANZEN offers a wide variety of videos, activities, DIYs, and much more. TANZEN also
            conducts annual collaborations with other fitness programs for everyone to come together
            for collective workouts.
          </p>
          <p>
            In addition, if our users have been a dedicated supporter of TANZEN and inspire to help
            others, they have the opportunity to become affiliates!
          </p>
        </div>
      </details>

      <details className="accordian-list">
        <summary className="accordian-header">
          Do I need prior gym experience before joining TANZEN?
        </summary>
        <div className="accordian-info">
          <p>
            Absolutely not! You can be a beginner with <em>zero</em> gym experience and still qualify
            in joining our program! TANZEN doesn't discriminate against those with no gym experience,
            so please join us. We'd love to have you!
          </p>
        </div>
      </details>

      <details className="accordian-list">
        <summary className="accordian-header">
          Are personal trainers included in membership?
        </summary>
        <div className="accordian-info">
          <p>
            Personal trainers <em>can</em> be included in the membership, but their availability is
            strictly up to the trainer of choice.
          </p>
        </div>
      </details>

      <details className="accordian-list">
        <summary className="accordian-header">
          What certs do TANZEN instructors hold?
        </summary>
        <div className="accordian-info">
          <p>Our instructors are typically certified in the following:</p>
          <ul className="list">
            <li className="list-item">NCA</li>
            <li className="list-item">ACE</li>
            <li className="list-item">NASM-CPT</li>
          </ul>
          <p>We're always hiring from varied backgrounds, so we'll keep the list updated!</p>
        </div>
      </details>

      <details className="accordian-list">
        <summary className="accordian-header">
          Can I follow an instructional video at home or online?
        </summary>
        <div className="accordian-info">
          <p>
            Yes! Instructional videos are downloadable and can be viewed anytime and anywhere! Some
            videos do require a premium plan.
          </p>
        </div>
      </details>

      <details className="accordian-list">
        <summary className="accordian-header">
          How often should I workout per week until I see results?
        </summary>
        <div className="accordian-info">
          <p>
            Every body is different and you may not see results as soon as possible. But with time,
            effort, and consistency, you could lose around 1–2 pounds every week. Keep pushing—you’ve
            got our support!
          </p>
        </div>
      </details>

      <details className="accordian-list">
        <summary className="accordian-header">
          Does TANZEN offer nutrition or dietitian plans?
        </summary>
        <div className="accordian-info">
          <p>
            Yes! As part of our membership plan, we include recipes, step-by-step guides, infographics,
            and videos for visual reference.
          </p>
        </div>
      </details>

      <details className="accordian-list">
        <summary className="accordian-header">
          What's the best way to recover after intense sessions?
        </summary>
        <div className="accordian-info">
          <p>
            Prioritize hydration and long stretches when sitting down. If a particular session is too
            intense, scale back and try something friendlier.
          </p>
        </div>
      </details>

      <details className="accordian-list">
        <summary className="accordian-header">
          How can I track my progress throughout the program?
        </summary>
        <div className="accordian-info">
          <p>
            You’ll need to register or log in to track progress. Use our website or mobile app to get
            started!
          </p>
        </div>
      </details>
    </div>
        <p className="tooltip-msg__faq">
          Still have questions? Feel free to reach out to our support team.
          We're always here to help when available.
          <span className="accent"> Contact Support Team</span>
        </p>
    </section>
  );
}

export default FAQ;