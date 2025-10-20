import "../styles/Reviews.css";
import { useState, useEffect, useCallback } from "react";
import { IoMdStar } from "react-icons/io";

function Reviews() {
  const [current, setCurrent] = useState(0);

  const reviews = [
    {
      rating: 5,
      quote:
        "These workouts are incredibly invigorating and I'm obsessed! My body has never been healthier!",
      reviewer: "Frederick Nuve",
      locale: "New York, NY",
    },
    {
      rating: 5,
      quote:
        "Exercising wasn't my forte until I stumbled across TANZEN--their support has been phenomenal!",
      reviewer: "Phoebe Lu",
      locale: "Los Angeles, CA",
    },
    {
      rating: 5,
      quote:
        "As a diabetic person, I often struggled with my body's nutrition and understanding which meals are good for me, but TANZEN has made that so much easier!",
      reviewer: "Vincent Nguyen",
      locale: "San Francisco, CA",
    },
    {
      rating: 5,
      quote:
        "I've been using TANZEN for approximately three months now and yes, it works! I've lost forty pounds in all!",
      reviewer: "Sabrina Winters",
      locale: "Dallas, TX",
    },
    {
      rating: 5,
      quote:
        "TANZEN offers many enjoyable activities to do! My husband and I particularly enjoy their dancing videos!",
      reviewer: "Norman Wilson",
      locale: "Chicago, IL",
    },
    {
      rating: 5,
      quote:
        "I'm a wheelchair user and didn't think losing weight or even dieting was an option for me. Boy, was I wrong? Even those with disabilities, TANZEN has been incredibly accommodating",
      reviewer: "Richard Johansson",
      locale: "Columbus, OH",
    },
  ];

  const total = reviews.length;
  const next = useCallback(() => setCurrent((i) => (i + 1) % total), [total]);

  // advances every ten seconds
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const { rating, quote, reviewer, locale } = reviews[current];

  return (
    <div className="container__reviews" id="reviews">
      <section className="hero__reviews">
        <header className="title__hero">
          <h3 className="title__reviews">Hear Other's Thoughts</h3>
          <p className="subtitle__reviews">
            We value our users' opinions and words, 
            and the utmost proud for how much TANZEN benefited them!
          </p>
        </header>
      </section>

      <section className="showcase__reviews">
        <div
          className="reviews-display"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer reviews"
          aria-live="polite"
        >
          <article className="review-card">
            <span className="review-rating" aria-label={`Rated ${rating} out of 5`}>
              {Array.from({ length: rating }).map((_, i) => (
                <IoMdStar key={i} />
              ))}
            </span>

            <h4 className="review-quote">{quote}</h4>
            <div className="review-divider" aria-hidden="true" />
            <small className="review-author">{reviewer}</small>
            <small className="review-locale">{locale}</small>
            <p className="hint">{current + 1} / {total} </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Reviews;