// Pricing.jsx
import "../styles/Pricing.css";

function Pricing() {
  const tiers = [
    {
      title: "Basic",
      price: "Free",
      hint: "Great for getting started",
      benefits: [
        "1 video/day", 
        "5 GB storage", 
        "Plan customization"
    ],
    },
    {
      title: "Elite",
      price: "$80/mo",
      hint: "Most popular",
      popular: true, // boolean
      benefits: [
        "Unlimited videos", 
        "Cloud storage", 
        "Plan customization", 
        "Meal planning"
    ],
    },
    {
      title: "Premium",
      price: "$180/mo",
      hint: "For committed athletes",
      benefits: [
        "Unlimited videos",
        "Cloud storage",
        "Plan customization",
        "Meal planning",
        "Cookbook",
        "Personal trainer eligibility",
      ],
    },
  ];

  return (
    <div className="container__pricing">
       <section className="pricing__hero">
            <main className="hero">
                <h2 className="title__pricing">
                    CHOOSE A PLAN
                </h2>
                <p className="subtitle__pricing">
                     Choose the plan that best fits 
                     your training goals
                </p>
            </main>
        </section>

      <section className="pricing-grid" role="list">
        {tiers.map((tier, i) => (
          <article
            key={i}
            className={`pricing-card ${tier.popular ? "is-popular" : ""}`}
            role="listitem"
            aria-label={`${tier.title} plan`}
          >
            {tier.popular && <span className="badge">Most Popular</span>}
            <h3 className="plan-title">{tier.title}</h3>
            <p className="plan-price">{tier.price}</p>
            <small className="plan-hint">{tier.hint}</small>

            <ul className="benefit-list">
              {tier.benefits.map((benefit, j) => (
                <li key={j} className="benefit-item">
                  {benefit}
                </li>
              ))}
            </ul>

            <a href="#!" className="check-it-out-btn">Check it out</a>
          </article>
        ))}
      </section>
    </div>
  );
}

export default Pricing;