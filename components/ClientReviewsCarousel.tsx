"use client";

import { useEffect, useState } from "react";

type Review = {
  quote: string;
  name: string;
  company: string;
};

export default function ClientReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const [visible, setVisible] = useState(2);
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 859px)");
    const apply = () => setVisible(mq.matches ? 1 : 2);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const pageCount = Math.max(1, reviews.length - visible + 1);
  const activeIndex = Math.min(index, pageCount - 1);

  useEffect(() => {
    if (pageCount <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % pageCount);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [pageCount]);

  return (
    <section
      className="proof-section flow-section flow-left reviews-section"
      aria-labelledby="proof-title"
    >
      <div className="reviews-copy">
        <h2 id="proof-title" className="reviews-heading">
          What Our Amazing Clients
          <span>Say About Us</span>
        </h2>
        <p>
          Leading start-ups, SMEs and large-scale organizations have trusted us for
          their software development and digital project requirements.
        </p>
      </div>

      <div className="reviews-carousel">
        <div className="review-viewport">
          <div
            className="review-track"
            style={{
              ["--i" as string]: activeIndex,
              ["--visible" as string]: visible
            }}
          >
            {reviews.map((review, i) => {
              const isOpen = expanded === i;
              return (
                <article className="review-slide" key={`${review.name}-${review.company}`}>
                  <div className="review-quote-card">
                    <span className="review-quote-mark" aria-hidden="true">
                      <svg viewBox="0 0 448 512" fill="currentColor">
                        <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64V216z" />
                      </svg>
                    </span>

                    <p className={`review-quote-text${isOpen ? " is-open" : ""}`}>
                      {review.quote}
                    </p>

                    <button
                      type="button"
                      className="review-readmore"
                      onClick={() => setExpanded(isOpen ? null : i)}
                    >
                      {isOpen ? "Read Less" : "Read More"}
                    </button>

                    <div className="review-person">
                      <strong>{review.name}</strong>
                      <span>{review.company}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="review-nav">
          <button
            type="button"
            className="review-arrow"
            aria-label="Previous testimonial"
            onClick={() => setIndex((activeIndex - 1 + pageCount) % pageCount)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <div className="review-dots" role="tablist" aria-label="Testimonials navigation">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`review-dot${activeIndex === i ? " is-active" : ""}`}
                role="tab"
                aria-selected={activeIndex === i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className="review-arrow"
            aria-label="Next testimonial"
            onClick={() => setIndex((activeIndex + 1) % pageCount)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
